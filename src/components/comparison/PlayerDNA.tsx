import React, { useState } from 'react';
import { WisehockeyPlayerStats } from '../../types/wisehockey';
import { sampleMatchData } from '../../data/sampleMatch';
import { formatTimeOnIce, formatSpeed, formatDistance, cn } from '../../lib/utils';
import { Swords } from 'lucide-react';
import { Language, translations } from '../../lib/i18n';

interface PlayerDNAProps {
  isProLens?: boolean;
  language?: Language;
}

export const PlayerDNA: React.FC<PlayerDNAProps> = ({ language = 'EN' }) => {
  const t = translations[language];

  const [player1, setPlayer1] = useState<WisehockeyPlayerStats>(
    sampleMatchData.rosters.hcd[0] // Andres Ambühl
  );
  const [player2, setPlayer2] = useState<WisehockeyPlayerStats>(
    sampleMatchData.rosters.usa[0] // Frank Nazar
  );

  // SVG Radar coordinates generator (6 axes)
  const isDe = language === 'DE';

  const radarDimensions = [
    { key: 'skatingSpeed', label: isDe ? 'Tempo' : 'Speed' },
    { key: 'puckHandling', label: isDe ? 'Puck-IQ' : 'Puck IQ' },
    { key: 'shotGeneration', label: isDe ? 'Schuss' : 'Shooting' },
    { key: 'battlePhysicality', label: isDe ? 'Zweikampf' : 'Physicality' },
    { key: 'defensiveGapControl', label: isDe ? 'Defensive' : 'Defense' },
    { key: 'transitionIQ', label: isDe ? 'Umschaltspiel' : 'Transition' },
  ] as const;

  const center = 160;
  const radius = 110;

  const getCoordinates = (index: number, value: number) => {
    const angle = (Math.PI * 2 / 6) * index - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const p1Points = radarDimensions
    .map((dim, i) => {
      const coord = getCoordinates(i, player1.radarScores[dim.key]);
      return `${coord.x},${coord.y}`;
    })
    .join(' ');

  const p2Points = radarDimensions
    .map((dim, i) => {
      const coord = getCoordinates(i, player2.radarScores[dim.key]);
      return `${coord.x},${coord.y}`;
    })
    .join(' ');

  const metricsToCompare = [
    { label: isDe ? 'Eiszeit (TOI)' : 'Time on Ice (TOI)', v1: formatTimeOnIce(player1.timeOnIceSeconds), v2: formatTimeOnIce(player2.timeOnIceSeconds), num1: player1.timeOnIceSeconds, num2: player2.timeOnIceSeconds },
    { label: isDe ? 'Laufdistanz' : 'Skating Distance', v1: formatDistance(player1.totalDistanceMeters), v2: formatDistance(player2.totalDistanceMeters), num1: player1.totalDistanceMeters, num2: player2.totalDistanceMeters },
    { label: isDe ? 'Top Sprint-Tempo' : 'Top Sprint Speed', v1: formatSpeed(player1.topSpeedKmh), v2: formatSpeed(player2.topSpeedKmh), num1: player1.topSpeedKmh, num2: player2.topSpeedKmh },
    { label: isDe ? 'Zweikampfquote' : 'Puck Battle Win %', v1: `${player1.puckBattleWinPct.toFixed(1)}%`, v2: `${player2.puckBattleWinPct.toFixed(1)}%`, num1: player1.puckBattleWinPct, num2: player2.puckBattleWinPct },
    { label: isDe ? 'Top Schusshärte' : 'Top Shot Speed', v1: formatSpeed(player1.topShotSpeedKmh), v2: formatSpeed(player2.topShotSpeedKmh), num1: player1.topShotSpeedKmh, num2: player2.topShotSpeedKmh },
    { label: isDe ? 'Passquote' : 'Pass Completion %', v1: `${player1.passCompletionPct.toFixed(1)}%`, v2: `${player2.passCompletionPct.toFixed(1)}%`, num1: player1.passCompletionPct, num2: player2.passCompletionPct },
  ];

  const archetypeInfo: Record<string, { en: string; de: string; labelDe: string }> = {
    'The Slot Disruptor': {
      en: 'Relentless pressure player who creates chaos in the dirty areas, winning puck battles and screening netminders.',
      de: 'Unermüdlicher Druckspieler, der im Slot Unruhe stiftet, Pucks an den Banden erobert und Torhütern die Sicht nimmt.',
      labelDe: 'Der Slot-Störer',
    },
    'The High-Speed Finisher': {
      en: 'Explosive offensive weapon with a lethal release who converts counter-attacks into high-danger goals.',
      de: 'Explosiver Stürmer mit tödlichem Handgelenkschuss, der Tempogegenstösse eiskalt in hochgefährliche Tore verwandelt.',
      labelDe: 'Der High-Speed Torjäger',
    },
    'The Playmaking Maestro': {
      en: 'Visionary puck distributor who controls game tempo with elite vision and saucer passes through traffic.',
      de: 'Visionärer Puckverteiler, der das Spieltempo mit präzisem Passspiel und Auge für freie Mitspieler diktiert.',
      labelDe: 'Der Spielmacher-Maestro',
    },
    'The Blue-Line Wall': {
      en: 'Imposing physical defenseman who shuts down the front of the net and snuffs out opposing zone entries.',
      de: 'Physisch dominanter Verteidiger, der die Zone abriegelt und gegnerische Angriffswellen frühzeitig zerschellen lässt.',
      labelDe: 'Die Blaue-Linie-Mauer',
    },
    'The Shutdown Anchor': {
      en: 'Disciplined stay-at-home blue-liner with flawless stick gap control and high-danger shot suppression.',
      de: 'Disziplinierter Defensiv-Verteidiger mit exzellentem Stock-Stellungsspiel und kompromissloser Schussblock-Präsenz.',
      labelDe: 'Der Defensiv-Anker',
    },
    'The Transition Engine': {
      en: 'High-motor skater who generates controlled zone exits and rushes pucks past back-checking forwards.',
      de: 'Laufstarker Antreiber, der Puckeroberungen in kontrollierte Zonen-Exits und explosive Gegenangriffe übersetzt.',
      labelDe: 'Der Umschalt-Motor',
    },
  };

  return (
    <div className="space-y-6">
      {/* Tactile Skater Selector Ribbons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Player 1 Selector (HC Davos Focus) */}
        <div className="bg-slate-900/90 border border-cyan-400/30 p-4 rounded-2xl space-y-3 shadow-xl backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-black tracking-wider text-cyan-400 font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-cyan-400" />
              {t.primarySkater}
            </span>
            <span className="text-xs font-mono font-bold text-slate-300">
              {player1.teamId === 'HCD' ? 'HC Davos' : 'Team USA'} #{player1.jerseyNumber}
            </span>
          </div>

          {/* Quick-Pick Horizontal Skater Cards (Davos Roster) */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {sampleMatchData.rosters.hcd.map((p) => {
              const isSelected = player1.playerId === p.playerId;
              return (
                <button
                  key={p.playerId}
                  onClick={() => setPlayer1(p)}
                  className={cn(
                    'px-3 py-2 rounded-xl text-left shrink-0 transition-all border cursor-pointer',
                    isSelected
                      ? 'bg-blue-950 border-cyan-400 shadow-md shadow-cyan-400/20 ring-1 ring-cyan-400'
                      : 'bg-slate-950/80 border-white/10 hover:border-white/30 text-slate-400 hover:text-white'
                  )}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-black font-mono text-cyan-400">
                      #{p.jerseyNumber}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {p.position}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-white whitespace-nowrap">
                    {p.name.split(' ').slice(-1)[0]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Player 2 Selector (Team USA Focus) */}
        <div className="bg-slate-900/90 border border-rose-400/30 p-4 rounded-2xl space-y-3 shadow-xl backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-black tracking-wider text-rose-400 font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-rose-400" />
              {t.comparisonSkater}
            </span>
            <span className="text-xs font-mono font-bold text-slate-300">
              {player2.teamId === 'HCD' ? 'HC Davos' : 'Team USA'} #{player2.jerseyNumber}
            </span>
          </div>

          {/* Quick-Pick Horizontal Skater Cards (USA Roster) */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {sampleMatchData.rosters.usa.map((p) => {
              const isSelected = player2.playerId === p.playerId;
              return (
                <button
                  key={p.playerId}
                  onClick={() => setPlayer2(p)}
                  className={cn(
                    'px-3 py-2 rounded-xl text-left shrink-0 transition-all border cursor-pointer',
                    isSelected
                      ? 'bg-red-950/90 border-rose-400 shadow-md shadow-rose-400/20 ring-1 ring-rose-400'
                      : 'bg-slate-950/80 border-white/10 hover:border-white/30 text-slate-400 hover:text-white'
                  )}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-black font-mono text-rose-400">
                      #{p.jerseyNumber}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {p.position}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-white whitespace-nowrap">
                    {p.name.split(' ').slice(-1)[0]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Clash Display: Radar + Archetype Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Player Archetype Card */}
        <div className="lg:col-span-4 bg-rink-card border-2 border-cyan-400/40 p-5 rounded-2xl space-y-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center font-black text-xl text-cyan-300 shadow-md border border-cyan-400">
              {player1.jerseyNumber}
            </div>
            <div>
              <span className="px-2 py-0.5 bg-slate-900 text-[10px] font-mono font-bold text-cyan-400 rounded border border-slate-700 uppercase">
                {isDe ? (archetypeInfo[player1.archetype]?.labelDe || player1.archetype) : player1.archetype}
              </span>
              <h3 className="text-xl font-black text-white mt-1">{player1.name}</h3>
              <span className="text-xs text-slate-400 font-mono">
                {player1.teamId === 'HCD' ? 'Hockey Club Davos' : 'U.S. Selects'} · {player1.position}
              </span>
            </div>
          </div>

          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1">
            <div className="text-[11px] font-mono text-slate-400 uppercase font-bold">{t.tacticalIdentity}</div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans" style={{ textWrap: 'pretty' }}>
              {isDe
                ? (archetypeInfo[player1.archetype]?.de || archetypeInfo[player1.archetype]?.en)
                : archetypeInfo[player1.archetype]?.en}
            </p>
          </div>
        </div>

        {/* Center SVG Radar Visualizer (Ice Cyan vs Crimson, ZERO Yellow) */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center bg-slate-950 border border-rink-border p-4 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-4 text-xs font-bold font-mono mb-2">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <span className="w-3 h-3 rounded bg-cyan-400"></span>
              {player1.name.split(' ')[1] || player1.name}
            </span>
            <span className="text-slate-600">vs</span>
            <span className="flex items-center gap-1.5 text-rose-400">
              <span className="w-3 h-3 rounded bg-rose-400"></span>
              {player2.name.split(' ')[1] || player2.name}
            </span>
          </div>

          <svg viewBox="0 0 320 320" className="w-full max-w-[280px] select-none">
            {/* Concentric Background Grid Rings */}
            {[0.2, 0.4, 0.6, 0.8, 1.0].map((level, lvlIdx) => (
              <polygon
                key={lvlIdx}
                points={radarDimensions
                  .map((_, i) => {
                    const c = getCoordinates(i, level * 100);
                    return `${c.x},${c.y}`;
                  })
                  .join(' ')}
                fill="none"
                stroke="#1e293b"
                strokeWidth="1"
              />
            ))}

            {/* Radar Spoke Lines */}
            {radarDimensions.map((dim, i) => {
              const edge = getCoordinates(i, 100);
              const labelPos = getCoordinates(i, 122);
              return (
                <g key={dim.key}>
                  <line
                    x1={center}
                    y1={center}
                    x2={edge.x}
                    y2={edge.y}
                    stroke="#334155"
                    strokeWidth="1"
                  />
                  <text
                    x={labelPos.x}
                    y={labelPos.y + 4}
                    textAnchor="middle"
                    fill="#94a3b8"
                    fontSize="10"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {dim.label}
                  </text>
                </g>
              );
            })}

            {/* Player 1 Polygon (Davos Ice Blue / Cyan) */}
            <polygon
              points={p1Points}
              fill="#0284c7"
              fillOpacity="0.35"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />

            {/* Player 2 Polygon (USA Crimson Rose) */}
            <polygon
              points={p2Points}
              fill="#e11d48"
              fillOpacity="0.25"
              stroke="#f43f5e"
              strokeWidth="2.5"
            />
          </svg>
        </div>

        {/* Right Player Archetype Card */}
        <div className="lg:col-span-4 bg-rink-card border-2 border-rose-400/40 p-5 rounded-2xl space-y-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-usa-navy rounded-xl flex items-center justify-center font-black text-xl text-white shadow-md border border-rose-400">
              {player2.jerseyNumber}
            </div>
            <div>
              <span className="px-2 py-0.5 bg-slate-900 text-[10px] font-mono font-bold text-rose-400 rounded border border-slate-700 uppercase">
                {isDe ? (archetypeInfo[player2.archetype]?.labelDe || player2.archetype) : player2.archetype}
              </span>
              <h3 className="text-xl font-black text-white mt-1">{player2.name}</h3>
              <span className="text-xs text-slate-400 font-mono">
                {player2.teamId === 'HCD' ? 'Hockey Club Davos' : 'U.S. Selects'} · {player2.position}
              </span>
            </div>
          </div>

          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1">
            <div className="text-[11px] font-mono text-slate-400 uppercase font-bold">{t.tacticalIdentity}</div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans" style={{ textWrap: 'pretty' }}>
              {isDe
                ? (archetypeInfo[player2.archetype]?.de || archetypeInfo[player2.archetype]?.en)
                : archetypeInfo[player2.archetype]?.en}
            </p>
          </div>
        </div>
      </div>

      {/* Head-to-Head Metric Bars */}
      <div className="bg-rink-card border border-rink-border p-5 rounded-2xl space-y-4 shadow-xl">
        <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Swords className="w-4 h-4 text-cyan-400" />
          {t.headToHeadTitle}
        </h4>

        <div className="space-y-4">
          {metricsToCompare.map((metric, idx) => {
            const isP1Leading = metric.num1 >= metric.num2;
            const maxVal = Math.max(metric.num1, metric.num2) * 1.15 || 1;
            const p1Percent = Math.min(100, (metric.num1 / maxVal) * 100);
            const p2Percent = Math.min(100, (metric.num2 / maxVal) * 100);

            return (
              <div key={idx} className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className={cn('font-mono font-bold', isP1Leading ? 'text-cyan-400' : 'text-slate-400')}>
                    {metric.v1}
                  </span>
                  <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                    {metric.label}
                  </span>
                  <span className={cn('font-mono font-bold', !isP1Leading ? 'text-rose-400' : 'text-slate-400')}>
                    {metric.v2}
                  </span>
                </div>

                {/* Comparative Dual Progress Bar */}
                <div className="grid grid-cols-2 gap-2 h-2.5">
                  <div className="flex justify-end bg-slate-950 rounded-l-md overflow-hidden">
                    <div
                      className="bg-cyan-400 rounded-l-md transition-all duration-500"
                      style={{ width: `${p1Percent}%` }}
                    />
                  </div>
                  <div className="flex justify-start bg-slate-950 rounded-r-md overflow-hidden">
                    <div
                      className="bg-rose-500 rounded-r-md transition-all duration-500"
                      style={{ width: `${p2Percent}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
