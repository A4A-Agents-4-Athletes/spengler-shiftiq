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

export const App: React.FC = () => {
  const [isProLens, setIsProLens] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('replay');
  const [activeMoment, setActiveMoment] = useState<DecisiveMoment>(mockDecisiveMoments[0]);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

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
    <div className="min-h-screen bg-gradient-to-b from-[#0e1526] via-[#090e1a] to-[#060912] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Header & Dual Lens Switcher */}
      <Header
        isProLens={isProLens}
        setIsProLens={setIsProLens}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Match Telemetry Header Banner */}
      <MatchBanner />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Fan Experience Guide & Live Mode Onboarding */}
        <div className="bg-gradient-to-r from-blue-950/80 via-slate-900 to-blue-950/80 border border-white/15 p-4 sm:p-5 rounded-2xl shadow-xl space-y-3 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black shrink-0 text-base">
                🏒
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-black text-white font-sans flex items-center gap-2">
                  Official Live Fan Companion · Spengler Cup Davos
                </h2>
                <p className="text-xs text-slate-300">
                  Real-time 20Hz sensor tracking unlocked from the coach&apos;s laptop directly to your screen.
                </p>
              </div>
            </div>

            {/* Live Mode Tag */}
            <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Telemetry Active
              </span>
            </div>
          </div>

          {/* 3 Quick-Action Cards for Everyday Fans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
            <button
              onClick={() => setActiveTab('replay')}
              className={cn(
                'p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-2.5',
                activeTab === 'replay'
                  ? 'bg-amber-400/15 border-amber-400 text-white shadow-md ring-1 ring-amber-400/50'
                  : 'bg-slate-950/60 border-white/5 text-slate-300 hover:border-white/20 hover:text-white'
              )}
            >
              <span className="text-lg">🎬</span>
              <div className="min-w-0">
                <div className="text-xs font-black text-white flex items-center gap-1.5">
                  1. Watch Shift Replay
                  {activeTab === 'replay' && <span className="text-[10px] text-amber-400 font-mono font-normal">● Active</span>}
                </div>
                <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                  Replay the 3 decisive goal sequences with live shot &amp; sprint speed radar.
                </div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('fantasy')}
              className={cn(
                'p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-2.5',
                activeTab === 'fantasy'
                  ? 'bg-amber-400/15 border-amber-400 text-white shadow-md ring-1 ring-amber-400/50'
                  : 'bg-slate-950/60 border-white/5 text-slate-300 hover:border-white/20 hover:text-white'
              )}
            >
              <span className="text-lg">⚡</span>
              <div className="min-w-0">
                <div className="text-xs font-black text-white flex items-center gap-1.5">
                  2. Play Shift Fantasy
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-rose-500 text-white font-mono font-bold">LIVE</span>
                </div>
                <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                  18-min intermission game: draft 3 skaters and score real-time ice points.
                </div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('lineup')}
              className={cn(
                'p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-2.5',
                activeTab === 'lineup'
                  ? 'bg-amber-400/15 border-amber-400 text-white shadow-md ring-1 ring-amber-400/50'
                  : 'bg-slate-950/60 border-white/5 text-slate-300 hover:border-white/20 hover:text-white'
              )}
            >
              <span className="text-lg">📋</span>
              <div className="min-w-0">
                <div className="text-xs font-black text-white flex items-center gap-1.5">
                  3. Build Tactical Lineup
                  {activeTab === 'lineup' && <span className="text-[10px] text-amber-400 font-mono font-normal">● Active</span>}
                </div>
                <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                  Test player chemistry on the tactical board and run a 60-second shift simulation.
                </div>
              </div>
            </button>
          </div>
        </div>

        {activeTab === 'replay' && (
          <div className="space-y-6">
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
            />

            {/* Story Insight / Telemetry Card */}
            <EventCard moment={activeMoment} isProLens={isProLens} />
          </div>
        )}

        {activeTab === 'dna' && <PlayerDNA isProLens={isProLens} />}

        {activeTab === 'lineup' && <LineBuilder />}

        {activeTab === 'fantasy' && <ShiftFantasy />}

        {activeTab === 'quiz' && <IceIQQuiz />}

        {activeTab === 'activation' && <ActivationHub />}
      </main>

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
            <span className="text-neon-cyan font-bold">Kamilla Gafurzianova</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
