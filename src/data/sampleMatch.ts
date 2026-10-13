import { MatchOverview } from '../types/match';
import { WisehockeyPlayerStats, PlayerPosition } from '../types/wisehockey';
import officialData from './officialWisehockeyParsed.json';

// Map featured role positions for the Tactical Board and Player DNA comparisons
const roleMapHcd: Record<number, PlayerPosition> = {
  18: 'LW', // Filip Zadina (35.4 km/h, 1G, 1A, 10 S)
  44: 'RW', // Matej Stransky (1G Powerplay Dagger, 4 S)
  70: 'C',  // Enzo Corvi (1G, 2A, 95.0% Pass Completion)
  6: 'LD',  // Klas Dahlbeck (+4, 4 Blocked Shots, 1A)
  38: 'RD', // Lukas Frick (4,957 m Distance, 1A)
  19: 'LW', // Adam Tambellini (2G, 1A, 100.1 km/h Goal, 75.0% Battle Win)
  55: 'RD', // Calle Andersson (4,502 m Distance, 30 Shifts, 1A)
  66: 'C',  // Valentin Nussbaumer (58.3% Faceoff Win)
};

const roleMapUsa: Record<number, PlayerPosition> = {
  18: 'RW', // Aiden Fink (1G, 1A, 8 S, 0.52 xG)
  21: 'C',  // Ryan Walsh (34.7 km/h, 1G, 1A, 90.9% Pass Completion)
  9: 'LW',  // Jack Musa (1G, 107.0 km/h Slot Goal, 0.256 xG)
  23: 'LD', // Eric Pohlkamp (24:25 TOI, 5,562 m Distance, 35.6 km/h Event Burst)
  2: 'RD',  // Gavin McCarthy (146.0 km/h Hardest Slapshot in Period 2)
  4: 'LD',  // Jake Livanavage (5,595 m Match-High Skating Distance)
  13: 'C',  // T.J. Hughes (1A, 50.0% Battle Win)
  19: 'LW', // Quinn Finley (123.5 km/h Shot, 34.8 km/h Zone Entry)
};

const rawHcd = (officialData.hcdPlayers as unknown as WisehockeyPlayerStats[]).map((p) => ({
  ...p,
  position: roleMapHcd[p.jerseyNumber] || p.position,
}));

const rawUsa = (officialData.usaPlayers as unknown as WisehockeyPlayerStats[]).map((p) => ({
  ...p,
  position: roleMapUsa[p.jerseyNumber] || p.position,
}));

// Prioritize key playmakers at indices [0..5] for default LineBuilder & PlayerDNA slots, followed by full 20-man roster
const hcdPriority = [18, 44, 70, 6, 38, 19, 55, 66];
const usaPriority = [21, 18, 9, 23, 2, 4, 13, 19];

export const hcdPlayers: WisehockeyPlayerStats[] = [
  ...hcdPriority.map((num) => rawHcd.find((p) => p.jerseyNumber === num)!).filter(Boolean),
  ...rawHcd.filter((p) => !hcdPriority.includes(p.jerseyNumber)),
];

export const usaPlayers: WisehockeyPlayerStats[] = [
  ...usaPriority.map((num) => rawUsa.find((p) => p.jerseyNumber === num)!).filter(Boolean),
  ...rawUsa.filter((p) => !usaPriority.includes(p.jerseyNumber)),
];

export const sampleMatchData: MatchOverview = {
  id: 'spengler-2025-12-31-hcd-usa',
  tournament: '97th Spengler Cup Davos Final',
  arena: 'Eisstadion Davos',
  location: 'Davos, Switzerland',
  date: '31 December 2025',
  attendance: '6,267 (100% Sold Out)',
  status: 'FINAL',
  homeTeam: {
    id: 'HCD',
    name: 'HC Davos',
    fullName: 'Hockey Club Davos',
    shortCode: 'HCD',
    primaryColor: '#0047ba',
    accentColor: '#38bdf8',
    textColor: '#ffffff',
    score: 6,
    shotsOnGoal: 70,
    powerPlays: { goals: 1, opportunities: 3 },
    penaltyMinutes: 6,
    faceoffWinPct: 50.9,
    totalDistanceKm: 74.8,
    puckPossessionPct: 54.2,
  },
  awayTeam: {
    id: 'USA',
    name: 'U.S. Selects',
    fullName: 'U.S. Collegiate Selects',
    shortCode: 'USA',
    primaryColor: '#c8102e',
    accentColor: '#00205b',
    textColor: '#ffffff',
    score: 3,
    shotsOnGoal: 42,
    powerPlays: { goals: 0, opportunities: 2 },
    penaltyMinutes: 8,
    faceoffWinPct: 49.1,
    totalDistanceKm: 72.2,
    puckPossessionPct: 45.8,
  },
  periods: [
    { period: 1, homeScore: 2, awayScore: 1, shotsHome: 24, shotsAway: 14 },
    { period: 2, homeScore: 1, awayScore: 2, shotsHome: 22, shotsAway: 16 },
    { period: 3, homeScore: 3, awayScore: 0, shotsHome: 24, shotsAway: 12 },
  ],
  rosters: {
    hcd: hcdPlayers,
    usa: usaPlayers,
  },
  decisiveMoments: [],
};
