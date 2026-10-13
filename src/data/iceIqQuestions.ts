import { IceIqQuizQuestion } from '../types/gamification';

export const iceIqQuizQuestions: IceIqQuizQuestion[] = [
  {
    id: 'q-1-top-speed',
    category: 'SPEED',
    difficulty: 'Rookie',
    prompt:
      'Which HC Davos forward recorded the fastest top speed in the official player stats at 35.4 km/h while firing 10 shots?',
    promptDe:
      'Welcher Stürmer des HC Davos erreichte in der offiziellen Spielerstatistik den Top-Wert von 35.4 km/h und gab 10 Schüsse ab?',
    contextText:
      'Wisehockey optical tracking records every skater at 20 updates per second across the Eisstadion Davos ice sheet.',
    contextDe:
      'Das optische Wisehockey-Tracking erfasst jeden Spieler mit 20 Messungen pro Sekunde auf dem Eis in Davos.',
    options: [
      {
        id: 'opt-a',
        text: 'Filip Zadina (#18, HC Davos)',
        metricLabel: 'Top Speed · Shots',
        metricLabelDe: 'Top-Tempo · Schüsse',
        metricValue: '35.4 km/h · 10 S',
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: 'Adam Tambellini (#19, HC Davos)',
        metricLabel: 'Top Speed · Shots',
        metricLabelDe: 'Top-Tempo · Schüsse',
        metricValue: '32.8 km/h · 4 S',
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: 'Enzo Corvi (#70, HC Davos)',
        metricLabel: 'Top Speed · Shots',
        metricLabelDe: 'Top-Tempo · Schüsse',
        metricValue: '32.3 km/h · 2 S',
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: 'Calle Andersson (#55, HC Davos)',
        metricLabel: 'Top Speed · Shots',
        metricLabelDe: 'Top-Tempo · Schüsse',
        metricValue: '32.3 km/h · 4 S',
        isCorrect: false,
      },
    ],
    explanation:
      'Filip Zadina (#18) hit 35.4 km/h (tying Brendan Lemieux #22 for the HC Davos team high) while leading all skaters with 10 shots, 1 goal, and 1 assist across 4,406 meters skated.',
    explanationDe:
      'Filip Zadina (#18) erreichte 35.4 km/h (gemeinsam mit Brendan Lemieux #22 der HCD-Bestwert) und führte das Feld mit 10 Schüssen, 1 Tor und 1 Assist über 4,406 Meter Laufdistanz an.',
    telemetryEvidence:
      'Wisehockey Aggregated Stats: #18 Filip Zadina, SPD TOP: 35.4 km/h, S: 10, G: 1, A: 1, Dist: 4,406 m.',
  },
  {
    id: 'q-2-shot-velocity',
    category: 'TACTICS',
    difficulty: 'Pro',
    prompt:
      'During Period 2 (Play Cycle #2 at 13:32), which U.S. Selects defenseman unleashed a 146.0 km/h slapshot just 8 seconds before Jack Musa scored?',
    promptDe:
      'Welcher US-Verteidiger feuerte im 2. Drittel (Zyklus #2 um 13:32) einen 146.0 km/h Schlagschuss ab, nur 8 Sekunden vor dem Tor von Jack Musa?',
    contextText:
      'Wisehockey puck telemetry measures exact shot release velocity and expected goal value (ShotXG) on every attempt.',
    contextDe:
      'Die Wisehockey-Pucktelemetrie misst die exakte Schussgeschwindigkeit und den Expected-Goals-Wert (ShotXG) bei jedem Versuch.',
    options: [
      {
        id: 'opt-a',
        text: 'Eric Pohlkamp (#23, U.S. Selects)',
        metricLabel: 'Cycle #2 Role',
        metricLabelDe: 'Rolle in Zyklus #2',
        metricValue: '24:25 TOI · 5,562 m',
        isCorrect: false,
      },
      {
        id: 'opt-b',
        text: 'Gavin McCarthy (#2, U.S. Selects)',
        metricLabel: 'Shot Speed (13:32 P2)',
        metricLabelDe: 'Schusshärte (13:32 P2)',
        metricValue: '146.0 km/h (40.6 m/s)',
        isCorrect: true,
      },
      {
        id: 'opt-c',
        text: 'Aiden Fink (#18, U.S. Selects)',
        metricLabel: 'Shot Speed (13:25 P2)',
        metricLabelDe: 'Schusshärte (13:25 P2)',
        metricValue: '127.1 km/h (Saved)',
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: 'Quinn Finley (#19, U.S. Selects)',
        metricLabel: 'Shot Speed (13:10 P2)',
        metricLabelDe: 'Schusshärte (13:10 P2)',
        metricValue: '123.5 km/h (Saved)',
        isCorrect: false,
      },
    ],
    explanation:
      'In Period 2 at 13:32, Quinn Finley (#19) passed to Gavin McCarthy (#2) at the point, who blasted a 146.0 km/h slapshot. Eight seconds later at 13:40, Aiden Fink set up Jack Musa (#9) for a 107.0 km/h slot goal (0.256 ShotXG).',
    explanationDe:
      'Im 2. Drittel um 13:32 passte Quinn Finley (#19) an die blaue Linie auf Gavin McCarthy (#2), der mit 146.0 km/h abzog. Acht Sekunden später (13:40) bediente Aiden Fink im Slot Jack Musa (#9) zum 107.0 km/h Treffer (0.256 ShotXG).',
    telemetryEvidence:
      'Wisehockey Match Events: Period 2, Clock 13:32, #2 Gavin McCarthy, ShotSpeed: 146.0 km/h, Coordinate: (18.0, -1.4).',
  },
  {
    id: 'q-3-distance-workhorse',
    category: 'WORKLOAD',
    difficulty: 'Expert',
    prompt:
      'Who skated the longest total distance of any player in the 31 December 2025 Final, covering 5,595 meters (5.60 km)?',
    promptDe:
      'Welcher Spieler legte im Finale am 31. Dezember 2025 mit 5,595 Metern (5.60 km) die grösste Gesamtdistanz zurück?',
    contextText:
      'Total distance aggregates every stride across 5v5, powerplay, and penalty kill shifts.',
    contextDe:
      'Die Gesamtdistanz summiert jeden Schritt über alle Fünf-gegen-Fünf-, Powerplay- und Unterzahl-Shifts.',
    options: [
      {
        id: 'opt-a',
        text: 'Jake Livanavage (#4, U.S. Selects)',
        metricLabel: 'Distance Skated',
        metricLabelDe: 'Laufdistanz',
        metricValue: '5,595 m (22:47 TOI)',
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: 'Eric Pohlkamp (#23, U.S. Selects)',
        metricLabel: 'Distance Skated',
        metricLabelDe: 'Laufdistanz',
        metricValue: '5,562 m (24:25 TOI)',
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: 'Lukas Frick (#38, HC Davos)',
        metricLabel: 'Distance Skated',
        metricLabelDe: 'Laufdistanz',
        metricValue: '4,957 m (21:33 TOI)',
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: 'Calle Andersson (#55, HC Davos)',
        metricLabel: 'Distance Skated',
        metricLabelDe: 'Laufdistanz',
        metricValue: '4,502 m (19:08 TOI)',
        isCorrect: false,
      },
    ],
    explanation:
      'U.S. Selects defenseman Jake Livanavage (#4) covered 5,595 meters across 26 shifts (22:47 TOI), narrowly edging teammate Eric Pohlkamp (#23 at 5,562 m) and HC Davos leader Lukas Frick (#38 at 4,957 m).',
    explanationDe:
      'US-Verteidiger Jake Livanavage (#4) spulte in 26 Shifts (22:47 TOI) stolze 5,595 Meter ab und lag damit knapp vor Teamkollege Eric Pohlkamp (#23 mit 5,562 m) und HCD-Leader Lukas Frick (#38 mit 4,957 m).',
    telemetryEvidence:
      'Wisehockey Aggregated Stats: #4 Jake Livanavage, Dist (m): 5,595, TOI: 1,367s, Shifts: 26, SPD TOP: 34.0 km/h.',
  },
  {
    id: 'q-4-battle-wins',
    category: 'DEFENSE',
    difficulty: 'Pro',
    prompt:
      'Which HC Davos player posted an 83.3% puck control win rate (PCW-%) while also reaching 35.4 km/h top speed?',
    promptDe:
      'Welcher Spieler des HC Davos gewann 83.3% seiner Puck-Zweikämpfe (PCW-%) und erreichte zugleich 35.4 km/h Top-Speed?',
    contextText:
      'Wisehockey PCW-% tracks contested loose-puck battles won along the boards and in the slot.',
    contextDe:
      'Wisehockey PCW-% misst gewonnene Zweikämpfe um freie Scheiben an der Bande und im Slot.',
    options: [
      {
        id: 'opt-a',
        text: 'Brendan Lemieux (#22, HC Davos)',
        metricLabel: 'Battle Win % · Speed',
        metricLabelDe: 'Zweikampf · Tempo',
        metricValue: '83.3% PCW · 35.4 km/h',
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: 'Adam Tambellini (#19, HC Davos)',
        metricLabel: 'Battle Win % · Speed',
        metricLabelDe: 'Zweikampf · Tempo',
        metricValue: '75.0% PCW · 32.8 km/h',
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: 'Klas Dahlbeck (#6, HC Davos)',
        metricLabel: 'Battle Win % · Blocks',
        metricLabelDe: 'Zweikampf · Blocks',
        metricValue: '70.0% PCW · 4 BKS',
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: 'Rasmus Asplund (#74, HC Davos)',
        metricLabel: 'Battle Win % · Speed',
        metricLabelDe: 'Zweikampf · Tempo',
        metricValue: '66.7% PCW · 32.1 km/h',
        isCorrect: false,
      },
    ],
    explanation:
      'Brendan Lemieux (#22) combined physical board dominance (83.3% PCW-%) with elite transition speed (35.4 km/h) and 0.40 expected goals across 20 shifts.',
    explanationDe:
      'Brendan Lemieux (#22) kombinierte physische Präsenz an der Bande (83.3% PCW-%) mit explosivem Tempo (35.4 km/h) und 0.40 Expected Goals in 20 Shifts.',
    telemetryEvidence:
      'Wisehockey Aggregated Stats: #22 Brendan Lemieux, PCW-%: 83.3%, SPD TOP: 35.4 km/h, xGsum: 0.40, TOI: 872s.',
  },
  {
    id: 'q-5-playmaking-maestro',
    category: 'TACTICS',
    difficulty: 'Rookie',
    prompt:
      'Which HC Davos playmaker delivered a 95.0% pass completion rate while tallying 1 goal and 2 assists (3 points)?',
    promptDe:
      'Welcher HCD-Spielmacher glänzte mit 95.0% Passquote und verbuchte gleichzeitig 1 Tor und 2 Assists (3 Punkte)?',
    contextText:
      'Pass-% measures completed tape-to-tape passes divided by total pass attempts tracked by optical sensors.',
    contextDe:
      'Pass-% misst erfolgreiche Pässe im Verhältnis zu allen optisch erfassten Passversuchen.',
    options: [
      {
        id: 'opt-a',
        text: 'Enzo Corvi (#70, HC Davos)',
        metricLabel: 'Pass % · Points',
        metricLabelDe: 'Passquote · Punkte',
        metricValue: '95.0% Pass · 1G, 2A (3P)',
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: 'Ryan Walsh (#21, U.S. Selects)',
        metricLabel: 'Pass % · Points',
        metricLabelDe: 'Passquote · Punkte',
        metricValue: '90.9% Pass · 1G, 1A (2P)',
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: 'Simon Ryfors (#15, HC Davos)',
        metricLabel: 'Pass % · Points',
        metricLabelDe: 'Passquote · Punkte',
        metricValue: '80.0% Pass · 0G, 1A (1P)',
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: 'Matej Stransky (#44, HC Davos)',
        metricLabel: 'Pass % · Points',
        metricLabelDe: 'Passquote · Punkte',
        metricValue: '81.5% Pass · 1G, 0A (1P)',
        isCorrect: false,
      },
    ],
    explanation:
      'Enzo Corvi (#70) was surgical in the 6-3 Championship victory, completing 95.0% of his passes while recording 1 goal, 2 assists, and a +2 rating in 25 shifts.',
    explanationDe:
      'Enzo Corvi (#70) dirigierte das 6:3-Finalspiel mit chirurgischer Präzision: 95.0% Passquote, 1 Tor, 2 Assists und eine +2-Bilanz in 25 Shifts.',
    telemetryEvidence:
      'Wisehockey Aggregated Stats: #70 Enzo Corvi, Pass-%: 95.0%, G: 1, A: 2, P: 3, +/-: +2, TOI: 946s.',
  },
  {
    id: 'q-6-powerplay-counter',
    category: 'SPEED',
    difficulty: 'Expert',
    prompt:
      'In Period 3 (Play Cycle #3 at 17:17), which U.S. Selects penalty killer hit 35.6 km/h on a shorthanded rush 30 seconds before Matej Stransky scored?',
    promptDe:
      'Welcher US-Unterzahlspieler sprintete im 3. Drittel (Zyklus #3 um 17:17) mit 35.6 km/h nach vorn, 30 Sekunden vor Matej Stranskys Powerplay-Tor?',
    contextText:
      'Event-level velocity vectors capture instantaneous m/s speed at the exact moment of each pass or zone entry.',
    contextDe:
      'Die Event-Geschwindigkeitsvektoren erfassen das exakte Tempo in m/s im Moment jedes Passes oder Zoneneintritts.',
    options: [
      {
        id: 'opt-a',
        text: 'Eric Pohlkamp (#23, U.S. Selects)',
        metricLabel: 'Event Velocity (17:17 P3)',
        metricLabelDe: 'Event-Tempo (17:17 P3)',
        metricValue: '35.6 km/h (9.90 m/s)',
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: 'T.J. Hughes (#13, U.S. Selects)',
        metricLabel: 'Event Velocity (17:13 P3)',
        metricLabelDe: 'Event-Tempo (17:13 P3)',
        metricValue: '24.0 km/h (6.67 m/s)',
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: 'Klas Dahlbeck (#6, HC Davos)',
        metricLabel: 'Assist Pass (17:44 P3)',
        metricLabelDe: 'Assist-Pass (17:44 P3)',
        metricValue: '23.5 km/h · 67.0 km/h Pass',
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: 'Tino Kessler (#72, HC Davos)',
        metricLabel: 'Event Velocity (17:47 P3)',
        metricLabelDe: 'Event-Tempo (17:47 P3)',
        metricValue: '23.3 km/h (6.47 m/s)',
        isCorrect: false,
      },
    ],
    explanation:
      'At 17:17 of Period 3, defenseman Eric Pohlkamp (#23) surged up ice at 9.90 m/s (35.6 km/h) alongside Quinn Finley (34.8 km/h). HC Davos weathered the shorthanded rush and countered through Filip Zadina (#18) and Klas Dahlbeck (#6) to set up Matej Stransky (#44) at 17:47!',
    explanationDe:
      'Um 17:17 im 3. Drittel stürmte Verteidiger Eric Pohlkamp (#23) mit 9.90 m/s (35.6 km/h) gemeinsam mit Quinn Finley (34.8 km/h) nach vorn. Der HC Davos fing den Konter ab und schlug über Filip Zadina (#18) und Klas Dahlbeck (#6) zum Powerplay-Tor von Matej Stransky (#44) um 17:47 zurück!',
    telemetryEvidence:
      'Wisehockey Match Events: Period 3, Clock 17:17, StartPlayerVelocity #23 Eric Pohlkamp: 9.901 m/s (35.6 km/h).',
  },
];
