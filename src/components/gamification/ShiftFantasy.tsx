import React, { useState } from 'react';
import officialData from '../../data/officialWisehockeyParsed.json';
import { Zap, Target, Shield, Trophy, Flame, Clock, Play, RotateCcw, Award } from 'lucide-react';
import { cn } from '../../lib/utils';

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

const allPlayers: PlayerSummary[] = [
  ...((officialData.hcdPlayers || []) as PlayerSummary[]),
  ...((officialData.usaPlayers || []) as PlayerSummary[]),
];

export const ShiftFantasy: React.FC = () => {
  const [selectedRocket, setSelectedRocket] = useState<PlayerSummary | null>(
    allPlayers.find((p) => p.name === 'Adam Tambellini') || allPlayers[0] || null
  );
  const [selectedSniper, setSelectedSniper] = useState<PlayerSummary | null>(
    allPlayers.find((p) => p.name === 'Matej Stransky') || allPlayers[1] || null
  );
  const [selectedAnchor, setSelectedAnchor] = useState<PlayerSummary | null>(
    allPlayers.find((p) => p.name === 'Michael Fora') || allPlayers[2] || null
  );

  const [activeSlot, setActiveSlot] = useState<'rocket' | 'sniper' | 'anchor'>('rocket');
  const [teamFilter, setTeamFilter] = useState<'ALL' | 'HCD' | 'USA'>('ALL');
  const [hasSimulated, setHasSimulated] = useState<boolean>(false);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

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

    // Rocket points (Speed & Distance)
    const rocketSpeedBonus = selectedRocket.topSpeedKmh >= 32.5 ? 4.5 : 2.5;
    const rocketDistPts = Number((selectedRocket.totalDistanceMeters / 1200).toFixed(1));
    const rocketPts = Number((rocketSpeedBonus + rocketDistPts).toFixed(1));

    // Sniper points (Shot Velocity, Goals, xG)
    const sniperShotPts = selectedSniper.shotsOnGoal * 1.5;
    const sniperGoalPts = selectedSniper.goals * 5.0;
    const sniperXgPts = Number((selectedSniper.expectedGoals * 10).toFixed(1));
    const sniperPts = Number((sniperShotPts + sniperGoalPts + sniperXgPts + 3.0).toFixed(1));

    // Anchor points (Battles, Blocks, Passes)
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
    setTimeout(() => {
      setIsSimulating(false);
      setHasSimulated(true);
    }, 800);
  };

  const handleReset = () => {
    setHasSimulated(false);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Top Banner: Beyond Coach's Laptop Vision */}
      <div className="bg-gradient-to-r from-rink-card via-slate-900 to-rink-card border border-rink-border p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan font-mono text-[11px] font-bold rounded-md uppercase tracking-wider">
              Beyond Coach&apos;s Laptop
            </span>
            <span className="text-slate-500 text-xs">•</span>
            <span className="text-xs text-hcd-yellow font-extrabold uppercase tracking-wide flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              18-Minute Intermission Micro-Fantasy
            </span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Spengler Shift Fantasy: The 3-Skater Triad
          </h2>
          <p className="text-xs text-slate-300 max-w-2xl" style={{ textWrap: 'pretty' }}>
            Don&apos;t just wait for a goal. Draft 3 players for the upcoming period and score fantasy points powered directly by Wisehockey 20Hz sensor chips: skating bursts, puck battle wins, and shot velocity.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
          <div className="text-right">
            <span className="text-[10px] font-mono text-slate-400 block uppercase">Intermission Clock</span>
            <span className="text-lg font-mono font-black text-neon-yellow">11:42 left</span>
          </div>
          <div className="w-9 h-9 bg-hcd-yellow/20 border border-hcd-yellow/40 rounded-lg flex items-center justify-center text-hcd-yellow">
            <Flame className="w-5 h-5" />
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
              ? 'bg-slate-900 border-neon-cyan shadow-lg shadow-neon-cyan/10'
              : 'bg-rink-card border-rink-border hover:border-slate-700'
          )}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-neon-cyan/20 text-neon-cyan flex items-center justify-center font-bold">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neon-cyan font-bold block">
                  Role 1: Speed Demon
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
                  <span className="text-xs font-mono text-neon-cyan font-bold">#{selectedRocket.jerseyNumber}</span>
                  <h4 className="text-base font-black text-white">{selectedRocket.name}</h4>
                  <span className="text-[11px] text-slate-400">{selectedRocket.teamId} · {selectedRocket.position}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Top Speed</span>
                  <span className="text-sm font-black text-neon-cyan font-mono">{selectedRocket.topSpeedKmh} km/h</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-800/80 font-mono text-slate-300">
                <div>Distance: {selectedRocket.totalDistanceMeters}m</div>
                <div className="text-right text-neon-cyan">Score: +{scores.rocketPts} pts</div>
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
              ? 'bg-slate-900 border-hcd-yellow shadow-lg shadow-hcd-yellow/10'
              : 'bg-rink-card border-rink-border hover:border-slate-700'
          )}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-hcd-yellow/20 text-hcd-yellow flex items-center justify-center font-bold">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-hcd-yellow font-bold block">
                  Role 2: Heavy Firepower
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
                  <span className="text-xs font-mono text-hcd-yellow font-bold">#{selectedSniper.jerseyNumber}</span>
                  <h4 className="text-base font-black text-white">{selectedSniper.name}</h4>
                  <span className="text-[11px] text-slate-400">{selectedSniper.teamId} · {selectedSniper.position}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Shots / xG</span>
                  <span className="text-sm font-black text-hcd-yellow font-mono">{selectedSniper.shotsOnGoal} / {selectedSniper.expectedGoals}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-800/80 font-mono text-slate-300">
                <div>Goals: {selectedSniper.goals}</div>
                <div className="text-right text-hcd-yellow">Score: +{scores.sniperPts} pts</div>
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
              ? 'bg-slate-900 border-neon-green shadow-lg shadow-neon-green/10'
              : 'bg-rink-card border-rink-border hover:border-slate-700'
          )}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-neon-green/20 text-neon-green flex items-center justify-center font-bold">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neon-green font-bold block">
                  Role 3: Defensive Rock
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
                  <span className="text-xs font-mono text-neon-green font-bold">#{selectedAnchor.jerseyNumber}</span>
                  <h4 className="text-base font-black text-white">{selectedAnchor.name}</h4>
                  <span className="text-[11px] text-slate-400">{selectedAnchor.teamId} · {selectedAnchor.position}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Puck Battles</span>
                  <span className="text-sm font-black text-neon-green font-mono">{selectedAnchor.puckBattleWinPct}%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-800/80 font-mono text-slate-300">
                <div>Blocks: {selectedAnchor.blockedShots}</div>
                <div className="text-right text-neon-green">Score: +{scores.anchorPts} pts</div>
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
          <div className="w-14 h-14 rounded-xl bg-hcd-yellow text-slate-950 flex flex-col items-center justify-center font-black shadow-lg shadow-hcd-yellow/20">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
              Calculated Triad Shift Impact
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
                  : 'bg-neon-cyan hover:bg-neon-cyan/90 text-slate-950 shadow-lg shadow-neon-cyan/20 cursor-pointer'
              )}
            >
              <Play className="w-4 h-4 fill-current" />
              {isSimulating ? 'Simulating Wisehockey Stream...' : 'Lock In & Simulate Period Shift'}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Lineup
            </button>
          )}
        </div>
      </div>

      {/* Simulated Live Results & Leaderboard Feedback */}
      {hasSimulated && (
        <div className="bg-gradient-to-br from-emerald-950/40 via-rink-card to-rink-card border border-emerald-500/40 p-6 rounded-2xl space-y-4 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white">Period 2 Shift Completed!</h4>
                <p className="text-xs text-slate-300">
                  Your Triad scored <strong>{scores.total} points</strong>, ranking in the top <strong>6%</strong> of 14,280 fans on SRF zwei &amp; Eisstadion Davos.
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-lg font-bold">
              Rank #857 Overall
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-emerald-500/20 text-xs">
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px] font-mono uppercase">Rocket Contribution</span>
              <span className="text-sm font-bold text-neon-cyan font-mono">+{scores.rocketPts} pts</span>
              <p className="text-[11px] text-slate-400 mt-1">Clocked 34.2 km/h sprint down right wing.</p>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px] font-mono uppercase">Sniper Contribution</span>
              <span className="text-sm font-bold text-hcd-yellow font-mono">+{scores.sniperPts} pts</span>
              <p className="text-[11px] text-slate-400 mt-1">Unleashed 98.4 km/h one-timer from left circle.</p>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px] font-mono uppercase">Anchor Contribution</span>
              <span className="text-sm font-bold text-neon-green font-mono">+{scores.anchorPts} pts</span>
              <p className="text-[11px] text-slate-400 mt-1">Won 3 critical board battles in defensive zone.</p>
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
                    ? 'bg-hcd-blue text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                )}
              >
                {filter === 'ALL' ? 'All Teams' : filter === 'HCD' ? 'HC Davos' : 'U.S. Selects'}
              </button>
            ))}
          </div>
        </div>

        {/* Skater Roster Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-96 overflow-y-auto pr-1">
          {filteredPlayers.map((player) => {
            const isAssigned =
              selectedRocket?.playerId === player.playerId ||
              selectedSniper?.playerId === player.playerId ||
              selectedAnchor?.playerId === player.playerId;

            return (
              <div
                key={player.playerId}
                onClick={() => handleSelectPlayer(player)}
                className={cn(
                  'p-3 rounded-xl border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between',
                  isAssigned
                    ? 'bg-slate-900/90 border-slate-700 opacity-90'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-600 hover:bg-slate-900'
                )}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400">#{player.jerseyNumber}</span>
                    <h5 className="text-xs font-extrabold text-white">{player.name}</h5>
                    <span className="text-[10px] text-slate-400">{player.teamId} · {player.position}</span>
                  </div>
                  <span
                    className={cn(
                      'text-[9px] font-mono px-1.5 py-0.5 rounded-md font-bold',
                      player.teamId === 'HCD'
                        ? 'bg-hcd-blue/30 text-hcd-yellow border border-hcd-yellow/30'
                        : 'bg-red-950/40 text-red-300 border border-red-800/40'
                    )}
                  >
                    {player.teamId}
                  </span>
                </div>

                <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Speed: {player.topSpeedKmh}k</span>
                  <span>Battle: {player.puckBattleWinPct}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
