import React from 'react';
import { DecisiveMoment } from '../../types/wisehockey';
import { Sparkles, Activity } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Language, translations } from '../../lib/i18n';

interface EventCardProps {
  moment: DecisiveMoment;
  isProLens: boolean;
  language: Language;
  currentTime?: number;
  onJumpToTime?: (sec: number) => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  moment,
  isProLens,
  language,
  currentTime = 0,
  onJumpToTime,
}) => {
  const isHcd = moment.primaryTeamId === 'HCD';
  const t = translations[language];
  const isDe = language === 'DE';

  // Step-by-step sequence breakdown with exact Coach Video-Room Freeze-Frame timestamps (0.0s .. 8.0s)
  const playSteps = moment.id.includes('tambellini')
    ? [
        { time: '13:25', jumpSec: 0.0, tag: 'RECOVERY', title: isDe ? 'Bully-Gewinn (#66)' : 'Faceoff Win (#66)', detail: isDe ? 'Nussbaumer gewinnt das Bully, Jung & Andersson sichern' : 'Nussbaumer wins center draw; Jung & Andersson cycle' },
        { time: '14:40', jumpSec: 3.2, tag: 'BREAKOUT', title: isDe ? '90.4 km/h Aufbaupass' : '90.4 km/h Stretch Pass', detail: isDe ? 'Nico Gross (#77) spielt 25.1 m/s Pass auf Lukas Frick' : 'Nico Gross (#77) fires 25.1 m/s breakout pass to Frick' },
        { time: '14:43', jumpSec: 5.0, tag: 'ZONE ENTRY', title: isDe ? 'Zoneneintritt (#38)' : 'Zone Entry (#38)', detail: isDe ? 'Lukas Frick trägt den Puck kontrolliert über die Linie' : 'Lukas Frick carries puck cleanly across the blue line' },
        { time: '14:48', jumpSec: 7.2, tag: 'SLOT FINISH', title: isDe ? '100.1 km/h Tor (#19)' : '100.1 km/h Goal (#19)', detail: isDe ? 'Adam Tambellini trifft aus dem Slot (0.122 ShotXG)' : 'Adam Tambellini scores from the slot (0.122 ShotXG)' },
      ]
    : moment.id.includes('musa')
    ? [
        { time: '13:10', jumpSec: 0.8, tag: 'ZONE SIEGE', title: isDe ? 'Finley & Fink Druck' : 'Finley & Fink Barrage', detail: isDe ? 'Finley (123.5 km/h) & Fink (127.1 km/h) prüfen Aeschlimann' : 'Finley (123.5 km/h) & Fink (127.1 km/h) test Aeschlimann' },
        { time: '13:32', jumpSec: 3.6, tag: 'BOX COLLAPSE', title: isDe ? '146.0 km/h Hammer (#2)' : '146.0 km/h Blast (#2)', detail: isDe ? 'Gavin McCarthy feuert den härtesten Schuss des Spiels ab' : 'Gavin McCarthy unleashes the hardest shot of the match' },
        { time: '13:40', jumpSec: 5.4, tag: 'ROYAL ROAD', title: isDe ? 'Fink Pass hinterm Tor' : 'Fink Behind-Net Feed', detail: isDe ? 'Aiden Fink (#18) spielt 60.1 km/h Pass in den Slot' : 'Aiden Fink (#18) threads 16.7 m/s pass into high-danger slot' },
        { time: '13:42', jumpSec: 7.0, tag: 'SLOT FINISH', title: isDe ? '107.0 km/h Tor (#9)' : '107.0 km/h Goal (#9)', detail: isDe ? 'Jack Musa verwandelt eiskalt (0.256 ShotXG Top-Wert)' : 'Jack Musa converts high-danger slot chance (0.256 ShotXG)' },
      ]
    : [
        { time: '17:17', jumpSec: 0.6, tag: 'PK COUNTER', title: isDe ? '35.6 km/h Konter abgewehrt' : '35.6 km/h Rush Survived', detail: isDe ? 'Pohlkamp (#23) & Finley (#19) stürmen in Unterzahl vor' : 'Pohlkamp (#23) hits 35.6 km/h on shorthanded USA rush' },
        { time: '17:35', jumpSec: 2.4, tag: 'ZONE ENTRY', title: isDe ? 'Zadina Zoneneintritt' : 'Zadina Zone Entry', detail: isDe ? 'Filip Zadina (#18) bringt HCD-Powerplay zurück in Stellung' : 'Filip Zadina (#18) re-establishes HCD 5v4 umbrella' },
        { time: '17:44', jumpSec: 5.4, tag: 'ROYAL ROAD', title: isDe ? 'Dahlbeck Diagonalpass' : 'Dahlbeck Seam Pass', detail: isDe ? 'Klas Dahlbeck (#6) spielt 67.0 km/h Querpass durch die Box' : 'Klas Dahlbeck (#6) fires 18.6 m/s cross-seam pass' },
        { time: '17:49', jumpSec: 7.0, tag: 'ONE-TIMER', title: isDe ? 'Stransky Powerplay-Tor' : 'Stransky 5v4 Dagger', detail: isDe ? 'Matej Stransky (#44) vollendet am langen Pfosten' : 'Matej Stransky (#44) buries back-door powerplay finish' },
      ];

  // Living Lab Tri-Pillar Insights (Zöllner Expert Eye + Rumo Invisible Playmaker + Wüthrich Shift Physiology)
  const livingLabPillars = moment.id.includes('tambellini')
    ? {
        expertQuote: isDe
          ? '„Schau nicht nur auf Tambellinis Schuss – der Schlüssel ist, wie Nico Gross (#77) nach dem geblockten Schuss sofort den Kopf hebt und Lukas Frick (#38) in vollem Lauf an der blauen Linie bedient.“'
          : '“Don’t just watch Tambellini’s release—the key is how Nico Gross (#77) lifts his head after the blocked shot and hits Lukas Frick (#38) in full stride across the blue line.”',
        catalystTitle: '#77 N. Gross & #38 L. Frick',
        catalystMetric: isDe
          ? '25.1 m/s (90.4 km/h) Stretch-Pass + kontrollierter Zoneneintritt öffnen das 3.4m Slot-Fenster.'
          : '25.1 m/s (90.4 km/h) stretch pass + controlled zone entry open a 3.4m slot lane.',
        physioTitle: isDe ? '84s Zyklus · 32.8 km/h Antritt' : '84s Cycle · 32.8 km/h Burst',
        physioDetail: isDe
          ? 'USA-Linie nach 46s Defensiv-Wechsel ermüdet; Frick überläuft die neutrale Zone mit +6.4 km/h Geschwindigkeitsüberschuss.'
          : 'USA unit fatigued after 46s defensive shift; Frick enters the zone with a +6.4 km/h speed differential.',
      }
    : moment.id.includes('musa')
    ? {
        expertQuote: isDe
          ? '„Wenn ein Verteidiger wie McCarthy (#2) mit 146 km/h von der blauen Linie abzieht, zieht sich unsere gesamte Box zusammen. Genau diesen Moment nutzt Fink (#18) hinter dem Tor für den Steckpass.“'
          : '“When a defenseman like McCarthy (#2) unloads a 146 km/h bomb from the point, the defensive box naturally collapses. Fink (#18) uses that exact split-second behind the net.”',
        catalystTitle: '#2 G. McCarthy & #18 A. Fink',
        catalystMetric: isDe
          ? '146.0 km/h Schlagschuss zwingt HCD-Box tief + 16.7 m/s Pass durch die Royal-Road-Achse.'
          : '146.0 km/h point blast collapses HCD box + 16.7 m/s pass across the Royal Road.',
        physioTitle: isDe ? '36s Dauerdruck · 4 Schüsse / 30s' : '36s Zone Siege · 4 Shots / 30s',
        physioDetail: isDe
          ? 'HCD-Verteidiger über 52s ohne Wechsel auf dem Eis (Laktat-Spitze); 0.256 ShotXG durch verzögerte Stock-Reaktion im Slot.'
          : 'HCD defenders trapped on ice >52s without a line change; anaerobic fatigue delays stick check in the 0.256 xG slot.',
      }
    : {
        expertQuote: isDe
          ? '„Nach Pohlkamps 35.6 km/h Unterzahl-Konter denken alle, die Gefahr ist vorbei. Aber Zadina (#18) und Dahlbeck (#6) nutzen die Unordnung im USA-Penalty-Kill eiskalt für den Querpass auf Stransky.“'
          : '“After Pohlkamp’s 35.6 km/h shorthanded rush, the penalty kill is out of structure. Zadina (#18) and Dahlbeck (#6) punish that transition gap immediately with the cross-seam feed.”',
        catalystTitle: '#18 F. Zadina & #6 K. Dahlbeck',
        catalystMetric: isDe
          ? 'Zadina bindet 2 PK-Stürmer beim Zoneneintritt; Dahlbeck spielt 67.0 km/h (18.6 m/s) Royal-Road-Pass.'
          : 'Zadina draws 2 PK forwards on entry; Dahlbeck threads a 67.0 km/h (18.6 m/s) Royal-Road seam pass.',
        physioTitle: isDe ? '35.6 km/h Sprint -> Laktat-Konter' : '35.6 km/h Burst -> PK Exhaustion',
        physioDetail: isDe
          ? 'USA-Unterzahlspieler Pohlkamp (#23, 9.90 m/s) & Finley (#19, 9.67 m/s) nach Maximal-Sprint übersäuert – 14s später fällt das Gegentor.'
          : 'USA PK unit (Pohlkamp 9.90 m/s, Finley 9.67 m/s) depleted after max-effort shorthanded sprint—conceding 14s later.',
      };

  const curiosityQuestion =
    isDe && moment.curiosityPromptDe
      ? moment.curiosityPromptDe
      : moment.curiosityPromptEn;

  const storyText =
    isDe && moment.fanStoryInsightDe
      ? moment.fanStoryInsightDe
      : moment.fanStoryInsight;

  const proText =
    isDe && moment.proAnalystInsightDe
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
            {isDe ? 'Fan-Frage' : 'Key Question'}
          </span>
          <p className="text-xs sm:text-sm font-bold text-cyan-100 leading-snug" style={{ textWrap: 'pretty' }}>
            {curiosityQuestion}
          </p>
        </div>
      )}

      {/* Interactive Video-Room Keyframes (Clickable Freeze-Frame Scrubbing) */}
      <div className="bg-slate-950/80 p-4 rounded-xl border border-white/10 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span>{t.sequenceBreakdown}</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-mono">
              {isDe ? 'Klicke für Coach-Standbild' : 'Click Card to Scrub Freeze-Frame'}
            </span>
          </div>
          <span className="text-cyan-400">
            {moment.eventsCount ? `${moment.eventsCount} Official Event Rows` : 'Wisehockey 20Hz Tracking'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {playSteps.map((step, sIdx) => {
            const isStepActive = Math.abs(currentTime - step.jumpSec) < 1.2;
            return (
              <button
                key={sIdx}
                type="button"
                onClick={() => onJumpToTime?.(step.jumpSec)}
                className={cn(
                  'text-left p-3 rounded-lg flex flex-col justify-between gap-1.5 border transition-all cursor-pointer',
                  isStepActive
                    ? 'bg-blue-950/80 border-cyan-400 ring-1 ring-cyan-400/50 shadow-lg'
                    : 'bg-slate-900/90 border-white/5 hover:border-cyan-400/40 hover:bg-slate-900'
                )}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-400/20 text-cyan-300 font-mono font-black">
                    {step.time} · {step.jumpSec.toFixed(1)}s
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-950 text-emerald-400 font-mono font-bold border border-emerald-500/30">
                    {step.tag}
                  </span>
                </div>
                <div className="text-xs font-bold text-white leading-tight mt-0.5">
                  {step.title}
                </div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  {step.detail}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Spengler Cup Living Lab Tri-Pillar Synthesis (Expert Commentary + Invisible Playmaker + Shift Physiology) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Pillar 1: Andres Ambühl #10 Expert Eye (Spengler Cup Innovation Platform) */}
        <div className="bg-slate-950/90 border border-indigo-400/30 p-3.5 rounded-xl space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
              {isDe ? 'Experten-Blick · Ambühl #10' : 'Legend’s Eye · Ambühl #10'}
            </span>
            <span className="text-[10px] font-mono text-slate-400">Human Intuition</span>
          </div>
          <p className="text-xs text-slate-200 italic leading-relaxed" style={{ textWrap: 'pretty' }}>
            {livingLabPillars.expertQuote}
          </p>
        </div>

        {/* Pillar 2: Invisible Playmaker / Off-Puck Catalyst */}
        <div className="bg-slate-950/90 border border-emerald-400/30 p-3.5 rounded-xl space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              {isDe ? 'Unsichtbarer Spielmacher' : 'Invisible Playmaker'}
            </span>
            <span className="text-[10px] font-mono text-emerald-400 font-bold">{livingLabPillars.catalystTitle}</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed" style={{ textWrap: 'pretty' }}>
            {livingLabPillars.catalystMetric}
          </p>
        </div>

        {/* Pillar 3: Shift Physiology & Fatigue Load */}
        <div className="bg-slate-950/90 border border-cyan-400/30 p-3.5 rounded-xl space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              {isDe ? 'Shift-Physiologie & Last' : 'Shift Physiology & Load'}
            </span>
            <span className="text-[10px] font-mono text-cyan-300 font-bold">{livingLabPillars.physioTitle}</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed" style={{ textWrap: 'pretty' }}>
            {livingLabPillars.physioDetail}
          </p>
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
