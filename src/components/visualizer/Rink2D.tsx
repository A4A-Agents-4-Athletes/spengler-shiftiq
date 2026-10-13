import React from 'react';
import { DecisiveMoment, RinkTrajectoryPoint } from '../../types/wisehockey';

interface Rink2DProps {
  moment: DecisiveMoment;
  currentTime: number;
  isProLens: boolean;
}

export const Rink2D: React.FC<Rink2DProps> = ({ moment, currentTime, isProLens }) => {
  // Linear interpolation between trajectory points
  const interpolatePoint = (points: RinkTrajectoryPoint[], time: number): RinkTrajectoryPoint => {
    if (points.length === 0) return { timeSec: 0, x: 50, y: 50, speedKmh: 0 };
    if (time <= points[0].timeSec) return points[0];
    if (time >= points[points.length - 1].timeSec) return points[points.length - 1];

    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      if (time >= p1.timeSec && time <= p2.timeSec) {
        const factor = (time - p1.timeSec) / (p2.timeSec - p1.timeSec);
        return {
          timeSec: time,
          x: p1.x + (p2.x - p1.x) * factor,
          y: p1.y + (p2.y - p1.y) * factor,
          speedKmh: p1.speedKmh + (p2.speedKmh - p1.speedKmh) * factor,
        };
      }
    }
    return points[0];
  };

  const currentPuck = interpolatePoint(moment.puckTrajectory, currentTime);

  return (
    <div className="relative w-full aspect-[2/1] bg-slate-900 rounded-2xl border-2 border-slate-700/80 overflow-hidden shadow-2xl shadow-blue-950/40">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Authentic Gleaming Alpine Ice Sheet Gradient */}
          <radialGradient id="crystallineIce" cx="50%" cy="50%" r="72%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#f8fafc" />
            <stop offset="75%" stopColor="#edf5fd" />
            <stop offset="100%" stopColor="#dce8f7" />
          </radialGradient>

          {/* Arena Floodlight Reflection Across Ice Sheet */}
          <linearGradient id="arenaLightSheen" x1="5%" y1="0%" x2="95%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="25%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.08" />
            <stop offset="75%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
          </linearGradient>

          {/* Player Disc High-Definition Drop Shadow */}
          <filter id="skaterShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.35" />
          </filter>

          {/* Puck Tracking Beacon Filter */}
          <filter id="puckAura" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Ice Sheet Rink Base */}
        <rect
          x="15"
          y="15"
          width="970"
          height="470"
          rx="85"
          ry="85"
          fill="url(#crystallineIce)"
          stroke="#0f172a"
          strokeWidth="6"
        />

        {/* 2. Dasher Board White Rim & Ice Cyan Trim (ZERO Yellow) */}
        <rect
          x="18"
          y="18"
          width="964"
          height="464"
          rx="82"
          ry="82"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3.5"
          pointerEvents="none"
        />
        <rect
          x="21"
          y="21"
          width="958"
          height="458"
          rx="79"
          ry="79"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeOpacity="0.65"
          pointerEvents="none"
        />

        {/* 3. Goal Creases & Nets */}
        {/* Left Goal Crease (Defending End) */}
        <path
          d="M 60 215 A 35 35 0 0 1 60 285 Z"
          fill="#93c5fd"
          fillOpacity="0.5"
          stroke="#dc2626"
          strokeWidth="2.5"
        />
        {/* Left Goal Cage Net */}
        <rect x="34" y="234" width="26" height="32" fill="#f8fafc" stroke="#dc2626" strokeWidth="2.5" rx="3" />
        <line x1="34" y1="242" x2="60" y2="242" stroke="#dc2626" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="34" y1="250" x2="60" y2="250" stroke="#dc2626" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="34" y1="258" x2="60" y2="258" stroke="#dc2626" strokeWidth="1" strokeOpacity="0.4" />

        {/* Right Goal Crease (Attacking End) */}
        <path
          d="M 940 215 A 35 35 0 0 0 940 285 Z"
          fill="#93c5fd"
          fillOpacity="0.5"
          stroke="#dc2626"
          strokeWidth="2.5"
        />
        {/* Right Goal Cage Net */}
        <rect x="940" y="234" width="26" height="32" fill="#f8fafc" stroke="#dc2626" strokeWidth="2.5" rx="3" />
        <line x1="940" y1="242" x2="966" y2="242" stroke="#dc2626" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="940" y1="250" x2="966" y2="250" stroke="#dc2626" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="940" y1="258" x2="966" y2="258" stroke="#dc2626" strokeWidth="1" strokeOpacity="0.4" />

        {/* Red Goal Lines */}
        <line x1="60" y1="28" x2="60" y2="472" stroke="#dc2626" strokeWidth="2.5" />
        <line x1="940" y1="28" x2="940" y2="472" stroke="#dc2626" strokeWidth="2.5" />

        {/* Blue Lines (Zone Dividers) */}
        <line x1="350" y1="18" x2="350" y2="482" stroke="#1d4ed8" strokeWidth="5.5" strokeLinecap="round" />
        <line x1="650" y1="18" x2="650" y2="482" stroke="#1d4ed8" strokeWidth="5.5" strokeLinecap="round" />

        {/* Center Red Line */}
        <line x1="500" y1="18" x2="500" y2="482" stroke="#dc2626" strokeWidth="5.5" strokeLinecap="round" />

        {/* Center Ice Spengler Cup Crest Embellishment */}
        <circle cx="500" cy="250" r="78" fill="none" stroke="#1d4ed8" strokeWidth="2.5" />
        <circle cx="500" cy="250" r="6" fill="#1d4ed8" />
        <text
          x="500"
          y="254"
          textAnchor="middle"
          fill="#0284c7"
          fontSize="12"
          fontWeight="900"
          letterSpacing="4"
          fillOpacity="0.65"
          fontFamily="monospace"
        >
          SPENGLER CUP
        </text>

        {/* End-zone Faceoff Circles (Left Defensive Zone) */}
        <circle cx="200" cy="125" r="70" fill="none" stroke="#dc2626" strokeWidth="2" />
        <circle cx="200" cy="125" r="5" fill="#dc2626" />
        <circle cx="200" cy="375" r="70" fill="none" stroke="#dc2626" strokeWidth="2" />
        <circle cx="200" cy="375" r="5" fill="#dc2626" />

        {/* End-zone Faceoff Circles (Right Attacking Zone) */}
        <circle cx="800" cy="125" r="70" fill="none" stroke="#dc2626" strokeWidth="2" />
        <circle cx="800" cy="125" r="5" fill="#dc2626" />
        <circle cx="800" cy="375" r="70" fill="none" stroke="#dc2626" strokeWidth="2" />
        <circle cx="800" cy="375" r="5" fill="#dc2626" />

        {/* Zone Labels (Clean Athletic Typography) */}
        <text x="180" y="38" fill="#64748b" fontSize="10" fontWeight="900" letterSpacing="3" textAnchor="middle" fontFamily="Outfit, sans-serif">
          DEFENSIVE ZONE
        </text>
        <text x="500" y="38" fill="#64748b" fontSize="10" fontWeight="900" letterSpacing="3" textAnchor="middle" fontFamily="Outfit, sans-serif">
          NEUTRAL ZONE
        </text>
        <text x="820" y="38" fill="#64748b" fontSize="10" fontWeight="900" letterSpacing="3" textAnchor="middle" fontFamily="Outfit, sans-serif">
          ATTACKING ZONE
        </text>

        {/* Overhead Arena Spotlight Sheen */}
        <rect
          x="15"
          y="15"
          width="970"
          height="470"
          rx="85"
          ry="85"
          fill="url(#arenaLightSheen)"
          pointerEvents="none"
        />

        {/* Pro Lens Tactical Spacing & Goalie Screen Cone Overlay */}
        {isProLens && (() => {
          const puckX = (currentPuck.x / 100) * 970 + 15;
          const puckY = (currentPuck.y / 100) * 470 + 15;
          const keySkaters = moment.skaters.filter((s) => s.isKeyPlaymaker !== false).slice(0, 3);
          const triPoints = keySkaters
            .map((s) => {
              const pos = interpolatePoint(s.trajectory, currentTime);
              return `${(pos.x / 100) * 970 + 15},${(pos.y / 100) * 470 + 15}`;
            })
            .join(' ');
          return (
            <g pointerEvents="none">
              {/* Shot Danger / Screen Cone from Puck to Attacking Crease */}
              <polygon
                points={`${puckX},${puckY} 940,224 940,276`}
                fill="#0284c7"
                fillOpacity="0.14"
                stroke="#0284c7"
                strokeWidth="1.2"
                strokeDasharray="4 3"
              />
              {/* Tactical Spacing Triangle Between Primary Playmakers */}
              {keySkaters.length === 3 && (
                <polygon
                  points={triPoints}
                  fill="#06b6d4"
                  fillOpacity="0.08"
                  stroke="#0284c7"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                />
              )}
            </g>
          );
        })()}

        {/* Motion Trails for Skaters (All in Pro Lens, Key Playmakers in Story Lens) */}
        {moment.skaters.map((skater) => {
          const isPrimary = skater.isKeyPlaymaker !== false;
          if (!isProLens && !isPrimary) return null;
          const isHcd = skater.teamId === 'HCD';
          const trailColor = isHcd ? '#0284c7' : '#e11d48';
          const pointsStr = skater.trajectory
            .map((p) => `${(p.x / 100) * 970 + 15},${(p.y / 100) * 470 + 15}`)
            .join(' ');

          return (
            <polyline
              key={`trail-${skater.playerId}`}
              points={pointsStr}
              fill="none"
              stroke={trailColor}
              strokeWidth={isPrimary ? '2.5' : '1.5'}
              strokeDasharray="5 3"
              strokeOpacity={isPrimary ? '0.55' : '0.35'}
            />
          );
        })}

        {/* Puck Trajectory Trail (Electric Blue on White Ice) */}
        {moment.puckTrajectory.length > 1 && (
          <polyline
            points={moment.puckTrajectory
              .map((p) => `${(p.x / 100) * 970 + 15},${(p.y / 100) * 470 + 15}`)
              .join(' ')}
            fill="none"
            stroke="#0284c7"
            strokeWidth="4"
            strokeDasharray="7 4"
            strokeOpacity="0.85"
          />
        )}

        {/* Animated Skaters (All 10 On-Ice Skaters: Story Lens highlights 4 Key Playmakers, Pro Lens illuminates all 10) */}
        {moment.skaters.map((skater, index) => {
          const isHcd = skater.teamId === 'HCD';
          const isPrimary = skater.isKeyPlaymaker !== false;
          const currentPos = interpolatePoint(skater.trajectory, currentTime);
          const nextPos = interpolatePoint(skater.trajectory, Math.min(moment.durationSeconds, currentTime + 0.6));
          const svgX = (currentPos.x / 100) * 970 + 15;
          const svgY = (currentPos.y / 100) * 470 + 15;
          const nextSvgX = (nextPos.x / 100) * 970 + 15;
          const nextSvgY = (nextPos.y / 100) * 470 + 15;

          const labelOffsetY = isHcd ? -25 : 25;
          const labelOffsetX = (index % 2 === 0 ? -1 : 1) * 8;
          const showBadge = isPrimary || isProLens;
          const discRadius = isPrimary ? 17 : isProLens ? 14 : 12;
          const groupOpacity = isPrimary || isProLens ? 1 : 0.42;

          return (
            <g key={skater.playerId} filter={isPrimary ? 'url(#skaterShadow)' : undefined} opacity={groupOpacity}>
              {/* Pro Lens Velocity Vector Line */}
              {isProLens && Math.hypot(nextSvgX - svgX, nextSvgY - svgY) > 4 && (
                <line
                  x1={svgX}
                  y1={svgY}
                  x2={svgX + (nextSvgX - svgX) * 1.4}
                  y2={svgY + (nextSvgY - svgY) * 1.4}
                  stroke={isHcd ? '#0284c7' : '#e11d48'}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              )}

              {/* High Speed Pulse Radar */}
              {currentPos.speedKmh > 30 && (isPrimary || isProLens) && (
                <circle
                  cx={svgX}
                  cy={svgY}
                  r="24"
                  fill="none"
                  stroke={isHcd ? '#38bdf8' : '#f43f5e'}
                  strokeWidth="2"
                  strokeOpacity="0.6"
                  className="animate-ping"
                />
              )}

              {/* Player Jersey Disc */}
              <circle
                cx={svgX}
                cy={svgY}
                r={discRadius}
                fill={isHcd ? '#003882' : '#991b1b'}
                stroke={isHcd ? '#38bdf8' : '#ffffff'}
                strokeWidth={isPrimary ? '3' : '2'}
              />

              {/* Varsity Jersey Number */}
              <text
                x={svgX}
                y={svgY + 4}
                textAnchor="middle"
                fill="#ffffff"
                fontSize={isPrimary ? '11.5' : '9.5'}
                fontWeight="900"
                fontFamily="Outfit, sans-serif"
              >
                {skater.jerseyNumber}
              </text>

              {/* Floating Tactical Player Name Badge (Dynamically sized, ZERO text overflow) */}
              {showBadge && (() => {
                const lastName = skater.name.split(' ').slice(-1)[0];
                const labelText = isProLens ? `${lastName} · ${currentPos.speedKmh.toFixed(0)}k` : lastName;
                const charCount = labelText.length;
                const badgeWidth = Math.max(66, charCount * 7.2 + 14);
                const halfW = badgeWidth / 2;

                return (
                  <g transform={`translate(${svgX + labelOffsetX}, ${svgY + labelOffsetY})`}>
                    <rect
                      x={-halfW}
                      y="-10"
                      width={badgeWidth}
                      height="20"
                      rx="6"
                      fill="#090d16"
                      fillOpacity={isPrimary ? '0.95' : '0.82'}
                      stroke={isHcd ? '#38bdf8' : '#f43f5e'}
                      strokeWidth={isPrimary ? '1.2' : '0.8'}
                    />
                    <text
                      x="0"
                      y="4"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize={isPrimary ? '9.5' : '8.5'}
                      fontWeight="800"
                      fontFamily="Outfit, sans-serif"
                    >
                      {labelText}
                    </text>
                  </g>
                );
              })()}
            </g>
          );
        })}

        {/* Vulcanized Rubber Puck on White Ice (Always Top Layer) */}
        {(() => {
          const puckSvgX = (currentPuck.x / 100) * 970 + 15;
          const puckSvgY = (currentPuck.y / 100) * 470 + 15;
          return (
            <g filter="url(#puckAura)">
              {/* Outer Cyan Broadcast Tracking Ring */}
              <circle
                cx={puckSvgX}
                cy={puckSvgY}
                r="12"
                fill="#0284c7"
                fillOpacity="0.25"
                stroke="#0284c7"
                strokeWidth="1.5"
              />
              {/* Solid Vulcanized Jet-Black Puck */}
              <circle
                cx={puckSvgX}
                cy={puckSvgY}
                r="7"
                fill="#09090b"
                stroke="#38bdf8"
                strokeWidth="2"
              />
              {/* Center White Tracking Dot */}
              <circle
                cx={puckSvgX}
                cy={puckSvgY}
                r="2"
                fill="#ffffff"
              />
            </g>
          );
        })()}
      </svg>

      {/* SRF Sport TV Broadcast Telestrator Bug (Upper Left) */}
      <div className="absolute top-2.5 sm:top-3.5 left-2.5 sm:left-3.5 bg-slate-950/90 backdrop-blur-md border border-white/15 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-mono shadow-xl z-20">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-sm bg-rose-500 animate-pulse" />
          <span className="font-bold text-white tracking-wider">
            {moment.gameClock} · P{moment.period}
          </span>
        </div>
        <span className="text-slate-600">|</span>
        <div className="flex items-center gap-1">
          <span className="text-[11px] text-slate-400 hidden sm:inline">Puck Speed:</span>
          <span className="text-xs sm:text-sm font-black text-sky-400 font-mono">
            {currentPuck.speedKmh.toFixed(0)} km/h
          </span>
        </div>
      </div>

      {/* Broadcaster Watermark & Multi-Skater Mode Indicator (Upper Right) */}
      <div className="absolute top-2.5 sm:top-3.5 right-2.5 sm:right-3.5 bg-slate-950/90 backdrop-blur-md border border-white/15 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl flex items-center gap-2 text-[10px] sm:text-xs font-bold shadow-xl z-20">
        <div className="hidden md:flex items-center gap-1.5">
          <span className="text-cyan-400 font-black">HC Davos 6</span>
          <span className="text-slate-400 font-normal">:</span>
          <span className="text-white font-black">3 U.S. Selects</span>
        </div>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-blue-950 border border-cyan-500/40 text-cyan-300 font-mono uppercase font-black">
          {isProLens ? '10 Skaters · Vectors' : 'SRF Story View'}
        </span>
      </div>
    </div>
  );
};
