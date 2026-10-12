import React from 'react';
import { sampleMatchData } from '../../data/sampleMatch';
import { Zap, Gauge, MapPin, Tv } from 'lucide-react';

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
            {/* Authentic SVG Crest for HC Davos (Mathematical scaling, zero text overflow) */}
            <div className="w-16 h-16 sm:w-18 sm:h-18 shrink-0">
              <svg viewBox="0 0 72 72" className="w-full h-full drop-shadow-lg select-none">
                <defs>
                  <linearGradient id="hcdShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0047ba" />
                    <stop offset="60%" stopColor="#002d75" />
                    <stop offset="100%" stopColor="#001a45" />
                  </linearGradient>
                </defs>
                {/* Outer Shield with Gold Border */}
                <path
                  d="M 36 4 L 66 14 C 66 46 36 68 36 68 C 36 68 6 46 6 14 Z"
                  fill="url(#hcdShieldGrad)"
                  stroke="#f59e0b"
                  strokeWidth="3.5"
                />
                {/* Yellow Davos Diagonal Accent Strip */}
                <path
                  d="M 16 18 L 24 16 L 56 50 L 48 54 Z"
                  fill="#fbbf24"
                  fillOpacity="0.3"
                />
                {/* HCD Acronym */}
                <text
                  x="36"
                  y="34"
                  textAnchor="middle"
                  fill="#fbbf24"
                  fontSize="17"
                  fontWeight="900"
                  fontFamily="Outfit, sans-serif"
                  letterSpacing="1"
                >
                  HCD
                </text>
                {/* 1921 Founding Year */}
                <text
                  x="36"
                  y="48"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="10"
                  fontWeight="800"
                  fontFamily="Outfit, sans-serif"
                  letterSpacing="2"
                >
                  1921
                </text>
              </svg>
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

            {/* Authentic SVG Crest for Team USA (Guaranteed ZERO text overflow) */}
            <div className="w-16 h-16 sm:w-18 sm:h-18 shrink-0 order-1 md:order-2">
              <svg viewBox="0 0 72 72" className="w-full h-full drop-shadow-lg select-none">
                <defs>
                  <linearGradient id="usaShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#991b1b" />
                    <stop offset="50%" stopColor="#7f1d1d" />
                    <stop offset="100%" stopColor="#0c1e3d" />
                  </linearGradient>
                </defs>
                {/* Shield with Crimson & White Border */}
                <path
                  d="M 36 4 L 66 14 C 66 46 36 68 36 68 C 36 68 6 46 6 14 Z"
                  fill="url(#usaShieldGrad)"
                  stroke="#ffffff"
                  strokeWidth="3.5"
                />
                {/* White Stars Bar at Top */}
                <rect x="18" y="15" width="36" height="5" fill="#3b82f6" rx="2" />
                {/* USA Acronym */}
                <text
                  x="36"
                  y="36"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="17"
                  fontWeight="900"
                  fontFamily="Outfit, sans-serif"
                  letterSpacing="1"
                >
                  USA
                </text>
                {/* NCAA Designation */}
                <text
                  x="36"
                  y="49"
                  textAnchor="middle"
                  fill="#fca5a5"
                  fontSize="9.5"
                  fontWeight="800"
                  fontFamily="Outfit, sans-serif"
                  letterSpacing="1.5"
                >
                  NCAA
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Live Broadcast Telemetry Ticker Strip (Balanced 2-Column Cards, ZERO Empty Space) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Card 1: Peak Sprint Speed */}
          <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-3.5 rounded-xl flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">
                  Peak Sprint Speed
                </span>
                <div className="text-base font-black text-white font-mono leading-tight">
                  38.6 km/h
                </div>
                <span className="text-xs text-slate-300 font-semibold truncate block">
                  Frank Nazar · USA #91
                </span>
              </div>
            </div>

            {/* Contextual Metric Pill (Fills the right space with real intelligence) */}
            <div className="text-right shrink-0 pl-2">
              <span className="px-2 py-0.5 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[10px] font-black rounded-md font-mono uppercase block">
                Top 1% Speed
              </span>
              <span className="text-[10px] text-slate-400 font-mono block mt-1">
                +4.8k vs avg
              </span>
            </div>
          </div>

          {/* Card 2: Hardest Slapshot */}
          <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-3.5 rounded-xl flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-sky-400/15 border border-sky-400/30 text-sky-400 flex items-center justify-center shrink-0">
                <Gauge className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">
                  Hardest Slapshot
                </span>
                <div className="text-base font-black text-white font-mono leading-tight">
                  157.6 km/h
                </div>
                <span className="text-xs text-slate-300 font-semibold truncate block">
                  J. Snuggerud · USA #19
                </span>
              </div>
            </div>

            {/* Contextual Metric Pill */}
            <div className="text-right shrink-0 pl-2">
              <span className="px-2 py-0.5 bg-sky-400/20 border border-sky-400/40 text-sky-300 text-[10px] font-black rounded-md font-mono uppercase block">
                Game Record
              </span>
              <span className="text-[10px] text-slate-400 font-mono block mt-1">
                0.18s release
              </span>
            </div>
          </div>

          {/* Card 3: SRF zwei Broadcast */}
          <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-3.5 rounded-xl flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/15 border border-emerald-400/30 text-emerald-400 flex items-center justify-center shrink-0">
                <Tv className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">
                  SRF zwei Viewers
                </span>
                <div className="text-base font-black text-emerald-400 font-mono leading-tight">
                  54.6% Share
                </div>
                <span className="text-xs text-slate-300 font-semibold truncate block">
                  2.7M Swiss Viewers
                </span>
              </div>
            </div>

            {/* Contextual Metric Pill */}
            <div className="text-right shrink-0 pl-2">
              <span className="px-2 py-0.5 bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-black rounded-md font-mono uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live TV
              </span>
              <span className="text-[10px] text-slate-400 font-mono block mt-1">
                SRF Sport HD
              </span>
            </div>
          </div>

          {/* Card 4: Eisstadion Attendance */}
          <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-3.5 rounded-xl flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-blue-400/15 border border-blue-400/30 text-blue-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">
                  Davos Arena Crowd
                </span>
                <div className="text-base font-black text-white font-mono leading-tight">
                  6,547 Fans
                </div>
                <span className="text-xs text-slate-300 font-semibold truncate block">
                  {arena}
                </span>
              </div>
            </div>

            {/* Contextual Metric Pill */}
            <div className="text-right shrink-0 pl-2">
              <span className="px-2 py-0.5 bg-blue-400/20 border border-blue-400/40 text-blue-300 text-[10px] font-black rounded-md font-mono uppercase block">
                100% Sold Out
              </span>
              <span className="text-[10px] text-slate-400 font-mono block mt-1">
                Full Capacity
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
