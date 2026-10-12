# Human Teammate Onboarding Guide: Spengler ShiftIQ
**ThinkSport Innovation Challenge: Data-hack 2026**
**Project:** `ice-hockey-data-hack`
**Team Lead:** Kamilla Gafurzianova

Welcome to the team! This document gets you up and running within 5 minutes, explains our system architecture, and outlines how we collaborate to deliver a winning submission for the jury on 7 December 2026 at The Circle, Zurich Airport.

---

## ⏱️ 5-Minute Quickstart

### 1. Prerequisites
- **Node.js** >= 18.0 (Recommended: v20 or v22)
- **Python** >= 3.10
- **Git**

### 2. Setup Commands
```bash
# 1. Clone the repository and enter directory
git clone <repo-url> ice-hockey-data-hack
cd ice-hockey-data-hack

# 2. Install web dependencies
npm install

# 3. Verify TypeScript compiles cleanly (0 errors)
npm run check

# 4. Start local hot-reloading development server
npm run dev
# App will open at http://localhost:3000
```

### 3. Verify Data Pipeline
```bash
# Run the synthetic data generator & parser
python data_pipeline/generate_synthetic_data.py
python data_pipeline/parse_wisehockey.py
```

---

## 👥 Team Roles & Responsibilities

In ThinkSport Data-hack, teams consist of **1 to 4 participants**. We divide work across four primary tracks:

| Role / Track | Focus Areas | Key Files |
| :--- | :--- | :--- |
| **Track 1: Frontend & Visuals** | UI components, SVG rink animations, interaction design, mobile responsiveness | `src/components/`, `src/App.tsx`, `tailwind.config.js` |
| **Track 2: Data & Analytics** | Wisehockey CSV parsing, coordinate normalization, metric calculations, ML/xG models | `data_pipeline/`, `src/types/wisehockey.ts`, `src/lib/` |
| **Track 3: Product & Activation** | Competition alignment, SRF broadcast concept, stadium experience, user feedback | `docs/ACTIVATION_CONCEPT.md`, `src/components/activation/` |
| **Track 4: Pitch & Media** | 10-slide deck, 3-minute video presentation, rehearsal for Zurich Airport finals | `docs/PITCH_DECK_OUTLINE.md`, `docs/VIDEO_STORYBOARD_3MIN.md` |

---

## 🎨 Design System & Strict UI Invariants

Our project follows strict, modern design standards. All teammates must follow these rules without exception:

### 1. Strict Ban on Pill-Shaped Elements
- 🚫 **NEVER use pill shapes** (`rounded-full` or `border-radius: 9999px`) on buttons, chips, badges, tags, or cards.
- ✅ **Use refined architectural radii**:
  - Small badges / chips / tags: `rounded-md` (6px) or `rounded-lg` (8px).
  - Standard buttons / CTAs / inputs: `rounded-lg` (8px) or `rounded-xl` (12px).
  - Cards / panels / containers: `rounded-xl` (12px) or `rounded-2xl` (16px).
  - *Exception*: Circular avatars (1:1 aspect ratio square-to-circle) are permitted.

### 2. Zero-Orphan Multilingual Typography
- Headings must proactively include `text-wrap: balance;`.
- Body text and cards must use `text-wrap: pretty;`.
- Always glue single-letter words and short prepositions (*A, in, to; в, на, с; һәм, бу*) with non-breaking spaces (`\u00A0` or `&nbsp;`) to avoid trailing orphans.

### 3. High-Definition Vector Rendering
- The ice rink and radar charts use native **Vector SVG** (`viewBox="0 0 1000 500"`) so that visuals remain razor-sharp on mobile phones, tablets, and 4K displays.

### 4. Official Spengler Cup Color Tokens
- **HC Davos Blue**: `#0047ba`
- **HC Davos Gold / Yellow**: `#f5b000`
- **Ice Cyan Accent**: `#00f2fe`
- **Dark Surface**: `#070d19` and `#0f172a`
- **Team USA Red / Navy**: `#c8102e` / `#00205b`

---

## 🧠 Code Architecture Map

```
src/
├── types/             <-- DATA CONTRACTS (Wisehockey metrics, match schema)
│   ├── wisehockey.ts  <-- 97 player metrics & 114 event attributes
│   ├── match.ts       <-- Match overview, rosters, periods
│   └── gamification.ts<-- Quizzes & tactical lineup structures
├── data/              <-- INGESTED & MOCK TELEMETRY
│   ├── sampleMatch.ts <-- Davos vs USA match metadata & rosters
│   ├── mockEvents.ts  <-- Play-by-play coordinate trajectories
│   └── iceIqQuestions.ts <-- Quiz challenges
├── components/        <-- UI MODULES (Architectural styling)
│   ├── layout/        <-- Header (Dual-Lens Switcher), MatchBanner
│   ├── visualizer/    <-- Rink2D SVG, PlayScrubber, EventCard
│   ├── comparison/    <-- PlayerDNA, Radar chart, Head-to-Head
│   ├── lineup/        <-- LineBuilder, ChemistryMeter
│   ├── gamification/  <-- IceIQQuiz
│   └── activation/    <-- SRF Broadcast & Jumbotron preview
└── lib/               <-- REUSABLE UTILITIES
    ├── utils.ts       <-- Class merging (cn) & metric formatters
    └── metricsCalculator.ts <-- Synergy & chemistry evaluation engine
```

---

## 🔒 Confidentiality & Data Guidelines
- The official Wisehockey dataset for HC Davos vs. U.S. Collegiate Selects is **confidential challenge material**.
- **Never commit raw proprietary match CSVs to public GitHub repositories.**
- Keep raw datasets inside local `data_pipeline/data/` (which is git-ignored) and commit only scrubbed or synthetic schemas.

---

## 🚀 Git & Contribution Workflow

1. Always branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Before committing, run verification:
   ```bash
   npm run check    # Must exit with 0 errors
   npm run build    # Must compile production bundle cleanly
   ```
3. Submit a Pull Request with a clear description and screenshots/GIFs of UI changes.
