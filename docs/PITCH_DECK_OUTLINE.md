# Official 5-Slide Proposal (+ Title & End Slides): Spengler ShiftIQ

> **ThinkSport Innovation Challenge: Data-hack 2026**
> **Compliance Note (`OFFICIAL_CHALLENGE_RULES.md` Section 7.C & 7.E)**: Strictly structured as **5 core proposal slides + 1 Title Slide + 1 End Slide (7 slides total)** mapped 1-to-1 to the 5 Official Jury Evaluation Criteria.
> **Match Dataset**: 97th Spengler Cup Final (31 Dec 2025: HC Davos 6 : 3 U.S. Collegiate Selects · 40 Real Skaters · 284 Play-by-Play Telemetry Events).

---

## Title Slide (Slide 0): Beyond the Box Score
- **Headline**: **Spengler ShiftIQ** · *Turning 20Hz Optical Telemetry into Second-Screen Fan Emotion & Sponsor ROI*
- **Sub-headline**: ThinkSport Innovation Challenge: Data-hack 2026 (Spengler Cup Davos · scoreTec · Wisehockey)
- **Visual**: Split-screen hero of the glowing **2D Interactive SVG Rink** (showing `#19 Adam Tambellini`'s `100.1 km/h` goal trajectory and all 10 on-ice skaters) next to a **3D Foil Player DNA Card** (`#18 Filip Zadina` · `35.4 km/h` Top Speed).
- **Live Stage Callout**: High-contrast QR Code (`Scan to play live during our 10-minute pitch`) + Bilingual Badge (`DE / EN`).

---

## Slide 1 (Proposal Slide 1 of 5): The Problem & Fan Insight
*Jury Criterion #1: Problem Understanding & Solution Relevancy*

- **Headline**: **2.7M TV Viewers & 69,450 Arena Fans, Yet Digital Engagement Stops at the 6:3 Box Score**
- **The 3 Friction Points Identified in Webinars #1, #2 & #3**:
  1. **The "Check the Score & Leave" Habit**: Fans glance at `HC Davos 6 : 3 U.S. Selects` on their phone and bounce in 5 seconds because raw tables of 23 metrics and 116 event columns look like a coach's spreadsheet.
  2. **Invisible Elite Physics**: On TV or from the Eisstadion stands, casual fans cannot see `#2 Gavin McCarthy`'s `146.0 km/h` slapshot, `#23 Eric Pohlkamp`'s `35.6 km/h` shorthanded sprint, or `#77 Nico Gross`'s `90.4 km/h` breakout pass.
  3. **The 18-Minute Intermission Dead-Zone**: Twice per game, broadcast and arena engagement drops right when fans have their smartphones in hand.
- **Our Design Principle**: *"If it looks like another spreadsheet, we lose fans in one second."* ShiftIQ translates raw coordinates into **Curiosity, Gamification, and Visual Storytelling**.

---

## Slide 2 (Proposal Slide 2 of 5): The Dual-Lens Shift Replay & Momentum Engine
*Jury Criterion #1 (Relevancy) & Criterion #4 (Technical Implementation)*

- **Headline**: **One 20Hz Optical Stream, Two Tailored Fan Experiences (Story Lens vs. Pro Lens)**
- **Visual**: Side-by-side comparison of **Cycle #1 (P1 14:49 Tambellini Goal, 128 Events)**, **Cycle #2 (P2 13:42 Musa Goal, 75 Events)**, and **Cycle #3 (P3 17:49 Stransky Powerplay Goal, 81 Events)**:
  - **Fan Story Lens (Default)**: Highlights the 4 primary playmakers (`#19 Tambellini`, `#38 Frick`, `#70 Corvi`, `#23 Pohlkamp`), anchors the play with a single **Curiosity Question** (*"How did HC Davos turn a blocked shot into a 100.1 km/h goal?"*), and breaks the shift into 4 bite-sized story cards.
  - **Pro Analyst Lens (1-Tap Toggle)**: Illuminates **all 10 on-ice skaters (`StartPlayer1..12`)**, instantaneous velocity vectors (`m/s` to `km/h`), tactical spacing triangles, and goalie screen cones.
  - **Control & Momentum Sparkline**: Interactive 10-bucket pressure bar showing territorial swings across all 284 official Wisehockey event rows.

---

## Slide 3 (Proposal Slide 3 of 5): The Gamification & Retention Loop
*Jury Criterion #2: Creativity*

- **Headline**: **Turning the 18-Minute Intermission into a Live Multiplayer Arena & TV Game**
- **4 Interactive Fan Mechanics Powered by Real Dec 31 Final Telemetry**:
  1. **In-Shift Live Prediction**: Before scrubbing the replay, fans guess `#19 Adam Tambellini`'s exact release speed (`88.4` vs `100.1` vs `112.5 km/h`) to earn `+50 Fan XP`.
  2. **Intermission Shift Micro-Fantasy (The 3-Skater Triad)**: Fans draft 1 *Rocket* (`#18 Filip Zadina`, `35.4 km/h`), 1 *Sniper* (`#19 Adam Tambellini`, `2G, 1A`), and 1 *Anchor* (`#6 Klas Dahlbeck`, `4 BKS, +4`) from all **40 official skaters** and score live points from optical sensor bursts.
  3. **Tactical Lineup Chemistry Lab**: Interactive `5v4 Powerplay`, `4v5 Penalty Kill`, `3v3 OT`, and `5v5` board calculating synergy across all 40 skaters.
  4. **6-Challenge Ice IQ Quiz & 3D Foil Player DNA Cards**: Tests real match facts (`#4 Jake Livanavage`'s `5,595 m` distance, `#70 Enzo Corvi`'s `95.0%` pass completion, `#22 Brendan Lemieux`'s `83.3%` battle win rate) with Tilt-3D collectible cards.

---

## Slide 4 (Proposal Slide 4 of 5): Technical Architecture & Zero-Latency Pipeline
*Jury Criterion #4: Technical Implementation*

- **Headline**: **Production-Ready Web SDK Built on 100% Authentic Wisehockey Data**
- **End-to-End Architecture**:
  - **Automated Python Ingestion (`ingest_official_sample_pack.py`)**: Parses all 40 skaters (23 columns) from `aggregated_stats_sample.xlsx` and all 284 multi-skater event rows (116 columns) from `event_data_sample.xlsx`, cross-referencing shot velocities, pass speeds, and momentum swings into a compact JSON payload (`33 KB`).
  - **60fps Vector SVG Rink Engine**: Hardware-accelerated coordinate interpolation (`-30..+30m X`, `-15..+15m Y` to `1000x500` SVG viewport) with zero external canvas dependencies and instant load on arena Wi-Fi or 4G/5G.
  - **Mobile-First Ergonomics & Full Bilingual Parity (`DE / EN`)**: Fixed 6-tab thumb-zone dock (`>= 44x44px` touch targets), compact `36px` status strip on deep tools, architectural corner radii, and instant German/English switching.

---

## Slide 5 (Proposal Slide 5 of 5): Added Value, Broadcast Sync & Sponsor ROI
*Jury Criterion #3: Added Value & Impact*

- **Headline**: **Monetizing Attention Across 69,450 Arena Visitors, 2.7M SRF Viewers & 104M Global Reach**
- **3 Plug-and-Play Deployment Channels**:
  1. **SRF zwei TV Lower-Third QR Sync**: Viewers scan the on-screen graphic after `#44 Matej Stransky`'s powerplay goal to inspect the 67.0 km/h `#6 Klas Dahlbeck` seam pass on their phone.
  2. **Eisstadion Davos Jumbotron Live Poll**: In-seat fans vote on the *Hardest Working Skater of Period 2* (`#19 Adam Tambellini` vs. `#2 Gavin McCarthy`) via stadium Wi-Fi.
  3. **SpenglerCup.ch Match Center Embed**: Drop-in iframe/React widget replacing static box scores.
- **Quantified Commercial Impact (At 8% Target Scan Rate)**:
  - **~87,800 Active Second-Screen Sessions** across the tournament week.
  - **562,000+ Engaged Intermission Minutes** (avg. `6.4 min` dwell time vs. `0:15s` static box-score bounce).
  - **12,200+ Verified Sponsor Conversions** via Fan XP reward redemptions for tournament partners (UBS, Skoda, Würth, HCD Fanshop).

---

## End Slide (Slide 6): Live Experience & Repository Verification
*Jury Criterion #5: Presentation*

- **Headline**: **Ready for the 98th Spengler Cup Davos (December 2026)**
- **3 Direct Verification Links for the Jury**:
  1. **Live Interactive Prototype (Mobile & Desktop)**: QR Code + Direct URL
  2. **Public Code Repository & Wisehockey Data Pipeline**: GitHub Repository (`data_pipeline/ingest_official_sample_pack.py` + `src/`)
  3. **3-Minute Official Demo Video**: MP4 Walkthrough
- **Closing Callout**: *"From the Coach's Laptop to Every Fan's Pocket. Thank you, Spengler Cup, scoreTec & Wisehockey!"*
