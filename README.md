# Spengler ShiftIQ · Ice Hockey Data-Hack 2026

> **ThinkSport Innovation Challenge: Data-hack 2026 (2nd Edition)**  
> In partnership with **Spengler Cup Davos**, **scoreTec**, and **Wisehockey**  
> **Team:** A4A (Independent Technical Builders)  
> **Lead Architect:** Kamilla Gafurzianova  
> **Official Dataset:** 97th Spengler Cup Final (31 December 2025: **HC Davos 6 : 3 U.S. Collegiate Selects** · 40 Real Skaters · 284 Play-by-Play Telemetry Events)  
> **Final Pitch Date:** 7 December 2026 · The Circle Convention Center, Zurich Airport  

![Spengler ShiftIQ Architecture](https://img.shields.io/badge/Competition-ThinkSport%20Data--Hack-0047ba?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-Vite%20%7C%20React%20%7C%20TypeScript%20%7C%20Tailwind-38bdf8?style=flat-square)
![Wisehockey](https://img.shields.io/badge/Data-Wisehockey%2020Hz%20Telemetry-0284c7?style=flat-square)
![Languages](https://img.shields.io/badge/Bilingual-DE%20%7C%20EN-10b981?style=flat-square)

---

## 🏒 Executive Summary & Jury Evaluation Alignment

Ice hockey is one of the fastest, most emotional team sports on the planet, yet digital fan engagement frequently stops at a 5-second glance at the `6 : 3` box score. As the challenge brief emphasized: *"If it looks like another spreadsheet, we lose fans in one second."*

**Spengler ShiftIQ** transforms Wisehockey's 23-column player aggregations and 116-column multi-skater event streams into an interactive, bilingual (`DE / EN`), mobile-first second-screen companion for the **69,450 arena visitors** in Davos and **2.7M SRF television viewers**.

| Official Jury Criterion | How Spengler ShiftIQ Delivers |
| :--- | :--- |
| **1. Problem Understanding / Relevancy** | Solves the *"check the score and leave"* bounce rate and the 18-minute intermission dead-zone via **Dual-Lens Architecture (Fan Story Lens vs. Pro Analyst Lens)**, a **Control & Momentum Sparkline** (Webinar #1), and a shift-anchoring **Curiosity Question** (Webinar #2). |
| **2. Creativity** | Combines an **In-Shift Speed Prediction Game**, **Intermission Shift Micro-Fantasy (The 3-Skater Triad)**, **Tactical Lineup Chemistry Lab**, **6-Question Ice IQ Quiz**, and **3D Foil Player DNA Cards** with Fan XP rewards. |
| **3. Added Value & Impact** | Includes a **Broadcast & Sponsor Hub** with SRF zwei Lower-Third QR Sync, Eisstadion Jumbotron live fan polls, `spenglercup.ch` embeddable web views, and an interactive **Sponsor ROI Simulator** grounded in the 2025 Event Report (`54.6%` SRF market share, `104M` global reach). |
| **4. Technical Implementation** | Powered by `data_pipeline/ingest_official_sample_pack.py`, ingesting all **40 real skaters** (`aggregated_stats_sample.xlsx`) and all **284 play-by-play telemetry rows** (`event_data_sample.xlsx`) into a 60fps SVG spatial engine with full German/English parity. |
| **5. Presentation** | Rules-compliant **5-Slide Proposal (+ Title & End = 7 Slides)** in [`docs/PITCH_DECK_OUTLINE.md`](docs/PITCH_DECK_OUTLINE.md) and **3-Minute Demo Video Storyboard** in [`docs/VIDEO_STORYBOARD_3MIN.md`](docs/VIDEO_STORYBOARD_3MIN.md). |

---

## ⚡ 6 Core Interactive Modules (100% Authentic Dec 31 Final Telemetry)

### 1. Shift Replay (`Rink2D`, `PlayScrubber`, `EventCard`)
- **3 Official Goal Cycles (284 Wisehockey Event Rows)**:
  - **Cycle #1 (Period 1, 13:25 to 14:49 · 128 Events · 5v5)**: `#66 Valentin Nussbaumer` faceoff win, `#77 Nico Gross` `90.4 km/h` (`25.1 m/s`) breakout pass to `#38 Lukas Frick`, and `#19 Adam Tambellini`'s `100.1 km/h` slot goal (`0.122 ShotXG`).
  - **Cycle #2 (Period 2, 12:44 to 13:42 · 75 Events · 5v5)**: U.S. Collegiate Selects offensive zone siege featuring `#19 Quinn Finley` (`123.5 km/h`), `#18 Aiden Fink` (`127.1 km/h`), `#2 Gavin McCarthy`'s match-record `146.0 km/h` slapshot, and `#9 Jack Musa`'s `107.0 km/h` slot finish (`0.256 ShotXG`).
  - **Cycle #3 (Period 3, 16:48 to 17:49 · 81 Events · 5v4 Powerplay)**: `#23 Eric Pohlkamp`'s `35.6 km/h` (`9.90 m/s`) shorthanded rush survived by Davos, followed by `#18 Filip Zadina`'s zone entry, `#6 Klas Dahlbeck`'s `67.0 km/h` (`18.6 m/s`) seam pass, and `#44 Matej Stransky`'s powerplay goal.
- **Story Lens vs. Pro Lens**: Story Lens highlights the 4 primary playmakers cleanly; Pro Lens illuminates **all 10 on-ice skaters (`StartPlayer1..12`)** with velocity vectors, spacing triangles, and goalie screen cones.

### 2. Shift Fantasy (`ShiftFantasy`)
- **18-Minute Intermission Micro-Fantasy**: Fans draft a 3-Skater Triad (*The Rocket*, *The Sniper*, *The Anchor*) from all **40 official skaters** and simulate real-time optical tracking points.

### 3. Tactical Board (`LineBuilder`)
- Interactive `5v4 Powerplay`, `4v5 Penalty Kill`, `3v3 OT`, and `5v5 Regular` formation lab with a slide-over roster drawer for all 40 skaters and a live **Tactical Chemistry Rating (0 to 100)**.

### 4. Player DNA (`PlayerDNA`)
- Interactive Tilt-3D collectible cards and 6-axis SVG radar comparison across all 40 skaters (e.g., `#18 Filip Zadina` `35.4 km/h` & `10 SOG` vs. `#21 Ryan Walsh` `34.7 km/h` & `90.9% Pass-%`).

### 5. Ice IQ Quiz (`IceIQQuiz`)
- 6 bilingual (`DE / EN`) match-recall challenges verifying real Wisehockey records (`#4 Jake Livanavage`'s `5,595 m` skating distance, `#70 Enzo Corvi`'s `95.0%` pass completion, `#22 Brendan Lemieux`'s `83.3%` battle win rate).

### 6. Broadcast & Sponsor Hub (`ActivationHub`)
- Interactive previews for **SRF zwei TV Lower-Third QR Sync**, **Eisstadion Davos Jumbotron Live Poll**, **SpenglerCup.ch Web SDK**, and the **Sponsor ROI Simulator**.

---

## 🛠️ Quickstart & Local Verification

### Prerequisites
- Node.js >= 18
- Python >= 3.10 (with `openpyxl` for raw Wisehockey `.xlsx` ingestion)

### 1. Ingest Official Wisehockey Sample Pack
```bash
# Parse aggregated_stats_sample.xlsx (40 skaters) and event_data_sample.xlsx (284 events)
python data_pipeline/ingest_official_sample_pack.py
```

### 2. Run Web Application
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle (TypeScript check + Vite bundle)
npm run build
```

---

## 📁 Repository Structure

```
ice-hockey-data-hack/
├── data_pipeline/
│   ├── ingest_official_sample_pack.py # Parses 40 skaters (23 cols) & 284 events (116 cols)
│   └── data/                          # Official Wisehockey Sample Data Pack (.xlsx & .pdf)
├── src/
│   ├── App.tsx                        # Bilingual (DE/EN) shell, XP engine & 6-tab mobile dock
│   ├── types/
│   │   ├── wisehockey.ts              # Telemetry, MomentumPoint & 10-skater vector types
│   │   ├── match.ts                   # Match overview and team models
│   │   └── gamification.ts            # Quiz and tactical lineup types
│   ├── data/
│   │   ├── officialWisehockeyParsed.json # Generated 40-skater & 3-cycle telemetry JSON
│   │   ├── sampleMatch.ts             # Unified 31 Dec 2025 Final roster & 6:3 match state
│   │   ├── mockEvents.ts              # 3 official goal cycles with 10-skater trajectories
│   │   └── iceIqQuestions.ts          # 6 bilingual Wisehockey trivia challenges
│   ├── components/
│   │   ├── layout/                    # Header.tsx, MatchBanner.tsx
│   │   ├── visualizer/                # Rink2D.tsx, PlayScrubber.tsx, EventCard.tsx
│   │   ├── comparison/                # PlayerDNA.tsx (3D Foil Cards + 6-Axis Radar)
│   │   ├── lineup/                    # LineBuilder.tsx (Tactical Board + 40-Skater Drawer)
│   │   ├── gamification/              # ShiftFantasy.tsx, IceIQQuiz.tsx
│   │   └── activation/                # ActivationHub.tsx (SRF, Jumbotron, Web, Sponsor ROI)
│   └── lib/
│       ├── i18n.ts                    # Complete German (DE) & English (EN) dictionary
│       ├── metricsCalculator.ts       # Tactical chemistry & synergy evaluator
│       └── utils.ts                   # Formatting & class utilities
└── docs/
    ├── OFFICIAL_CHALLENGE_RULES.md    # Official ThinkSport Data-Hack 2026 rules
    ├── PITCH_DECK_OUTLINE.md          # Strict 5-Slide Proposal (+ Title & End = 7 Slides)
    ├── VIDEO_STORYBOARD_3MIN.md       # 3-Minute Demo Video script & storyboard
    ├── PITCH_WINNING_STRATEGY.md      # Jury rubric & 2025 Event Report synthesis
    └── webinars/                      # Synthesized insights from Webinars #1, #2 & #3
```
