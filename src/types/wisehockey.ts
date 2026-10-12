/**
 * Wisehockey Data Definitions and Telemetry Types
 * Matches the Spengler Cup Davos 2026 challenge specification:
 * - ~97 player-level aggregated metrics across all periods
 * - ~114 event attributes with spatial coordinates and timestamps
 */

export interface Coordinate2D {
  x: number; // Rink X in meters (-30 to +30, or 0 to 60 standard IIHF)
  y: number; // Rink Y in meters (-15 to +15, or 0 to 30 standard IIHF)
}

export type HockeyZone = 'DEFENSIVE' | 'NEUTRAL' | 'ATTACKING';

export type PlayerPosition = 'G' | 'D' | 'F' | 'LW' | 'C' | 'RW' | 'LD' | 'RD';

export type PlayerArchetype =
  | 'The Slot Disruptor'
  | 'The Blue-Line Wall'
  | 'The Transition Engine'
  | 'The Playmaking Maestro'
  | 'The Shutdown Anchor'
  | 'The High-Speed Finisher';

export interface WisehockeyPlayerStats {
  playerId: string;
  jerseyNumber: number;
  name: string;
  teamId: 'HCD' | 'USA';
  position: PlayerPosition;
  archetype: PlayerArchetype;
  photoUrl?: string;

  // Time On Ice & Workload
  timeOnIceSeconds: number;
  shiftsCount: number;
  avgShiftDurationSeconds: number;
  toiPowerPlaySeconds: number;
  toiPenaltyKillSeconds: number;

  // Skating Telemetry
  totalDistanceMeters: number;
  sprintDistanceMeters: number; // Distance at >24 km/h
  topSpeedKmh: number;
  avgSpeedKmh: number;
  accelerationsCount: number;

  // Puck Possession
  puckPossessionTimeSeconds: number;
  offensiveZonePossessionSeconds: number;
  defensiveZonePossessionSeconds: number;

  // Passing Telemetry
  passesAttempted: number;
  passesCompleted: number;
  passCompletionPct: number;
  keyPasses: number; // Passes leading to high-danger shot

  // Shooting & Scoring
  shotsOnGoal: number;
  goals: number;
  assists: number;
  expectedGoals: number; // xG
  shotAttemptsBlocked: number;
  topShotSpeedKmh: number;
  highDangerShots: number;

  // Defense & Battles
  puckBattlesWon: number;
  puckBattlesLost: number;
  puckBattleWinPct: number;
  hitsDelivered: number;
  hitsAbsorbed: number;
  blockedShots: number;
  takeaways: number;
  giveaways: number;

  // Normalized Archetype Radar Scores (0 - 100)
  radarScores: {
    skatingSpeed: number;
    puckHandling: number;
    shotGeneration: number;
    battlePhysicality: number;
    defensiveGapControl: number;
    transitionIQ: number;
  };
}

export type EventType =
  | 'GOAL'
  | 'SHOT_ON_GOAL'
  | 'MISSED_SHOT'
  | 'PASS'
  | 'STICK_CHECK'
  | 'HIT'
  | 'ZONE_ENTRY'
  | 'TURNOVER'
  | 'FACEOFF'
  | 'PENALTY';

export interface RinkTrajectoryPoint {
  timeSec: number;
  x: number; // 0 to 100 normalized rink coords
  y: number; // 0 to 100 normalized rink coords
  speedKmh: number;
}

export interface PlayerShiftVector {
  playerId: string;
  name: string;
  teamId: 'HCD' | 'USA';
  jerseyNumber: number;
  position: PlayerPosition;
  trajectory: RinkTrajectoryPoint[];
}

export interface DecisiveMoment {
  id: string;
  period: 1 | 2 | 3 | 'OT';
  gameClock: string; // e.g., "08:42"
  title: string;
  eventType: EventType;
  primaryTeamId: 'HCD' | 'USA';
  primaryPlayerName: string;
  headlineMetric: string; // e.g. "37.8 km/h Breakout"
  
  // Dual-Lens Explanations
  fanStoryInsight: string; // "Why it mattered" in accessible storytelling
  proAnalystInsight: string; // Technical telemetry analysis (pressure vectors, xG)
  
  // Key Stats
  durationSeconds: number;
  topSpeedKmh: number;
  puckVelocityKmh: number;
  expectedGoalDelta: number;

  // Coordinated Play Simulation
  puckTrajectory: RinkTrajectoryPoint[];
  skaters: PlayerShiftVector[];
}
