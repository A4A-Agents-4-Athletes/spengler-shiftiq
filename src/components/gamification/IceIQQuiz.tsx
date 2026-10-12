import React, { useState } from 'react';
import { iceIqQuizQuestions } from '../../data/iceIqQuestions';
import { Trophy, CheckCircle, XCircle, ChevronRight, RotateCcw } from 'lucide-react';
import { cn } from '../../lib/utils';

export const IceIQQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const question = iceIqQuizQuestions[currentIdx];

  const handleSelectOption = (optId: string) => {
    if (selectedOptionId !== null) return; // Prevent double select
    setSelectedOptionId(optId);

    const option = question.options.find((o) => o.id === optId);
    if (option?.isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < iceIqQuizQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOptionId(null);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOptionId(null);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Quiz Progress & Header */}
      <div className="bg-rink-card border border-rink-border p-5 rounded-2xl flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-hcd-yellow text-slate-950 rounded-xl flex items-center justify-center font-black">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-white">Ice IQ: Match Recall Challenge</h3>
            <p className="text-xs text-slate-400">
              Test your tactical memory and intuition against real Wisehockey sensor telemetry.
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono text-slate-400 block uppercase">Score</span>
          <span className="text-xl font-black text-neon-cyan font-mono">
            {score} / {iceIqQuizQuestions.length}
          </span>
        </div>
      </div>

      {!isCompleted ? (
        <div className="bg-rink-card border border-rink-border p-6 rounded-2xl space-y-6 shadow-2xl">
          {/* Question Meta */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-700 text-neon-cyan text-xs font-mono font-bold rounded-md">
                Q{currentIdx + 1} of {iceIqQuizQuestions.length}
              </span>
              <span className="px-2 py-0.5 bg-slate-800 text-slate-300 text-xs font-semibold rounded-md uppercase">
                {question.category}
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Difficulty: <strong className="text-white">{question.difficulty}</strong>
            </span>
          </div>

          {/* Prompt */}
          <div className="space-y-1">
            <h4 className="text-lg sm:text-xl font-extrabold text-white" style={{ textWrap: 'balance' }}>
              {question.prompt}
            </h4>
            <p className="text-xs text-slate-400 italic">
              {question.contextText}
            </p>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {question.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              const hasAnswered = selectedOptionId !== null;

              let btnStyle = 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700';

              if (hasAnswered) {
                if (opt.isCorrect) {
                  btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200 font-bold';
                } else {
                  btnStyle = 'bg-slate-950 border-slate-900 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={opt.id}
                  disabled={hasAnswered}
                  onClick={() => handleSelectOption(opt.id)}
                  className={cn(
                    'p-4 rounded-xl border text-left flex items-center justify-between transition-all',
                    btnStyle
                  )}
                >
                  <div className="space-y-0.5">
                    <div className="text-sm font-semibold">{opt.text}</div>
                    {hasAnswered && (
                      <div className="text-xs font-mono text-slate-400">
                        {opt.metricLabel}: <span className="text-white font-bold">{opt.metricValue}</span>
                      </div>
                    )}
                  </div>
                  {hasAnswered && opt.isCorrect && (
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {hasAnswered && isSelected && !opt.isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation & Telemetry Evidence (Shown after selection) */}
          {selectedOptionId !== null && (
            <div className="p-4 bg-slate-900/90 border-l-4 border-hcd-yellow rounded-r-xl space-y-2 animate-fadeIn">
              <div className="text-xs font-extrabold text-hcd-yellow uppercase tracking-wider">
                Telemetry Breakdown
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-sans" style={{ textWrap: 'pretty' }}>
                {question.explanation}
              </p>
              <div className="p-2 bg-slate-950 rounded-lg text-[11px] font-mono text-neon-cyan border border-slate-800">
                {question.telemetryEvidence}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNext}
                  className="px-5 py-2 bg-neon-cyan text-slate-950 rounded-lg font-extrabold text-xs flex items-center gap-1.5 hover:bg-cyan-300 transition-colors shadow-md"
                >
                  <span>
                    {currentIdx < iceIqQuizQuestions.length - 1 ? 'Next Question' : 'Complete Challenge'}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Results Screen */
        <div className="bg-rink-card border border-rink-border p-8 rounded-2xl text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 bg-hcd-blue border-2 border-hcd-yellow rounded-2xl flex items-center justify-center mx-auto text-hcd-yellow shadow-xl">
            <Trophy className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white">Challenge Completed!</h3>
            <p className="text-sm text-slate-400">
              You scored <span className="font-mono font-bold text-neon-cyan text-lg">{score}</span> out of{' '}
              <span className="font-mono font-bold text-white text-lg">{iceIqQuizQuestions.length}</span> questions.
            </p>
            <div className="text-xs font-mono font-bold text-hcd-yellow uppercase tracking-wider">
              {score === 4 && '🏆 Master Tactician · Ready for Eisstadion Davos Bench!'}
              {score === 3 && '🥇 Pro Analyst · Exceptional hockey knowledge and data intuition!'}
              {score <= 2 && '🥈 Rising Fan · Great exploration! Keep analyzing the shifts.'}
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="px-6 py-2.5 bg-hcd-yellow text-slate-950 font-extrabold text-sm rounded-xl inline-flex items-center gap-2 hover:bg-amber-400 transition-colors shadow-lg"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Play Again</span>
          </button>
        </div>
      )}
    </div>
  );
};
