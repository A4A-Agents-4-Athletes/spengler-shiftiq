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
    <div className="bg-slate-900/90 border border-white/15 p-4 sm:p-5 rounded-2xl space-y-4 shadow-2xl backdrop-blur-xl">
      {/* Moment Selector Chips (Architectural Rectangular, NOT pill) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none sm:flex-wrap">
        <span className="text-xs font-black text-amber-400 uppercase tracking-wider font-mono mr-1 shrink-0">
          Key Match Shifts:
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
                'px-3.5 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer',
                isSelected
                  ? 'bg-gradient-to-r from-blue-900/80 to-slate-900 border-amber-400 text-white shadow-lg shadow-amber-400/10'
                  : 'bg-slate-950/70 border-white/10 text-slate-300 hover:text-white hover:border-white/25'
              )}
            >
              <span className="text-amber-400 mr-2 font-mono font-bold">{m.gameClock}</span>
              <span>{m.title}</span>
            </button>
          );
        })}
      </div>

      {/* Scrubber Controls */}
      <div className="flex items-center gap-4 bg-slate-950/80 p-3 rounded-xl border border-white/10">
        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-11 h-11 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-black hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-amber-400/20 cursor-pointer shrink-0"
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
        </button>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 text-slate-300 flex items-center justify-center hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
          title="Rewind to start"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Progress Slider */}
        <div className="flex-1 flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-amber-400 w-12 text-right">
            {currentTime.toFixed(1)}s
          </span>
          <input
            type="range"
            min="0"
            max={activeMoment.durationSeconds}
            step="0.05"
            value={currentTime}
            onChange={handleSliderChange}
            className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none"
          />
          <span className="text-xs font-mono font-bold text-slate-400 w-12">
            {activeMoment.durationSeconds.toFixed(1)}s
          </span>
        </div>

        {/* Speed Controls */}
        <div className="flex items-center gap-1 bg-slate-900 border border-white/10 p-1 rounded-lg shrink-0">
          {speeds.map((s) => (
            <button
              key={s}
              onClick={() => setPlaybackSpeed(s)}
              className={cn(
                'px-2.5 py-1 text-xs font-mono font-bold rounded-md transition-all cursor-pointer',
                playbackSpeed === s
                  ? 'bg-amber-400 text-slate-950 font-black'
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
