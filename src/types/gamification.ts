import { WisehockeyPlayerStats } from './wisehockey';

export interface IceIqQuizQuestion {
  id: string;
  category: 'SPEED' | 'WORKLOAD' | 'TACTICS' | 'DEFENSE';
  difficulty: 'Rookie' | 'Pro' | 'Expert';
  prompt: string;
  contextText: string;
  options: {
    id: string;
    text: string;
    metricLabel: string;
    metricValue: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  telemetryEvidence: string;
}

export interface LineupSlot {
  role: 'LW' | 'C' | 'RW' | 'LD' | 'RD';
  player: WisehockeyPlayerStats | null;
}

export type TacticalPreset = 'POWER_PLAY' | 'PENALTY_KILL' | 'THREE_ON_THREE_OT' | 'FIVE_ON_FIVE';

export interface LineupEvaluation {
  chemistryScore: number; // 0 - 100
  puckControlIndex: number;
  breakoutSpeedIndex: number;
  defensiveGapRating: number;
  physicalDisruptionScore: number;
  strengths: string[];
  vulnerabilities: string[];
}
