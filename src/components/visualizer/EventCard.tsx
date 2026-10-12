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
    <div className="bg-slate-900/90 border border-white/15 p-5 sm:p-6 rounded-2xl space-y-4 shadow-2xl backdrop-blur-xl">
      {/* Header Badge & Title */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className={cn(
                'px-2.5 py-0.5 text-[11px] font-mono font-black rounded-md uppercase tracking-wider',
                isHcd
                  ? 'bg-blue-950 border border-blue-500/50 text-blue-300'
                  : 'bg-red-950 border border-red-500/50 text-red-300'
              )}
            >
              {moment.eventType.replace('_', ' ')}
            </span>
            <span className="text-xs text-slate-400 font-mono font-bold">
              Period {moment.period} · {moment.gameClock}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight" style={{ textWrap: 'balance' }}>
            {moment.title}
          </h3>
        </div>

        {/* Headline Metric Chip */}
        <div className="bg-slate-950 border border-amber-400/40 px-4 py-2 rounded-xl text-left sm:text-right shrink-0 shadow-lg">
          <span className="text-[10px] text-slate-400 block uppercase font-mono font-bold">Wisehockey Metric</span>
          <span className="text-base sm:text-lg font-black text-amber-400 font-mono">
            {moment.headlineMetric}
          </span>
        </div>
      </div>

      {/* Dual Lens Dynamic Narrative */}
      {!isProLens ? (
        /* Fan Story Lens */
        <div className="bg-gradient-to-r from-slate-950/90 to-slate-950/50 border-l-4 border-amber-400 p-4 sm:p-5 rounded-r-xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-black text-amber-400 uppercase tracking-wider font-mono">
            <Sparkles className="w-4 h-4 fill-current" />
            <span>Why This Moment Mattered</span>
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans" style={{ textWrap: 'pretty' }}>
            {moment.fanStoryInsight}
          </p>
        </div>
      ) : (
        /* Pro Analyst Lens */
        <div className="bg-slate-950/90 border-l-4 border-sky-400 p-4 sm:p-5 rounded-r-xl space-y-3 font-mono">
          <div className="flex items-center gap-2 text-xs font-black text-sky-400 uppercase tracking-wider">
            <Activity className="w-4 h-4" />
            <span>Wisehockey 20Hz Telemetry Breakdown</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {moment.proAnalystInsight}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-slate-800 text-xs">
            <div className="bg-slate-900 p-2.5 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Peak Velocity</span>
              <span className="font-bold text-white text-sm">{moment.topSpeedKmh} km/h</span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Puck Release Speed</span>
              <span className="font-bold text-sky-400 text-sm">{moment.puckVelocityKmh} km/h</span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">xG Impact</span>
              <span className={cn('font-bold text-sm', moment.expectedGoalDelta > 0 ? 'text-emerald-400' : 'text-amber-400')}>
                {moment.expectedGoalDelta > 0 ? `+${moment.expectedGoalDelta}` : moment.expectedGoalDelta}
              </span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Sequence Duration</span>
              <span className="font-bold text-white text-sm">{moment.durationSeconds}s</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
