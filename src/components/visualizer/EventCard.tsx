import React from 'react';
import { DecisiveMoment } from '../../types/wisehockey';
import { Sparkles, Activity } from 'lucide-react';
import { cn } from '../../lib/utils';

interface EventCardProps {
  moment: DecisiveMoment;
  isProLens: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({ moment, isProLens }) => {
  const isHcd = moment.primaryTeamId === 'HCD';

  return (
    <div className="bg-rink-card border border-rink-border p-5 rounded-2xl space-y-4 shadow-xl">
      {/* Header Badge & Title */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className={cn(
                'px-2.5 py-0.5 text-[11px] font-mono font-bold rounded-md uppercase tracking-wider',
                isHcd
                  ? 'bg-blue-950/80 border border-blue-600/40 text-blue-300'
                  : 'bg-red-950/80 border border-red-600/40 text-red-300'
              )}
            >
              {moment.eventType.replace('_', ' ')}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Period {moment.period} · {moment.gameClock}
            </span>
          </div>
          <h3 className="text-lg font-extrabold text-white" style={{ textWrap: 'balance' }}>
            {moment.title}
          </h3>
        </div>

        {/* Headline Metric Chip */}
        <div className="bg-slate-900 border border-slate-700/80 px-3 py-1.5 rounded-lg text-right">
          <span className="text-[10px] text-slate-400 block uppercase font-mono">Key Metric</span>
          <span className="text-sm font-extrabold text-neon-cyan font-mono">
            {moment.headlineMetric}
          </span>
        </div>
      </div>

      {/* Dual Lens Dynamic Narrative */}
      {!isProLens ? (
        /* Fan Story Lens */
        <div className="bg-gradient-to-r from-slate-900/90 to-slate-900/50 border-l-4 border-hcd-yellow p-4 rounded-r-xl space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-hcd-yellow uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why This Moment Mattered</span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-sans" style={{ textWrap: 'pretty' }}>
            {moment.fanStoryInsight}
          </p>
        </div>
      ) : (
        /* Pro Analyst Lens */
        <div className="bg-slate-900/90 border-l-4 border-neon-cyan p-4 rounded-r-xl space-y-3 font-mono">
          <div className="flex items-center gap-1.5 text-xs font-bold text-neon-cyan uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5" />
            <span>Wisehockey Telemetry Breakdown</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {moment.proAnalystInsight}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800 text-xs">
            <div className="bg-slate-950 p-2 rounded-lg">
              <span className="text-[10px] text-slate-500 block uppercase">Peak Velocity</span>
              <span className="font-bold text-white">{moment.topSpeedKmh} km/h</span>
            </div>
            <div className="bg-slate-950 p-2 rounded-lg">
              <span className="text-[10px] text-slate-500 block uppercase">Puck Exit Speed</span>
              <span className="font-bold text-neon-cyan">{moment.puckVelocityKmh} km/h</span>
            </div>
            <div className="bg-slate-950 p-2 rounded-lg">
              <span className="text-[10px] text-slate-500 block uppercase">xG Impact</span>
              <span className={cn('font-bold', moment.expectedGoalDelta > 0 ? 'text-emerald-400' : 'text-amber-400')}>
                {moment.expectedGoalDelta > 0 ? `+${moment.expectedGoalDelta}` : moment.expectedGoalDelta}
              </span>
            </div>
            <div className="bg-slate-950 p-2 rounded-lg">
              <span className="text-[10px] text-slate-500 block uppercase">Sequence Duration</span>
              <span className="font-bold text-white">{moment.durationSeconds}s</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
