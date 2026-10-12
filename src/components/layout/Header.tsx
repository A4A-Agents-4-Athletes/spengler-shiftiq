import React from 'react';
import { Sparkles, Activity, Flame } from 'lucide-react';
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
    { id: 'replay', label: 'Decisive Shift Replay' },
    { id: 'dna', label: 'Player DNA & Clash' },
    { id: 'lineup', label: 'Tactical Line Builder' },
    { id: 'fantasy', label: 'Shift Micro-Fantasy' },
    { id: 'quiz', label: 'Ice IQ Challenge' },
    { id: 'activation', label: 'Broadcast & Arena Hub' },
  ];

  return (
    <header className="border-b border-rink-border bg-rink-dark/95 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2.5 sm:py-0 sm:h-20 gap-2.5 sm:gap-4">
          {/* Logo & Match Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-hcd-blue border border-hcd-yellow/40 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-hcd-blue/30 shrink-0">
              <span className="text-hcd-yellow font-black text-xl sm:text-2xl tracking-tighter">SC</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-widest text-hcd-yellow flex items-center gap-1">
                  <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Spengler Cup Davos 2026
                </span>
                <span className="text-slate-500 text-xs hidden sm:inline">•</span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">Wisehockey Match Data</span>
              </div>
              <h1 className="text-base sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-2" style={{ textWrap: 'balance' }}>
                Spengler ShiftIQ
                <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 bg-slate-800 border border-slate-700 text-neon-cyan font-mono rounded-md uppercase font-semibold tracking-wider">
                  Interactive Demo
                </span>
              </h1>
            </div>
          </div>

          {/* Dual-Lens Mode Selector */}
          <div className="flex items-center gap-1.5 sm:gap-3 bg-rink-card border border-rink-border p-1 rounded-lg sm:rounded-xl shadow-inner self-stretch sm:self-auto justify-center">
            <button
              onClick={() => setIsProLens(false)}
              className={cn(
                'flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-md sm:rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer',
                !isProLens
                  ? 'bg-hcd-yellow text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              )}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fan Story Lens</span>
            </button>
            <button
              onClick={() => setIsProLens(true)}
              className={cn(
                'flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-md sm:rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer',
                isProLens
                  ? 'bg-neon-cyan text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              )}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Pro Analyst Lens</span>
            </button>
          </div>
        </div>

        {/* Primary Module Navigation Tabs */}
        <nav className="flex space-x-1 overflow-x-auto pb-1.5 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none touch-pan-x">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'whitespace-nowrap px-4 py-2 text-sm font-semibold transition-all border-b-2 rounded-t-lg',
                  isActive
                    ? 'border-neon-cyan text-neon-cyan bg-slate-850/60'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
