import { WisehockeyPlayerStats, DecisiveMoment } from './wisehockey';

export interface TeamProfile {
  id: 'HCD' | 'USA';
  name: string;
  fullName: string;
  shortCode: string;
  primaryColor: string;
  accentColor: string;
  textColor: string;
  logoSvg?: string;
  score: number;
  shotsOnGoal: number;
  powerPlays: { goals: number; opportunities: number };
  penaltyMinutes: number;
  faceoffWinPct: number;
  totalDistanceKm: number;
  puckPossessionPct: number;
}

export interface MatchOverview {
  id: string;
  tournament: string;
  arena: string;
  location: string;
  date: string;
  attendance: string;
  status: 'FINAL';
  homeTeam: TeamProfile;
  awayTeam: TeamProfile;
  periods: {
    period: number;
    homeScore: number;
    awayScore: number;
    shotsHome: number;
    shotsAway: number;
  }[];
  rosters: {
    hcd: WisehockeyPlayerStats[];
    usa: WisehockeyPlayerStats[];
  };
  decisiveMoments: DecisiveMoment[];
}
