#!/usr/bin/env python3
"""
Wisehockey Match Ingestion & Metric Aggregator
ThinkSport Innovation Challenge: Data-hack 2026 (Spengler Cup Davos)

Ingests:
- Raw player-level match statistics (~97 metrics)
- Complete game event export (~114 columns)
Transforms telemetry into web-ready JSON format with normalized 0-100 radar scores.
"""

import csv
import json
import os
import sys

def parse_wisehockey_csv(player_csv_path, output_json_path):
    if not os.path.exists(player_csv_path):
        print(f"Error: File {player_csv_path} not found.")
        return False

    players = []
    with open(player_csv_path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            speed_max = float(row.get("speed_max_kmh", 30.0))
            puck_poss = float(row.get("puck_possession_sec", 40.0))
            shot_gen = float(row.get("shots_on_goal", 2)) * 15.0
            battles_pct = float(row.get("puck_battle_win_pct", 50.0))
            
            # Normalize radar metrics 0-100
            radar = {
                "skatingSpeed": min(100, max(50, int((speed_max / 40.0) * 100))),
                "puckHandling": min(100, max(50, int((puck_poss / 95.0) * 100))),
                "shotGeneration": min(100, max(50, int(shot_gen))),
                "battlePhysicality": min(100, max(50, int(battles_pct))),
                "defensiveGapControl": min(100, max(50, int(battles_pct * 1.1))),
                "transitionIQ": min(100, max(50, int((speed_max + puck_poss) / 1.3)))
            }

            players.append({
                "playerId": row.get("player_id"),
                "name": row.get("player_name"),
                "jerseyNumber": int(row.get("jersey_number", 0)),
                "teamId": row.get("team_id"),
                "position": row.get("position"),
                "timeOnIceSeconds": int(row.get("time_on_ice_sec", 1000)),
                "topSpeedKmh": speed_max,
                "totalDistanceMeters": int(row.get("distance_total_m", 5000)),
                "puckBattleWinPct": battles_pct,
                "radarScores": radar
            })

    with open(output_json_path, "w", encoding="utf-8") as f:
        json.dump({"players": players}, f, indent=2)

    print(f"Successfully converted {len(players)} players to {output_json_path}")
    return True

if __name__ == "__main__":
    csv_file = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(__file__), "output", "player_aggregated_stats.csv")
    out_file = sys.argv[2] if len(sys.argv) > 2 else os.path.join(os.path.dirname(__file__), "output", "parsed_match.json")
    parse_wisehockey_csv(csv_file, out_file)
