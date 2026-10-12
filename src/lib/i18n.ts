export type Language = 'EN' | 'DE';

export interface Translations {
  // Header
  appTitle: string;
  appSubtitle: string;
  fanStoryLens: string;
  proAnalystLens: string;
  fanLevel: string;
  xpPoints: string;
  
  // Navigation Tabs
  tabShiftReplay: string;
  tabShiftReplaySub: string;
  tabShiftFantasy: string;
  tabShiftFantasySub: string;
  tabTacticalBoard: string;
  tabTacticalBoardSub: string;
  tabPlayerDNA: string;
  tabPlayerDNASub: string;
  tabIceIQ: string;
  tabIceIQSub: string;
  tabBroadcast: string;
  tabBroadcastSub: string;

  // Match Banner
  hostClub: string;
  invitedSelection: string;
  finalScore: string;
  shots: string;
  powerplay: string;
  peakSprintSpeed: string;
  hardestSlapshot: string;
  srfViewers: string;
  davosCrowd: string;
  top1PercentSpeed: string;
  gameRecord: string;
  liveTv: string;
  soldOut: string;

  // Fan Companion Banner
  companionTitle: string;
  companionSubtitle: string;
  liveTelemetryActive: string;
  quickAction1Title: string;
  quickAction1Desc: string;
  quickAction2Title: string;
  quickAction2Desc: string;
  quickAction3Title: string;
  quickAction3Desc: string;

  // Predict the Play Mini-Game
  predictionTitle: string;
  predictionSubtitle: string;
  predictionPrompt: string;
  predictionCorrect: string;
  predictionIncorrect: string;
  claimXp: string;

  // Shift Replay / Scrubber
  keyShiftsHeader: string;
  keyShiftsSub: string;
  shift1Title: string;
  shift1Detail: string;
  shift2Title: string;
  shift2Detail: string;
  shift3Title: string;
  shift3Detail: string;
  dragHint: string;
  wisehockeyTracking: string;

  // Event Card
  sequenceBreakdown: string;
  whyShiftFlipped: string;
  wisehockeyBreakdown: string;

  // Shift Fantasy
  intermissionMicroFantasy: string;
  fantasyTitle: string;
  fantasyDesc: string;
  intermissionClock: string;
  timeLeft: string;
  role1Title: string;
  role2Title: string;
  role3Title: string;
  lockInBtn: string;
  simulatingText: string;
  resetLineupBtn: string;
  triadImpact: string;
  liveSimulationTicker: string;

  // Tactical Board
  tacticalBoardTag: string;
  tacticalBoardTitle: string;
  tapToSwap: string;
  calculatedSynergy: string;
  tacticalChemistry: string;
  runSimulationBtn: string;
  changePlayer: string;

  // Player DNA
  primarySkater: string;
  comparisonSkater: string;
  headToHeadTitle: string;
  tacticalIdentity: string;

  // Ice IQ Quiz
  quizTitle: string;
  quizSubtitle: string;
  scoreLabel: string;
  nextQuestion: string;
  finishQuiz: string;

  // Broadcast Hub
  activationTag: string;
  activationTitle: string;
  activationSubtitle: string;
  srfTab: string;
  jumbotronTab: string;
  webTab: string;
}

