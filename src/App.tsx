import React, { useState, useEffect } from 'react';
import { cn } from './lib/utils';
import { Header } from './components/layout/Header';
import { MatchBanner } from './components/layout/MatchBanner';
import { Rink2D } from './components/visualizer/Rink2D';
import { PlayScrubber } from './components/visualizer/PlayScrubber';
import { EventCard } from './components/visualizer/EventCard';
import { PlayerDNA } from './components/comparison/PlayerDNA';
import { LineBuilder } from './components/lineup/LineBuilder';
import { ShiftFantasy } from './components/gamification/ShiftFantasy';
import { IceIQQuiz } from './components/gamification/IceIQQuiz';
import { ActivationHub } from './components/activation/ActivationHub';
import { mockDecisiveMoments } from './data/mockEvents';
import { DecisiveMoment } from './types/wisehockey';
import { Language, translations } from './lib/i18n';
import { Play, Zap, Users, Trophy, Sparkles, Dna, Radio } from 'lucide-react';

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('DE');
  const [xp, setXp] = useState<number>(320);
  const [xpNotification, setXpNotification] = useState<{ amount: number; message: string } | null>(null);

  const [isProLens, setIsProLens] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('replay');
  const [activeMoment, setActiveMoment] = useState<DecisiveMoment>(mockDecisiveMoments[0]);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

  // In-Shift Prediction Game State
  const [predictionAnswer, setPredictionAnswer] = useState<string | null>(null);
  const [hasClaimedPrediction, setHasClaimedPrediction] = useState<boolean>(false);

  const t = translations[language];

  const addXp = (amount: number, reasonEn: string, reasonDe: string) => {
    setXp((prev) => prev + amount);
    const msg = language === 'DE' ? reasonDe : reasonEn;
    setXpNotification({ amount, message: msg });
    setTimeout(() => setXpNotification(null), 3000);
  };

  const handlePredict = (choice: string) => {
    if (predictionAnswer !== null) return;
    setPredictionAnswer(choice);
    if (!hasClaimedPrediction) {
      setHasClaimedPrediction(true);
      addXp(50, 'Shift Prediction Guessed', 'Shift-Prognose abgegeben');
    }
  };

  // Playback timer loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp = performance.now();

    const updatePlayhead = (timestamp: number) => {
      const deltaSec = ((timestamp - lastTimestamp) / 1000) * playbackSpeed;
      lastTimestamp = timestamp;

      if (isPlaying) {
        setCurrentTime((prev) => {
          const next = prev + deltaSec;
          if (next >= activeMoment.durationSeconds) {
            setIsPlaying(false);
            return activeMoment.durationSeconds;
          }
          return next;
        });
        animationFrameId = requestAnimationFrame(updatePlayhead);
      }
    };

    if (isPlaying) {
      lastTimestamp = performance.now();
      animationFrameId = requestAnimationFrame(updatePlayhead);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, playbackSpeed, activeMoment.durationSeconds]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a101d] via-[#070b14] to-[#04070e] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950 pb-24 md:pb-0">
      {/* XP Toast Notification */}
      {xpNotification && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900 border border-cyan-400 text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-top duration-200">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
          <div className="text-xs">
            <span className="font-black text-cyan-400">+{xpNotification.amount} XP</span> · {xpNotification.message}
          </div>
        </div>
      )}

      {/* Top Header & Dual Lens Switcher */}
      <Header
        isProLens={isProLens}
        setIsProLens={setIsProLens}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
        xp={xp}
      />

      {/* Match Telemetry Header Banner - Only on Replay / Match Hub */}
      {activeTab === 'replay' ? (
        <MatchBanner language={language} />
      ) : (
        /* Compact Match Status Strip for deep interactive tools */
        <div className="bg-slate-950/90 border-b border-white/10 px-4 py-2.5 text-xs font-mono shadow-md backdrop-blur-md">
          <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-black text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-sm bg-emerald-400 animate-pulse" />
                HC Davos 6 : 3 U.S. Selects
              </span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-slate-400 hidden sm:inline">
                {language === 'DE' ? 'FINAL · 31. Dez 2025 · Eisstadion Davos' : 'FINAL · 31 Dec 2025 · Eisstadion Davos'}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden md:inline-block text-cyan-400 font-bold text-[11px]">
                {language === 'DE' ? '20Hz Wisehockey Telemetrie aktiv' : '20Hz Wisehockey Telemetry Active'}
              </span>
              <button
                onClick={() => setActiveTab('replay')}
                className="px-2.5 py-1 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/25 transition-all text-xs font-sans font-bold flex items-center gap-1 cursor-pointer"
              >
                <span>←</span>
                <span>{language === 'DE' ? 'Zurück zum Match-Hub' : 'Back to Match Hub'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'replay' && (
          <div className="space-y-6">
            {/* Fan Experience Guide & Live Mode Onboarding */}
            <div className="bg-gradient-to-r from-blue-950/80 via-slate-900 to-blue-950/80 border border-white/15 p-4 sm:p-5 rounded-2xl shadow-xl space-y-3 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500 text-slate-950 flex items-center justify-center font-black shrink-0 text-base shadow-md shadow-cyan-500/20">
                    🏒
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-black text-white font-sans flex items-center gap-2">
                      {t.companionTitle}
                    </h2>
                    <p className="text-xs text-slate-300">
                      {t.companionSubtitle}
                    </p>
                  </div>
                </div>

                {/* Live Mode Tag */}
                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
                    <span className="w-2 h-2 rounded-sm bg-emerald-400 animate-pulse" />
                    {t.liveTelemetryActive}
                  </span>
                </div>
              </div>

              {/* 3 Quick-Action Cards for Everyday Fans (Cyan Glow, ZERO Yellow) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
                <button
                  onClick={() => setActiveTab('replay')}
                  className="p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-2.5 bg-cyan-500/15 border-cyan-400 text-white shadow-md ring-1 ring-cyan-400/50"
                >
                  <span className="text-lg">🎬</span>
                  <div className="min-w-0">
                    <div className="text-xs font-black text-white flex items-center gap-1.5">
                      {t.quickAction1Title}
                      <span className="text-[10px] text-cyan-400 font-mono font-normal">● Active</span>
                    </div>
                    <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                      {t.quickAction1Desc}
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('fantasy')}
                  className="p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-2.5 bg-slate-950/60 border-white/5 text-slate-300 hover:border-cyan-400/40 hover:text-white hover:bg-slate-900/60"
                >
                  <span className="text-lg">⚡</span>
                  <div className="min-w-0">
                    <div className="text-xs font-black text-white flex items-center gap-1.5">
                      {t.quickAction2Title}
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-rose-500 text-white font-mono font-bold">LIVE</span>
                    </div>
                    <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                      {t.quickAction2Desc}
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('lineup')}
                  className="p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-2.5 bg-slate-950/60 border-white/5 text-slate-300 hover:border-cyan-400/40 hover:text-white hover:bg-slate-900/60"
                >
                  <span className="text-lg">📋</span>
                  <div className="min-w-0">
                    <div className="text-xs font-black text-white flex items-center gap-1.5">
                      {t.quickAction3Title}
                    </div>
                    <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                      {t.quickAction3Desc}
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Interactive In-Shift Prediction Game Widget (Gamification Boost) */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-cyan-500/40 p-4 rounded-2xl shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-black uppercase">
                    {t.predictionTitle}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {t.predictionSubtitle}
                  </span>
                </div>
                <h3 className="text-sm font-black text-white">
                  {t.predictionPrompt}
                </h3>
              </div>

              {/* 3 Guess Options */}
              <div className="flex items-center gap-2">
                {[
                  { id: 'low', label: '88.4 km/h', isCorrect: false },
                  { id: 'correct', label: '100.1 km/h (Laser)', isCorrect: true },
                  { id: 'high', label: '112.5 km/h', isCorrect: false },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    disabled={predictionAnswer !== null}
                    onClick={() => handlePredict(opt.id)}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer border',
                      predictionAnswer === opt.id
                        ? opt.isCorrect
                          ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md font-black'
                          : 'bg-rose-500 text-white border-rose-400'
                        : predictionAnswer !== null && opt.isCorrect
                        ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                        : 'bg-slate-950 border-slate-700 text-slate-300 hover:text-white hover:border-slate-500'
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Top Interactive Rink Screen */}
            <Rink2D
              moment={activeMoment}
              currentTime={currentTime}
              isProLens={isProLens}
            />

            {/* Playback Controls & Shift Chapters */}
            <PlayScrubber
              moments={mockDecisiveMoments}
              activeMoment={activeMoment}
              setActiveMoment={setActiveMoment}
              currentTime={currentTime}
              setCurrentTime={setCurrentTime}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              playbackSpeed={playbackSpeed}
              setPlaybackSpeed={setPlaybackSpeed}
              language={language}
            />

            {/* Story Insight / Telemetry Card */}
            <EventCard moment={activeMoment} isProLens={isProLens} language={language} />
          </div>
        )}

        {activeTab === 'dna' && <PlayerDNA isProLens={isProLens} language={language} />}

        {activeTab === 'lineup' && <LineBuilder language={language} onAddXp={addXp} />}

        {activeTab === 'fantasy' && <ShiftFantasy language={language} onAddXp={addXp} />}

        {activeTab === 'quiz' && <IceIQQuiz language={language} onAddXp={addXp} />}

        {activeTab === 'activation' && <ActivationHub language={language} />}
      </main>

      {/* Mobile Bottom Thumb Navigation Dock (For Smartphone Ergonomics, 6 tabs, >= 44x44px touch targets) */}
      <div className="md:hidden fixed bottom-3 left-2 right-2 z-50 bg-[#070d19]/95 backdrop-blur-2xl border border-cyan-500/30 p-1 rounded-2xl shadow-2xl flex items-center justify-around">
        <button
          onClick={() => setActiveTab('replay')}
          className={cn(
            'flex flex-col items-center justify-center min-w-[44px] min-h-[44px] py-1 px-1.5 rounded-xl transition-all cursor-pointer',
            activeTab === 'replay' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
          )}
        >
          <Play className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-mono">Replay</span>
        </button>

        <button
          onClick={() => setActiveTab('fantasy')}
          className={cn(
            'flex flex-col items-center justify-center min-w-[44px] min-h-[44px] py-1 px-1.5 rounded-xl transition-all cursor-pointer relative',
            activeTab === 'fantasy' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
          )}
        >
          <span className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-sm bg-rose-500 animate-pulse" />
          <Zap className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-mono">Fantasy</span>
        </button>

        <button
          onClick={() => setActiveTab('lineup')}
          className={cn(
            'flex flex-col items-center justify-center min-w-[44px] min-h-[44px] py-1 px-1.5 rounded-xl transition-all cursor-pointer',
            activeTab === 'lineup' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
          )}
        >
          <Users className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-mono">{language === 'DE' ? 'Taktik' : 'Tactics'}</span>
        </button>

        <button
          onClick={() => setActiveTab('dna')}
          className={cn(
            'flex flex-col items-center justify-center min-w-[44px] min-h-[44px] py-1 px-1.5 rounded-xl transition-all cursor-pointer',
            activeTab === 'dna' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
          )}
        >
          <Dna className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-mono">DNA</span>
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={cn(
            'flex flex-col items-center justify-center min-w-[44px] min-h-[44px] py-1 px-1.5 rounded-xl transition-all cursor-pointer',
            activeTab === 'quiz' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
          )}
        >
          <Trophy className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-mono">Quiz</span>
        </button>

        <button
          onClick={() => setActiveTab('activation')}
          className={cn(
            'flex flex-col items-center justify-center min-w-[44px] min-h-[44px] py-1 px-1.5 rounded-xl transition-all cursor-pointer',
            activeTab === 'activation' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
          )}
        >
          <Radio className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-mono">Hub</span>
        </button>
      </div>

      {/* Footer & Challenge Attribution */}
      <footer className="border-t border-rink-border bg-slate-950 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white">Spengler ShiftIQ</span>
            <span>•</span>
            <span>ThinkSport Innovation Challenge: Data-hack 2026</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
            <span>Spengler Cup Davos</span>
            <span>•</span>
            <span>scoreTec</span>
            <span>•</span>
            <span>Wisehockey</span>
            <span>•</span>
            <span className="text-cyan-400 font-bold">Kamilla Gafurzianova</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
