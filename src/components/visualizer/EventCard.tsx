import React from 'react';
import { DecisiveMoment } from '../../types/wisehockey';
import { Sparkles, Activity } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Language, translations } from '../../lib/i18n';

interface EventCardProps {
  moment: DecisiveMoment;
  isProLens: boolean;
  language: Language;
}

export const EventCard: React.FC<EventCardProps> = ({ moment, isProLens, language }) => {
  const isHcd = moment.primaryTeamId === 'HCD';
  const t = translations[language];

  // Step-by-step sequence breakdown based on active moment (100% verified from event_data_sample.xlsx)
  const playSteps = moment.id.includes('tambellini')
    ? [
        { time: '13:25', title: language === 'DE' ? 'Bully-Gewinn (#66)' : 'Faceoff Win (#66)', detail: language === 'DE' ? 'Nussbaumer gewinnt das Bully, Jung & Andersson sichern' : 'Nussbaumer wins center draw; Jung & Andersson cycle' },
        { time: '14:40', title: language === 'DE' ? '90.4 km/h Aufbaupass' : '90.4 km/h Stretch Pass', detail: language === 'DE' ? 'Nico Gross (#77) spielt 25.1 m/s Pass auf Lukas Frick' : 'Nico Gross (#77) fires 25.1 m/s breakout pass to Frick' },
        { time: '14:43', title: language === 'DE' ? 'Zoneneintritt (#38)' : 'Zone Entry (#38)', detail: language === 'DE' ? 'Lukas Frick trägt den Puck kontrolliert über die Linie' : 'Lukas Frick carries puck cleanly across the blue line' },
        { time: '14:48', title: language === 'DE' ? '100.1 km/h Tor (#19)' : '100.1 km/h Goal (#19)', detail: language === 'DE' ? 'Adam Tambellini trifft aus dem Slot (0.122 ShotXG)' : 'Adam Tambellini scores from the slot (0.122 ShotXG)' },
      ]
    : moment.id.includes('musa')
    ? [
        { time: '13:10', title: language === 'DE' ? 'Finley & Fink Druck' : 'Finley & Fink Barrage', detail: language === 'DE' ? 'Finley (123.5 km/h) & Fink (127.1 km/h) prüfen Aeschlimann' : 'Finley (123.5 km/h) & Fink (127.1 km/h) test Aeschlimann' },
        { time: '13:32', title: language === 'DE' ? '146.0 km/h Hammer (#2)' : '146.0 km/h Blast (#2)', detail: language === 'DE' ? 'Gavin McCarthy feuert den härtesten Schuss des Spiels ab' : 'Gavin McCarthy unleashes the hardest shot of the match' },
        { time: '13:40', title: language === 'DE' ? 'Fink Pass hinterm Tor' : 'Fink Behind-Net Feed', detail: language === 'DE' ? 'Aiden Fink (#18) spielt 60.1 km/h Pass in den Slot' : 'Aiden Fink (#18) threads 16.7 m/s pass into high-danger slot' },
        { time: '13:42', title: language === 'DE' ? '107.0 km/h Tor (#9)' : '107.0 km/h Goal (#9)', detail: language === 'DE' ? 'Jack Musa verwandelt eiskalt (0.256 ShotXG Top-Wert)' : 'Jack Musa converts high-danger slot chance (0.256 ShotXG)' },
      ]
    : [
        { time: '17:17', title: language === 'DE' ? '35.6 km/h Konter abgewehrt' : '35.6 km/h Rush Survived', detail: language === 'DE' ? 'Pohlkamp (#23) & Finley (#19) stürmen in Unterzahl vor' : 'Pohlkamp (#23) hits 35.6 km/h on shorthanded USA rush' },
        { time: '17:35', title: language === 'DE' ? 'Zadina Zoneneintritt' : 'Zadina Zone Entry', detail: language === 'DE' ? 'Filip Zadina (#18) bringt HCD-Powerplay zurück in Stellung' : 'Filip Zadina (#18) re-establishes HCD 5v4 umbrella' },
        { time: '17:44', title: language === 'DE' ? 'Dahlbeck Diagonalpass' : 'Dahlbeck Seam Pass', detail: language === 'DE' ? 'Klas Dahlbeck (#6) spielt 67.0 km/h Querpass durch die Box' : 'Klas Dahlbeck (#6) fires 18.6 m/s cross-seam pass' },
        { time: '17:49', title: language === 'DE' ? 'Stransky Powerplay-Tor' : 'Stransky 5v4 Dagger', detail: language === 'DE' ? 'Matej Stransky (#44) vollendet am langen Pfosten' : 'Matej Stransky (#44) buries back-door powerplay finish' },
      ];

  const curiosityQuestion =
    language === 'DE' && moment.curiosityPromptDe
      ? moment.curiosityPromptDe
      : moment.curiosityPromptEn;

  const storyText =
    language === 'DE' && moment.fanStoryInsightDe
      ? moment.fanStoryInsightDe
      : moment.fanStoryInsight;

  const proText =
    language === 'DE' && moment.proAnalystInsightDe
      ? moment.proAnalystInsightDe
      : moment.proAnalystInsight;

  return (
    <div className="bg-slate-900/90 border border-white/15 p-5 sm:p-6 rounded-2xl space-y-5 shadow-2xl backdrop-blur-xl">
      {/* Header Badge & Title */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={cn(
                'px-2.5 py-0.5 text-[11px] font-mono font-black rounded-md uppercase tracking-wider',
                isHcd
                  ? 'bg-blue-950 border border-blue-500/50 text-blue-300'
                  : 'bg-red-950 border border-red-500/50 text-red-300'
              )}
            >
              {moment.eventType.replace('_', ' ')}
            </span>
            <span className="text-xs text-slate-400 font-mono font-bold">
              Period {moment.period} · {moment.gameClock}
            </span>
            {moment.realCycleWindow && (
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-950 border border-white/10 text-cyan-300 font-mono">
                {moment.realCycleWindow}
              </span>
            )}
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight" style={{ textWrap: 'balance' }}>
            {moment.title}
          </h3>
        </div>

        {/* Headline Metric Chip (Ice Cyan, ZERO Yellow) */}
        <div className="bg-slate-950 border border-cyan-400/40 px-4 py-2 rounded-xl text-left sm:text-right shrink-0 shadow-lg">
          <span className="text-[10px] text-slate-400 block uppercase font-mono font-bold">Wisehockey Metric</span>
          <span className="text-base sm:text-lg font-black text-cyan-400 font-mono">
            {moment.headlineMetric}
          </span>
        </div>
      </div>

      {/* Webinar #2 Mandate: Single Fan Curiosity Question Anchoring the Shift */}
      {curiosityQuestion && (
        <div className="bg-blue-950/50 border border-cyan-400/30 px-4 py-3 rounded-xl flex items-start gap-3">
          <span className="px-2 py-0.5 rounded bg-cyan-400 text-slate-950 font-mono text-[10px] font-black uppercase shrink-0 mt-0.5">
            {language === 'DE' ? 'Fan-Frage' : 'Key Question'}
          </span>
          <p className="text-xs sm:text-sm font-bold text-cyan-100 leading-snug" style={{ textWrap: 'pretty' }}>
            {curiosityQuestion}
          </p>
        </div>
      )}

      {/* Step-by-Step Play Sequence (Visual Storytelling for Fans) */}
      <div className="bg-slate-950/80 p-4 rounded-xl border border-white/10 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
          <span>{t.sequenceBreakdown}</span>
          <span className="text-cyan-400">
            {moment.eventsCount ? `${moment.eventsCount} Official Event Rows` : 'Wisehockey 20Hz Tracking'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {playSteps.map((step, sIdx) => (
            <div key={sIdx} className="bg-slate-900/90 border border-white/5 p-3 rounded-lg flex flex-col justify-between gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-400/20 text-cyan-300 font-mono font-black">
                  {step.time}
                </span>
                <span className="text-[10px] text-slate-500 font-mono font-bold">
                  Step {sIdx + 1}
                </span>
              </div>
              <div className="text-xs font-bold text-white leading-tight">
                {step.title}
              </div>
              <div className="text-[11px] text-slate-400 leading-tight">
                {step.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dual Lens Dynamic Narrative */}
      {!isProLens ? (
        /* Fan Story Lens */
        <div className="bg-gradient-to-r from-slate-950/90 to-slate-950/50 border-l-4 border-cyan-400 p-4 sm:p-5 rounded-r-xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-black text-cyan-400 uppercase tracking-wider font-mono">
            <Sparkles className="w-4 h-4 fill-current" />
            <span>{t.whyShiftFlipped}</span>
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans" style={{ textWrap: 'pretty' }}>
            {storyText}
          </p>
        </div>
      ) : (
        /* Pro Analyst Lens */
        <div className="bg-slate-950/90 border-l-4 border-sky-400 p-4 sm:p-5 rounded-r-xl space-y-3 font-mono">
          <div className="flex items-center gap-2 text-xs font-black text-sky-400 uppercase tracking-wider">
            <Activity className="w-4 h-4" />
            <span>{t.wisehockeyBreakdown}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {proText}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-slate-800 text-xs">
            <div className="bg-slate-900 p-2.5 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Peak Skater Velocity</span>
              <span className="font-bold text-white text-sm">{moment.topSpeedKmh} km/h</span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Peak Shot Velocity</span>
              <span className="font-bold text-sky-400 text-sm">{moment.puckVelocityKmh} km/h</span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Shot xG Value</span>
              <span className={cn('font-bold text-sm', moment.expectedGoalDelta > 0 ? 'text-emerald-400' : 'text-cyan-400')}>
                {moment.expectedGoalDelta > 0 ? `+${moment.expectedGoalDelta}` : moment.expectedGoalDelta}
              </span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Telemetry Rows</span>
              <span className="font-bold text-white text-sm">{moment.eventsCount || 95} Events</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
