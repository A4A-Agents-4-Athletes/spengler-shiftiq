import { DecisiveMoment } from '../types/wisehockey';

export const mockDecisiveMoments: DecisiveMoment[] = [
  {
    id: 'moment-1-stransky-breakaway',
    period: 2,
    gameClock: '08:42',
    title: 'Stransky 2-on-1 Counter-Attack Goal',
    eventType: 'GOAL',
    primaryTeamId: 'HCD',
    primaryPlayerName: 'Matej Stransky',
    headlineMetric: '37.9 km/h Breakout in 4.2s',
    fanStoryInsight:
      'Great goals start where nobody looks. Watch Andres Ambühl (#10) at the neutral red line: his subtle stick-lift severed Team USA\'s passing lane, creating an instantaneous 2-on-1 counter-attack that Stransky finished upstairs.',
    proAnalystInsight:
      'Defensive turnover forced at (x: 46.2, y: 18.4). Neutral zone transition time 3.8s. Stransky peak velocity 37.9 km/h with 4.1 m/s² initial acceleration burst. xG surged from 0.06 (neutral turnover) to 0.78 at release.',
    durationSeconds: 6,
    topSpeedKmh: 37.9,
    puckVelocityKmh: 138.4,
    expectedGoalDelta: 0.72,
    puckTrajectory: [
      { timeSec: 0.0, x: 42, y: 22, speedKmh: 45.0 },
      { timeSec: 1.0, x: 48, y: 26, speedKmh: 68.0 },
      { timeSec: 2.2, x: 62, y: 35, speedKmh: 82.0 },
      { timeSec: 3.5, x: 78, y: 48, speedKmh: 110.0 },
      { timeSec: 4.8, x: 88, y: 52, speedKmh: 138.4 },
      { timeSec: 5.5, x: 92, y: 50, speedKmh: 0.0 }, // Goal!
    ],
    skaters: [
      {
        playerId: 'hcd-44',
        name: 'Matej Stransky',
        teamId: 'HCD',
        jerseyNumber: 44,
        position: 'RW',
        trajectory: [
          { timeSec: 0.0, x: 38, y: 15, speedKmh: 18.0 },
          { timeSec: 1.2, x: 50, y: 24, speedKmh: 31.4 },
          { timeSec: 2.5, x: 66, y: 36, speedKmh: 37.2 },
          { timeSec: 3.8, x: 80, y: 46, speedKmh: 37.9 },
          { timeSec: 5.0, x: 89, y: 51, speedKmh: 28.5 },
        ],
      },
      {
        playerId: 'hcd-10',
        name: 'Andres Ambühl',
        teamId: 'HCD',
        jerseyNumber: 10,
        position: 'LW',
        trajectory: [
          { timeSec: 0.0, x: 44, y: 28, speedKmh: 22.0 },
          { timeSec: 1.2, x: 49, y: 27, speedKmh: 26.5 },
          { timeSec: 2.5, x: 58, y: 24, speedKmh: 32.1 },
          { timeSec: 3.8, x: 72, y: 22, speedKmh: 34.0 },
          { timeSec: 5.0, x: 82, y: 30, speedKmh: 24.0 },
        ],
      },
      {
        playerId: 'usa-26',
        name: 'Seamus Casey',
        teamId: 'USA',
        jerseyNumber: 26,
        position: 'LD',
        trajectory: [
          { timeSec: 0.0, x: 52, y: 30, speedKmh: 20.0 },
          { timeSec: 1.2, x: 60, y: 34, speedKmh: 28.0 },
          { timeSec: 2.5, x: 72, y: 40, speedKmh: 32.5 },
          { timeSec: 3.8, x: 81, y: 44, speedKmh: 30.1 },
          { timeSec: 5.0, x: 87, y: 47, speedKmh: 22.0 },
        ],
      },
      {
        playerId: 'usa-24',
        name: 'Ryan Chesley',
        teamId: 'USA',
        jerseyNumber: 24,
        position: 'RD',
        trajectory: [
          { timeSec: 0.0, x: 48, y: 18, speedKmh: 16.0 },
          { timeSec: 1.2, x: 56, y: 20, speedKmh: 24.5 },
          { timeSec: 2.5, x: 68, y: 25, speedKmh: 30.2 },
          { timeSec: 3.8, x: 76, y: 32, speedKmh: 28.4 },
          { timeSec: 5.0, x: 83, y: 38, speedKmh: 20.5 },
        ],
      },
    ],
  },
  {
    id: 'moment-2-fora-pk-stand',
    period: 2,
    gameClock: '14:15',
    title: '5-on-3 PK Wall: Fora & Dahlbeck Lockdown',
    eventType: 'STICK_CHECK',
    primaryTeamId: 'HCD',
    primaryPlayerName: 'Michael Fora',
    headlineMetric: '84.2% Battle Win & 146.8 km/h Block',
    fanStoryInsight:
      'Two men down, Eisstadion on its feet. Michael Fora (#20) didn\'t just block a laser one-timer from Snuggerud—he immediately contested the loose puck along the boards, killing 18 vital seconds without taking a penalty.',
    proAnalystInsight:
      'Defensive gap collapsed from 2.8m to 0.7m within 0.9s. Snuggerud release blocked at 146.8 km/h. High-danger inner slot suppression index: 96/100. Wisehockey contested battle win registered at (x: 12.4, y: 6.8).',
    durationSeconds: 5,
    topSpeedKmh: 28.4,
    puckVelocityKmh: 146.8,
    expectedGoalDelta: -0.64,
    puckTrajectory: [
      { timeSec: 0.0, x: 28, y: 78, speedKmh: 62.0 },
      { timeSec: 1.0, x: 22, y: 55, speedKmh: 146.8 }, // Shot
      { timeSec: 1.8, x: 16, y: 48, speedKmh: 24.0 }, // Blocked by Fora
      { timeSec: 3.2, x: 12, y: 22, speedKmh: 35.0 }, // Pinned to boards
      { timeSec: 5.0, x: 14, y: 18, speedKmh: 5.0 },
    ],
    skaters: [
      {
        playerId: 'hcd-20',
        name: 'Michael Fora',
        teamId: 'HCD',
        jerseyNumber: 20,
        position: 'D',
        trajectory: [
          { timeSec: 0.0, x: 14, y: 48, speedKmh: 12.0 },
          { timeSec: 1.0, x: 16, y: 48, speedKmh: 15.2 },
          { timeSec: 2.2, x: 14, y: 35, speedKmh: 24.0 },
          { timeSec: 3.8, x: 13, y: 20, speedKmh: 21.0 },
          { timeSec: 5.0, x: 14, y: 18, speedKmh: 8.0 },
        ],
      },
      {
        playerId: 'usa-81',
        name: 'Jimmy Snuggerud',
        teamId: 'USA',
        jerseyNumber: 81,
        position: 'RW',
        trajectory: [
          { timeSec: 0.0, x: 30, y: 80, speedKmh: 18.0 },
          { timeSec: 1.0, x: 26, y: 72, speedKmh: 14.0 },
          { timeSec: 2.2, x: 22, y: 55, speedKmh: 22.0 },
          { timeSec: 3.8, x: 18, y: 32, speedKmh: 26.5 },
          { timeSec: 5.0, x: 15, y: 22, speedKmh: 16.0 },
        ],
      },
    ],
  },
  {
    id: 'moment-3-nazar-coast-to-coast',
    period: 3,
    gameClock: '03:50',
    title: 'Frank Nazar Coast-to-Coast Warp Speed',
    eventType: 'ZONE_ENTRY',
    primaryTeamId: 'USA',
    primaryPlayerName: 'Frank Nazar',
    headlineMetric: '38.6 km/h Tournament High Speed',
    fanStoryInsight:
      'Blink and you missed him. Team USA center Frank Nazar gathered the puck behind his own goal line and accelerated to 38.6 km/h, slicing through three Davos jerseys before ringing a wrist shot off the crossbar.',
    proAnalystInsight:
      'Controlled zone exit to offensive zone entry executed in 4.1s over 48.4 meters. Peak skating speed 38.6 km/h with 56 total game accelerations. Controlled entry success rate for Nazar: 78.6% on the night.',
    durationSeconds: 5,
    topSpeedKmh: 38.6,
    puckVelocityKmh: 141.2,
    expectedGoalDelta: 0.48,
    puckTrajectory: [
      { timeSec: 0.0, x: 10, y: 50, speedKmh: 22.0 },
      { timeSec: 1.2, x: 28, y: 46, speedKmh: 34.0 },
      { timeSec: 2.4, x: 50, y: 42, speedKmh: 38.0 },
      { timeSec: 3.6, x: 74, y: 48, speedKmh: 38.6 },
      { timeSec: 4.8, x: 88, y: 54, speedKmh: 141.2 }, // Shot off iron
    ],
    skaters: [
      {
        playerId: 'usa-91',
        name: 'Frank Nazar',
        teamId: 'USA',
        jerseyNumber: 91,
        position: 'C',
        trajectory: [
          { timeSec: 0.0, x: 8, y: 50, speedKmh: 19.5 },
          { timeSec: 1.2, x: 26, y: 46, speedKmh: 32.1 },
          { timeSec: 2.4, x: 48, y: 42, speedKmh: 37.8 },
          { timeSec: 3.6, x: 72, y: 48, speedKmh: 38.6 },
          { timeSec: 4.8, x: 84, y: 52, speedKmh: 31.0 },
        ],
      },
      {
        playerId: 'hcd-6',
        name: 'Klas Dahlbeck',
        teamId: 'HCD',
        jerseyNumber: 6,
        position: 'D',
        trajectory: [
          { timeSec: 0.0, x: 58, y: 42, speedKmh: 14.0 },
          { timeSec: 1.2, x: 62, y: 44, speedKmh: 22.0 },
          { timeSec: 2.4, x: 69, y: 46, speedKmh: 28.5 },
          { timeSec: 3.6, x: 77, y: 49, speedKmh: 31.2 },
          { timeSec: 4.8, x: 84, y: 50, speedKmh: 24.0 },
        ],
      },
    ],
  },
];
