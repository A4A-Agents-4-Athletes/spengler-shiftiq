import { IceIqQuizQuestion } from '../types/gamification';

export const iceIqQuizQuestions: IceIqQuizQuestion[] = [
  {
    id: 'q-1-top-speed',
    category: 'SPEED',
    difficulty: 'Rookie',
    prompt: 'Who recorded the fastest individual sprint of the match, clocking in at an electrifying 38.6 km/h?',
    contextText: 'Wisehockey tracking chips track every skater\'s speed at 20 updates per second across the rink.',
    options: [
      {
        id: 'opt-a',
        text: 'Frank Nazar (U.S. Selects)',
        metricLabel: 'Peak Speed',
        metricValue: '38.6 km/h',
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: 'Matej Stransky (HC Davos)',
        metricLabel: 'Peak Speed',
        metricValue: '37.9 km/h',
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: 'Andres Ambühl (HC Davos)',
        metricLabel: 'Peak Speed',
        metricValue: '36.8 km/h',
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: 'Jimmy Snuggerud (U.S. Selects)',
        metricLabel: 'Peak Speed',
        metricValue: '37.1 km/h',
        isCorrect: false,
      },
    ],
    explanation:
      'Frank Nazar exploded through the neutral zone during the 3rd period, reaching 38.6 km/h over a 48-meter burst—the fastest sprint of the tournament!',
    telemetryEvidence: 'Wisehockey Event #842: Player #91 NAZAR, Max Speed: 38.6 km/h, Acceleration: 4.18 m/s².',
  },
  {
    id: 'q-2-shot-velocity',
    category: 'TACTICS',
    difficulty: 'Pro',
    prompt: 'Which player unleashed the hardest single one-timer shot of the night at 157.6 km/h?',
    contextText: 'Shot sensors calculate puck exit velocity at the millisecond of stick blade contact.',
    options: [
      {
        id: 'opt-a',
        text: 'Michael Fora (HC Davos)',
        metricLabel: 'Shot Speed',
        metricValue: '146.8 km/h',
        isCorrect: false,
      },
      {
        id: 'opt-b',
        text: 'Jimmy Snuggerud (U.S. Selects)',
        metricLabel: 'Shot Speed',
        metricValue: '157.6 km/h',
        isCorrect: true,
      },
      {
        id: 'opt-c',
        text: 'Matej Stransky (HC Davos)',
        metricLabel: 'Shot Speed',
        metricValue: '154.2 km/h',
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: 'Ryan Chesley (U.S. Selects)',
        metricLabel: 'Shot Speed',
        metricValue: '145.2 km/h',
        isCorrect: false,
      },
    ],
    explanation:
      'From the left circle during a 2nd period power play, Jimmy Snuggerud pounded a one-timer past Sandro Aeschlimann at 157.6 km/h.',
    telemetryEvidence: 'Wisehockey Shot Metric: Event #412, Snuggerud puck exit speed: 157.6 km/h (43.8 m/s).',
  },
  {
    id: 'q-3-distance-workhorse',
    category: 'WORKLOAD',
    difficulty: 'Expert',
    prompt: 'Ice hockey shifts are intense 45-second intervals. Who skated the longest total distance (5,540 meters)?',
    contextText: 'Skating distance measures total ground covered at even strength, special teams, and line changes.',
    options: [
      {
        id: 'opt-a',
        text: 'Seamus Casey (U.S. Selects)',
        metricLabel: 'Distance Skated',
        metricValue: '5,540 m (5.54 km)',
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: 'Michael Fora (HC Davos)',
        metricLabel: 'Distance Skated',
        metricValue: '5,380 m (5.38 km)',
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: 'Matej Stransky (HC Davos)',
        metricLabel: 'Distance Skated',
        metricValue: '5,140 m (5.14 km)',
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: 'Enzo Corvi (HC Davos)',
        metricLabel: 'Distance Skated',
        metricValue: '4,690 m (4.69 km)',
        isCorrect: false,
      },
    ],
    explanation:
      'Collegiate blue-liner Seamus Casey played 23:00 minutes across 28 shifts, logging a match-topping 5.54 kilometers of ice distance.',
    telemetryEvidence: 'Wisehockey TOI Aggregation: Player #26 CASEY, Total Dist: 5,540m, Sprint Dist: 1,040m.',
  },
  {
    id: 'q-4-battle-wins',
    category: 'DEFENSE',
    difficulty: 'Pro',
    prompt: 'Which veteran had the highest contested puck battle win percentage (84.2%) while winning 16 duels?',
    contextText: 'Wisehockey identifies puck battles whenever two opposing skaters contest a loose puck within 1.5m.',
    options: [
      {
        id: 'opt-a',
        text: 'Michael Fora (HC Davos)',
        metricLabel: 'Battle Win %',
        metricValue: '84.2% (16 of 19)',
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: 'Andres Ambühl (HC Davos)',
        metricLabel: 'Battle Win %',
        metricValue: '77.8% (14 of 18)',
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: 'Ryan Chesley (U.S. Selects)',
        metricLabel: 'Battle Win %',
        metricValue: '75.0% (12 of 16)',
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: 'Rutger McGroarty (U.S. Selects)',
        metricLabel: 'Battle Win %',
        metricValue: '72.2% (13 of 18)',
        isCorrect: false,
      },
    ],
    explanation:
      'Michael Fora dominated the defensive boards, winning 16 of his 19 contested puck duels, anchoring Davos\' penalty kill.',
    telemetryEvidence: 'Wisehockey Battle Aggregation: Player #20 FORA, Battles Won: 16, Lost: 3, Win%: 84.2%.',
  },
];
