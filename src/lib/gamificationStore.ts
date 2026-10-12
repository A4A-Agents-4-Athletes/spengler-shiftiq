export interface FanBadge {
  id: string;
  nameEn: string;
  nameDe: string;
  descriptionEn: string;
  descriptionDe: string;
  icon: string;
  unlocked: boolean;
}

export interface GamificationState {
  xp: number;
  level: number;
  levelTitleEn: string;
  levelTitleDe: string;
  nextLevelXp: number;
  badges: FanBadge[];
  recentXpGains: { amount: number; reasonEn: string; reasonDe: string; id: number }[];
}

export const INITIAL_BADGES: FanBadge[] = [
  {
    id: 'first_shift',
    nameEn: 'First Shift',
    nameDe: 'Erster Shift',
    descriptionEn: 'Scrubbed your first 20Hz decisive sequence',
    descriptionDe: 'Erste 20Hz-Entscheidungsszene analysiert',
    icon: '🏒',
    unlocked: true,
  },
  {
    id: 'telemetry_scout',
    nameEn: 'Telemetry Scout',
    nameDe: 'Telemetrie-Scout',
    descriptionEn: 'Toggled into Pro Analyst Lens',
    descriptionDe: 'In den Profi-Analyse-Modus gewechselt',
    icon: '📡',
    unlocked: false,
  },
  {
    id: 'triad_master',
    nameEn: 'Triad Master',
    nameDe: 'Triad-Meister',
    descriptionEn: 'Drafted and locked in a 3-skater fantasy lineup',
    descriptionDe: 'Eine 3er-Auswahl im Shift-Fantasy eingeloggt',
    icon: '⚡',
    unlocked: false,
  },
  {
    id: 'bench_boss',
    nameEn: 'Bench Boss',
    nameDe: 'Taktik-Chef',
    descriptionEn: 'Assembled a tactical unit with 90+ chemistry',
    descriptionDe: 'Aufstellung mit 90+ Chemie gebaut',
    icon: '📋',
    unlocked: false,
  },
];

export function getLevelInfo(xp: number): { level: number; titleEn: string; titleDe: string; nextLevelXp: number } {
  if (xp >= 1000) {
    return { level: 4, titleEn: 'Spengler Legend', titleDe: 'Spengler-Legende', nextLevelXp: 2000 };
  } else if (xp >= 500) {
    return { level: 3, titleEn: 'Bench Boss', titleDe: 'Taktik-Chef', nextLevelXp: 1000 };
  } else if (xp >= 200) {
    return { level: 2, titleEn: 'Tactical Analyst', titleDe: 'Taktik-Analyst', nextLevelXp: 500 };
  } else {
    return { level: 1, titleEn: 'Rookie Scout', titleDe: 'Rookie-Scout', nextLevelXp: 200 };
  }
}
