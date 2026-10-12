# Contributing to Spengler ShiftIQ

Thank you for contributing to **Spengler ShiftIQ** for the **ThinkSport Innovation Challenge: Data-hack 2026**!

## Getting Started

1. Check out [`docs/TEAM_ONBOARDING_GUIDE.md`](docs/TEAM_ONBOARDING_GUIDE.md) for local setup instructions.
2. If you are merging work from an existing project or team, review [`docs/TEAM_MERGE_AND_INTEGRATION_PLAYBOOK.md`](docs/TEAM_MERGE_AND_INTEGRATION_PLAYBOOK.md).

## Standards & Quality Gates

- **TypeScript Strictness**: All code must pass `npm run check` with zero errors.
- **Production Build**: Verify your changes with `npm run build`.
- **UI Design Compliance**:
  - **No pill-shaped elements**: Avoid `rounded-full` buttons, badges, chips, or inputs. Use architectural corner radii (`rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`).
  - **Zero-orphan typography**: Apply `text-wrap: balance;` on headings and `text-wrap: pretty;` on body text.
  - **Vector SVG**: Maintain high-definition, responsive vector SVG for all custom visualizations.
- **Data Confidentiality**: Do not commit raw proprietary Wisehockey match data. Keep raw match files in `data_pipeline/data/` (git-ignored) and use the synthetic data generator for automated testing.
