import React, { useState } from 'react';
import { Tv, Monitor, QrCode, Globe, Radio } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Language, translations } from '../../lib/i18n';

interface ActivationHubProps {
  language?: Language;
}

export const ActivationHub: React.FC<ActivationHubProps> = ({ language = 'EN' }) => {
  const [activeChannel, setActiveChannel] = useState<'SRF' | 'JUMBOTRON' | 'MOBILE_APP'>('SRF');
  const t = translations[language];

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
        <div className="flex gap-2">
          {[
            { id: 'SRF', label: t.srfTab, icon: Tv },
            { id: 'JUMBOTRON', label: t.jumbotronTab, icon: Monitor },
            { id: 'MOBILE_APP', label: t.webTab, icon: Globe },
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
                LIVE · SPENGLER CUP DAVOS · 2ND INTERMISSION
              </span>
            </div>
            <span className="text-xs text-slate-500 font-mono">HD 1080p50</span>
          </div>

          {/* Broadcast Frame Preview */}
          <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 rounded-xl border border-slate-700 overflow-hidden flex flex-col justify-between p-6">
            {/* Top Scorebug & Camera HUD */}
            <div className="flex justify-between items-start z-10">
              <div className="bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono font-bold text-white flex items-center gap-2 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span>HC DAVOS 2 : 1 USA SELECTS</span>
                <span className="text-cyan-400 font-normal">P2 08:42</span>
              </div>
              <div className="bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[10px] font-mono text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>SRF MAIN CAM 1 · 1080p50</span>
              </div>
            </div>

            {/* Simulated Live Rink Action & Telemetry HUD Overlay (ZERO Yellow) */}
            <div className="my-auto py-4 relative flex flex-col items-center justify-center">
              {/* Subtle Ice Rink Markings */}
              <div className="w-full max-w-xl h-28 border border-white/10 rounded-xl bg-slate-900/40 relative overflow-hidden flex items-center justify-around px-8">
                {/* Center Red Line */}
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-red-500/40" />
                {/* Center Faceoff Circle */}
                <div className="absolute w-20 h-20 rounded-full border border-blue-500/30 left-1/2 -translate-x-1/2" />
                {/* Blue Line */}
                <div className="absolute inset-y-0 left-1/4 w-1 bg-blue-500/30" />
                <div className="absolute inset-y-0 right-1/4 w-1 bg-blue-500/30" />

                {/* Live Skater Radar Tag 1: Stransky */}
                <div className="relative z-10 flex flex-col items-center animate-pulse">
                  <div className="px-2 py-0.5 rounded bg-blue-600/90 text-white font-mono text-[10px] font-black shadow-md border border-cyan-400/50">
                    #44 Stransky · 37.9 km/h
                  </div>
                  <div className="w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-950 mt-1 shadow-glow" />
                </div>

                {/* Puck Vector */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="px-2 py-0.5 rounded bg-cyan-400 text-slate-950 font-mono text-[9px] font-black shadow-md">
                    PUCK · 100.1 km/h
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white border border-slate-900 mt-1" />
                </div>

                {/* Live Skater Radar Tag 2: Nazar */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="px-2 py-0.5 rounded bg-red-600/90 text-white font-mono text-[10px] font-black shadow-md border border-white/30">
                    #91 Nazar · 38.6 km/h
                  </div>
                  <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-slate-950 mt-1" />
                </div>
              </div>

              {/* Broadcast Lower HUD Chip */}
              <div className="mt-2 text-[10px] font-mono text-slate-400 tracking-wider uppercase">
                Wisehockey 20Hz Sensor Overlay Active · Live Ice Tracking
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
                    Matej Stransky Breakout Goal
                  </span>
                </div>
                <h4 className="text-base font-extrabold text-white">
                  37.9 km/h Peak Speed · 4.2s Transition Time
                </h4>
                <p className="text-xs text-slate-300">
                  Scan to explore the 2D shift replay, skater vectors and tactical breakdown on your mobile device.
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
            <strong className="text-white">SRF Broadcast Synergies:</strong> Provides TV commentators (like Jann Billeter and expert analysts) with instant tactile narrative clips during intermissions and enables viewers to actively participate instead of passively waiting through commercials.
          </div>
        </div>
      )}

      {activeChannel === 'JUMBOTRON' && (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs text-cyan-400 font-extrabold tracking-wider uppercase font-mono">
              Eisstadion Davos · Center Ice Jumbotron System
            </span>
            <span className="text-xs text-slate-400 font-mono">Arena Display Mode</span>
          </div>

          {/* Jumbotron Cube Simulation */}
          <div className="bg-slate-900 border-4 border-slate-700 rounded-xl p-8 text-center space-y-6 max-w-2xl mx-auto shadow-2xl">
            <div className="inline-block px-3 py-1 bg-blue-950 border border-cyan-400 text-cyan-300 text-xs font-mono font-bold rounded-lg uppercase">
              Intermission Live Fan Vote
            </div>

            <h3 className="text-2xl font-black text-white" style={{ textWrap: 'balance' }}>
              WHO WAS THE HARDEST WORKING SKATER IN PERIOD 2?
            </h3>

            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="p-4 bg-slate-950 border-2 border-cyan-400 rounded-xl space-y-1">
                <div className="text-xs font-mono text-cyan-400 font-bold">#20 MICHAEL FORA</div>
                <div className="text-sm font-extrabold text-white">146.8 km/h Shot Block</div>
                <div className="text-xs text-slate-400">84.2% Battle Win Rate</div>
                <div className="text-lg font-mono font-black text-cyan-400 pt-1">58% Fan Votes</div>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                <div className="text-xs font-mono text-rose-400 font-bold">#91 FRANK NAZAR</div>
                <div className="text-sm font-extrabold text-white">38.6 km/h Peak Sprint</div>
                <div className="text-xs text-slate-400">Coast-to-Coast Rush</div>
                <div className="text-lg font-mono font-black text-slate-400 pt-1">42% Fan Votes</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-mono">
              Live updates powered by in-seat Wi-Fi and Wisehockey real-time sensor streams.
            </p>
          </div>
        </div>
      )}

      {activeChannel === 'MOBILE_APP' && (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs text-slate-300 font-bold uppercase">
              Spengler Cup Official Website (spenglercup.ch) Embed
            </span>
            <span className="text-xs text-emerald-400 font-mono">Embedded Widget Mode</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
              <span>https://www.spenglercup.ch/en/match-center/game-12/shift-iq</span>
            </div>

            <div className="border border-slate-800 rounded-lg p-5 bg-slate-950 space-y-3">
              <h4 className="text-base font-bold text-white">
                Replace Static Box Scores with Exploratory Tactile Insights
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans" style={{ textWrap: 'pretty' }}>
                Instead of bouncing after glancing at the 4-2 score, website visitors can scrub the decisive goals, compare player radars head-to-head, and build hypothetical line matchups, multiplying average time-on-site and digital sponsor impressions.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
