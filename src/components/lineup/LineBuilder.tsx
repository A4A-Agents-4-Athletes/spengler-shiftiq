import React, { useState } from 'react';
import { sampleMatchData } from '../../data/sampleMatch';
import { TacticalPreset, LineupSlot } from '../../types/gamification';
import { evaluateLineup } from '../../lib/metricsCalculator';
import { Users, CheckCircle2, AlertTriangle, PlayCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

export const LineBuilder: React.FC = () => {
  const [preset, setPreset] = useState<TacticalPreset>('POWER_PLAY');
  const allPlayers = [
    ...sampleMatchData.rosters.hcd,
    ...sampleMatchData.rosters.usa,
  ];

  // Default starting lineup
  const [slots, setSlots] = useState<LineupSlot[]>([
    { role: 'LW', player: sampleMatchData.rosters.hcd[0] }, // Ambühl
    { role: 'C', player: sampleMatchData.rosters.hcd[2] },  // Corvi
    { role: 'RW', player: sampleMatchData.rosters.hcd[1] }, // Stransky
    { role: 'LD', player: sampleMatchData.rosters.usa[3] }, // Casey
    { role: 'RD', player: sampleMatchData.rosters.hcd[3] }, // Fora
  ]);

  const [simResult, setSimResult] = useState<string | null>(null);

  const evaluation = evaluateLineup(slots, preset);

  const handlePlayerSelect = (role: 'LW' | 'C' | 'RW' | 'LD' | 'RD', playerId: string) => {
    const selected = allPlayers.find((p) => p.playerId === playerId) || null;
    setSlots((prev) =>
      prev.map((s) => (s.role === role ? { ...s, player: selected } : s))
    );
    setSimResult(null);
  };

  const handleSimulate = () => {
    const score = evaluation.chemistryScore;
    if (score >= 88) {
      setSimResult(
        '🔥 Dominant Shift! Generated 2 high-danger scoring chances (+0.68 xG) with 0 counter-attacks allowed.'
      );
    } else if (score >= 75) {
      setSimResult(
        '✅ Solid Shift! Controlled 62% of neutral zone transition and forced 1 offensive zone faceoff.'
      );
    } else {
      setSimResult(
        '⚠️ High Risk Shift! Defensive gap breakdown permitted a dangerous odd-man rush against.'
      );
    }
  };

  return (
    <div className="space-y-6">
      {/* Preset Selector Header */}
      <div className="bg-rink-card border border-rink-border p-4 rounded-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-extrabold text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-neon-cyan" />
            Tactical Unit Builder
          </h3>
          <p className="text-xs text-slate-400">
            Combine Spengler Cup players to optimize tactical synergy for specific game scenarios.
          </p>
        </div>

        {/* Tactical Situation Tabs (Architectural Radii, NO pill) */}
        <div className="flex flex-wrap gap-2">
          {(
            [
              { id: 'POWER_PLAY', label: 'Power Play (5v4)' },
              { id: 'PENALTY_KILL', label: 'Penalty Kill (4v5)' },
              { id: 'THREE_ON_THREE_OT', label: '3-on-3 Overtime' },
              { id: 'FIVE_ON_FIVE', label: '5-on-5 Even Strength' },
            ] as const
          ).map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setPreset(p.id);
                setSimResult(null);
              }}
              className={cn(
                'px-3 py-1.5 rounded-lg text-xs font-bold transition-all border',
                preset === p.id
                  ? 'bg-neon-cyan text-slate-950 border-neon-cyan font-black shadow-md'
                  : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Roster Slot Pickers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {slots.map((slot) => (
          <div
            key={slot.role}
            className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl space-y-2.5"
          >
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 bg-slate-800 text-neon-cyan font-mono text-xs font-bold rounded">
                {slot.role}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {slot.player ? `#${slot.player.jerseyNumber}` : 'Empty'}
              </span>
            </div>

            <select
              value={slot.player?.playerId || ''}
              onChange={(e) => handlePlayerSelect(slot.role, e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-2.5 py-1.5 text-xs font-semibold focus:outline-none focus:border-neon-cyan"
            >
              {allPlayers.map((p) => (
                <option key={p.playerId} value={p.playerId}>
                  [{p.teamId}] #{p.jerseyNumber} {p.name}
                </option>
              ))}
            </select>

            {slot.player && (
              <div className="text-[11px] space-y-1 pt-1 border-t border-slate-800">
                <div className="text-slate-300 font-medium truncate">{slot.player.archetype}</div>
                <div className="flex justify-between text-slate-500 font-mono">
                  <span>Speed: {slot.player.topSpeedKmh}k</span>
                  <span>Pass: {slot.player.passCompletionPct.toFixed(0)}%</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Real-time Evaluation & Simulator Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chemistry Score & Composite Gauges */}
        <div className="lg:col-span-4 bg-rink-card border border-rink-border p-5 rounded-2xl flex flex-col justify-between space-y-4 shadow-xl">
          <div>
            <div className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
              Tactical Chemistry Rating
            </div>
            <div className="flex items-baseline gap-3 mt-1">
              <span className="text-5xl font-black text-neon-cyan font-mono">
                {evaluation.chemistryScore}
              </span>
              <span className="text-sm text-slate-400 font-bold">/ 100 Index</span>
            </div>
          </div>

          {/* Core Composite Metrics */}
          <div className="space-y-2.5">
            {[
              { label: 'Puck Circulation & Vision', val: evaluation.puckControlIndex },
              { label: 'Breakout & Transition Speed', val: evaluation.breakoutSpeedIndex },
              { label: 'Defensive Gap Control', val: evaluation.defensiveGapRating },
              { label: 'Physical Disruption & Battles', val: evaluation.physicalDisruptionScore },
            ].map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">{m.label}</span>
                  <span className="font-mono font-bold text-white">{m.val}</span>
                </div>
                <div className="w-full bg-slate-950 h-2 rounded-md overflow-hidden">
                  <div
                    className="bg-neon-cyan h-full rounded-md transition-all duration-300"
                    style={{ width: `${m.val}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Simulation Trigger */}
          <button
            onClick={handleSimulate}
            className="w-full py-2.5 bg-hcd-yellow text-slate-950 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors shadow-lg"
          >
            <PlayCircle className="w-4 h-4" />
            <span>Simulate 60-Second Shift</span>
          </button>
        </div>

        {/* Tactical Strengths & Tactical Vulnerabilities */}
        <div className="lg:col-span-8 bg-rink-card border border-rink-border p-5 rounded-2xl space-y-4 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h4 className="text-xs uppercase font-extrabold tracking-wider text-emerald-400 flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-4 h-4" />
                Lineup Strengths ({preset.replace('_', ' ')})
              </h4>
              <div className="space-y-2">
                {evaluation.strengths.map((str, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-slate-900/80 border border-emerald-900/40 rounded-xl text-xs text-slate-200"
                  >
                    {str}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase font-extrabold tracking-wider text-amber-400 flex items-center gap-1.5 mb-2">
                <AlertTriangle className="w-4 h-4" />
                Potential Vulnerabilities
              </h4>
              <div className="space-y-2">
                {evaluation.vulnerabilities.map((vuln, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-slate-900/80 border border-amber-900/40 rounded-xl text-xs text-slate-200"
                  >
                    {vuln}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Shift Outcome Simulation Output */}
          {simResult && (
            <div className="p-3.5 bg-slate-950 border border-neon-cyan/60 rounded-xl text-xs font-mono text-neon-cyan shadow-inner">
              {simResult}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
