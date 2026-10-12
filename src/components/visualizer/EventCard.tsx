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

  // Step-by-step sequence breakdown based on active moment
  const playSteps = moment.id.includes('tambellini')
    ? [
        { time: '0.0s', title: 'Faceoff Win', detail: 'Nussbaumer (#66) wins clean draw at center red line' },
        { time: '2.1s', title: 'Zone Breakout', detail: 'Calle Andersson circulates puck across neutral zone' },
        { time: '4.3s', title: 'Slot Penetration', detail: 'Quick saucer seam pass feeds Tambellini cutting inside' },
        { time: '6.0s', title: '100.1 km/h Release', detail: 'Bullet shot beats Augustine high stick-side (+0.122 xG)' },
      ]
    : moment.id.includes('musa')
    ? [
        { time: '0.0s', title: 'Turnover Forced', detail: 'USA backcheck strips puck at defensive blue line' },
        { time: '1.8s', title: 'Counter Acceleration', detail: 'Jack Musa bursts to 34.2 km/h down the right wing' },
        { time: '3.9s', title: 'Defensive Gap Exploited', detail: 'Beats defenseman with outside speed into the circle' },
        { time: '5.2s', title: 'Breakaway Finish', detail: 'Low snap shot slips through 5-hole for collegiate response' },
      ]
    : [
        { time: '0.0s', title: 'Powerplay Setup', detail: 'Corvi sets up umbrella formation at the half-wall' },
        { time: '2.5s', title: 'Puck Circulation', detail: 'Quick 3-way cycle forces penalty kill box to over-commit' },
        { time: '4.6s', title: 'Cross-Ice Seam', detail: 'Laser diagonal pass threads through defending sticks' },
        { time: '5.8s', title: '99.4 km/h Dagger', detail: 'Stransky one-timer beats sprawling netminder (+0.74 xG)' },
      ];

  return (
    <div className="bg-slate-900/90 border border-white/15 p-5 sm:p-6 rounded-2xl space-y-5 shadow-2xl backdrop-blur-xl">
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

      {/* Step-by-Step Play Sequence (Visual Storytelling for Fans) */}
      <div className="bg-slate-950/80 p-4 rounded-xl border border-white/10 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
          <span>Sequence Breakdown · 6-Second Shift Timeline</span>
          <span className="text-amber-400">Wisehockey 20Hz Tracking</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {playSteps.map((step, sIdx) => (
            <div key={sIdx} className="bg-slate-900/90 border border-white/5 p-3 rounded-lg flex flex-col justify-between gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 font-mono font-black">
                  {step.time}
                </span>
                <span className="text-[10px] text-slate-500 font-mono font-bold">
                  Step {sIdx + 1}
                </span>
              </div>
              <div className="text-xs font-bold text-white leading-tight">
                {step.title}
              </div>
              <div className="text-[11px] text-slate-400 leading-tight">
                {step.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dual Lens Dynamic Narrative */}
      {!isProLens ? (
        /* Fan Story Lens */
        <div className="bg-gradient-to-r from-slate-950/90 to-slate-950/50 border-l-4 border-amber-400 p-4 sm:p-5 rounded-r-xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-black text-amber-400 uppercase tracking-wider font-mono">
            <Sparkles className="w-4 h-4 fill-current" />
            <span>Why This Shift Flipped The Game</span>
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
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Peak Skater Velocity</span>
              <span className="font-bold text-white text-sm">{moment.topSpeedKmh} km/h</span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Puck Release Speed</span>
              <span className="font-bold text-sky-400 text-sm">{moment.puckVelocityKmh} km/h</span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">xG Spike</span>
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
