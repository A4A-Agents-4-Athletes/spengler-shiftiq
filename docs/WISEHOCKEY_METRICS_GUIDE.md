# Wisehockey Metrics & Telemetry Reference Guide
**ThinkSport Innovation Challenge: Data-hack 2026 (Spengler Cup Davos)**
**Technical Documentation:** Mapping ~97 Player Metrics & ~114 Event Attributes to Fan Storytelling

---

## 1. Overview of the Wisehockey Telemetry System
Wisehockey operates via ultra-wideband (UWB) radio-frequency microchips embedded in:
1. Skater shoulder pads / jerseys (updating positions at 20 Hz).
2. Official match pucks (updating spatial coordinates and spin at up to 100 Hz).
3. Strategic receiver antennas mounted around Eisstadion Davos.

---

## 2. Core Player Aggregated Metric Categories (~97 Metrics)

### A. Skating Workload & Velocity (18 Metrics)
- `distance_total_m`: Total distance covered by skater across all game situations.
- `distance_sprint_m`: Distance skated at velocities exceeding 24.0 km/h.
- `speed_max_kmh`: Absolute peak velocity achieved in a single sprint.
- `speed_avg_kmh`: Mean skating speed while on the ice (excluding bench time).
- `accelerations_count`: Explosive velocity increases (>3.0 m/s²).
- `decelerations_count`: Hard stops and direction changes (>3.0 m/s²).

### B. Puck Possession & Spatial Dominance (15 Metrics)
- `puck_possession_sec`: Cumulative seconds player controlled the puck.
- `puck_poss_oz_sec`: Possession time within the attacking/offensive zone.
- `puck_poss_nz_sec`: Possession time within the neutral zone.
- `puck_poss_dz_sec`: Possession time within the defensive zone.
- `puck_carry_distance_m`: Total distance traveled while maintaining puck control.

### C. Passing Precision (16 Metrics)
- `passes_attempted` & `passes_completed`: Total passing volume.
- `pass_completion_pct`: Passing accuracy percentage.
- `key_passes`: Passes directly preceding a high-danger scoring chance.
- `pass_speed_avg_kmh`: Average speed of puck transfers.
- `cross_ice_passes`: Passes crossing the central ice longitude.

### D. Shooting & Expected Goals (xG) (20 Metrics)
- `shots_on_goal`, `missed_shots`, `blocked_shots`: Basic shot counts.
- `expected_goals` (xG): Statistical probability of a shot resulting in a goal based on historical distance, angle, rebound state, and goaltender pre-shot movement.
- `high_danger_shots`: Shots originating from the inner slot / crease zone.
- `shot_speed_max_kmh`: Peak puck exit speed off stick blade contact.

### E. Defensive Impact & Physical Battles (18 Metrics)
- `puck_battles_won` & `lost`: 1-on-1 contested loose puck duels within 1.5m.
- `puck_battle_win_pct`: Efficiency in winning contested possessions.
- `hits_delivered` & `absorbed`: Physical checks tracked by impact sensors.
- `takeaways`: Turnovers actively forced via stick-lift or poke-check.
- `giveaways`: Unforced turnovers resulting in lost possession.

### F. Special Teams & Shift Dynamics (10 Metrics)
- `toi_even_sec`, `toi_pp_sec`, `toi_pk_sec`: Time on ice by tactical game state.
- `shifts_count` & `avg_shift_sec`: Shift frequency and pacing (crucial for energy management).

---

## 3. Game Event Log Attributes (~114 Columns)
Every timestamped event in the raw event export contains:
- `event_id`: Unique identifier.
- `timestamp_utc` & `game_clock`: Match time and period.
- `event_type`: GOAL, SHOT, PASS, HIT, TURNOVER, FACEOFF, PENALTY, etc.
- `player_id` & `team_id`: Acting skater and defending skater.
- `coord_x_m` & `coord_y_m`: Precise coordinates on standard 60m x 30m rink.
- `puck_velocity_kmh`: Puck speed at event trigger.
- `defensive_gap_m`: Distance to closest opposing defender.
- `xg_value`: Expected goal weight at shot instance.

---

## 4. Translating Telemetry into the "Dual-Lens" Architecture

| Raw Telemetry Metric | Fan Story Lens Interpretation | Pro Analyst Lens Interpretation |
| :--- | :--- | :--- |
| **`puck_battle_win_pct > 80%`** | *"The Board Battle General: Kept the puck alive in dirty areas."* | `84.2% contested win rate in defensive corners; +14 sec zone clearance.` |
| **`speed_max_kmh > 37 km/h`** | *"Lightning Breakout: Blew past defenders before they could react."* | `Peak velocity 37.9 km/h; acceleration burst 4.1 m/s² over 18m.` |
| **`key_passes + xG delta`** | *"Mastermind Vision: Cut the defense open with a pinpoint pass."* | `Primary assist created +0.68 xG spike; cross-seam lane width 1.4m.` |
| **`high_danger_shot_suppression`** | *"The Brick Wall: Locked down the slot on a crucial 5-on-3 kill."* | `Opponent inner-slot xG held to 0.04 during 120s penalty kill.` |
