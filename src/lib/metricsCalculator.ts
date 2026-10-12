import { WisehockeyPlayerStats } from '../types/wisehockey';
import { LineupSlot, LineupEvaluation, TacticalPreset } from '../types/gamification';

export function evaluateLineup(
  slots: LineupSlot[],
  preset: TacticalPreset
): LineupEvaluation {
  const activePlayers = slots
    .map((s) => s.player)
    .filter((p): p is WisehockeyPlayerStats => p !== null);

  if (activePlayers.length === 0) {
    return {
      chemistryScore: 0,
      puckControlIndex: 0,
      breakoutSpeedIndex: 0,
      defensiveGapRating: 0,
      physicalDisruptionScore: 0,
      strengths: ['Select players to assemble a unit.'],
      vulnerabilities: ['Incomplete lineup.'],
    };
  }

  // Calculate composite metrics
  const avgSpeed =
    activePlayers.reduce((acc, p) => acc + p.radarScores.skatingSpeed, 0) /
    activePlayers.length;
  const avgPuckHandling =
    activePlayers.reduce((acc, p) => acc + p.radarScores.puckHandling, 0) /
    activePlayers.length;
  const avgShotGen =
    activePlayers.reduce((acc, p) => acc + p.radarScores.shotGeneration, 0) /
    activePlayers.length;
  const avgPhysicality =
    activePlayers.reduce((acc, p) => acc + p.radarScores.battlePhysicality, 0) /
    activePlayers.length;
  const avgDefense =
    activePlayers.reduce(
      (acc, p) => acc + p.radarScores.defensiveGapControl,
      0
    ) / activePlayers.length;
  const avgTransition =
    activePlayers.reduce((acc, p) => acc + p.radarScores.transitionIQ, 0) /
    activePlayers.length;

  // Preset weightings
  let chemistry = 0;
  const strengths: string[] = [];
  const vulnerabilities: string[] = [];

  switch (preset) {
    case 'POWER_PLAY':
      chemistry =
        avgPuckHandling * 0.35 +
        avgShotGen * 0.35 +
        avgTransition * 0.2 +
        avgSpeed * 0.1;
      if (avgShotGen > 85) strengths.push('Elite one-timer and net-front finishing potential.');
      if (avgPuckHandling > 85) strengths.push('Pinpoint zone puck circulation & pass crispness.');
      if (avgDefense < 75) vulnerabilities.push('Susceptible to shorthanded odd-man breakaways.');
      break;

    case 'PENALTY_KILL':
      chemistry =
        avgDefense * 0.4 +
        avgPhysicality * 0.3 +
        avgSpeed * 0.2 +
        avgTransition * 0.1;
      if (avgDefense > 88) strengths.push('Suffocating gap control and slot passing lane denials.');
      if (avgPhysicality > 85) strengths.push('Dominant board battle containment in defensive corners.');
      if (avgSpeed < 78) vulnerabilities.push('Risk of fatigue on prolonged 2-minute zone pressure.');
      break;

    case 'THREE_ON_THREE_OT':
      chemistry =
        avgSpeed * 0.4 +
        avgTransition * 0.3 +
        avgPuckHandling * 0.2 +
        avgShotGen * 0.1;
      if (avgSpeed > 90) strengths.push('Blistering transition speed to exploit open ice.');
      if (avgTransition > 88) strengths.push('High-IQ puck possession resets to starve opponent.');
      if (avgPhysicality < 75) vulnerabilities.push('Potential weakness on contested defensive net battles.');
      break;

    case 'FIVE_ON_FIVE':
    default:
      chemistry =
        (avgSpeed +
          avgPuckHandling +
          avgShotGen +
          avgPhysicality +
          avgDefense +
          avgTransition) /
        6;
      if (avgTransition > 85) strengths.push('Fluid neutral zone transition and zone exits.');
      if (avgPhysicality > 85) strengths.push('Heavy physical pressure along the boards.');
      break;
  }

  // Bonus for position specialization and balanced archetypes
  const uniqueArchetypes = new Set(activePlayers.map((p) => p.archetype)).size;
  if (uniqueArchetypes >= 4 && activePlayers.length >= 4) {
    chemistry = Math.min(100, chemistry + 6);
    strengths.push('Complementary archetype synergy (balanced roles across the ice).');
  }

  return {
    chemistryScore: Math.round(chemistry),
    puckControlIndex: Math.round(avgPuckHandling),
    breakoutSpeedIndex: Math.round(avgSpeed),
    defensiveGapRating: Math.round(avgDefense),
    physicalDisruptionScore: Math.round(avgPhysicality),
    strengths: strengths.length ? strengths : ['Solid baseline execution.'],
    vulnerabilities:
      vulnerabilities.length ? vulnerabilities : ['Well balanced with no major analytical weaknesses.'],
  };
}
