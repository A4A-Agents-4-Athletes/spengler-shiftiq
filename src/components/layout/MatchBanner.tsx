import React from 'react';
import { sampleMatchData } from '../../data/sampleMatch';
import { Gauge, Zap, MapPin } from 'lucide-react';

export const MatchBanner: React.FC = () => {
  const { homeTeam, awayTeam, periods, arena } = sampleMatchData;

  return (
    <div className="bg-gradient-to-b from-rink-card to-rink-surface border-b border-rink-border py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Team Matchup & Score */}
          <div className="lg:col-span-7 flex items-center justify-between bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
            {/* Home: HC Davos */}
            <div className="flex items-center gap-4 flex-1">
              <div className="w-14 h-14 bg-hcd-blue border-2 border-hcd-yellow rounded-xl flex items-center justify-center font-black text-xl text-hcd-yellow shadow-md">
                HCD
              </div>
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-hcd-yellow">
                  Host Club
                </span>
                <h2 className="text-lg sm:text-xl font-extrabold text-white">
                  {homeTeam.fullName}
                </h2>
                <span className="text-xs text-slate-400 font-mono">
                  SOG: {homeTeam.shotsOnGoal} • PP: {homeTeam.powerPlays.goals}/{homeTeam.powerPlays.opportunities}
                </span>
              </div>
            </div>

            {/* Score Center */}
            <div className="flex flex-col items-center px-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                  {homeTeam.score}
                </span>
                <span className="text-xl font-bold text-slate-500">:</span>
                <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                  {awayTeam.score}
                </span>
              </div>
              <span className="px-2.5 py-0.5 mt-1 bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 font-mono font-bold text-xs rounded-md uppercase tracking-wider">
                Final
              </span>
              <div className="flex gap-2 text-[10px] text-slate-400 font-mono mt-1">
                {periods.map((p) => (
                  <span key={p.period} className="px-1.5 py-0.5 bg-slate-800 rounded">
                    P{p.period} {p.homeScore}-{p.awayScore}
                  </span>
                ))}
              </div>
            </div>

            {/* Away: USA Collegiate */}
            <div className="flex items-center justify-end gap-4 flex-1 text-right">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-usa-red">
                  Invited Selection
                </span>
                <h2 className="text-lg sm:text-xl font-extrabold text-white">
                  {awayTeam.fullName}
                </h2>
                <span className="text-xs text-slate-400 font-mono">
                  SOG: {awayTeam.shotsOnGoal} • PP: {awayTeam.powerPlays.goals}/{awayTeam.powerPlays.opportunities}
                </span>
              </div>
              <div className="w-14 h-14 bg-usa-navy border-2 border-usa-red rounded-xl flex items-center justify-center font-black text-xl text-white shadow-md">
                USA
              </div>
            </div>
          </div>

          {/* Key Game Telemetry Highlights */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            <div className="bg-slate-900/60 border border-slate-800/80 p-3 rounded-xl">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Peak Sprint</span>
              </div>
              <div className="text-base font-bold text-white font-mono">38.6 km/h</div>
              <div className="text-[11px] text-slate-400 truncate">F. Nazar (USA #91)</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 p-3 rounded-xl">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Gauge className="w-3.5 h-3.5 text-neon-cyan" />
                <span>Hardest Shot</span>
              </div>
              <div className="text-base font-bold text-white font-mono">157.6 km/h</div>
              <div className="text-[11px] text-slate-400 truncate">J. Snuggerud (USA)</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 p-3 rounded-xl col-span-2 sm:col-span-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Arena & Fans</span>
              </div>
              <div className="text-base font-bold text-white truncate font-mono">6,547 Cap</div>
              <div className="text-[11px] text-slate-400 truncate">{arena}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
