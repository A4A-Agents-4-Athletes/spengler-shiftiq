import React from 'react';
import { Sparkles, Activity, Play, Dna, Users, Zap, Trophy, Radio, Globe, Shield } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Language, translations } from '../../lib/i18n';
import { getLevelInfo } from '../../lib/gamificationStore';

interface HeaderProps {
  isProLens: boolean;
  setIsProLens: (val: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  xp: number;
}

export const Header: React.FC<HeaderProps> = ({
  isProLens,
  setIsProLens,
  activeTab,
  setActiveTab,
  language,
  setLanguage,
  xp,
}) => {
  const t = translations[language];
  const levelInfo = getLevelInfo(xp);

  const tabs = [
    { id: 'replay', label: t.tabShiftReplay, hint: t.tabShiftReplaySub, icon: Play },
    { id: 'fantasy', label: t.tabShiftFantasy, hint: t.tabShiftFantasySub, badge: 'LIVE', icon: Zap },
    { id: 'lineup', label: t.tabTacticalBoard, hint: t.tabTacticalBoardSub, icon: Users },
    { id: 'dna', label: t.tabPlayerDNA, hint: t.tabPlayerDNASub, icon: Dna },
    { id: 'quiz', label: t.tabIceIQ, hint: t.tabIceIQSub, icon: Trophy },
    { id: 'activation', label: t.tabBroadcast, hint: t.tabBroadcastSub, icon: Radio },
  ];

  return (
    <header className="border-b border-white/10 bg-[#050b17]/95 backdrop-blur-2xl sticky top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between py-3 md:py-0 md:h-20 gap-3 md:gap-6">
          {/* Logo & Swiss Tournament Heritage */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-[#003882] via-[#002456] to-[#040d1f] border-2 border-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-950/40 shrink-0">
              <span className="text-cyan-400 font-black text-xl md:text-2xl tracking-tighter font-sans">SC</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] md:text-xs uppercase font-black tracking-widest text-cyan-400 flex items-center gap-1 font-mono">
                  <Shield className="w-3.5 h-3.5 fill-current" />
                  Spengler Cup Davos 1923
                </span>
                <span className="text-slate-600 text-xs hidden sm:inline">•</span>
                <span className="text-[11px] text-slate-400 hidden sm:inline font-mono">{t.appSubtitle}</span>
              </div>
              <h1 className="text-lg md:text-2xl font-black tracking-tight text-white flex items-center gap-2.5 font-sans">
                {t.appTitle}
                <span className="text-[10px] px-2 py-0.5 bg-cyan-950 border border-cyan-400/40 text-cyan-300 font-mono rounded-md uppercase font-bold tracking-wider">
                  Live Companion
                </span>
              </h1>
            </div>
          </div>

          {/* Right Header Controls: Fan XP Progress, Bilingual Switcher & Dual Lens */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 self-stretch md:self-auto justify-end">
            {/* Fan Level & XP Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs font-mono shadow-md">
              <span className="text-cyan-400 font-black">
                {t.fanLevel} {levelInfo.level}
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 font-bold">
                {language === 'DE' ? levelInfo.titleDe : levelInfo.titleEn}
              </span>
              <span className="px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-black text-[10px]">
                {xp} {t.xpPoints}
              </span>
            </div>

            {/* Bilingual Switcher (DE | EN) */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-white/10 shadow-inner">
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1" />
              <button
                onClick={() => setLanguage('DE')}
                className={cn(
                  'px-2 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer',
                  language === 'DE'
                    ? 'bg-cyan-500 text-slate-950 font-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                )}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage('EN')}
                className={cn(
                  'px-2 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer',
                  language === 'EN'
                    ? 'bg-cyan-500 text-slate-950 font-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                )}
              >
                EN
              </button>
            </div>

            {/* Precision Swiss Dual-Lens Toggle */}
            <div className="flex items-center gap-1 bg-slate-950/90 p-1 rounded-xl border border-white/10 shadow-inner">
              <button
                onClick={() => setIsProLens(false)}
                className={cn(
                  'flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer',
                  !isProLens
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                )}
              >
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>{t.fanStoryLens}</span>
              </button>
              <button
                onClick={() => setIsProLens(true)}
                className={cn(
                  'flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer',
                  isProLens
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-black shadow-md shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                )}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>{t.proAnalystLens}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Clean Intuitive Navigation Tabs with Action Hints (Ice Cyan Highlights, ZERO Yellow) */}
        <nav className="hidden md:flex items-center space-x-2 overflow-x-auto pb-2.5 pt-1 scrollbar-none">
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
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400 text-slate-950 font-black shadow-lg shadow-cyan-500/20'
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
                        isActive ? 'bg-slate-950 text-cyan-300' : 'bg-rose-500 text-white animate-pulse'
                      )}>
                        {tab.badge}
                      </span>
                    )}
                  </div>
                  <span className={cn(
                    'text-[10px] block mt-0.5 font-mono leading-none',
                    isActive ? 'text-slate-950 font-bold' : 'text-slate-500'
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
