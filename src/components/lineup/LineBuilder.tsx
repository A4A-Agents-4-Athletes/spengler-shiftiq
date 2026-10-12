import React, { useState } from 'react';
import { sampleMatchData } from '../../data/sampleMatch';
import { TacticalPreset, LineupSlot } from '../../types/gamification';
import { evaluateLineup } from '../../lib/metricsCalculator';
import { WisehockeyPlayerStats } from '../../types/wisehockey';
import { Zap, Shield, Flame, Play, Check, ChevronRight, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Language, translations } from '../../lib/i18n';

interface FormationCoord {
  role: 'LW' | 'C' | 'RW' | 'LD' | 'RD';
  x: number;
  y: number;
  label: string;
}

interface LineBuilderProps {
  language?: Language;
  onAddXp?: (amount: number, reasonEn: string, reasonDe: string) => void;
}

const formationPresets: Record<TacticalPreset, FormationCoord[]> = {
  POWER_PLAY: [
    { role: 'LW', x: 22, y: 35, label: 'One-Timer' },
    { role: 'C', x: 50, y: 48, label: 'High Slot' },
    { role: 'RW', x: 78, y: 35, label: 'Half-Wall' },
    { role: 'LD', x: 34, y: 82, label: 'Point D' },
    { role: 'RD', x: 66, y: 82, label: 'Blue Line' },
  ],
  PENALTY_KILL: [
    { role: 'LW', x: 32, y: 42, label: 'High Wing' },
    { role: 'C', x: 68, y: 42, label: 'High Center' },
    { role: 'RW', x: 50, y: 62, label: 'Slot Disruptor' },
    { role: 'LD', x: 28, y: 80, label: 'Corner Battle' },
    { role: 'RD', x: 72, y: 80, label: 'Net Protect' },
  ],
  THREE_ON_THREE_OT: [
    { role: 'LW', x: 28, y: 40, label: 'Breakout Wing' },
    { role: 'C', x: 50, y: 55, label: 'Center Hub' },
    { role: 'RW', x: 72, y: 40, label: 'Speed Rush' },
    { role: 'LD', x: 40, y: 82, label: 'Safety D' },
    { role: 'RD', x: 60, y: 82, label: 'Transition' },
  ],
  FIVE_ON_FIVE: [
    { role: 'LW', x: 20, y: 35, label: 'Left Wing' },
    { role: 'C', x: 50, y: 45, label: 'Center' },
    { role: 'RW', x: 80, y: 35, label: 'Right Wing' },
    { role: 'LD', x: 32, y: 80, label: 'Left D' },
    { role: 'RD', x: 68, y: 80, label: 'Right D' },
  ],
};

