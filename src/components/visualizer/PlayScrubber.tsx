import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { DecisiveMoment } from '../../types/wisehockey';
import { cn } from '../../lib/utils';

interface PlayScrubberProps {
  moments: DecisiveMoment[];
  activeMoment: DecisiveMoment;
  setActiveMoment: (m: DecisiveMoment) => void;
  currentTime: number;
  setCurrentTime: (t: number) => void;
  isPlaying: boolean;
  setIsPlaying: (val: boolean) => void;
  playbackSpeed: number;
  setPlaybackSpeed: (speed: number) => void;
}

export const PlayScrubber: React.FC<PlayScrubberProps> = ({
  moments,
  activeMoment,
  setActiveMoment,
  currentTime,
  setCurrentTime,
  isPlaying,
  setIsPlaying,
  playbackSpeed,
  setPlaybackSpeed,
}) => {
  const speeds = [0.5, 1, 2];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(parseFloat(e.target.value));
  };

  const handleReset = () => {
    setCurrentTime(0);
    setIsPlaying(false);
  };

  return (
    <div className="bg-rink-card border border-rink-border p-4 rounded-xl space-y-4 shadow-xl">
      {/* Moment Selector Chips (Architectural Rectangular, NOT pill) */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
          Key Shifts:
        </span>
        {moments.map((m) => {
          const isSelected = m.id === activeMoment.id;
          return (
            <button
              key={m.id}
              onClick={() => {
                setActiveMoment(m);
                setCurrentTime(0);
                setIsPlaying(false);
              }}
              className={cn(
                'px-3 py-1.5 rounded-lg text-xs font-bold transition-all border',
                isSelected
                  ? 'bg-slate-800 border-neon-cyan text-white shadow-md'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              )}
            >
              <span className="text-hcd-yellow mr-1.5 font-mono">{m.gameClock}</span>
              {m.title}
            </button>
          );
        })}
      </div>

      {/* Scrubber Controls */}
      <div className="flex items-center gap-4">
        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-11 h-11 rounded-xl bg-neon-cyan text-slate-950 flex items-center justify-center font-black hover:bg-cyan-300 transition-colors shadow-lg shadow-neon-cyan/20"
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center hover:text-white hover:bg-slate-700 transition-colors"
          title="Rewind to start"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Progress Slider */}
        <div className="flex-1 flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-slate-400 w-10 text-right">
            {currentTime.toFixed(1)}s
          </span>
          <input
            type="range"
            min="0"
            max={activeMoment.durationSeconds}
            step="0.05"
            value={currentTime}
            onChange={handleSliderChange}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-neon-cyan focus:outline-none"
          />
          <span className="text-xs font-mono font-bold text-slate-400 w-10">
            {activeMoment.durationSeconds.toFixed(1)}s
          </span>
        </div>

        {/* Speed Controls */}
        <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-lg">
          {speeds.map((s) => (
            <button
              key={s}
              onClick={() => setPlaybackSpeed(s)}
              className={cn(
                'px-2 py-1 text-[11px] font-mono font-bold rounded-md transition-colors',
                playbackSpeed === s
                  ? 'bg-slate-700 text-neon-cyan'
                  : 'text-slate-400 hover:text-white'
              )}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
