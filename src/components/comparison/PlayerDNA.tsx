import React, { useState } from 'react';
import { WisehockeyPlayerStats } from '../../types/wisehockey';
import { sampleMatchData } from '../../data/sampleMatch';
import { formatTimeOnIce, formatSpeed, formatDistance, cn } from '../../lib/utils';
import { Swords } from 'lucide-react';

interface PlayerDNAProps {
  isProLens?: boolean;
}

export const PlayerDNA: React.FC<PlayerDNAProps> = () => {

  const [player1, setPlayer1] = useState<WisehockeyPlayerStats>(
    sampleMatchData.rosters.hcd[0] // Andres Ambühl
  );
  const [player2, setPlayer2] = useState<WisehockeyPlayerStats>(
    sampleMatchData.rosters.usa[0] // Frank Nazar
  );

  // SVG Radar coordinates generator (6 axes)
  const radarDimensions = [
    { key: 'skatingSpeed', label: 'Speed' },
    { key: 'puckHandling', label: 'Puck IQ' },
    { key: 'shotGeneration', label: 'Shooting' },
    { key: 'battlePhysicality', label: 'Physicality' },
    { key: 'defensiveGapControl', label: 'Defense' },
    { key: 'transitionIQ', label: 'Transition' },
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
    { label: 'Time on Ice (TOI)', v1: formatTimeOnIce(player1.timeOnIceSeconds), v2: formatTimeOnIce(player2.timeOnIceSeconds), num1: player1.timeOnIceSeconds, num2: player2.timeOnIceSeconds },
    { label: 'Skating Distance', v1: formatDistance(player1.totalDistanceMeters), v2: formatDistance(player2.totalDistanceMeters), num1: player1.totalDistanceMeters, num2: player2.totalDistanceMeters },
    { label: 'Top Sprint Speed', v1: formatSpeed(player1.topSpeedKmh), v2: formatSpeed(player2.topSpeedKmh), num1: player1.topSpeedKmh, num2: player2.topSpeedKmh },
    { label: 'Puck Battle Win %', v1: `${player1.puckBattleWinPct.toFixed(1)}%`, v2: `${player2.puckBattleWinPct.toFixed(1)}%`, num1: player1.puckBattleWinPct, num2: player2.puckBattleWinPct },
    { label: 'Top Shot Speed', v1: formatSpeed(player1.topShotSpeedKmh), v2: formatSpeed(player2.topShotSpeedKmh), num1: player1.topShotSpeedKmh, num2: player2.topShotSpeedKmh },
    { label: 'Pass Completion %', v1: `${player1.passCompletionPct.toFixed(1)}%`, v2: `${player2.passCompletionPct.toFixed(1)}%`, num1: player1.passCompletionPct, num2: player2.passCompletionPct },
  ];

  return (
    <div className="space-y-6">
      {/* Tactile Skater Selector Ribbons (No HTML select tags) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Player 1 Selector (HC Davos Focus) */}
        <div className="bg-slate-900/90 border border-amber-400/30 p-4 rounded-2xl space-y-3 shadow-xl backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-black tracking-wider text-amber-400 font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-amber-400" />
              Primary Skater (Player 1)
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
                      ? 'bg-blue-950 border-amber-400 shadow-md shadow-amber-400/20 ring-1 ring-amber-400'
                      : 'bg-slate-950/80 border-white/10 hover:border-white/30 text-slate-400 hover:text-white'
                  )}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-black font-mono text-amber-400">
                      #{p.jerseyNumber}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {p.position}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-white truncate max-w-[90px]">
                    {p.name.split(' ').slice(-1)[0]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Player 2 Selector (Team USA Focus) */}
        <div className="bg-slate-900/90 border border-sky-400/30 p-4 rounded-2xl space-y-3 shadow-xl backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-black tracking-wider text-sky-400 font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-sky-400" />
              Comparison Skater (Player 2)
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
                      ? 'bg-red-950/90 border-sky-400 shadow-md shadow-sky-400/20 ring-1 ring-sky-400'
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
                  <div className="text-xs font-bold text-white truncate max-w-[90px]">
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
        <div className="lg:col-span-4 bg-rink-card border-2 border-hcd-yellow/40 p-5 rounded-2xl space-y-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-hcd-blue rounded-xl flex items-center justify-center font-black text-xl text-hcd-yellow shadow-md border border-hcd-yellow">
              {player1.jerseyNumber}
            </div>
            <div>
              <span className="px-2 py-0.5 bg-slate-900 text-[10px] font-mono font-bold text-hcd-yellow rounded border border-slate-700 uppercase">
                {player1.archetype}
              </span>
              <h3 className="text-xl font-black text-white mt-1">{player1.name}</h3>
              <span className="text-xs text-slate-400 font-mono">
                {player1.teamId === 'HCD' ? 'Hockey Club Davos' : 'U.S. Selects'} · {player1.position}
              </span>
            </div>
          </div>

          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1">
            <div className="text-[11px] font-mono text-slate-400 uppercase font-bold">Tactical Identity</div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans" style={{ textWrap: 'pretty' }}>
              {player1.archetype === 'The Slot Disruptor' &&
                'Relentless pressure player who creates chaos in the dirty areas, winning puck battles and screening netminders.'}
              {player1.archetype === 'The High-Speed Finisher' &&
                'Explosive offensive weapon with a lethal release who converts counter-attacks into high-danger goals.'}
              {player1.archetype === 'The Playmaking Maestro' &&
                'Visionary puck distributor who controls game tempo with elite vision and saucer passes through traffic.'}
              {player1.archetype === 'The Blue-Line Wall' &&
                'Imposing physical defenseman who shuts down the front of the net and snuffs out opposing zone entries.'}
              {player1.archetype === 'The Shutdown Anchor' &&
                'Disciplined stay-at-home blue-liner with flawless stick gap control and high-danger shot suppression.'}
              {player1.archetype === 'The Transition Engine' &&
                'High-motor skater who generates controlled zone exits and rushes pucks past back-checking forwards.'}
            </p>
          </div>
        </div>

        {/* Center SVG Radar Visualizer */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center bg-slate-950 border border-rink-border p-4 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-4 text-xs font-bold font-mono mb-2">
            <span className="flex items-center gap-1.5 text-hcd-yellow">
              <span className="w-3 h-3 rounded bg-hcd-yellow"></span>
              {player1.name.split(' ')[1] || player1.name}
            </span>
            <span className="text-slate-600">vs</span>
            <span className="flex items-center gap-1.5 text-neon-cyan">
              <span className="w-3 h-3 rounded bg-neon-cyan"></span>
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

            {/* Player 1 Polygon (HCD Yellow) */}
            <polygon
              points={p1Points}
              fill="#f5b000"
              fillOpacity="0.25"
              stroke="#f5b000"
              strokeWidth="2.5"
            />

            {/* Player 2 Polygon (Neon Cyan) */}
            <polygon
              points={p2Points}
              fill="#00f2fe"
              fillOpacity="0.25"
              stroke="#00f2fe"
              strokeWidth="2.5"
            />
          </svg>
        </div>

        {/* Right Player Archetype Card */}
        <div className="lg:col-span-4 bg-rink-card border-2 border-neon-cyan/40 p-5 rounded-2xl space-y-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-usa-navy rounded-xl flex items-center justify-center font-black text-xl text-white shadow-md border border-neon-cyan">
              {player2.jerseyNumber}
            </div>
            <div>
              <span className="px-2 py-0.5 bg-slate-900 text-[10px] font-mono font-bold text-neon-cyan rounded border border-slate-700 uppercase">
                {player2.archetype}
              </span>
              <h3 className="text-xl font-black text-white mt-1">{player2.name}</h3>
              <span className="text-xs text-slate-400 font-mono">
                {player2.teamId === 'HCD' ? 'Hockey Club Davos' : 'U.S. Selects'} · {player2.position}
              </span>
            </div>
          </div>

          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1">
            <div className="text-[11px] font-mono text-slate-400 uppercase font-bold">Tactical Identity</div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans" style={{ textWrap: 'pretty' }}>
              {player2.archetype === 'The Slot Disruptor' &&
                'Relentless pressure player who creates chaos in the dirty areas, winning puck battles and screening netminders.'}
              {player2.archetype === 'The High-Speed Finisher' &&
                'Explosive offensive weapon with a lethal release who converts counter-attacks into high-danger goals.'}
              {player2.archetype === 'The Playmaking Maestro' &&
                'Visionary puck distributor who controls game tempo with elite vision and saucer passes through traffic.'}
              {player2.archetype === 'The Blue-Line Wall' &&
                'Imposing physical defenseman who shuts down the front of the net and snuffs out opposing zone entries.'}
              {player2.archetype === 'The Shutdown Anchor' &&
                'Disciplined stay-at-home blue-liner with flawless stick gap control and high-danger shot suppression.'}
              {player2.archetype === 'The Transition Engine' &&
                'High-motor skater who generates controlled zone exits and rushes pucks past back-checking forwards.'}
            </p>
          </div>
        </div>
      </div>

      {/* Head-to-Head Metric Bars */}
      <div className="bg-rink-card border border-rink-border p-5 rounded-2xl space-y-4 shadow-xl">
        <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Swords className="w-4 h-4 text-neon-cyan" />
          Head-to-Head Performance Telemetry
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
                  <span className={cn('font-mono font-bold', isP1Leading ? 'text-hcd-yellow' : 'text-slate-400')}>
                    {metric.v1}
                  </span>
                  <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                    {metric.label}
                  </span>
                  <span className={cn('font-mono font-bold', !isP1Leading ? 'text-neon-cyan' : 'text-slate-400')}>
                    {metric.v2}
                  </span>
                </div>

                {/* Comparative Dual Progress Bar */}
                <div className="grid grid-cols-2 gap-2 h-2.5">
                  <div className="flex justify-end bg-slate-950 rounded-l-md overflow-hidden">
                    <div
                      className="bg-hcd-yellow rounded-l-md transition-all duration-500"
                      style={{ width: `${p1Percent}%` }}
                    />
                  </div>
                  <div className="flex justify-start bg-slate-950 rounded-r-md overflow-hidden">
                    <div
                      className="bg-neon-cyan rounded-r-md transition-all duration-500"
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
