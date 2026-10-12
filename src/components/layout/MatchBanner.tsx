import React from 'react';
import { sampleMatchData } from '../../data/sampleMatch';
import { Zap, Gauge, MapPin, Radio } from 'lucide-react';

export const MatchBanner: React.FC = () => {
  const { homeTeam, awayTeam, periods, arena } = sampleMatchData;

  return (
    <div className="bg-gradient-to-b from-[#141b2b] via-[#0d1322] to-[#080d19] border-b border-white/10 py-5 px-4 sm:px-6 lg:px-8 shadow-2xl relative overflow-hidden">
      {/* Subtle stadium light glow in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-28 bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-4 relative z-10">
        {/* Main Broadcast Scoreboard */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-900/80 backdrop-blur-xl border border-white/15 p-5 sm:p-6 rounded-2xl shadow-2xl">
          {/* Home Team: HC Davos */}
          <div className="flex items-center gap-4 flex-1 w-full md:w-auto">
            <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-[#003882] to-[#001d4a] border-2 border-amber-400 rounded-xl flex flex-col items-center justify-center font-black shadow-lg shadow-blue-950/60 shrink-0">
              <span className="text-[10px] text-amber-300 font-mono tracking-widest uppercase">HCD</span>
              <span className="text-xl sm:text-2xl text-amber-400 font-black tracking-tighter">1921</span>
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[10px] font-bold rounded-md uppercase tracking-wider font-mono">
                  Host Club
                </span>
                <span className="text-xs text-slate-400 font-mono">Spengler Cup Host</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans">
                {homeTeam.fullName}
              </h2>
              <div className="flex items-center gap-3 text-xs text-slate-300 font-mono">
                <span>Shots: <strong className="text-white font-bold">{homeTeam.shotsOnGoal}</strong></span>
                <span className="text-slate-600">•</span>
                <span>Powerplay: <strong className="text-amber-400 font-bold">{homeTeam.powerPlays.goals}/{homeTeam.powerPlays.opportunities}</strong></span>
              </div>
            </div>
          </div>

          {/* Central Score Display (The Broadcast Center Bug) */}
          <div className="flex flex-col items-center px-6 py-2 shrink-0 border-y md:border-y-0 md:border-x border-white/10 w-full md:w-auto">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-sm bg-rose-500 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300 font-bold">
                Final Score
              </span>
            </div>

            <div className="flex items-center gap-5">
              <span className="text-5xl sm:text-6xl font-black text-white font-sans tracking-tight drop-shadow-lg">
                {homeTeam.score}
              </span>
              <span className="text-2xl font-black text-slate-600">:</span>
              <span className="text-5xl sm:text-6xl font-black text-white font-sans tracking-tight drop-shadow-lg">
                {awayTeam.score}
              </span>
            </div>

            {/* Period Breakdown */}
            <div className="flex items-center gap-1.5 mt-2">
              {periods.map((p) => (
                <div key={p.period} className="px-2.5 py-0.5 bg-slate-950 border border-white/10 rounded-md text-[10px] font-mono text-slate-300">
                  <span className="text-slate-500 mr-1">P{p.period}</span>
                  <strong className="text-white">{p.homeScore}-{p.awayScore}</strong>
                </div>
              ))}
            </div>
          </div>

          {/* Away Team: USA Selects */}
          <div className="flex items-center justify-start md:justify-end gap-4 flex-1 w-full md:w-auto text-left md:text-right">
            <div className="space-y-0.5 order-2 md:order-1">
              <div className="flex items-center md:justify-end gap-2">
                <span className="text-xs text-slate-400 font-mono">Invited National Selection</span>
                <span className="px-2 py-0.5 bg-rose-950/60 border border-rose-500/40 text-rose-300 text-[10px] font-bold rounded-md uppercase tracking-wider font-mono">
                  USA
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans">
                {awayTeam.fullName}
              </h2>
              <div className="flex items-center md:justify-end gap-3 text-xs text-slate-300 font-mono">
                <span>Powerplay: <strong className="text-rose-400 font-bold">{awayTeam.powerPlays.goals}/{awayTeam.powerPlays.opportunities}</strong></span>
                <span className="text-slate-600">•</span>
                <span>Shots: <strong className="text-white font-bold">{awayTeam.shotsOnGoal}</strong></span>
              </div>
            </div>
            <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-[#991b1b] to-[#001f54] border-2 border-rose-400 rounded-xl flex flex-col items-center justify-center font-black shadow-lg shadow-rose-950/60 shrink-0 order-1 md:order-2">
              <span className="text-[10px] text-rose-200 font-mono tracking-widest uppercase">USA</span>
              <span className="text-xl sm:text-2xl text-white font-black tracking-tighter">NCAA</span>
            </div>
          </div>
        </div>

        {/* Live Broadcast Telemetry Ticker Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-slate-900/70 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-3 shadow-lg">
            <div className="w-9 h-9 rounded-lg bg-amber-400/15 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 uppercase font-mono block">Peak Sprint Speed</span>
              <div className="text-sm font-black text-white font-mono">38.6 km/h</div>
              <span className="text-[11px] text-slate-400 truncate block">Frank Nazar (USA #91)</span>
            </div>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-3 shadow-lg">
            <div className="w-9 h-9 rounded-lg bg-sky-400/15 border border-sky-400/30 text-sky-400 flex items-center justify-center shrink-0">
              <Gauge className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 uppercase font-mono block">Hardest Slapshot</span>
              <div className="text-sm font-black text-white font-mono">157.6 km/h</div>
              <span className="text-[11px] text-slate-400 truncate block">Jimmy Snuggerud (USA)</span>
            </div>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-3 shadow-lg">
            <div className="w-9 h-9 rounded-lg bg-emerald-400/15 border border-emerald-400/30 text-emerald-400 flex items-center justify-center shrink-0">
              <Radio className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 uppercase font-mono block">SRF zwei Broadcast</span>
              <div className="text-sm font-black text-emerald-400 font-mono">54.6% Share</div>
              <span className="text-[11px] text-slate-400 truncate block">2.7M Swiss Viewers</span>
            </div>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-3 shadow-lg">
            <div className="w-9 h-9 rounded-lg bg-blue-400/15 border border-blue-400/30 text-blue-400 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 uppercase font-mono block">Venue Attendance</span>
              <div className="text-sm font-black text-white font-mono">6,547 Fans</div>
              <span className="text-[11px] text-slate-400 truncate block">{arena}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