export const LineBuilder: React.FC<LineBuilderProps> = ({ language = 'EN', onAddXp }) => {
  const t = translations[language];

  const [preset, setPreset] = useState<TacticalPreset>('POWER_PLAY');
  const [activeSlotRole, setActiveSlotRole] = useState<'LW' | 'C' | 'RW' | 'LD' | 'RD'>('LW');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [filterTeam, setFilterTeam] = useState<'ALL' | 'HCD' | 'USA'>('ALL');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simReport, setSimReport] = useState<{ headline: string; detail: string; rating: 'elite' | 'solid' | 'vulnerable' } | null>(null);

  const allPlayers: WisehockeyPlayerStats[] = [
    ...sampleMatchData.rosters.hcd,
    ...sampleMatchData.rosters.usa,
  ];

  // Lineup state
  const [slots, setSlots] = useState<LineupSlot[]>([
    { role: 'LW', player: sampleMatchData.rosters.hcd[0] }, // Ambühl
    { role: 'C', player: sampleMatchData.rosters.hcd[2] },  // Corvi
    { role: 'RW', player: sampleMatchData.rosters.hcd[1] }, // Stransky
    { role: 'LD', player: sampleMatchData.rosters.usa[3] }, // Casey
    { role: 'RD', player: sampleMatchData.rosters.hcd[3] }, // Fora
  ]);

  const currentCoords = formationPresets[preset];
  const evaluation = evaluateLineup(slots, preset);
  const activeSlot = slots.find((s) => s.role === activeSlotRole);

  const handleSelectPlayer = (player: WisehockeyPlayerStats) => {
    setSlots((prev) =>
      prev.map((s) => (s.role === activeSlotRole ? { ...s, player } : s))
    );
    setIsDrawerOpen(false);
    setSimReport(null);
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimReport(null);

    setTimeout(() => {
      setIsSimulating(false);
      const score = evaluation.chemistryScore;
      if (score >= 85) {
        setSimReport({
          rating: 'elite',
          headline: language === 'DE' ? 'Taktische Meisterleistung: Direktschuss-Treffer' : 'Tactical Masterclass: Lethal One-Timer Conversion',
          detail: language === 'DE' 
            ? 'Corvi orchestrierte ein 3-Pass-Breakout und bediente Stransky für einen unhaltbaren 99.4 km/h Treffer (+0.74 xG). Keine Konterchancen zugelassen.'
            : 'Corvi orchestrated a rapid 3-pass seam breakout, feeding Stransky for an uncontested 99.4 km/h release (+0.74 xG). Zero high-danger counter-attacks allowed.',
        });
      } else if (score >= 72) {
        setSimReport({
          rating: 'solid',
          headline: language === 'DE' ? 'Kontrollierter Druck: 68% Scheibenbesitz' : 'Controlled Sustained Pressure: 68% Zone Dwell',
          detail: language === 'DE'
            ? 'Reihe hielt die Scheibe stabil an der Bande, 3 Zweikämpfe gewonnen. Goalie-Abpraller erzwungen.'
            : 'Unit maintained clean puck circulation along the boards, winning 3 consecutive puck battles. Forced goalie whistle with 1 high-danger screen attempt.',
        });
      } else {
        setSimReport({
          rating: 'vulnerable',
          headline: language === 'DE' ? 'Abwehrlücke: Konterchance zugelassen' : 'Defensive Gap Collapse: Odd-Man Rush Conceded',
          detail: language === 'DE'
            ? 'Uneinheitliches Rückzugs-Tempo riss eine 15-Meter-Lücke im neutralen Bereich auf.'
            : 'Mismatched skating recovery speeds created a 15-meter neutral zone gap. Opponent capitalized with a 3-on-1 counter-attack rush.',
        });
      }
      onAddXp?.(75, 'Simulated Tactical Lineup', 'Taktische Aufstellung simuliert');
    }, 900);
  };

  const filteredPlayers = allPlayers.filter((p) => {
    if (filterTeam === 'ALL') return true;
    return p.teamId === filterTeam;
  });

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-rink-card via-slate-900 to-rink-card border border-rink-border p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-[11px] font-bold rounded-md uppercase font-mono tracking-wider">
              {t.tacticalBoardTag}
            </span>
            <span className="text-slate-500 text-xs">•</span>
            <span className="text-xs text-slate-400">{t.tapToSwap}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {t.tacticalBoardTitle}
          </h2>
        </div>

        {/* Formation Situation Selector */}
        <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          {(
            [
              { id: 'POWER_PLAY', label: 'Power Play 5v4' },
              { id: 'PENALTY_KILL', label: 'Penalty Kill 4v5' },
              { id: 'THREE_ON_THREE_OT', label: '3-on-3 OT' },
              { id: 'FIVE_ON_FIVE', label: '5-on-5 Regular' },
            ] as const
          ).map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setPreset(p.id);
                setSimReport(null);
              }}
              className={cn(
                'px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer',
                preset === p.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Interactive Tactical Rink + Chemistry HUD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive 2D Ice Tactical Board (7 Columns) */}
        <div className="lg:col-span-7 bg-slate-950 border border-rink-border p-4 sm:p-6 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-emerald-400 animate-pulse" />
              Offensive Attack Zone (Davos End)
            </span>
            <span className="font-mono text-slate-500 text-[11px]">Click player badge to edit</span>
          </div>

          {/* Ice Surface Area */}
          <div className="relative aspect-[4/3] bg-gradient-to-b from-[#ffffff] via-[#f1f6fc] to-[#e4effa] rounded-2xl border-4 border-slate-300 overflow-hidden shadow-inner select-none">
            {/* Ice Sheet Vector Markings */}
            <svg viewBox="0 0 400 300" className="w-full h-full absolute inset-0 pointer-events-none">
              <rect x="0" y="0" width="400" height="300" fill="transparent" />

              {/* Goal Crease (Light Blue Semi-circle) */}
              <path
                d="M 170 30 C 170 70 230 70 230 30 Z"
                fill="#93c5fd"
                fillOpacity="0.4"
                stroke="#dc2626"
                strokeWidth="2"
              />

              {/* Red Goal Line */}
              <line x1="20" y1="30" x2="380" y2="30" stroke="#dc2626" strokeWidth="2.5" />

              {/* Goal Frame */}
              <rect x="180" y="10" width="40" height="20" fill="none" stroke="#dc2626" strokeWidth="3" rx="2" />

              {/* Faceoff Dots and Circles */}
              <circle cx="85" cy="90" r="42" fill="none" stroke="#dc2626" strokeWidth="1.5" />
              <circle cx="85" cy="90" r="3" fill="#dc2626" />

              <circle cx="315" cy="90" r="42" fill="none" stroke="#dc2626" strokeWidth="1.5" />
              <circle cx="315" cy="90" r="3" fill="#dc2626" />

              {/* Blue Line */}
              <line x1="0" y1="240" x2="400" y2="240" stroke="#2563eb" strokeWidth="4" />

              {/* Dynamic Synergy Link Lines between Players (Ice Cyan Dashed Vectors) */}
              <path
                d="M 100 110 L 200 150 L 300 110 L 250 240 L 150 240 Z"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2"
                strokeDasharray="5 4"
                strokeOpacity="0.8"
              />
            </svg>

            {/* Interactive Player Badges on the Ice (Zero Truncation, Crisp Architectural Radii) */}
            {currentCoords.map((coord) => {
              const slot = slots.find((s) => s.role === coord.role);
              const player = slot?.player;
              const isSelected = activeSlotRole === coord.role;

              return (
                <div
                  key={coord.role}
                  style={{
                    left: `${coord.x}%`,
                    top: `${coord.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onClick={() => {
                    setActiveSlotRole(coord.role);
                    setIsDrawerOpen(true);
                  }}
                  className={cn(
                    'absolute cursor-pointer transition-all duration-200 group z-10',
                    isSelected ? 'scale-110' : 'hover:scale-105'
                  )}
                >
                  <div
                    className={cn(
                      'p-2 rounded-xl border flex flex-col items-center shadow-xl backdrop-blur-md min-w-[86px] sm:min-w-[98px] text-center',
                      isSelected
                        ? 'bg-slate-900 border-cyan-400 shadow-cyan-400/25 ring-2 ring-cyan-400/50'
                        : player?.teamId === 'HCD'
                        ? 'bg-slate-950/90 border-blue-600/50 hover:border-cyan-400'
                        : 'bg-slate-950/90 border-red-800/50 hover:border-red-500'
                    )}
                  >
                    {/* Role & Jersey Number Tag */}
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-slate-800 text-slate-300 font-bold">
                        {coord.role}
                      </span>
                      <span
                        className={cn(
                          'text-xs font-black font-mono',
                          player?.teamId === 'HCD' ? 'text-cyan-400' : 'text-red-400'
                        )}
                      >
                        #{player?.jerseyNumber ?? '--'}
                      </span>
                    </div>

                    {/* Player Name */}
                    <div className="text-[11px] font-black text-white whitespace-nowrap">
                      {player ? player.name.split(' ').slice(-1)[0] : 'Empty'}
                    </div>

                    {/* Tactical Role Label */}
                    <span className="text-[10px] text-slate-300 font-mono block mt-0.5 whitespace-nowrap">
                      {coord.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
            <span>{t.tapToSwap}</span>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="text-cyan-400 hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              Browse 40 Roster Skaters
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Chemistry Engine & Shift Simulator (5 Columns) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Active Slot Quick Inspect Card */}
          <div className="bg-rink-card border border-rink-border p-4 rounded-2xl shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Selected Position: <strong className="text-cyan-400 font-black">{activeSlotRole}</strong>
              </span>
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg transition-colors cursor-pointer"
              >
                {t.changePlayer}
              </button>
            </div>

            {activeSlot?.player ? (
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      'w-12 h-12 rounded-xl flex flex-col items-center justify-center font-black shadow-md shrink-0',
                      activeSlot.player.teamId === 'HCD'
                        ? 'bg-blue-900 text-cyan-300 border border-cyan-400/40'
                        : 'bg-usa-navy text-white border border-usa-red/40'
                    )}
                  >
                    <span className="text-[10px] font-mono leading-none">{activeSlot.player.teamId}</span>
                    <span className="text-base font-black font-mono">#{activeSlot.player.jerseyNumber}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">{activeSlot.player.name}</h4>
                    <span className="text-xs text-cyan-400 font-medium">{activeSlot.player.archetype}</span>
                  </div>
                </div>

                <div className="text-right text-xs font-mono">
                  <div className="text-white font-bold">{activeSlot.player.topSpeedKmh} km/h</div>
                  <div className="text-slate-400">{activeSlot.player.passCompletionPct.toFixed(0)}% Pass</div>
                </div>
              </div>
            ) : (
              <div className="text-xs text-slate-500 font-mono text-center py-4">No player selected</div>
            )}
          </div>

          {/* Live Chemistry Gauge HUD */}
          <div className="bg-gradient-to-br from-slate-950 via-rink-card to-slate-950 border border-rink-border p-5 rounded-2xl shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  {t.calculatedSynergy}
                </span>
                <h3 className="text-base font-black text-white">{t.tacticalChemistry}</h3>
              </div>
              <div className="flex items-baseline gap-1">
                <span
                  className={cn(
                    'text-3xl font-black font-mono',
                    evaluation.chemistryScore >= 80 ? 'text-emerald-400' : 'text-cyan-400'
                  )}
                >
                  {evaluation.chemistryScore}
                </span>
                <span className="text-xs text-slate-400 font-mono">/ 100</span>
              </div>
            </div>

            {/* Tactical Strengths & Synergies */}
            <div className="space-y-2 text-xs">
              {evaluation.strengths.map((str, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-emerald-950/30 border border-emerald-500/20 p-2.5 rounded-lg text-emerald-200">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{str}</span>
                </div>
              ))}

              {evaluation.vulnerabilities.map((vuln, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-rose-950/30 border border-rose-500/20 p-2.5 rounded-lg text-rose-200">
                  <Shield className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{vuln}</span>
                </div>
              ))}
            </div>

            {/* Shift Simulation Trigger */}
            <button
              onClick={handleRunSimulation}
              disabled={isSimulating}
              className={cn(
                'w-full flex items-center justify-center gap-2 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg',
                isSimulating
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-cyan-400/20'
              )}
            >
              <Play className="w-4 h-4 fill-current" />
              {isSimulating ? 'Simulating 60s On-Ice Shift...' : t.runSimulationBtn}
            </button>
          </div>

          {/* Simulation Output Card */}
          {simReport && (
            <div
              className={cn(
                'p-4 rounded-xl border space-y-2 animate-in fade-in duration-200',
                simReport.rating === 'elite'
                  ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                  : simReport.rating === 'solid'
                  ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-300'
                  : 'bg-rose-950/30 border-rose-500/40 text-rose-300'
              )}
            >
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-cyan-400" />
                <h4 className="text-xs font-black text-white uppercase tracking-wide">
                  {simReport.headline}
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans" style={{ textWrap: 'pretty' }}>
                {simReport.detail}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Slide-in Player Roster Drawer (Modal) */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl p-6 shadow-2xl space-y-4 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-white">
                  Assign Skater to <span className="text-cyan-400">{activeSlotRole}</span>
                </h3>
                <p className="text-xs text-slate-400">Choose from official Spengler Cup tournament rosters</p>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Team Filter */}
            <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
              {(['ALL', 'HCD', 'USA'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setFilterTeam(filter)}
                  className={cn(
                    'px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer',
                    filterTeam === filter
                      ? 'bg-cyan-500 text-slate-950 font-black shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  )}
                >
                  {filter === 'ALL' ? 'All Rosters' : filter === 'HCD' ? 'HC Davos' : 'U.S. Selects'}
                </button>
              ))}
            </div>

            {/* Skaters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 overflow-y-auto pr-1 flex-1">
              {filteredPlayers.map((player) => {
                const isCurrent = activeSlot?.player?.playerId === player.playerId;
                return (
                  <div
                    key={player.playerId}
                    onClick={() => handleSelectPlayer(player)}
                    className={cn(
                      'p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3',
                      isCurrent
                        ? 'bg-cyan-950/40 border-cyan-400'
                        : 'bg-slate-950/80 border-slate-800 hover:border-slate-600 hover:bg-slate-900'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          'w-10 h-10 rounded-lg flex flex-col items-center justify-center font-black shrink-0 text-xs font-mono',
                          player.teamId === 'HCD' ? 'bg-blue-900 text-cyan-300' : 'bg-usa-navy text-white'
                        )}
                      >
                        #{player.jerseyNumber}
                      </div>
                      <div>
                        <div className="text-xs font-extrabold text-white flex items-center gap-1.5">
                          {player.name}
                          {isCurrent && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {player.teamId} · {player.position} · {player.archetype}
                        </span>
                      </div>
                    </div>

                    <div className="text-right text-[10px] font-mono text-slate-400">
                      <span className="text-white font-bold block">{player.topSpeedKmh}k</span>
                      <span>{player.passCompletionPct.toFixed(0)}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
