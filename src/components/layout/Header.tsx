import React from 'react';
import { Sparkles, Activity, Flame, Play, Dna, Users, Zap, Trophy, Radio } from 'lucide-react';
import { cn } from '../../lib/utils';

interface HeaderProps {
  isProLens: boolean;
  setIsProLens: (val: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isProLens,
  setIsProLens,
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    { id: 'replay', label: 'Shift Replay', hint: 'Goal Tracking', icon: Play },
    { id: 'fantasy', label: 'Shift Fantasy', hint: 'Intermission Game', badge: 'LIVE', icon: Zap },
    { id: 'lineup', label: 'Tactical Board', hint: 'Line Chemistry', icon: Users },
    { id: 'dna', label: 'Player DNA', hint: 'Head-to-Head', icon: Dna },
    { id: 'quiz', label: 'Ice IQ Quiz', hint: 'Predict Stats', icon: Trophy },
    { id: 'activation', label: 'Broadcast Hub', hint: 'SRF Sync', icon: Radio },
  ];

  return (
    <header className="border-b border-white/10 bg-[#050b17]/95 backdrop-blur-2xl sticky top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between py-3 md:py-0 md:h-20 gap-3 md:gap-6">
          {/* Logo & Swiss Tournament Heritage */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-[#003882] via-[#00285e] to-[#001433] border-2 border-amber-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-950/60 shrink-0">
              <span className="text-amber-400 font-black text-xl md:text-2xl tracking-tighter font-sans">SC</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] md:text-xs uppercase font-black tracking-widest text-amber-400 flex items-center gap-1 font-mono">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  Spengler Cup Davos
                </span>
                <span className="text-slate-600 text-xs hidden sm:inline">•</span>
                <span className="text-[11px] text-slate-400 hidden sm:inline font-mono">Official Wisehockey Live Telemetry</span>
              </div>
              <h1 className="text-lg md:text-2xl font-black tracking-tight text-white flex items-center gap-2.5 font-sans">
                Spengler ShiftIQ
                <span className="text-[10px] px-2 py-0.5 bg-gradient-to-r from-amber-400/20 to-amber-500/20 border border-amber-400/40 text-amber-300 font-mono rounded-md uppercase font-bold tracking-wider">
                  Live Companion
                </span>
              </h1>
            </div>
          </div>

          {/* Precision Swiss Dual-Lens Toggle */}
          <div className="flex items-center gap-1.5 bg-slate-950/90 p-1.5 rounded-xl border border-white/10 shadow-inner self-stretch md:self-auto justify-center">
            <button
              onClick={() => setIsProLens(false)}
              className={cn(
                'flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer',
                !isProLens
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              )}
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>Fan Story Lens</span>
            </button>
            <button
              onClick={() => setIsProLens(true)}
              className={cn(
                'flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer',
                isProLens
                  ? 'bg-gradient-to-r from-sky-400 to-blue-500 text-slate-950 font-black shadow-lg shadow-sky-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              )}
            >
              <Activity className="w-4 h-4" />
              <span>Pro Analyst Lens</span>
            </button>
          </div>
        </div>

        {/* Clean Intuitive Navigation Tabs with Action Hints */}
        <nav className="flex items-center space-x-2 overflow-x-auto pb-2.5 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none touch-pan-x">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'flex items-center gap-2.5 whitespace-nowrap px-3.5 py-2 text-left transition-all rounded-xl cursor-pointer border',
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 border-amber-300 text-slate-950 font-black shadow-lg shadow-amber-400/25'
                    : 'bg-slate-950/60 border-white/5 text-slate-300 hover:text-white hover:bg-slate-900/80 hover:border-white/15'
                )}
              >
                <Icon className={cn('w-4 h-4 shrink-0', isActive ? 'text-slate-950 stroke-[2.5]' : 'text-slate-400')} />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs md:text-sm font-black tracking-tight leading-none block">
                      {tab.label}
                    </span>
                    {tab.badge && (
                      <span className={cn(
                        'text-[9px] px-1.5 py-0.2 rounded font-mono font-black uppercase tracking-wider',
                        isActive ? 'bg-slate-950 text-amber-300' : 'bg-rose-500 text-white animate-pulse'
                      )}>
                        {tab.badge}
                      </span>
                    )}
                  </div>
                  <span className={cn(
                    'text-[10px] block mt-0.5 font-mono leading-none',
                    isActive ? 'text-slate-900 font-bold' : 'text-slate-500'
                  )}>
                    {tab.hint}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
