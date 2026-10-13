import { DecisiveMoment } from '../types/wisehockey';

export const mockDecisiveMoments: DecisiveMoment[] = [
  {
    id: 'cycle-1-tambellini-goal',
    period: 1,
    gameClock: '14:49',
    realCycleWindow: '13:25 to 14:49 · 128 Wisehockey Events',
    eventsCount: 128,
    teamStrength: '5v5 Full Strength',
    title: 'Tambellini Even-Strength Laser Goal',
    eventType: 'GOAL',
    primaryTeamId: 'HCD',
    primaryPlayerName: 'Adam Tambellini',
    headlineMetric: '100.1 km/h Release · 0.122 xG',
    curiosityPromptEn:
      'How did HC Davos turn a blocked shot and a 90.4 km/h stretch pass by Nico Gross into a 100.1 km/h Adam Tambellini goal?',
    curiosityPromptDe:
      'Wie verwandelte der HC Davos einen geblockten Schuss und einen 90.4 km/h Aufbaupass von Nico Gross in ein 100.1 km/h Tor von Adam Tambellini?',
    fanStoryInsight:
      'Official Play Cycle #1 (128 Events): The sequence began at 13:25 with Valentin Nussbaumer (#66) winning the center faceoff. After Adam Gajan (#30) and the USA defense blocked an early shot at 13:57, Nico Gross (#77) and Lukas Frick (#38) connected on a 25.1 m/s (90.4 km/h) breakout pass across the blue line, setting up Adam Tambellini (#19) in the slot for a 100.1 km/h wrist shot goal at 14:48.',
    fanStoryInsightDe:
      'Offizielle Spielsequenz #1 (128 Events): Die Sequenz begann um 13:25 mit dem Bullygewinn von Valentin Nussbaumer (#66). Nach einem geblockten Schuss um 13:57 eröffneten Nico Gross (#77) und Lukas Frick (#38) mit einem 25.1 m/s (90.4 km/h) Aufbaupass über die blaue Linie, bevor Adam Tambellini (#19) aus dem Slot mit 100.1 km/h zum 14:48 traf.',
    proAnalystInsight:
      'Wisehockey Cycle #1 (Full Strength 5v5, 128 telemetry rows, 805s to 889s). Key turning point at 14:40: Nico Gross (#77) delivered a 25.1 m/s pass to Lukas Frick (#38), who maintained zone entry possession at 14:43. Tambellini (#19) released from coordinate (-20.4, -0.5) at 100.1 km/h (0.122 ShotXG) beating Adam Gajan (#30).',
    proAnalystInsightDe:
      'Wisehockey Zyklus #1 (5v5 Vollbestand, 128 Telemetrie-Zeilen, 805s bis 889s). Wendepunkt um 14:40: Nico Gross (#77) spielte einen 25.1 m/s Pass auf Lukas Frick (#38) mit kontrolliertem Zoneneintritt um 14:43. Tambellini (#19) feuerte von Koordinate (-20.4, -0.5) mit 100.1 km/h (0.122 ShotXG) an Adam Gajan (#30) vorbei.',
    durationSeconds: 8,
    topSpeedKmh: 32.8,
    puckVelocityKmh: 100.1,
    expectedGoalDelta: 0.122,
    momentumTimeline: [
      { timeSec: 0.0, matchClock: '13:25', value: 45, dominantTeam: 'HCD', badge: '#66 Nussbaumer Faceoff Win' },
      { timeSec: 0.9, matchClock: '13:35', value: -42, dominantTeam: 'USA', badge: '#22 Knuble Zone Dump-In' },
      { timeSec: 1.8, matchClock: '13:43', value: 52, dominantTeam: 'HCD', badge: '#66 Nussbaumer Zone Entry' },
      { timeSec: 2.7, matchClock: '13:57', value: -58, dominantTeam: 'USA', badge: 'USA Shot Block (#30 Gajan)' },
      { timeSec: 3.6, matchClock: '14:03', value: -64, dominantTeam: 'USA', badge: '#19 Finley to #18 Fink Rush' },
      { timeSec: 4.5, matchClock: '14:16', value: 55, dominantTeam: 'HCD', badge: '#6 Dahlbeck Breakout Pass' },
      { timeSec: 5.4, matchClock: '14:30', value: -48, dominantTeam: 'USA', badge: '#23 Pohlkamp Neutral Steal' },
      { timeSec: 6.3, matchClock: '14:40', value: 78, dominantTeam: 'HCD', badge: '#77 Gross 90.4 km/h Pass' },
      { timeSec: 7.2, matchClock: '14:45', value: 88, dominantTeam: 'HCD', badge: '#38 Frick Zone Entry' },
      { timeSec: 8.0, matchClock: '14:49', value: 100, dominantTeam: 'HCD', badge: 'GOAL #19 Tambellini (100.1 km/h)' },
    ],
    puckTrajectory: [
      { timeSec: 0.0, x: 50, y: 50, speedKmh: 44.0 },
      { timeSec: 1.6, x: 38, y: 68, speedKmh: 62.0 },
      { timeSec: 3.2, x: 54, y: 34, speedKmh: 90.4 }, // Nico Gross 25.1 m/s pass
      { timeSec: 4.8, x: 72, y: 42, speedKmh: 68.0 }, // Lukas Frick zone entry
      { timeSec: 6.4, x: 84, y: 49, speedKmh: 100.1 }, // Tambellini release
      { timeSec: 8.0, x: 94, y: 50, speedKmh: 0.0 },   // Goal!
    ],
    skaters: [
      {
        playerId: 'hcd-19',
        name: 'Adam Tambellini',
        teamId: 'HCD',
        jerseyNumber: 19,
        position: 'LW',
        isKeyPlaymaker: true,
        trajectory: [
          { timeSec: 0.0, x: 46, y: 42, speedKmh: 21.0 },
          { timeSec: 2.0, x: 58, y: 40, speedKmh: 28.4 },
          { timeSec: 4.0, x: 72, y: 45, speedKmh: 32.8 },
          { timeSec: 6.4, x: 84, y: 49, speedKmh: 29.5 },
          { timeSec: 8.0, x: 88, y: 50, speedKmh: 18.0 },
        ],
      },
      {
        playerId: 'hcd-38',
        name: 'Lukas Frick',
        teamId: 'HCD',
        jerseyNumber: 38,
        position: 'RD',
        isKeyPlaymaker: true,
        trajectory: [
          { timeSec: 0.0, x: 34, y: 62, speedKmh: 19.5 },
          { timeSec: 2.0, x: 48, y: 55, speedKmh: 27.2 },
          { timeSec: 4.0, x: 66, y: 44, speedKmh: 30.8 },
          { timeSec: 6.4, x: 78, y: 42, speedKmh: 25.4 },
          { timeSec: 8.0, x: 83, y: 46, speedKmh: 16.0 },
        ],
      },
      {
        playerId: 'hcd-70',
        name: 'Enzo Corvi',
        teamId: 'HCD',
        jerseyNumber: 70,
        position: 'C',
        isKeyPlaymaker: true,
        trajectory: [
          { timeSec: 0.0, x: 50, y: 50, speedKmh: 18.0 },
          { timeSec: 2.0, x: 55, y: 32, speedKmh: 29.0 },
          { timeSec: 4.0, x: 68, y: 26, speedKmh: 32.3 },
          { timeSec: 6.4, x: 76, y: 30, speedKmh: 26.0 },
          { timeSec: 8.0, x: 80, y: 34, speedKmh: 15.0 },
        ],
      },
      {
        playerId: 'usa-23',
        name: 'Eric Pohlkamp',
        teamId: 'USA',
        jerseyNumber: 23,
        position: 'LD',
        isKeyPlaymaker: true,
        trajectory: [
          { timeSec: 0.0, x: 62, y: 46, speedKmh: 18.0 },
          { timeSec: 2.0, x: 70, y: 44, speedKmh: 26.5 },
          { timeSec: 4.0, x: 78, y: 47, speedKmh: 31.4 },
          { timeSec: 6.4, x: 85, y: 48, speedKmh: 27.0 },
          { timeSec: 8.0, x: 86, y: 49, speedKmh: 14.0 },
        ],
      },
      // Additional on-ice skaters from StartPlayer1..12 (illuminated in Pro Analyst Lens)
      {
        playerId: 'hcd-93',
        name: 'Yannick Frehner',
        teamId: 'HCD',
        jerseyNumber: 93,
        position: 'RW',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 48, y: 68, speedKmh: 17.0 },
          { timeSec: 4.0, x: 70, y: 64, speedKmh: 28.5 },
          { timeSec: 8.0, x: 85, y: 62, speedKmh: 19.0 },
        ],
      },
      {
        playerId: 'hcd-57',
        name: 'Davyd Barandun',
        teamId: 'HCD',
        jerseyNumber: 57,
        position: 'LD',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 30, y: 36, speedKmh: 15.0 },
          { timeSec: 4.0, x: 52, y: 48, speedKmh: 24.0 },
          { timeSec: 8.0, x: 62, y: 52, speedKmh: 16.0 },
        ],
      },
      {
        playerId: 'usa-25',
        name: 'Abram Wiebe',
        teamId: 'USA',
        jerseyNumber: 25,
        position: 'RD',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 64, y: 58, speedKmh: 16.5 },
          { timeSec: 4.0, x: 76, y: 55, speedKmh: 25.0 },
          { timeSec: 8.0, x: 84, y: 54, speedKmh: 15.0 },
        ],
      },
      {
        playerId: 'usa-13',
        name: 'T.J. Hughes',
        teamId: 'USA',
        jerseyNumber: 13,
        position: 'C',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 52, y: 52, speedKmh: 19.0 },
          { timeSec: 4.0, x: 68, y: 66, speedKmh: 29.2 },
          { timeSec: 8.0, x: 77, y: 74, speedKmh: 20.0 },
        ],
      },
      {
        playerId: 'usa-14',
        name: 'Matt DiMarsico',
        teamId: 'USA',
        jerseyNumber: 14,
        position: 'LW',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 56, y: 30, speedKmh: 18.0 },
          { timeSec: 4.0, x: 74, y: 36, speedKmh: 26.8 },
          { timeSec: 8.0, x: 84, y: 39, speedKmh: 17.5 },
        ],
      },
      {
        playerId: 'usa-86',
        name: 'JJ Wiebusch',
        teamId: 'USA',
        jerseyNumber: 86,
        position: 'RW',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 54, y: 72, speedKmh: 17.5 },
          { timeSec: 4.0, x: 60, y: 30, speedKmh: 25.4 },
          { timeSec: 8.0, x: 62, y: 26, speedKmh: 16.2 },
        ],
      },
    ],
  },
  {
    id: 'cycle-2-musa-goal',
    period: 2,
    gameClock: '13:42',
    realCycleWindow: '12:44 to 13:42 · 75 Wisehockey Events',
    eventsCount: 75,
    teamStrength: '5v5 Full Strength',
    title: 'Jack Musa High-Danger Slot Goal (USA Siege)',
    eventType: 'GOAL',
    primaryTeamId: 'USA',
    primaryPlayerName: 'Jack Musa',
    headlineMetric: '146.0 km/h Blast · 0.256 xG',
    curiosityPromptEn:
      'How did Team USA bombard Sandro Aeschlimann with 4 shots up to 146.0 km/h in 30 seconds before Jack Musa converted a 25.6% xG slot pass?',
    curiosityPromptDe:
      'Wie feuerte Team USA in 30 Sekunden 4 Schüsse bis zu 146.0 km/h auf Sandro Aeschlimann ab, bevor Jack Musa einen 25.6% xG Slot-Pass verwandelte?',
    fanStoryInsight:
      'Official Play Cycle #2 (75 Events): After Quinn Finley (#19) entered the zone at 32.8 km/h and tested Sandro Aeschlimann (#29) at 123.5 km/h (13:10), Aiden Fink (#18) fired a 127.1 km/h shot (13:25) and defenseman Gavin McCarthy (#2) unleashed a match-high 146.0 km/h slapshot from the blue line (13:32). Eight seconds later, Fink threaded a 16.7 m/s pass from behind the goal line to Jack Musa (#9), who buried a 107.0 km/h slot shot (0.256 xG) at 13:40!',
    fanStoryInsightDe:
      'Offizielle Spielsequenz #2 (75 Events): Nachdem Quinn Finley (#19) mit 32.8 km/h in die Zone stürmte und mit 123.5 km/h abschloss (13:10), feuerten Aiden Fink (#18) mit 127.1 km/h (13:25) und Verteidiger Gavin McCarthy (#2) mit dem Match-Rekord von 146.0 km/h (13:32). Acht Sekunden später bediente Fink von hinter der Torlinie Jack Musa (#9), der aus dem Slot mit 107.0 km/h (0.256 xG) traf!',
    proAnalystInsight:
      'Wisehockey Cycle #2 (Full Strength 5v5, 75 telemetry rows, 764s to 822s). Sustained USA offensive zone siege lasting 36 seconds: 4 shots in 30s (Finley 123.5 km/h saved, Fink 127.1 km/h saved, McCarthy 146.0 km/h missed, Musa 107.0 km/h Goal). Final pass by #18 Aiden Fink (16.7 m/s) created a 0.256 ShotXG high-danger slot finish for #9 Jack Musa at (23.6, -2.1).',
    proAnalystInsightDe:
      'Wisehockey Zyklus #2 (5v5 Vollbestand, 75 Telemetrie-Zeilen, 764s bis 822s). 36 Sekunden Dauerdruck der USA: 4 Schüsse in 30s (Finley 123.5 km/h gehalten, Fink 127.1 km/h gehalten, McCarthy 146.0 km/h vorbei, Musa 107.0 km/h Tor). Der Pass von #18 Aiden Fink (16.7 m/s) erzeugte einen 0.256 ShotXG Abschluss für #9 Jack Musa bei (23.6, -2.1).',
    durationSeconds: 8,
    topSpeedKmh: 32.8,
    puckVelocityKmh: 146.0,
    expectedGoalDelta: 0.256,
    momentumTimeline: [
      { timeSec: 0.0, matchClock: '12:44', value: 58, dominantTeam: 'HCD', badge: '#70 Corvi Faceoff Win' },
      { timeSec: 0.9, matchClock: '12:48', value: 64, dominantTeam: 'HCD', badge: '#38 Frick Zone Entry' },
      { timeSec: 1.8, matchClock: '12:55', value: 48, dominantTeam: 'HCD', badge: '#55 Borgman Cycle' },
      { timeSec: 2.7, matchClock: '13:06', value: -55, dominantTeam: 'USA', badge: '#13 Hughes Breakout' },
      { timeSec: 3.6, matchClock: '13:10', value: -74, dominantTeam: 'USA', badge: '#19 Finley 123.5 km/h Shot' },
      { timeSec: 4.5, matchClock: '13:18', value: 42, dominantTeam: 'HCD', badge: '#77 Gross Contest' },
      { timeSec: 5.4, matchClock: '13:25', value: -82, dominantTeam: 'USA', badge: '#18 Fink 127.1 km/h Shot' },
      { timeSec: 6.3, matchClock: '13:32', value: -94, dominantTeam: 'USA', badge: '#2 McCarthy 146.0 km/h Blast' },
      { timeSec: 7.2, matchClock: '13:40', value: -96, dominantTeam: 'USA', badge: '#18 Fink Slot Feed' },
      { timeSec: 8.0, matchClock: '13:42', value: -100, dominantTeam: 'USA', badge: 'GOAL #9 Jack Musa (0.256 xG)' },
    ],
    puckTrajectory: [
      { timeSec: 0.0, x: 52, y: 36, speedKmh: 74.9 }, // T.J. Hughes to Quinn Finley zone entry
      { timeSec: 1.8, x: 78, y: 28, speedKmh: 127.1 }, // Aiden Fink 127.1 km/h shot saved
      { timeSec: 3.6, x: 72, y: 46, speedKmh: 146.0 }, // Gavin McCarthy 146.0 km/h slapshot
      { timeSec: 5.4, x: 92, y: 62, speedKmh: 60.1 },  // Fink behind-the-net 16.7 m/s pass
      { timeSec: 6.8, x: 86, y: 44, speedKmh: 107.0 }, // Jack Musa 107.0 km/h slot shot
      { timeSec: 8.0, x: 94, y: 50, speedKmh: 0.0 },   // Goal!
    ],
    skaters: [
      {
        playerId: 'usa-9',
        name: 'Jack Musa',
        teamId: 'USA',
        jerseyNumber: 9,
        position: 'LW',
        isKeyPlaymaker: true,
        trajectory: [
          { timeSec: 0.0, x: 50, y: 42, speedKmh: 24.0 },
          { timeSec: 2.0, x: 70, y: 38, speedKmh: 30.8 },
          { timeSec: 4.0, x: 80, y: 42, speedKmh: 26.5 },
          { timeSec: 6.8, x: 86, y: 44, speedKmh: 22.0 },
          { timeSec: 8.0, x: 89, y: 46, speedKmh: 14.0 },
        ],
      },
      {
        playerId: 'usa-18',
        name: 'Aiden Fink',
        teamId: 'USA',
        jerseyNumber: 18,
        position: 'RW',
        isKeyPlaymaker: true,
        trajectory: [
          { timeSec: 0.0, x: 58, y: 28, speedKmh: 25.0 },
          { timeSec: 2.0, x: 78, y: 28, speedKmh: 31.3 },
          { timeSec: 4.0, x: 88, y: 58, speedKmh: 28.0 },
          { timeSec: 6.8, x: 92, y: 60, speedKmh: 21.0 },
          { timeSec: 8.0, x: 93, y: 58, speedKmh: 12.0 },
        ],
      },
      {
        playerId: 'usa-2',
        name: 'Gavin McCarthy',
        teamId: 'USA',
        jerseyNumber: 2,
        position: 'RD',
        isKeyPlaymaker: true,
        trajectory: [
          { timeSec: 0.0, x: 46, y: 48, speedKmh: 20.0 },
          { timeSec: 2.0, x: 66, y: 45, speedKmh: 26.0 },
          { timeSec: 3.6, x: 72, y: 46, speedKmh: 24.5 },
          { timeSec: 6.8, x: 78, y: 45, speedKmh: 19.0 },
          { timeSec: 8.0, x: 80, y: 45, speedKmh: 14.0 },
        ],
      },
      {
        playerId: 'hcd-70',
        name: 'Enzo Corvi',
        teamId: 'HCD',
        jerseyNumber: 70,
        position: 'C',
        isKeyPlaymaker: true,
        trajectory: [
          { timeSec: 0.0, x: 56, y: 48, speedKmh: 22.0 },
          { timeSec: 2.0, x: 74, y: 46, speedKmh: 31.1 },
          { timeSec: 4.0, x: 82, y: 50, speedKmh: 25.0 },
          { timeSec: 6.8, x: 84, y: 51, speedKmh: 20.0 },
          { timeSec: 8.0, x: 85, y: 51, speedKmh: 12.0 },
        ],
      },
      // Additional on-ice skaters from StartPlayer1..12 (illuminated in Pro Analyst Lens)
      {
        playerId: 'usa-13',
        name: 'T.J. Hughes',
        teamId: 'USA',
        jerseyNumber: 13,
        position: 'C',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 54, y: 68, speedKmh: 22.0 },
          { timeSec: 4.0, x: 84, y: 82, speedKmh: 28.4 },
          { timeSec: 8.0, x: 90, y: 86, speedKmh: 18.0 },
        ],
      },
      {
        playerId: 'usa-17',
        name: 'Larry Keenan',
        teamId: 'USA',
        jerseyNumber: 17,
        position: 'LD',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 44, y: 74, speedKmh: 18.0 },
          { timeSec: 4.0, x: 64, y: 78, speedKmh: 24.2 },
          { timeSec: 8.0, x: 66, y: 80, speedKmh: 15.0 },
        ],
      },
      {
        playerId: 'hcd-19',
        name: 'Adam Tambellini',
        teamId: 'HCD',
        jerseyNumber: 19,
        position: 'LW',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 60, y: 60, speedKmh: 20.0 },
          { timeSec: 4.0, x: 78, y: 62, speedKmh: 26.0 },
          { timeSec: 8.0, x: 81, y: 64, speedKmh: 16.0 },
        ],
      },
      {
        playerId: 'hcd-38',
        name: 'Lukas Frick',
        teamId: 'HCD',
        jerseyNumber: 38,
        position: 'RD',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 68, y: 72, speedKmh: 19.0 },
          { timeSec: 4.0, x: 88, y: 78, speedKmh: 25.5 },
          { timeSec: 8.0, x: 92, y: 80, speedKmh: 15.0 },
        ],
      },
      {
        playerId: 'hcd-57',
        name: 'Davyd Barandun',
        teamId: 'HCD',
        jerseyNumber: 57,
        position: 'LD',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 70, y: 54, speedKmh: 17.5 },
          { timeSec: 4.0, x: 88, y: 58, speedKmh: 23.0 },
          { timeSec: 8.0, x: 91, y: 60, speedKmh: 14.0 },
        ],
      },
      {
        playerId: 'hcd-47',
        name: 'Leonid Komarov',
        teamId: 'HCD',
        jerseyNumber: 47,
        position: 'RW',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 64, y: 52, speedKmh: 18.0 },
          { timeSec: 4.0, x: 84, y: 58, speedKmh: 24.8 },
          { timeSec: 8.0, x: 87, y: 61, speedKmh: 15.0 },
        ],
      },
    ],
  },
  {
    id: 'cycle-3-stransky-pp-goal',
    period: 3,
    gameClock: '17:49',
    realCycleWindow: '16:48 to 17:49 · 81 Wisehockey Events',
    eventsCount: 81,
    teamStrength: '5v4 Powerplay',
    title: 'Stransky 5v4 Powerplay Championship Dagger',
    eventType: 'GOAL',
    primaryTeamId: 'HCD',
    primaryPlayerName: 'Matej Stransky',
    headlineMetric: '35.6 km/h Rush · 67.0 km/h Pass',
    curiosityPromptEn:
      'How did HC Davos survive a 35.6 km/h shorthanded burst by Eric Pohlkamp and counter with a Zadina-Dahlbeck-Stransky powerplay goal in 30 seconds?',
    curiosityPromptDe:
      'Wie überstand der HC Davos einen 35.6 km/h Unterzahl-Konter von Eric Pohlkamp und konterte in 30 Sekunden mit dem Zadina-Dahlbeck-Stransky Powerplay-Tor?',
    fanStoryInsight:
      'Official Play Cycle #3 (81 Events, 5v4 Powerplay): At 17:16, USA penalty killers Eric Pohlkamp (#23) and Quinn Finley (#19) exploded on a shorthanded counter-rush hitting 35.6 km/h and 34.8 km/h! After Jake Livanavage (#4) cleared the puck at 17:29, Filip Zadina (#18) re-entered the zone at 17:35, worked a give-and-go with Klas Dahlbeck (#6) at the point, and Dahlbeck fired a 67.0 km/h (18.6 m/s) diagonal seam pass to Matej Stransky (#44) for the back-door powerplay goal at 17:47!',
    fanStoryInsightDe:
      'Offizielle Spielsequenz #3 (81 Events, 5v4 Powerplay): Um 17:16 sprinteten die USA-Unterzahlspieler Eric Pohlkamp (#23) und Quinn Finley (#19) mit 35.6 km/h und 34.8 km/h zu einem Shorthander-Konter! Nach der Befreiung von Jake Livanavage (#4) um 17:29 trug Filip Zadina (#18) die Scheibe um 17:35 zurück in die Zone, kombinierte mit Klas Dahlbeck (#6) an der blauen Linie, und Dahlbeck bediente Matej Stransky (#44) mit einem 67.0 km/h (18.6 m/s) Querpass zum Powerplay-Tor um 17:47!',
    proAnalystInsight:
      'Wisehockey Cycle #3 (Away Powerplay 5v4, 81 telemetry rows, 1008s to 1069s). Peak match telemetry velocity recorded at 17:17: #23 Eric Pohlkamp at 9.90 m/s (35.6 km/h) and #19 Quinn Finley at 9.67 m/s (34.8 km/h). At 17:35 #18 Filip Zadina regained the offensive zone, exchanging passes with #6 Klas Dahlbeck (7.3 m/s and 12.6 m/s) before Dahlbeck threaded an 18.6 m/s (67.0 km/h) cross-seam assist to #44 Matej Stransky at the back post (17:47 Goal).',
    proAnalystInsightDe:
      'Wisehockey Zyklus #3 (5v4 Powerplay, 81 Telemetrie-Zeilen, 1008s bis 1069s). Höchste gemessene Sequenz-Geschwindigkeit um 17:17: #23 Eric Pohlkamp mit 9.90 m/s (35.6 km/h) und #19 Quinn Finley mit 9.67 m/s (34.8 km/h). Um 17:35 eroberte #18 Filip Zadina die Offensivzone zurück, kombinierte mit #6 Klas Dahlbeck (7.3 m/s und 12.6 m/s), ehe Dahlbeck den 18.6 m/s (67.0 km/h) Diagonalpass auf #44 Matej Stransky am langen Pfosten spielte (17:47 Tor).',
    durationSeconds: 8,
    topSpeedKmh: 35.6,
    puckVelocityKmh: 118.4,
    expectedGoalDelta: 0.68,
    momentumTimeline: [
      { timeSec: 0.0, matchClock: '16:48', value: -52, dominantTeam: 'USA', badge: '#13 Hughes Faceoff' },
      { timeSec: 0.9, matchClock: '16:59', value: 68, dominantTeam: 'HCD', badge: '#38 Frick to #18 Zadina' },
      { timeSec: 1.8, matchClock: '17:08', value: 76, dominantTeam: 'HCD', badge: '#44 Stransky PP Cycle' },
      { timeSec: 2.7, matchClock: '17:16', value: -84, dominantTeam: 'USA', badge: '#23 Pohlkamp 35.6 km/h Rush' },
      { timeSec: 3.6, matchClock: '17:18', value: -76, dominantTeam: 'USA', badge: '#19 Finley 34.8 km/h Burst' },
      { timeSec: 4.5, matchClock: '17:29', value: -62, dominantTeam: 'USA', badge: '#4 Livanavage PK Clear' },
      { timeSec: 5.4, matchClock: '17:35', value: 74, dominantTeam: 'HCD', badge: '#18 Zadina Zone Entry' },
      { timeSec: 6.3, matchClock: '17:38', value: 84, dominantTeam: 'HCD', badge: '#6 Dahlbeck Blue-Line Cycle' },
      { timeSec: 7.2, matchClock: '17:44', value: 94, dominantTeam: 'HCD', badge: '#6 Dahlbeck 67.0 km/h Seam Pass' },
      { timeSec: 8.0, matchClock: '17:49', value: 100, dominantTeam: 'HCD', badge: 'GOAL #44 Matej Stransky' },
    ],
    puckTrajectory: [
      { timeSec: 0.0, x: 32, y: 42, speedKmh: 51.1 },  // USA shorthanded rush disrupted
      { timeSec: 1.8, x: 64, y: 24, speedKmh: 45.4 },  // Filip Zadina controlled zone entry
      { timeSec: 3.6, x: 70, y: 48, speedKmh: 45.4 },  // Zadina to Klas Dahlbeck at blue line
      { timeSec: 5.4, x: 86, y: 28, speedKmh: 67.0 },  // Dahlbeck 18.6 m/s diagonal seam pass
      { timeSec: 6.8, x: 91, y: 46, speedKmh: 118.4 }, // Matej Stransky back-door finish
      { timeSec: 8.0, x: 94, y: 50, speedKmh: 0.0 },   // Goal!
    ],
    skaters: [
      {
        playerId: 'hcd-44',
        name: 'Matej Stransky',
        teamId: 'HCD',
        jerseyNumber: 44,
        position: 'RW',
        isKeyPlaymaker: true,
        trajectory: [
          { timeSec: 0.0, x: 52, y: 26, speedKmh: 22.0 },
          { timeSec: 2.0, x: 72, y: 22, speedKmh: 28.5 },
          { timeSec: 4.0, x: 82, y: 26, speedKmh: 24.0 },
          { timeSec: 6.8, x: 90, y: 44, speedKmh: 21.0 },
          { timeSec: 8.0, x: 91, y: 48, speedKmh: 17.9 },
        ],
      },
      {
        playerId: 'hcd-6',
        name: 'Klas Dahlbeck',
        teamId: 'HCD',
        jerseyNumber: 6,
        position: 'LD',
        isKeyPlaymaker: true,
        trajectory: [
          { timeSec: 0.0, x: 40, y: 52, speedKmh: 19.0 },
          { timeSec: 2.0, x: 62, y: 50, speedKmh: 25.0 },
          { timeSec: 4.0, x: 70, y: 48, speedKmh: 23.5 },
          { timeSec: 6.8, x: 74, y: 47, speedKmh: 18.0 },
          { timeSec: 8.0, x: 76, y: 47, speedKmh: 14.0 },
        ],
      },
      {
        playerId: 'hcd-18',
        name: 'Filip Zadina',
        teamId: 'HCD',
        jerseyNumber: 18,
        position: 'LW',
        isKeyPlaymaker: true,
        trajectory: [
          { timeSec: 0.0, x: 38, y: 34, speedKmh: 28.0 },
          { timeSec: 2.0, x: 64, y: 24, speedKmh: 35.4 },
          { timeSec: 4.0, x: 76, y: 32, speedKmh: 29.0 },
          { timeSec: 6.8, x: 80, y: 36, speedKmh: 22.0 },
          { timeSec: 8.0, x: 82, y: 38, speedKmh: 16.0 },
        ],
      },
      {
        playerId: 'usa-23',
        name: 'Eric Pohlkamp',
        teamId: 'USA',
        jerseyNumber: 23,
        position: 'LD',
        isKeyPlaymaker: true,
        trajectory: [
          { timeSec: 0.0, x: 32, y: 42, speedKmh: 35.6 }, // Peak 35.6 km/h shorthanded burst
          { timeSec: 2.0, x: 54, y: 44, speedKmh: 32.6 },
          { timeSec: 4.0, x: 72, y: 42, speedKmh: 26.0 },
          { timeSec: 6.8, x: 80, y: 42, speedKmh: 19.0 },
          { timeSec: 8.0, x: 82, y: 43, speedKmh: 13.3 },
        ],
      },
      // Additional on-ice skaters from StartPlayer1..12 (illuminated in Pro Analyst Lens)
      {
        playerId: 'hcd-72',
        name: 'Tino Kessler',
        teamId: 'HCD',
        jerseyNumber: 72,
        position: 'F',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 48, y: 58, speedKmh: 20.0 },
          { timeSec: 4.0, x: 76, y: 54, speedKmh: 25.4 },
          { timeSec: 8.0, x: 84, y: 52, speedKmh: 23.3 },
        ],
      },
      {
        playerId: 'hcd-74',
        name: 'Rasmus Asplund',
        teamId: 'HCD',
        jerseyNumber: 74,
        position: 'C',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 46, y: 74, speedKmh: 18.0 },
          { timeSec: 4.0, x: 72, y: 82, speedKmh: 22.0 },
          { timeSec: 8.0, x: 78, y: 86, speedKmh: 12.0 },
        ],
      },
      {
        playerId: 'usa-19',
        name: 'Quinn Finley',
        teamId: 'USA',
        jerseyNumber: 19,
        position: 'LW',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 34, y: 28, speedKmh: 34.8 },
          { timeSec: 4.0, x: 74, y: 24, speedKmh: 28.0 },
          { timeSec: 8.0, x: 84, y: 22, speedKmh: 15.0 },
        ],
      },
      {
        playerId: 'usa-13',
        name: 'T.J. Hughes',
        teamId: 'USA',
        jerseyNumber: 13,
        position: 'C',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 44, y: 38, speedKmh: 22.0 },
          { timeSec: 4.0, x: 76, y: 34, speedKmh: 26.5 },
          { timeSec: 8.0, x: 82, y: 30, speedKmh: 24.0 },
        ],
      },
      {
        playerId: 'usa-18',
        name: 'Aiden Fink',
        teamId: 'USA',
        jerseyNumber: 18,
        position: 'RW',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 50, y: 48, speedKmh: 20.0 },
          { timeSec: 4.0, x: 78, y: 40, speedKmh: 24.0 },
          { timeSec: 8.0, x: 85, y: 36, speedKmh: 14.2 },
        ],
      },
      {
        playerId: 'usa-4',
        name: 'Jake Livanavage',
        teamId: 'USA',
        jerseyNumber: 4,
        position: 'LD',
        isKeyPlaymaker: false,
        trajectory: [
          { timeSec: 0.0, x: 58, y: 64, speedKmh: 32.6 },
          { timeSec: 4.0, x: 82, y: 66, speedKmh: 24.0 },
          { timeSec: 8.0, x: 88, y: 68, speedKmh: 12.0 },
        ],
      },
    ],
  },
];
