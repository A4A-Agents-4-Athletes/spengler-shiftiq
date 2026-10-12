import { Play, Pause, RotateCcw, Info } from 'lucide-react';
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
    <div className="bg-slate-900/90 border border-white/15 p-4 sm:p-6 rounded-2xl space-y-5 shadow-2xl backdrop-blur-xl">
      {/* Chapter Selection Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-amber-400" />
            <h3 className="text-sm font-black text-white uppercase tracking-wider font-mono">
              Key Match Shifts · Choose a Play to Replay
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            3 Decisive Sequences
          </span>
        </div>
        <p className="text-xs text-slate-300">
          Tap any of the 3 decisive shifts below to load player positions and track puck movement on the ice sheet:
        </p>
      </div>

      {/* 3 Rich Shift Cards (Zero empty space, intuitive goal breakdown) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {moments.map((m, idx) => {
          const isSelected = m.id === activeMoment.id;
          const isHcd = m.primaryTeamId === 'HCD';

          return (
            <button
              key={m.id}
              onClick={() => {
                setActiveMoment(m);
                setCurrentTime(0);
                setIsPlaying(false);
              }}
              className={cn(
                'p-3.5 rounded-xl text-left transition-all border cursor-pointer relative overflow-hidden flex flex-col justify-between gap-2.5',
                isSelected
                  ? 'bg-gradient-to-br from-blue-950/90 to-slate-900 border-amber-400 shadow-xl shadow-amber-400/15 ring-1 ring-amber-400'
                  : 'bg-slate-950/70 border-white/10 hover:border-white/25 text-slate-300 hover:text-white'
              )}
            >
              {/* Top Tag & Period Clock */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className={cn(
                    'px-2 py-0.5 text-[10px] font-mono font-black rounded uppercase tracking-wider',
                    isHcd
                      ? 'bg-blue-900/80 text-blue-200 border border-blue-500/40'
                      : 'bg-red-900/80 text-red-200 border border-red-500/40'
                  )}
                >
                  {isHcd ? 'HCD Goal' : 'USA Goal'}
                </span>
                <span className="text-xs font-mono font-bold text-amber-400">
                  {m.gameClock} · P{m.period}
                </span>
              </div>

              {/* Title & Headline Narrative */}
              <div>
                <div className="text-sm font-black text-white font-sans leading-snug">
                  {m.title}
                </div>
                <div className="text-[11px] text-slate-400 font-sans mt-0.5 leading-tight line-clamp-2">
                  {idx === 0 && 'Nussbaumer faceoff win & rapid 2.4s seam feed'}
                  {idx === 1 && 'Collegiate counter-rush down right flank with 5-hole finish'}
                  {idx === 2 && 'Corvi cross-ice saucer seam pass for one-timer dagger'}
                </div>
              </div>

              {/* Bottom Telemetry Chip */}
              <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[11px] font-mono">
                <span className="text-slate-400">Wisehockey:</span>
                <strong className={isSelected ? 'text-amber-400 font-black' : 'text-slate-300'}>
                  {m.headlineMetric}
                </strong>
              </div>
            </button>
          );
        })}
      </div>

      {/* Playback Controls & Progress Scrubber */}
      <div className="bg-slate-950/90 p-4 rounded-xl border border-white/10 space-y-2">
        <div className="flex items-center gap-4">
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-black hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-amber-400/25 cursor-pointer shrink-0"
            title={isPlaying ? 'Pause Replay' : 'Play Replay'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>

          {/* Reset / Rewind Button */}
          <button
            onClick={handleReset}
            className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 text-slate-300 flex items-center justify-center hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            title="Rewind to start (0.0s)"
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

        {/* Intuitive User Hint */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-white/5 font-mono">
          <span className="flex items-center gap-1">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            Drag slider or press Play to inspect player motion trails and puck trajectory.
          </span>
          <span className="hidden sm:inline text-slate-400 font-bold">
            20Hz Sensor Interpolation
          </span>
        </div>
      </div>
    </div>
  );
};
