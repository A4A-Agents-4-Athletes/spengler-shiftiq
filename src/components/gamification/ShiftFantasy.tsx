import React, { useState } from 'react';
import officialData from '../../data/officialWisehockeyParsed.json';
import { Zap, Target, Shield, Trophy, Clock, Play, RotateCcw, Award } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Language, translations } from '../../lib/i18n';

interface PlayerSummary {
  playerId: string;
  jerseyNumber: number;
  name: string;
  teamId: 'HCD' | 'USA';
  position: string;
  archetype: string;
  topSpeedKmh: number;
  totalDistanceMeters: number;
  puckBattleWinPct: number;
  blockedShots: number;
  shotsOnGoal: number;
  expectedGoals: number;
  goals: number;
  assists: number;
  passCompletionPct: number;
}

interface ShiftFantasyProps {
  language?: Language;
  onAddXp?: (amount: number, reasonEn: string, reasonDe: string) => void;
}

const allPlayers: PlayerSummary[] = [
  ...((officialData.hcdPlayers || []) as PlayerSummary[]),
  ...((officialData.usaPlayers || []) as PlayerSummary[]),
];

export const ShiftFantasy: React.FC<ShiftFantasyProps> = ({ language = 'EN', onAddXp }) => {
  const t = translations[language];

  const [selectedRocket, setSelectedRocket] = useState<PlayerSummary | null>(
    allPlayers.find((p) => p.name === 'Filip Zadina') || allPlayers[0] || null
  );
  const [selectedSniper, setSelectedSniper] = useState<PlayerSummary | null>(
    allPlayers.find((p) => p.name === 'Adam Tambellini') || allPlayers[1] || null
  );
  const [selectedAnchor, setSelectedAnchor] = useState<PlayerSummary | null>(
    allPlayers.find((p) => p.name === 'Klas Dahlbeck') || allPlayers[2] || null
  );

  const [activeSlot, setActiveSlot] = useState<'rocket' | 'sniper' | 'anchor'>('rocket');
  const [teamFilter, setTeamFilter] = useState<'ALL' | 'HCD' | 'USA'>('ALL');
  const [hasSimulated, setHasSimulated] = useState<boolean>(false);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simStep, setSimStep] = useState<number>(0);

  const filteredPlayers = allPlayers.filter((p) => {
    if (teamFilter === 'ALL') return true;
    return p.teamId === teamFilter;
  });

  const handleSelectPlayer = (player: PlayerSummary) => {
    if (activeSlot === 'rocket') {
      setSelectedRocket(player);
    } else if (activeSlot === 'sniper') {
      setSelectedSniper(player);
    } else if (activeSlot === 'anchor') {
      setSelectedAnchor(player);
    }
  };

  const calculatePoints = () => {
    if (!selectedRocket || !selectedSniper || !selectedAnchor) return { rocketPts: 0, sniperPts: 0, anchorPts: 0, total: 0 };

    const rocketSpeedBonus = selectedRocket.topSpeedKmh >= 32.5 ? 4.5 : 2.5;
    const rocketDistPts = Number((selectedRocket.totalDistanceMeters / 1200).toFixed(1));
    const rocketPts = Number((rocketSpeedBonus + rocketDistPts).toFixed(1));

    const sniperShotPts = selectedSniper.shotsOnGoal * 1.5;
    const sniperGoalPts = selectedSniper.goals * 5.0;
    const sniperXgPts = Number((selectedSniper.expectedGoals * 10).toFixed(1));
    const sniperPts = Number((sniperShotPts + sniperGoalPts + sniperXgPts + 3.0).toFixed(1));

    const anchorBattlePts = Number(((selectedAnchor.puckBattleWinPct / 100) * 5.0).toFixed(1));
    const anchorBlockPts = selectedAnchor.blockedShots * 2.5;
    const anchorPassPts = Number(((selectedAnchor.passCompletionPct / 100) * 3.0).toFixed(1));
    const anchorPts = Number((anchorBattlePts + anchorBlockPts + anchorPassPts + 2.0).toFixed(1));

    const total = Number((rocketPts + sniperPts + anchorPts).toFixed(1));

    return { rocketPts, sniperPts, anchorPts, total };
  };

  const scores = calculatePoints();

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimStep(1);

    setTimeout(() => setSimStep(2), 400);
    setTimeout(() => setSimStep(3), 800);
    setTimeout(() => {
      setIsSimulating(false);
      setHasSimulated(true);
      onAddXp?.(100, 'Locked in 3-Skater Triad Fantasy', '3er-Triad im Shift-Fantasy eingeloggt');
    }, 1200);
  };

  const handleReset = () => {
    setHasSimulated(false);
    setSimStep(0);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Top Banner: Beyond Coach's Laptop Vision */}
      <div className="bg-gradient-to-r from-rink-card via-slate-900 to-rink-card border border-rink-border p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-[11px] font-bold rounded-md uppercase tracking-wider">
              Beyond Coach&apos;s Laptop
            </span>
            <span className="text-slate-500 text-xs">•</span>
            <span className="text-xs text-cyan-400 font-extrabold uppercase tracking-wide flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5" />
              {t.intermissionMicroFantasy}
            </span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {t.fantasyTitle}
          </h2>
          <p className="text-xs text-slate-300 max-w-2xl" style={{ textWrap: 'pretty' }}>
            {t.fantasyDesc}
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
          <div className="text-right">
            <span className="text-[10px] font-mono text-slate-400 block uppercase">{t.intermissionClock}</span>
            <span className="text-lg font-mono font-black text-cyan-400">11:42 {t.timeLeft}</span>
          </div>
          <div className="w-9 h-9 bg-cyan-500/20 border border-cyan-400/40 rounded-lg flex items-center justify-center text-cyan-400">
            <Zap className="w-5 h-5 fill-current" />
          </div>
        </div>
      </div>

      {/* Main Grid: Shift Triad Selector & Score Board */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Slot 1: The Rocket */}
        <div
          onClick={() => setActiveSlot('rocket')}
          className={cn(
            'p-5 rounded-2xl border transition-all duration-200 cursor-pointer relative overflow-hidden',
            activeSlot === 'rocket'
              ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-400/15 ring-1 ring-cyan-400/50'
              : 'bg-rink-card border-rink-border hover:border-slate-700'
          )}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">
                  {t.role1Title}
                </span>
                <h3 className="text-sm font-extrabold text-white">The Rocket</h3>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
              Speed &gt; 32 km/h
            </span>
          </div>

          {selectedRocket ? (
            <div className="space-y-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold">#{selectedRocket.jerseyNumber}</span>
                  <h4 className="text-base font-black text-white">{selectedRocket.name}</h4>
                  <span className="text-[11px] text-slate-400">{selectedRocket.teamId} · {selectedRocket.position}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Top Speed</span>
                  <span className="text-sm font-black text-cyan-400 font-mono">{selectedRocket.topSpeedKmh} km/h</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-800/80 font-mono text-slate-300">
                <div>Distance: {selectedRocket.totalDistanceMeters}m</div>
                <div className="text-right text-cyan-400 font-bold">Score: +{scores.rocketPts} pts</div>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 text-xs text-slate-500 font-mono">Select a skater below</div>
          )}
        </div>

        {/* Slot 2: The Sniper */}
        <div
          onClick={() => setActiveSlot('sniper')}
          className={cn(
            'p-5 rounded-2xl border transition-all duration-200 cursor-pointer relative overflow-hidden',
            activeSlot === 'sniper'
              ? 'bg-slate-900 border-sky-400 shadow-lg shadow-sky-400/15 ring-1 ring-sky-400/50'
              : 'bg-rink-card border-rink-border hover:border-slate-700'
          )}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold block">
                  {t.role2Title}
                </span>
                <h3 className="text-sm font-extrabold text-white">The Sniper</h3>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
              Shot Vel &amp; xG
            </span>
          </div>

          {selectedSniper ? (
            <div className="space-y-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-sky-400 font-bold">#{selectedSniper.jerseyNumber}</span>
                  <h4 className="text-base font-black text-white">{selectedSniper.name}</h4>
                  <span className="text-[11px] text-slate-400">{selectedSniper.teamId} · {selectedSniper.position}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Shots / xG</span>
                  <span className="text-sm font-black text-sky-400 font-mono">
                    {selectedSniper.shotsOnGoal} / {selectedSniper.expectedGoals.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-800/80 font-mono text-slate-300">
                <div>Goals: {selectedSniper.goals}</div>
                <div className="text-right text-sky-400 font-bold">Score: +{scores.sniperPts} pts</div>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 text-xs text-slate-500 font-mono">Select a skater below</div>
          )}
        </div>

        {/* Slot 3: The Anchor */}
        <div
          onClick={() => setActiveSlot('anchor')}
          className={cn(
            'p-5 rounded-2xl border transition-all duration-200 cursor-pointer relative overflow-hidden',
            activeSlot === 'anchor'
              ? 'bg-slate-900 border-emerald-400 shadow-lg shadow-emerald-400/15 ring-1 ring-emerald-400/50'
              : 'bg-rink-card border-rink-border hover:border-slate-700'
          )}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                  {t.role3Title}
                </span>
                <h3 className="text-sm font-extrabold text-white">The Anchor</h3>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
              Battles &amp; Blocks
            </span>
          </div>

          {selectedAnchor ? (
            <div className="space-y-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-emerald-400 font-bold">#{selectedAnchor.jerseyNumber}</span>
                  <h4 className="text-base font-black text-white">{selectedAnchor.name}</h4>
                  <span className="text-[11px] text-slate-400">{selectedAnchor.teamId} · {selectedAnchor.position}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Puck Battles</span>
                  <span className="text-sm font-black text-emerald-400 font-mono">{selectedAnchor.puckBattleWinPct}%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-800/80 font-mono text-slate-300">
                <div>Blocks: {selectedAnchor.blockedShots}</div>
                <div className="text-right text-emerald-400 font-bold">Score: +{scores.anchorPts} pts</div>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 text-xs text-slate-500 font-mono">Select a skater below</div>
          )}
        </div>
      </div>

      {/* Simulation & Real-Time Scoring Action */}
      <div className="bg-slate-950 border border-rink-border p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950 flex flex-col items-center justify-center font-black shadow-lg shadow-cyan-400/20">
            <Trophy className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
              {t.triadImpact}
            </div>
            <div className="text-3xl font-black text-white font-mono flex items-baseline gap-2">
              <span>{scores.total}</span>
              <span className="text-sm font-normal text-slate-400">Telemetry Pts</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          {!hasSimulated ? (
            <button
              onClick={handleSimulate}
              disabled={isSimulating}
              className={cn(
                'flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm uppercase tracking-wider transition-all duration-200',
                isSimulating
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-400/25 cursor-pointer'
              )}
            >
              <Play className="w-4 h-4 fill-current" />
              {isSimulating ? t.simulatingText : t.lockInBtn}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {t.resetLineupBtn}
            </button>
          )}
        </div>
      </div>

      {/* Live Period Simulation Ticker (Gamification Visual Playback) */}
      {isSimulating && (
        <div className="bg-slate-900 border border-cyan-500/40 p-5 rounded-2xl space-y-3 shadow-xl">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-cyan-400 animate-ping" />
              {t.liveSimulationTicker}
            </span>
            <span>20Hz Sensor Stream</span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            {simStep >= 1 && (
              <div className="p-2.5 rounded-lg bg-slate-950 border border-cyan-500/20 text-cyan-200 animate-in fade-in slide-in-from-left">
                ⚡ Min 04:18: #{selectedRocket?.jerseyNumber} {selectedRocket?.name} accelerates to {selectedRocket?.topSpeedKmh} km/h (+{scores.rocketPts} pts)
              </div>
            )}
            {simStep >= 2 && (
              <div className="p-2.5 rounded-lg bg-slate-950 border border-sky-500/20 text-sky-200 animate-in fade-in slide-in-from-left">
                🎯 Min 11:24: #{selectedSniper?.jerseyNumber} {selectedSniper?.name} unleashes {selectedSniper?.shotsOnGoal} shots on goal (+{scores.sniperPts} pts)
              </div>
            )}
            {simStep >= 3 && (
              <div className="p-2.5 rounded-lg bg-slate-950 border border-emerald-500/20 text-emerald-200 animate-in fade-in slide-in-from-left">
                🛡️ Min 16:50: #{selectedAnchor?.jerseyNumber} {selectedAnchor?.name} wins board battle ({selectedAnchor?.puckBattleWinPct}%) (+{scores.anchorPts} pts)
              </div>
            )}
          </div>
        </div>
      )}

      {/* Simulated Live Results & Leaderboard Feedback */}
      {hasSimulated && !isSimulating && (
        <div className="bg-gradient-to-br from-cyan-950/40 via-rink-card to-rink-card border border-cyan-500/40 p-6 rounded-2xl space-y-4 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white">Period 2 Shift Completed!</h4>
                <p className="text-xs text-slate-300">
                  Your Triad scored <strong>{scores.total} points</strong>, ranking in the top <strong>6%</strong> of 14,280 fans on SRF zwei &amp; Eisstadion Davos.
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 rounded-lg font-bold">
              Rank #857 Overall
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-cyan-500/20 text-xs">
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px] font-mono uppercase">Rocket Contribution</span>
              <span className="text-sm font-bold text-cyan-400 font-mono">+{scores.rocketPts} pts</span>
              <p className="text-[11px] text-slate-400 mt-1">Clocked {selectedRocket?.topSpeedKmh} km/h sprint down right wing.</p>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px] font-mono uppercase">Sniper Contribution</span>
              <span className="text-sm font-bold text-sky-400 font-mono">+{scores.sniperPts} pts</span>
              <p className="text-[11px] text-slate-400 mt-1">Generated {selectedSniper?.shotsOnGoal} shots on net (+{selectedSniper?.expectedGoals} xG).</p>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px] font-mono uppercase">Anchor Contribution</span>
              <span className="text-sm font-bold text-emerald-400 font-mono">+{scores.anchorPts} pts</span>
              <p className="text-[11px] text-slate-400 mt-1">Won {selectedAnchor?.puckBattleWinPct}% of battles and blocked {selectedAnchor?.blockedShots} shots.</p>
            </div>
          </div>
        </div>
      )}

      {/* Skater Selection Tray (The 40 Official Wisehockey Skaters) */}
      <div className="bg-rink-card border border-rink-border p-6 rounded-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-extrabold text-white">Select Skater for {activeSlot.toUpperCase()}</h3>
            <p className="text-xs text-slate-400">
              Choose from the official 40 Wisehockey roster skaters to assign to your active slot.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
            {(['ALL', 'HCD', 'USA'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setTeamFilter(filter)}
                className={cn(
                  'px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer',
                  teamFilter === filter
                    ? 'bg-cyan-500 text-slate-950 font-black shadow'
                    : 'text-slate-400 hover:text-slate-200'
                )}
              >
                {filter === 'ALL' ? 'All Teams' : filter === 'HCD' ? 'HC Davos' : 'U.S. Selects'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-h-72 overflow-y-auto pr-2 scrollbar-thin">
          {filteredPlayers.map((p) => {
            const isAssigned =
              selectedRocket?.playerId === p.playerId ||
              selectedSniper?.playerId === p.playerId ||
              selectedAnchor?.playerId === p.playerId;

            return (
              <button
                key={p.playerId}
                onClick={() => handleSelectPlayer(p)}
                className={cn(
                  'p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2',
                  isAssigned
                    ? 'bg-cyan-950/40 border-cyan-500/50 shadow-sm'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-600'
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'text-xs font-mono font-bold px-1.5 py-0.5 rounded',
                      p.teamId === 'HCD' ? 'bg-blue-900/60 text-cyan-300' : 'bg-red-900/60 text-red-300'
                    )}
                  >
                    #{p.jerseyNumber}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{p.position}</span>
                </div>

                <div>
                  <div className="text-xs font-extrabold text-white truncate">{p.name}</div>
                  <div className="text-[10px] text-slate-400 truncate">{p.archetype}</div>
                </div>

                <div className="text-[10px] font-mono text-cyan-400 border-t border-slate-800/80 pt-1 flex justify-between">
                  <span>{p.topSpeedKmh} km/h</span>
                  <span>{p.shotsOnGoal} SOG</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
