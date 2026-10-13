import React, { useState } from 'react';
import { Tv, Monitor, QrCode, Globe, Radio, TrendingUp } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Language, translations } from '../../lib/i18n';

interface ActivationHubProps {
  language?: Language;
}

export const ActivationHub: React.FC<ActivationHubProps> = ({ language = 'EN' }) => {
  const [activeChannel, setActiveChannel] = useState<'SRF' | 'JUMBOTRON' | 'MOBILE_APP' | 'ROI'>('SRF');
  const [scanRatePct, setScanRatePct] = useState<number>(8);
  const t = translations[language];
  const isDe = language === 'DE';

  // Official 2025 Spengler Cup Event Report Baseline
  const arenaVisitors = 69450;
  const srfViewers = 2700000;
  const activeUsers = Math.round(((arenaVisitors * 2.2 + srfViewers * 0.35) * scanRatePct) / 100);
  const intermissionMinutes = Math.round(activeUsers * 6.4);
  const sponsorConversions = Math.round(activeUsers * 0.14);

  return (
    <div className="space-y-6">
      {/* Activation Concept Introduction */}
      <div className="bg-rink-card border border-rink-border p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 flex items-center gap-1.5 font-mono">
            <Radio className="w-3.5 h-3.5" />
            {t.activationTag}
          </span>
          <h3 className="text-lg font-black text-white mt-1">
            {t.activationTitle}
          </h3>
          <p className="text-xs text-slate-400">
            {t.activationSubtitle}
          </p>
        </div>

        {/* Channel Switcher */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'SRF', label: t.srfTab, icon: Tv },
            { id: 'JUMBOTRON', label: t.jumbotronTab, icon: Monitor },
            { id: 'MOBILE_APP', label: t.webTab, icon: Globe },
            { id: 'ROI', label: isDe ? 'Sponsor-ROI Rechner' : 'Sponsor ROI Model', icon: TrendingUp },
          ].map((ch) => {
            const Icon = ch.icon;
            const isActive = activeChannel === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => setActiveChannel(ch.id as any)}
                className={cn(
                  'flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all border cursor-pointer',
                  isActive
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-black shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{ch.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Mockup Screens */}
      {activeChannel === 'SRF' && (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl relative overflow-hidden">
          {/* Simulated Broadcast Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-red-600 text-white font-black text-xs rounded-md">
                SRF zwei
              </span>
              <span className="text-xs text-slate-400 font-mono">
                LIVE · 97TH SPENGLER CUP FINAL · 31 DEC 2025
              </span>
            </div>
            <span className="text-xs text-slate-500 font-mono">HD 1080p50 · 54.6% Market Share</span>
          </div>

          {/* Broadcast Frame Preview */}
          <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 rounded-xl border border-slate-700 overflow-hidden flex flex-col justify-between p-6">
            {/* Top Scorebug & Camera HUD */}
            <div className="flex justify-between items-start z-10">
              <div className="bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono font-bold text-white flex items-center gap-2 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-sm bg-red-500 animate-pulse" />
                <span>HC DAVOS 6 : 3 U.S. SELECTS</span>
                <span className="text-cyan-400 font-normal">P3 17:49</span>
              </div>
              <div className="bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[10px] font-mono text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-emerald-400" />
                <span>SRF MAIN CAM 1 · 1080p50</span>
              </div>
            </div>

            {/* Simulated Live Rink Action & Telemetry HUD Overlay (ZERO Yellow) */}
            <div className="my-auto py-4 relative flex flex-col items-center justify-center">
              {/* Subtle Ice Rink Markings */}
              <div className="w-full max-w-xl h-28 border border-white/10 rounded-xl bg-slate-900/40 relative overflow-hidden flex items-center justify-around px-8">
                {/* Center Red Line */}
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-red-500/40" />
                {/* Blue Lines */}
                <div className="absolute inset-y-0 left-1/4 w-1 bg-blue-500/30" />
                <div className="absolute inset-y-0 right-1/4 w-1 bg-blue-500/30" />

                {/* Live Skater Radar Tag 1: Filip Zadina */}
                <div className="relative z-10 flex flex-col items-center animate-pulse">
                  <div className="px-2 py-0.5 rounded bg-blue-600/90 text-white font-mono text-[10px] font-black shadow-md border border-cyan-400/50">
                    #18 Zadina · 35.4 km/h
                  </div>
                  <div className="w-3 h-3 rounded-sm bg-cyan-400 border-2 border-slate-950 mt-1 shadow-glow" />
                </div>

                {/* Puck Vector */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="px-2 py-0.5 rounded bg-cyan-400 text-slate-950 font-mono text-[9px] font-black shadow-md">
                    PUCK · 100.1 km/h
                  </div>
                  <div className="w-2.5 h-2.5 rounded-sm bg-white border border-slate-900 mt-1" />
                </div>

                {/* Live Skater Radar Tag 2: Eric Pohlkamp */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="px-2 py-0.5 rounded bg-red-600/90 text-white font-mono text-[10px] font-black shadow-md border border-white/30">
                    #23 Pohlkamp · 35.6 km/h
                  </div>
                  <div className="w-3 h-3 rounded-sm bg-red-400 border-2 border-slate-950 mt-1" />
                </div>
              </div>

              {/* Broadcast Lower HUD Chip */}
              <div className="mt-2 text-[10px] font-mono text-slate-400 tracking-wider uppercase">
                Wisehockey 20Hz Optical Telemetry Overlay · Dec 31 Final Dataset
              </div>
            </div>

            {/* Lower-Third Broadcast Graphic & QR Code */}
            <div className="bg-slate-900/95 backdrop-blur-lg border border-cyan-400/40 p-4 rounded-xl flex items-center justify-between gap-4 shadow-2xl">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-cyan-500 text-slate-950 text-[10px] font-mono font-black rounded uppercase">
                    Wisehockey Instant Telemetry
                  </span>
                  <span className="text-xs font-mono text-cyan-300 font-bold">
                    #44 Matej Stransky 5v4 Powerplay Goal (P3 · 17:49)
                  </span>
                </div>
                <h4 className="text-base font-extrabold text-white">
                  67.0 km/h Klas Dahlbeck Seam Assist · 81 Telemetry Events
                </h4>
                <p className="text-xs text-slate-300">
                  {isDe
                    ? 'QR-Code scannen, um alle 10 Feldspieler, Geschwindigkeitsvektoren und das Drittelpausen-Fantasy auf dem Smartphone zu öffnen.'
                    : 'Scan to explore all 10 on-ice skaters, velocity vectors, and the intermission micro-fantasy game on your smartphone.'}
                </p>
              </div>

              {/* QR Code Graphic Box */}
              <div className="bg-white p-2.5 rounded-xl flex flex-col items-center justify-center shrink-0 shadow-lg">
                <div className="w-20 h-20 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                  <QrCode className="w-16 h-16 text-cyan-400" />
                </div>
                <span className="text-[9px] font-mono font-black text-slate-900 mt-1 uppercase tracking-tight">
                  Scan for ShiftIQ
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
            <strong className="text-white">
              {isDe ? 'SRF Broadcast-Synergie:' : 'SRF Broadcast Synergies:'}
            </strong>{' '}
            {isDe
              ? 'Verwandelt die 2.7 Millionen SRF-Zuschauer (54.6% Marktanteil beim Spengler Cup 2025) während der 18-minütigen Drittelpause von passiven TV-Zuschauern in aktive Second-Screen-Spieler.'
              : 'Converts the 2.7M SRF television audience (54.6% peak market share during the 2025 Spengler Cup) from passive intermission viewers into active second-screen participants.'}
          </div>
        </div>
      )}

      {activeChannel === 'JUMBOTRON' && (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs text-cyan-400 font-extrabold tracking-wider uppercase font-mono">
              Eisstadion Davos · Center Ice Jumbotron System (6,267 Capacity)
            </span>
            <span className="text-xs text-slate-400 font-mono">Arena Display Mode</span>
          </div>

          {/* Jumbotron Cube Simulation */}
          <div className="bg-slate-900 border-4 border-slate-700 rounded-xl p-8 text-center space-y-6 max-w-2xl mx-auto shadow-2xl">
            <div className="inline-block px-3 py-1 bg-blue-950 border border-cyan-400 text-cyan-300 text-xs font-mono font-bold rounded-lg uppercase">
              {isDe ? 'Live-Arena-Abstimmung in der Drittelpause' : 'Intermission Live Fan Vote'}
            </div>

            <h3 className="text-2xl font-black text-white" style={{ textWrap: 'balance' }}>
              {isDe
                ? 'WER WAR DER DOMINANTESTE SPIELER IM 2. DRITTEL?'
                : 'WHO DELIVERED THE BIGGEST TELEMETRY IMPACT IN PERIOD 2?'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-4 bg-slate-950 border-2 border-cyan-400 rounded-xl space-y-1">
                <div className="text-xs font-mono text-cyan-400 font-bold">#19 ADAM TAMBELLINI (HCD)</div>
                <div className="text-sm font-extrabold text-white">100.1 km/h Goal · 2G, 1A</div>
                <div className="text-xs text-slate-400">75.0% Puck Battle Win Rate (PCW-%)</div>
                <div className="text-lg font-mono font-black text-cyan-400 pt-1">56% Arena Votes</div>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                <div className="text-xs font-mono text-rose-400 font-bold">#2 GAVIN MCCARTHY (USA)</div>
                <div className="text-sm font-extrabold text-white">146.0 km/h Hardest Slapshot</div>
                <div className="text-xs text-slate-400">4,713 m Distance · P2 Zone Siege</div>
                <div className="text-lg font-mono font-black text-slate-400 pt-1">44% Arena Votes</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-mono">
              {isDe
                ? 'Echtzeit-Synchronisation über das Stadion-WLAN und die Wisehockey 20Hz-Sensordaten.'
                : 'Live updates powered by Eisstadion Davos Wi-Fi and Wisehockey 20Hz optical tracking streams.'}
            </p>
          </div>
        </div>
      )}

      {activeChannel === 'MOBILE_APP' && (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs text-slate-300 font-bold uppercase">
              Spengler Cup Official Website (spenglercup.ch) Match Center Embed
            </span>
            <span className="text-xs text-emerald-400 font-mono">Zero-Install Web SDK</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
              <span>https://www.spenglercup.ch/en/match-center/2025-final-hcd-usa/shift-iq</span>
            </div>

            <div className="border border-slate-800 rounded-lg p-5 bg-slate-950 space-y-3">
              <h4 className="text-base font-bold text-white">
                {isDe
                  ? 'Vom 5-Sekunden-Resultat-Check zur 8-Minuten-Taktik-Session'
                  : 'Eliminating the "Check the Score and Leave" Bounce Rate'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans" style={{ textWrap: 'pretty' }}>
                {isDe
                  ? 'Statt nach einem kurzen Blick auf das 6:3-Endresultat die Seite zu verlassen, erkunden Fans die 284 Wisehockey-Events der 3 Tor-Sequenzen, vergleichen alle 40 Spieler im DNA-Radar und teilen ihre 3D-Sammelkarten direkt auf Social Media.'
                  : 'Instead of bouncing after glancing at the 6-3 final score, visitors scrub through all 284 official Wisehockey event rows across the 3 decisive goals, compare all 40 real skaters head-to-head, and export 3D player cards.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {activeChannel === 'ROI' && (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs text-cyan-400 font-extrabold tracking-wider uppercase font-mono">
                {isDe
                  ? 'Kommerzielles Wertmodell · Basierend auf dem Spengler Cup Event-Report 2025'
                  : 'Commercial Impact Simulator · Grounded in 2025 Spengler Cup Event Report'}
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                {isDe
                  ? 'Berechnet aktive Second-Screen-Nutzer, zusätzliche Verweildauer und Sponsor-Leads (UBS, Skoda, Würth).'
                  : 'Calculates second-screen active sessions, intermission dwell time, and partner conversions (UBS, Skoda, Würth).'}
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
              104M Global Reach Baseline
            </span>
          </div>

          {/* Interactive Slider */}
          <div className="bg-slate-900 border border-white/10 p-5 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase font-mono">
                {isDe ? 'QR-Scan & Second-Screen Aktivierungsrate:' : 'QR Scan & Second-Screen Conversion Rate:'}
              </span>
              <span className="text-lg font-black text-cyan-400 font-mono">{scanRatePct}%</span>
            </div>
            <input
              type="range"
              min="2"
              max="20"
              step="1"
              value={scanRatePct}
              onChange={(e) => setScanRatePct(parseInt(e.target.value, 10))}
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span>2% (Conservative Pilot)</span>
              <span>8% (Target Tournament Benchmark)</span>
              <span>20% (Final Broadcast Peak)</span>
            </div>
          </div>

          {/* 3 Quantified Impact KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900 border border-cyan-500/30 p-4 rounded-xl space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                {isDe ? 'Aktive ShiftIQ-Nutzer' : 'Active ShiftIQ Sessions'}
              </span>
              <div className="text-2xl font-black text-white font-mono">
                {activeUsers.toLocaleString()}
              </div>
              <p className="text-[11px] text-cyan-300">
                {isDe ? 'Aus 69,450 Arena-Gästen & 2.7M TV-Zuschauern' : 'From 69,450 Arena Fans & 2.7M SRF Viewers'}
              </p>
            </div>

            <div className="bg-slate-900 border border-sky-500/30 p-4 rounded-xl space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                {isDe ? 'Aktive Drittelpausen-Minuten' : 'Engaged Intermission Minutes'}
              </span>
              <div className="text-2xl font-black text-sky-400 font-mono">
                {intermissionMinutes.toLocaleString()} min
              </div>
              <p className="text-[11px] text-slate-300">
                {isDe ? 'Ø 6.4 Min. Verweildauer im Shift-Fantasy & Quiz' : 'Avg 6.4 min dwell time across Shift Fantasy & Quiz'}
              </p>
            </div>

            <div className="bg-slate-900 border border-emerald-500/30 p-4 rounded-xl space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                {isDe ? 'Qualifizierte Sponsor-Interaktionen' : 'Verified Sponsor Conversions'}
              </span>
              <div className="text-2xl font-black text-emerald-400 font-mono">
                {sponsorConversions.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-300">
                {isDe ? 'Reward-Einlösungen (UBS, Skoda, HCD Fanshop)' : 'XP Reward Redemptions (UBS, Skoda, HCD Shop)'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
