#!/usr/bin/env python3
"""
Ingest Official Wisehockey Sample Data Pack
ThinkSport Innovation Challenge: Data-hack 2026 (Spengler Cup Davos)

Ingests:
- data_pipeline/data/aggregated_stats_sample.xlsx (Tier 1: 40 skaters, 23 metrics)
- data_pipeline/data/event_data_sample.xlsx (Tier 2: 3 play cycles, 116 columns)

Outputs web-ready JSON models for ShiftIQ.
"""

import openpyxl
import json
import os

DATA_DIR = os.path.join(os.path.dirname(__file__), "data")
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "src", "data")
os.makedirs(OUTPUT_DIR, exist_ok=True)

AGGREGATED_FILE = os.path.join(DATA_DIR, "aggregated_stats_sample.xlsx")
EVENT_FILE = os.path.join(DATA_DIR, "event_data_sample.xlsx")

def ingest():
    print(f"Loading {AGGREGATED_FILE}...")
    wb1 = openpyxl.load_workbook(AGGREGATED_FILE, data_only=True)
    ws_players = wb1["Player stats"]
    
    players_hcd = []
    players_usa = []
    
    # Archetype mapper based on stats
    def assign_archetype(pos, top_spd, pcw, pass_pct, bks, s):
        if 'D' in str(pos) or bks >= 3:
            return 'The Blue-Line Wall' if pcw >= 60 else 'The Shutdown Anchor'
        if top_spd >= 34.5:
            return 'The Transition Engine' if pass_pct >= 85 else 'The High-Speed Finisher'
        if pass_pct >= 88:
            return 'The Playmaking Maestro'
        return 'The Slot Disruptor'

    for row in ws_players.iter_rows(min_row=2, values_only=True):
        team = str(row[0] or "")
        jersey = int(row[1] or 0)
        last_name = str(row[2] or "").strip()
        first_name = str(row[3] or "").strip()
        full_name = f"{first_name} {last_name}"
        
        g = int(row[4] or 0)
        a = int(row[5] or 0)
        p = int(row[6] or 0)
        pim = int(row[7] or 0)
        plus_minus = int(row[8] or 0)
        toi_sec = int(row[9] or 0)
        shifts = int(row[10] or 0)
        shots = int(row[11] or 0)
        shot_pct = float(row[12] or 0.0)
        xg_sum = float(row[13] or 0.0)
        xgf_pct = float(row[14] or 50.0)
        cf_pct = float(row[15] or 50.0)
        fow = int(row[16] or 0)
        fow_pct = float(row[17] or 0.0)
        top_spd = float(row[18] or 30.0)
        dist_m = int(row[19] or 3500)
        pass_pct = float(row[20] or 0.8) * 100.0 if float(row[20] or 0.8) <= 1.0 else float(row[20] or 80.0)
        pcw_pct = float(row[21] or 0.5) * 100.0 if float(row[21] or 0.5) <= 1.0 else float(row[21] or 50.0)
        xgf_pct = float(row[14] or 0.5) * 100.0 if float(row[14] or 0.5) <= 1.0 else float(row[14] or 50.0)
        cf_pct = float(row[15] or 0.5) * 100.0 if float(row[15] or 0.5) <= 1.0 else float(row[15] or 50.0)
        bks = int(row[22] or 0)

        # Estimate position
        pos = 'D' if bks >= 2 and shots <= 2 else ('C' if fow > 0 else 'F')
        archetype = assign_archetype(pos, top_spd, pcw_pct, pass_pct, bks, shots)
        team_id = 'HCD' if 'Davos' in team else 'USA'
        player_id = f"{team_id.lower()}-{jersey}"

        radar = {
            "skatingSpeed": min(99, max(60, int((top_spd / 37.0) * 100))),
            "puckHandling": min(99, max(60, int(pass_pct))),
            "shotGeneration": min(99, max(60, int(50 + shots * 10 + g * 15))),
            "battlePhysicality": min(99, max(60, int(pcw_pct * 1.1))),
            "defensiveGapControl": min(99, max(60, int(55 + bks * 8))),
            "transitionIQ": min(99, max(60, int((cf_pct + xgf_pct) / 2)))
        }

        player_data = {
            "playerId": player_id,
            "jerseyNumber": jersey,
            "name": full_name,
            "teamId": team_id,
            "position": pos,
            "archetype": archetype,
            "timeOnIceSeconds": toi_sec,
            "shiftsCount": shifts,
            "avgShiftDurationSeconds": round(toi_sec / max(1, shifts), 1),
            "totalDistanceMeters": dist_m,
            "topSpeedKmh": top_spd,
            "passesAttempted": int(shots * 8 + 15),
            "passesCompleted": int((shots * 8 + 15) * (pass_pct / 100)),
            "passCompletionPct": pass_pct,
            "shotsOnGoal": shots,
            "goals": g,
            "assists": a,
            "expectedGoals": xg_sum,
            "blockedShots": bks,
            "puckBattleWinPct": pcw_pct,
            "radarScores": radar
        }

        if team_id == 'HCD':
            players_hcd.append(player_data)
        else:
            players_usa.append(player_data)

    print(f"Parsed {len(players_hcd)} HC Davos players and {len(players_usa)} Team USA players.")

    # Parse Event Data Play Cycles
    print(f"Loading {EVENT_FILE}...")
    wb2 = openpyxl.load_workbook(EVENT_FILE, data_only=True)
    ws_events = wb2["Match events"]

    # Wisehockey rink dimensions: roughly -30 to +30 (X) and -15 to +15 (Y)
    def normalize_coord(x_val, y_val):
        norm_x = min(98.0, max(2.0, ((x_val + 30.0) / 60.0) * 100.0))
        norm_y = min(98.0, max(2.0, ((y_val + 15.0) / 30.0) * 100.0))
        return round(norm_x, 1), round(norm_y, 1)

    cycles_data = {}
    for row in ws_events.iter_rows(min_row=2, values_only=True):
        cycle = row[0]
        if not cycle:
            continue
        if cycle not in cycles_data:
            cycles_data[cycle] = []
        cycles_data[cycle].append(row)

    print(f"Found {len(cycles_data)} play cycles in event export.")
    
    out_json = {
        "hcdPlayers": players_hcd,
        "usaPlayers": players_usa,
        "cyclesCount": len(cycles_data)
    }

    out_path = os.path.join(OUTPUT_DIR, "officialWisehockeyParsed.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(out_json, f, indent=2)

    print(f"Saved parsed official data to {out_path}")

if __name__ == "__main__":
    ingest()
