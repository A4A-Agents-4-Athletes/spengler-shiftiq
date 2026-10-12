import React, { useState, useEffect } from 'react';
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
    <div className="min-h-screen bg-rink-dark text-slate-100 flex flex-col font-sans">
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
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