export const translations: Record<Language, Translations> = {
  EN: {
    appTitle: 'Spengler ShiftIQ',
    appSubtitle: 'Official Wisehockey Live Telemetry',
    fanStoryLens: 'Fan Story Lens',
    proAnalystLens: 'Pro Analyst Lens',
    fanLevel: 'Level',
    xpPoints: 'XP',

    tabShiftReplay: 'Shift Replay',
    tabShiftReplaySub: 'Goal Tracking',
    tabShiftFantasy: 'Shift Fantasy',
    tabShiftFantasySub: 'Intermission Game',
    tabTacticalBoard: 'Tactical Board',
    tabTacticalBoardSub: 'Line Chemistry',
    tabPlayerDNA: 'Player DNA',
    tabPlayerDNASub: 'Head-to-Head',
    tabIceIQ: 'Ice IQ Quiz',
    tabIceIQSub: 'Predict Stats',
    tabBroadcast: 'Broadcast Hub',
    tabBroadcastSub: 'SRF Sync',

    hostClub: 'Host Club',
    invitedSelection: 'Invited National Selection',
    finalScore: 'Final Score',
    shots: 'Shots',
    powerplay: 'Powerplay',
    peakSprintSpeed: 'Peak Sprint Speed',
    hardestSlapshot: 'Hardest Slapshot',
    srfViewers: 'SRF zwei Viewers',
    davosCrowd: 'Davos Arena Crowd',
    top1PercentSpeed: 'Top 1% Speed',
    gameRecord: 'Game Record',
    liveTv: 'Live TV',
    soldOut: '100% Sold Out',

    companionTitle: 'Official Live Fan Companion · Spengler Cup Davos',
    companionSubtitle: 'Real-time 20Hz sensor tracking unlocked from the coach\'s laptop directly to your screen.',
    liveTelemetryActive: 'Live Telemetry Active',
    quickAction1Title: '1. Watch Shift Replay',
    quickAction1Desc: 'Replay the 3 decisive goal sequences with live shot & sprint speed radar.',
    quickAction2Title: '2. Play Shift Fantasy',
    quickAction2Desc: '18-min intermission game: draft 3 skaters and score real-time ice points.',
    quickAction3Title: '3. Build Tactical Lineup',
    quickAction3Desc: 'Test player chemistry on the tactical board and run a 60-second shift simulation.',

    predictionTitle: 'Live Shift Prediction Game',
    predictionSubtitle: 'Guess the Sensor Stat · Earn +50 Fan XP',
    predictionPrompt: 'What was Tambellini\'s exact release speed on this goal?',
    predictionCorrect: 'Spot On! Official Wisehockey Sensor recorded 100.1 km/h. +50 XP Earned!',
    predictionIncorrect: 'Close! The official chip recorded 100.1 km/h bullet release.',
    claimXp: 'Claim +50 XP',

    keyShiftsHeader: 'Key Match Shifts · Choose a Play to Replay',
    keyShiftsSub: 'Tap any of the 3 decisive shifts below to load player positions and track puck movement on the ice sheet:',
    shift1Title: 'Tambellini Even-Strength Goal',
    shift1Detail: 'Nussbaumer faceoff win & rapid 2.4s seam feed',
    shift2Title: 'Jack Musa Collegiate Response Goal',
    shift2Detail: 'Collegiate counter-rush down right flank with 5-hole finish',
    shift3Title: 'Stransky Powerplay Dagger Goal',
    shift3Detail: 'Corvi cross-ice saucer seam pass for one-timer dagger',
    dragHint: 'Drag slider or press Play to inspect player motion trails and puck trajectory.',
    wisehockeyTracking: '20Hz Sensor Interpolation',

    sequenceBreakdown: 'Sequence Breakdown · 6-Second Shift Timeline',
    whyShiftFlipped: 'Why This Shift Flipped The Game',
    wisehockeyBreakdown: 'Wisehockey 20Hz Telemetry Breakdown',

    intermissionMicroFantasy: '18-Minute Intermission Micro-Fantasy',
    fantasyTitle: 'Spengler Shift Fantasy: The 3-Skater Triad',
    fantasyDesc: 'Don\'t just wait for a goal. Draft 3 players for the upcoming period and score fantasy points powered directly by Wisehockey 20Hz sensor chips: skating bursts, puck battle wins, and shot velocity.',
    intermissionClock: 'Intermission Clock',
    timeLeft: 'left',
    role1Title: 'Speed Demon · The Rocket',
    role2Title: 'Heavy Firepower · The Sniper',
    role3Title: 'Defensive Rock · The Anchor',
    lockInBtn: 'Lock In & Simulate Period Shift',
    simulatingText: 'Simulating Wisehockey Stream...',
    resetLineupBtn: 'Reset Lineup',
    triadImpact: 'Calculated Triad Shift Impact',
    liveSimulationTicker: 'Live Period Telemetry Feed',

    tacticalBoardTag: 'Interactive Tactical Board',
    tacticalBoardTitle: 'Tactical Formation & Chemistry Lab',
    tapToSwap: 'Tap Any Player on Ice to Swap',
    calculatedSynergy: 'Calculated Synergy',
    tacticalChemistry: 'Tactical Chemistry',
    runSimulationBtn: 'Run 60s Shift Simulation',
    changePlayer: 'Change Player',

    primarySkater: 'Primary Skater (Player 1)',
    comparisonSkater: 'Comparison Skater (Player 2)',
    headToHeadTitle: 'Head-to-Head Performance Telemetry',
    tacticalIdentity: 'Tactical Identity',

    quizTitle: 'Ice IQ: Match Recall Challenge',
    quizSubtitle: 'Test your tactical memory and intuition against real Wisehockey sensor telemetry.',
    scoreLabel: 'Score',
    nextQuestion: 'Next Question',
    finishQuiz: 'Complete Quiz',

    activationTag: 'Activation & Mediatization Concept',
    activationTitle: 'Bridging Arena, TV Broadcast & Second-Screen Fans',
    activationSubtitle: 'Demonstrating how Spengler ShiftIQ embeds seamlessly across the Spengler Cup digital ecosystem.',
    srfTab: 'SRF TV Broadcast',
    jumbotronTab: 'Eisstadion Jumbotron',
    webTab: 'Match Center Embed',
  },
  DE: {
    appTitle: 'Spengler ShiftIQ',
    appSubtitle: 'Offizielle Wisehockey Live-Telemetrie',
    fanStoryLens: 'Fan Story Modus',
    proAnalystLens: 'Profi-Analyse Modus',
    fanLevel: 'Stufe',
    xpPoints: 'XP',

    tabShiftReplay: 'Shift-Replay',
    tabShiftReplaySub: 'Tor-Analyse',
    tabShiftFantasy: 'Shift-Fantasy',
    tabShiftFantasySub: 'Drittelpause-Spiel',
    tabTacticalBoard: 'Taktik-Board',
    tabTacticalBoardSub: 'Reihen-Chemie',
    tabPlayerDNA: 'Spieler-DNA',
    tabPlayerDNASub: 'Direktvergleich',
    tabIceIQ: 'Ice-IQ Quiz',
    tabIceIQSub: 'Statistik-Tipp',
    tabBroadcast: 'Broadcast-Hub',
    tabBroadcastSub: 'SRF Live-Sync',

    hostClub: 'Gastgeber-Club',
    invitedSelection: 'Eingeladene US-Auswahl',
    finalScore: 'Endstand',
    shots: 'Schüsse',
    powerplay: 'Überzahl',
    peakSprintSpeed: 'Top Sprint-Tempo',
    hardestSlapshot: 'Härtester Schlagschuss',
    srfViewers: 'SRF zwei TV-Quote',
    davosCrowd: 'Zuschauer Eisstadion',
    top1PercentSpeed: 'Top 1% Tempo',
    gameRecord: 'Spiel-Rekord',
    liveTv: 'Live TV',
    soldOut: '100% Ausverkauft',

    companionTitle: 'Offizieller Live Fan-Begleiter · Spengler Cup Davos',
    companionSubtitle: 'Echtzeit-Sensordaten (20Hz) direkt vom Trainer-Laptop auf deinen Bildschirm geholt.',
    liveTelemetryActive: 'Live-Telemetrie Aktiv',
    quickAction1Title: '1. Shift-Replay ansehen',
    quickAction1Desc: 'Die 3 entscheidenden Torszenen mit Schuss- und Sprintradar nacherleben.',
    quickAction2Title: '2. Shift-Fantasy spielen',
    quickAction2Desc: '18-Minuten Drittelpause: Wähle 3 Skater und sammle Live-Punkte durch Sensor-Chips.',
    quickAction3Title: '3. Taktische Aufstellung bauen',
    quickAction3Desc: 'Reihen-Chemie testen und eine 60-Sekunden-Shift-Simulation starten.',

    predictionTitle: 'Live Shift-Tippspiel',
    predictionSubtitle: 'Tippe die Sensor-Zahl · Gewinne +50 Fan-XP',
    predictionPrompt: 'Wie hoch war Tambellinis Schussgeschwindigkeit bei diesem Treffer?',
    predictionCorrect: 'Volltreffer! Der offizielle Wisehockey-Sensor mass 100.1 km/h. +50 XP erhalten!',
    predictionIncorrect: 'Knapp daneben! Der Chip erfasste einen 100.1 km/h Hammer ins Eck.',
    claimXp: '+50 XP einlösen',

    keyShiftsHeader: 'Entscheidende Spiel-Shifts · Wähle eine Szene',
    keyShiftsSub: 'Tippe auf einen der 3 Spielzüge, um Spielerpositionen und Puck-Bahnen auf dem Eis zu laden:',
    shift1Title: 'Tambellini Tor bei Fünf-gegen-Fünf',
    shift1Detail: 'Nussbaumer Bully-Gewinn & präzises 2.4s Zuspiel',
    shift2Title: 'Jack Musa Anschlusstreffer Team USA',
    shift2Detail: 'Schneller Konter über den rechten Flügel mit Fünfloch-Abschluss',
    shift3Title: 'Stransky Powerplay-Siegtreffer',
    shift3Detail: 'Corvi Querpass durch die Box für den Direktschuss-Treffer',
    dragHint: 'Bewege den Schieberegler oder drücke Play, um Laufwege und Puck-Trajektorie zu verfolgen.',
    wisehockeyTracking: '20Hz Sensor-Interpolation',

    sequenceBreakdown: 'Spielzug-Chronik · 6-Sekunden Shift-Zeitstrahl',
    whyShiftFlipped: 'Warum dieser Shift das Spiel entschied',
    wisehockeyBreakdown: 'Wisehockey 20Hz Telemetrie-Aufschlüsselung',

    intermissionMicroFantasy: '18-Minuten Drittelpause Micro-Fantasy',
    fantasyTitle: 'Spengler Shift-Fantasy: Die 3er-Auswahl',
    fantasyDesc: 'Nicht nur auf Tore warten. Wähle 3 Spieler für das nächste Drittel und sammle Fantasy-Punkte direkt durch Wisehockey-Sensoren: Sprints, gewonnene Zweikämpfe und Schusshärte.',
    intermissionClock: 'Drittelpause',
    timeLeft: 'verbleibend',
    role1Title: 'Tempo-Garant · The Rocket',
    role2Title: 'Offensiv-Hammer · The Sniper',
    role3Title: 'Defensiv-Bollwerk · The Anchor',
    lockInBtn: 'Auswahl einloggen & Drittel simulieren',
    simulatingText: 'Wisehockey Live-Stream wird simuliert...',
    resetLineupBtn: 'Aufstellung zurücksetzen',
    triadImpact: 'Berechneter Shift-Einfluss',
    liveSimulationTicker: 'Live Drittel-Telemetrie Feed',

    tacticalBoardTag: 'Interaktives Taktik-Board',
    tacticalBoardTitle: 'Aufstellungs- & Chemie-Labor',
    tapToSwap: 'Tippe auf einen Spieler auf dem Eis zum Tauschen',
    calculatedSynergy: 'Berechnete Synergie',
    tacticalChemistry: 'Taktische Chemie',
    runSimulationBtn: '60s Shift-Simulation starten',
    changePlayer: 'Spieler wechseln',

    primarySkater: 'Haupt-Skater (Spieler 1)',
    comparisonSkater: 'Vergleichs-Skater (Spieler 2)',
    headToHeadTitle: 'Direktvergleich Leistungs-Telemetrie',
    tacticalIdentity: 'Taktische Identität',

    quizTitle: 'Ice IQ: Spiel-Rückblick Challenge',
    quizSubtitle: 'Teste dein Taktik-Gedächtnis gegen echte Wisehockey-Sensordaten.',
    scoreLabel: 'Punkte',
    nextQuestion: 'Nächste Frage',
    finishQuiz: 'Quiz abschliessen',

    activationTag: 'Aktivierungs- & Medienkonzept',
    activationTitle: 'Stadion, TV-Übertragung & Second-Screen verbinden',
    activationSubtitle: 'Wie Spengler ShiftIQ sich nahtlos in das digitale Ökosystem des Spengler Cups einfügt.',
    srfTab: 'SRF zwei TV-Übertragung',
    jumbotronTab: 'Eisstadion Videowürfel',
    webTab: 'Match Center Einbindung',
  },
};
