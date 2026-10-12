# Spengler ShiftIQ · Ice Hockey Data-Hack 2026

> **ThinkSport Innovation Challenge: Data-hack 2026 (2nd Edition)**  
> In partnership with **Spengler Cup Davos** and **scoreTec**  
> **Author & Developer:** Kamilla Gafurzianova  
> **Final Pitch Date:** 7 December 2026 · The Circle Convention Center, Zurich Airport  

![Spengler ShiftIQ Architecture](https://img.shields.io/badge/Competition-ThinkSport%20Data--Hack-0047ba?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-Vite%20%7C%20React%20%7C%20TypeScript%20%7C%20Tailwind-00f2fe?style=flat-square)
![Wisehockey](https://img.shields.io/badge/Data-Wisehockey%20Telemetry-f5b000?style=flat-square)

---

## 🏒 Overview & Core Problem

Ice hockey is one of the fastest, most emotional team sports on the planet. Yet its performance data often feels dry, dense, and disconnected from the drama on the ice. Visitors to the Spengler Cup website frequently **"check the score and leave."**

**Spengler ShiftIQ** turns that brief visit into active, tactile discovery. It solves the challenge through a **Dual-Lens Architecture**:
1. **Fan Story Lens**: Rich, plain-language visual storytelling for newcomers and casual fans (*"Why this unnoticed stick-check created the game-winning breakaway"*).
2. **Pro Analyst Lens**: Deep telemetry for coaches, analysts, and commentators (spatial coordinates, xG surges, acceleration curves, and battle efficiencies).

---

## ⚡ Core Interactive Modules

### 1. The Decisive Shift (Interactive 2D Rink Visualizer)
- Time-synchronized 2D vector replay of match-defining plays (e.g. Matej Stransky's 37.9 km/h breakout goal, Michael Fora's 5-on-3 penalty kill stand, Frank Nazar's 38.6 km/h coast-to-coast rush).
- Scrubbable timeline with variable playback speeds (0.5x, 1x, 2x).
- Animated skater trails, puck vectors, and dynamic speed pulses.

### 2. Player DNA & Head-to-Head Clash
- Role archetype classification (*The Slot Disruptor*, *The High-Speed Finisher*, *The Playmaking Maestro*, *The Blue-Line Wall*, *The Shutdown Anchor*, *The Transition Engine*).
- 6-axis SVG radar comparison (Speed, Puck IQ, Shooting, Physicality, Defense, Transition).
- Comparative performance metric progress bars.

### 3. Tactical Dream Line Builder
- Construct customized 5-skater units for Power Plays, Penalty Kills, 3-on-3 Overtime, or Even Strength.
- Real-time **Tactical Chemistry Rating (0-100)** calculated from telemetry synergy algorithms.
- Instant 60-second shift simulation with strengths and tactical vulnerability feedback.

### 4. Ice IQ (Intermission Challenge)
- Gamified match recall quizzes designed for 18-minute tournament intermissions.
- Instant feedback powered by Wisehockey sensor log evidence.

### 5. Multi-Channel Activation Preview
- Live mockups demonstrating integration into:
  - **SRF Sport TV Broadcast**: Lower-third telemetry overlays with interactive second-screen QR codes.
  - **Eisstadion Davos Jumbotron**: In-arena live fan voting during intermissions.
  - **Spengler Cup Match Center (`spenglercup.ch`)**: Embedded responsive widget.

---

## 🛠️ Quickstart & Local Development

### Prerequisites
- Node.js >= 18 (Tested on Node v26)
- Python >= 3.10

### Web Application
```bash
# Navigate to project root
cd c:\Users\kamil\PROJECTS\ice-hockey-data-hack

# Install dependencies
npm install

# Run local development server
npm run dev

# Run TypeScript type verification
npm run check

# Build production bundle
npm run build
```

### Python Data Pipeline
```bash
# Generate synthetic Wisehockey match datasets
python data_pipeline/generate_synthetic_data.py

# Ingest and parse Wisehockey CSV exports into JSON
python data_pipeline/parse_wisehockey.py
```

---

## 📁 Repository Structure

```
ice-hockey-data-hack/
├── index.html                  # HTML entry with custom typography
├── package.json                # Project dependencies and build scripts
├── vite.config.ts              # Vite bundler configuration with @ alias
├── tailwind.config.js          # Spengler Cup color tokens & architectural radii
├── src/
│   ├── main.tsx                # React root mount
│   ├── App.tsx                 # Main application layout & state loop
│   ├── types/
│   │   ├── wisehockey.ts       # ~97 player metrics & ~114 event attributes
│   │   ├── match.ts            # Match metadata and roster models
│   │   └── gamification.ts     # Quiz and lineup builder types
│   ├── data/
│   │   ├── sampleMatch.ts      # HC Davos vs. U.S. Collegiate Selects (31 Dec 2025)
│   │   ├── mockEvents.ts       # Shift trajectory coordinate sequences
│   │   └── iceIqQuestions.ts   # Intermission trivia challenges
│   ├── components/
│   │   ├── layout/             # Header, MatchBanner, Navigation
│   │   ├── visualizer/         # Rink2D SVG, PlayScrubber, EventCard
│   │   ├── comparison/         # PlayerDNA, Radar chart, Head-to-Head
│   │   ├── lineup/             # LineBuilder, ChemistryMeter
│   │   ├── gamification/       # IceIQQuiz
│   │   └── activation/         # ActivationHub (SRF TV, Arena Jumbotron)
│   └── lib/
│       ├── utils.ts            # Tailwind class merge & metric formatting
│       └── metricsCalculator.ts# Lineup synergy & evaluation algorithms
├── data_pipeline/
│   ├── generate_synthetic_data.py # Synthetic CSV generator
│   ├── parse_wisehockey.py        # Raw CSV to client JSON converter
│   └── output/                    # Generated sample outputs
└── docs/
    ├── PITCH_DECK_OUTLINE.md      # 10-slide presentation deck
    ├── VIDEO_STORYBOARD_3MIN.md   # 3-minute video presentation script
    ├── ACTIVATION_CONCEPT.md      # Multi-channel tournament rollout blueprint
    └── WISEHOCKEY_METRICS_GUIDE.md# Telemetry mapping dictionary
```

---

## 📑 Competition Deliverables Guide

All required competition materials are pre-structured and ready in the [`docs/`](docs/) directory:
1. **Presentation Deck Outline**: [`docs/PITCH_DECK_OUTLINE.md`](docs/PITCH_DECK_OUTLINE.md)
2. **Interactive Prototype**: Fully functional in `src/` (run `npm run dev`)
3. **Public Code Repository**: Formatted for GitHub publication
4. **Three-Minute Video Script**: [`docs/VIDEO_STORYBOARD_3MIN.md`](docs/VIDEO_STORYBOARD_3MIN.md)
5. **Lightweight Activation Concept**: [`docs/ACTIVATION_CONCEPT.md`](docs/ACTIVATION_CONCEPT.md)

---

## 🔒 Confidentiality & Data Notice
Official match tracking data provided by scoreTec / Wisehockey for the HC Davos vs. U.S. Collegiate Selects match is for challenge use only. The application includes a clean abstraction layer and data pipeline allowing proprietary raw datasets to be dropped into `data_pipeline/` locally without public exposure.
