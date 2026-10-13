import React, { useState } from 'react';
import { iceIqQuizQuestions } from '../../data/iceIqQuestions';
import { Trophy, CheckCircle, XCircle, ChevronRight, RotateCcw } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Language, translations } from '../../lib/i18n';

interface IceIQQuizProps {
  language?: Language;
  onAddXp?: (amount: number, reasonEn: string, reasonDe: string) => void;
}

export const IceIQQuiz: React.FC<IceIQQuizProps> = ({ language = 'EN', onAddXp }) => {
  const t = translations[language];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const question = iceIqQuizQuestions[currentIdx];

  const handleSelectOption = (optId: string) => {
    if (selectedOptionId !== null) return;
    setSelectedOptionId(optId);

    const option = question.options.find((o) => o.id === optId);
    if (option?.isCorrect) {
      setScore((prev) => prev + 1);
      onAddXp?.(50, 'Correct Ice IQ Answer', 'Richtige Antwort im Ice-IQ Quiz');
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
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 rounded-xl flex items-center justify-center font-black shadow-md shadow-cyan-500/20">
            <Trophy className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-white">{t.quizTitle}</h3>
            <p className="text-xs text-slate-400">
              {t.quizSubtitle}
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono text-slate-400 block uppercase">{t.scoreLabel}</span>
          <span className="text-xl font-black text-cyan-400 font-mono">
            {score} / {iceIqQuizQuestions.length}
          </span>
        </div>
      </div>

      {!isCompleted ? (
        <div className="bg-rink-card border border-rink-border p-6 rounded-2xl space-y-6 shadow-2xl">
          {/* Question Meta */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-700 text-cyan-400 text-xs font-mono font-bold rounded-md">
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
              {language === 'DE' && question.promptDe ? question.promptDe : question.prompt}
            </h4>
            <p className="text-xs text-slate-400 italic">
              {language === 'DE' && question.contextDe ? question.contextDe : question.contextText}
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
                    'p-4 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer min-h-[52px]',
                    btnStyle
                  )}
                >
                  <div className="space-y-0.5">
                    <div className="text-sm font-semibold">{opt.text}</div>
                    {hasAnswered && (
                      <div className="text-xs font-mono text-slate-400">
                        {language === 'DE' && opt.metricLabelDe ? opt.metricLabelDe : opt.metricLabel}: <span className="text-white font-bold">{opt.metricValue}</span>
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
            <div className="p-4 bg-slate-900/90 border-l-4 border-cyan-400 rounded-r-xl space-y-2 animate-in fade-in">
              <div className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider font-mono">
                {language === 'DE' ? 'Wisehockey-Sensor-Verifikation' : 'Wisehockey Telemetry Proof'}
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-sans" style={{ textWrap: 'pretty' }}>
                {language === 'DE' && question.explanationDe ? question.explanationDe : question.explanation}
              </p>
              <div className="p-2 bg-slate-950 rounded-lg text-[11px] font-mono text-cyan-300 border border-slate-800">
                {question.telemetryEvidence}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNext}
                  className="px-5 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 rounded-lg font-extrabold text-xs flex items-center gap-1.5 hover:brightness-110 transition-all shadow-md cursor-pointer"
                >
                  <span>
                    {currentIdx < iceIqQuizQuestions.length - 1 ? t.nextQuestion : t.finishQuiz}
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
          <div className="w-16 h-16 bg-blue-950 border-2 border-cyan-400 rounded-2xl flex items-center justify-center mx-auto text-cyan-400 shadow-xl">
            <Trophy className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white">
              {language === 'DE' ? 'Quiz abgeschlossen!' : 'Challenge Completed!'}
            </h3>
            <p className="text-sm text-slate-400">
              {language === 'DE' ? 'Du hast ' : 'You scored '}
              <span className="font-mono font-bold text-cyan-400 text-lg">{score}</span>
              {language === 'DE' ? ' von ' : ' out of '}
              <span className="font-mono font-bold text-white text-lg">{iceIqQuizQuestions.length}</span>
              {language === 'DE' ? ' Fragen richtig beantwortet.' : ' questions.'}
            </p>
            <div className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
              {score >= 5 &&
                (language === 'DE'
                  ? '🏆 Meister-Taktiker · Bereit für die Trainerbank im Eisstadion Davos! (+150 Fan XP)'
                  : '🏆 Master Tactician · Ready for Eisstadion Davos Bench! (+150 Fan XP)')}
              {score >= 3 &&
                score < 5 &&
                (language === 'DE'
                  ? '🥇 Profi-Analyst · Starkes Eishockey-Wissen und Daten-Gespür! (+100 Fan XP)'
                  : '🥇 Pro Analyst · Exceptional hockey knowledge and data intuition! (+100 Fan XP)')}
              {score < 3 &&
                (language === 'DE'
                  ? '🥈 Aufsteiger-Fan · Starke Analyse! Entdecke weitere Shifts im Replay. (+50 Fan XP)'
                  : '🥈 Rising Fan · Great exploration! Keep analyzing the shifts. (+50 Fan XP)')}
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-extrabold text-sm rounded-xl inline-flex items-center gap-2 hover:brightness-110 transition-all shadow-lg cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{language === 'DE' ? 'Nochmal spielen' : 'Play Again'}</span>
          </button>
        </div>
      )}
    </div>
  );
};
