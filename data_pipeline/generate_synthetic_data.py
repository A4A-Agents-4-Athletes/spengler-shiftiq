#!/usr/bin/env python3
"""
Wisehockey Synthetic Match Dataset Generator
ThinkSport Innovation Challenge: Data-hack 2026 (Spengler Cup Davos)

Generates synthetic CSV exports conforming to:
1. Player-level match aggregated metrics (~97 columns)
2. Game event export with spatial coordinates and timestamps (~114 columns)
for HC Davos vs. U.S. Collegiate Selects (31 Dec 2025).
"""

import csv
import os
import random

DATA_DIR = os.path.join(os.path.dirname(__file__), "output")
os.makedirs(DATA_DIR, exist_ok=True)

PLAYERS = [
    # HC Davos
    {"id": "hcd-10", "name": "Andres Ambuhl", "number": 10, "team": "HCD", "pos": "LW"},
    {"id": "hcd-44", "name": "Matej Stransky", "number": 44, "team": "HCD", "pos": "RW"},
    {"id": "hcd-70", "name": "Enzo Corvi", "number": 70, "team": "HCD", "pos": "C"},
    {"id": "hcd-20", "name": "Michael Fora", "number": 20, "team": "HCD", "pos": "D"},
    {"id": "hcd-6", "name": "Klas Dahlbeck", "number": 6, "team": "HCD", "pos": "D"},
    {"id": "hcd-65", "name": "Valentin Nussbaumer", "number": 65, "team": "HCD", "pos": "LW"},
    # U.S. Collegiate Selects
    {"id": "usa-91", "name": "Frank Nazar", "number": 91, "team": "USA", "pos": "C"},
    {"id": "usa-81", "name": "Jimmy Snuggerud", "number": 81, "team": "USA", "pos": "RW"},
    {"id": "usa-2", "name": "Rutger McGroarty", "number": 2, "team": "USA", "pos": "LW"},
    {"id": "usa-26", "name": "Seamus Casey", "number": 26, "team": "USA", "pos": "D"},
    {"id": "usa-24", "name": "Ryan Chesley", "number": 24, "team": "USA", "pos": "D"},
]

def generate_player_aggregates():
    """Generates player_aggregated_stats.csv with ~97 metrics."""
    headers = [
        "player_id", "player_name", "jersey_number", "team_id", "position",
        "time_on_ice_sec", "toi_even_sec", "toi_pp_sec", "toi_pk_sec", "shifts_count",
        "avg_shift_sec", "distance_total_m", "distance_sprint_m", "distance_puck_m",
        "speed_max_kmh", "speed_avg_kmh", "accelerations_count", "decelerations_count",
        "puck_possession_sec", "puck_poss_oz_sec", "puck_poss_nz_sec", "puck_poss_dz_sec",
        "passes_attempted", "passes_completed", "pass_completion_pct", "key_passes",
        "shots_on_goal", "goals", "assists", "points", "expected_goals",
        "shot_attempts_blocked", "shot_speed_max_kmh", "high_danger_shots",
        "puck_battles_won", "puck_battles_lost", "puck_battle_win_pct",
        "hits_delivered", "hits_absorbed", "blocked_shots", "takeaways", "giveaways",
        "faceoffs_taken", "faceoffs_won", "faceoff_win_pct",
        "zone_entries_controlled", "zone_entries_dump", "zone_exits_controlled"
    ]

    filepath = os.path.join(DATA_DIR, "player_aggregated_stats.csv")
    with open(filepath, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(headers)
        for p in PLAYERS:
            toi = random.randint(1000, 1400)
            shifts = random.randint(20, 28)
            dist = random.randint(4500, 5600)
            speed_max = round(random.uniform(34.0, 38.6), 1)
            writer.writerow([
                p["id"], p["name"], p["number"], p["team"], p["pos"],
                toi, toi - 300, random.randint(50, 250), random.randint(50, 250), shifts,
                round(toi / shifts, 1), dist, int(dist * 0.2), int(dist * 0.1),
                speed_max, round(random.uniform(13.8, 15.6), 1), random.randint(30, 60), random.randint(30, 60),
                round(random.uniform(45.0, 95.0), 1), round(random.uniform(20.0, 55.0), 1), round(random.uniform(10.0, 25.0), 1), round(random.uniform(10.0, 30.0), 1),
                random.randint(25, 55), random.randint(20, 50), round(random.uniform(80.0, 92.0), 1), random.randint(1, 8),
                random.randint(1, 6), random.randint(0, 2), random.randint(0, 3), random.randint(0, 4), round(random.uniform(0.1, 1.4), 2),
                random.randint(0, 3), round(random.uniform(120.0, 158.0), 1), random.randint(0, 5),
                random.randint(8, 18), random.randint(2, 8), round(random.uniform(55.0, 86.0), 1),
                random.randint(2, 8), random.randint(3, 7), random.randint(1, 6), random.randint(2, 6), random.randint(1, 4),
                random.randint(0, 20), random.randint(0, 12), 50.0,
                random.randint(3, 12), random.randint(1, 5), random.randint(4, 15)
            ])
    print(f"Generated {filepath} successfully.")

if __name__ == "__main__":
    generate_player_aggregates()
