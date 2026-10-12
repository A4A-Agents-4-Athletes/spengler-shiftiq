# Team Merge & Technical Integration Playbook: Spengler ShiftIQ
**ThinkSport Innovation Challenge: Data-hack 2026**
**Context:** Merging with another team or integrating external codebases / analytics modules.

During hackathons, teams frequently find opportunities to merge complementary skill sets (e.g., an analytics/ML team joining forces with a UX/frontend team). This playbook outlines how to execute an administrative and technical merge seamlessly without losing momentum.

---

## 🏛️ 1. Agorize Platform Team Merging Protocol

### Competition Rules Check
- **Maximum Team Size:** 1 to 4 members. If merging two teams, ensure the combined team does not exceed 4 members.
- **Deadline:** Gameplay phase ends **15 November 2026** at 23:59 CET. All team rosters must be finalized before submitting deliverables.
- **Academic vs. Independent Teams:**
  - If merging academic participants from the same or partner universities, confirm university selection rules.
  - Independent tech builders may form cross-functional teams freely.

### Step-by-Step Agorize Merge Procedure
1. Choose one existing Agorize project space as the **Primary Submission Space**.
2. The team leader of the secondary team disbands their draft or sends an invite to merge.
3. The Primary Team Lead sends Agorize invitations to the incoming teammates using their registered platform emails.
4. Update the **Team Description** and **Participant Bios** to reflect the combined multidisciplinary strengths (e.g., "Full-stack sports tech team combining elite UI/UX engineering, data science, and broadcast sports analytics").

---

## 🔌 2. Technical Integration Strategies

Our architecture was intentionally designed with **loose coupling** so that external components, algorithms, and APIs can plug in with minimal friction.

### Scenario A: The Other Team Has a Python / ML Backend
*(e.g., FastAPI, Flask, PyTorch xG model, expected threat xT, or player clustering)*

#### Option 1: Static JSON Ingestion (Recommended for Zero-Downtime Demo)
1. Have their Python models write output to `data_pipeline/output/` or `public/data/`.
2. Run our converter:
   ```bash
   python data_pipeline/parse_wisehockey.py <their_output.csv> <our_app_data.json>
   ```
3. ShiftIQ renders their ML predictions with zero server latency or cold-start risk during the live jury pitch.

#### Option 2: Live REST API Integration
If the other team runs a live FastAPI/Flask service:
1. Add an environment variable `.env`:
   ```env
   VITE_ANALYTICS_API_URL=http://localhost:8000/api/v1
   ```
2. Configure Vite dev proxy in `vite.config.ts`:
   ```typescript
   server: {
     proxy: {
       '/api': {
         target: 'http://localhost:8000',
         changeOrigin: true,
       },
     },
   }
   ```
3. Use `fetch('/api/xg-predictions')` inside custom React hooks.

---

### Scenario B: The Other Team Has Advanced Visuals / 3D Canvas
*(e.g., Three.js 3D rink, Spline animations, or specialized charting tools)*

1. **Drop-in Component Architecture:**
   - Our components in `src/components/visualizer/` are isolated.
   - You can replace or augment `Rink2D.tsx` with a `Rink3D.tsx` component while keeping the same `PlayScrubber.tsx` controller and `EventCard.tsx` storytelling cards.
2. **Unified Data Interface:**
   - As long as the incoming visualizer consumes the `DecisiveMoment` trajectory coordinates from `src/types/wisehockey.ts`, both 2D and 3D views can be toggled via a simple UI tab.

---

### Scenario C: Monorepo Organization (If Merging Two Distinct Git Repos)

If merging two mature repositories:
```bash
# In ice-hockey-data-hack root:
git remote add other-team <other-repo-url>
git fetch other-team
git merge other-team/main --allow-unrelated-histories -m "chore: merge other team repository"
```
Reorganize into a clean workspace structure:
```
ice-hockey-data-hack/
├── apps/
│   ├── web/           # Our ShiftIQ React frontend
│   └── ml-service/    # Incoming Python / PyTorch backend
├── packages/
│   └── shared-types/  # Shared TypeScript / JSON schema definitions
└── docs/              # Unified competition submission materials
```

---

## 📋 3. Deliverables & Pitch Alignment

When merging teams, immediately redistribute the 4 core competition deliverables:

| Deliverable | Ownership | Deliverable Focus |
| :--- | :--- | :--- |
| **Presentation Deck (10 Slides)** | Lead Presenter | Incorporate both teams' achievements into the story flow. |
| **Working Prototype** | Tech Lead | Ensure the demo runs smoothly locally and on Vercel/Netlify. |
| **3-Minute Video** | Media Lead | Record voiceover, capture demo footage, and edit to exactly 180s. |
| **Activation Strategy** | Product Lead | Pitch how the combined solution benefits Spengler Cup and SRF. |

### Pitch Time Allocation at The Circle (5-Minute Pitch + 5-Minute Q&A)
- **Minute 1:** Problem statement & The Core Ice Hockey Paradox (Why fans check score & leave).
- **Minutes 2–3:** Live walkthrough of the merged working prototype (Rink Replay + ML Models + Lineup Builder).
- **Minute 4:** Activation across SRF TV broadcast and Eisstadion Davos stadium screens.
- **Minute 5:** Scalability across the Swiss National League, team introductions, and conclusion.
- **Q&A (5 min):** Divide jury questions by expertise (Technical / ML vs. Fan Experience vs. Media Rights).
