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
    <div className="relative w-full aspect-[2/1] bg-slate-950 rounded-2xl border border-rink-border overflow-hidden shadow-2xl">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Authentic Swiss Ice Surface Gradient with Stadium Light Glow */}
          <linearGradient id="iceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0e1d3d" />
            <stop offset="25%" stopColor="#132752" />
            <stop offset="50%" stopColor="#193268" />
            <stop offset="75%" stopColor="#132752" />
            <stop offset="100%" stopColor="#0a1733" />
          </linearGradient>

          {/* Stadium Floodlight Sheen & Ice Surface Reflection */}
          <linearGradient id="stadiumSheen" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.07" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.06" />
          </linearGradient>

          {/* Glow filter for puck */}
          <filter id="puckGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ice Rink Base */}
        <rect
          x="15"
          y="15"
          width="970"
          height="470"
          rx="90"
          ry="90"
          fill="url(#iceGradient)"
          stroke="#475569"
          strokeWidth="5"
        />

        {/* Stadium Light Diagonal Reflection Sheen across Ice */}
        <rect
          x="15"
          y="15"
          width="970"
          height="470"
          rx="90"
          ry="90"
          fill="url(#stadiumSheen)"
          pointerEvents="none"
        />

        {/* Goal Creases */}
        {/* Left Goal Net & Crease */}
        <path
          d="M 60 215 A 35 35 0 0 1 60 285 Z"
          fill="#1e3a8a"
          fillOpacity="0.35"
          stroke="#60a5fa"
          strokeWidth="2"
        />
        <rect x="35" y="235" width="25" height="30" fill="none" stroke="#ef4444" strokeWidth="3" />

        {/* Right Goal Net & Crease */}
        <path
          d="M 940 215 A 35 35 0 0 0 940 285 Z"
          fill="#1e3a8a"
          fillOpacity="0.35"
          stroke="#60a5fa"
          strokeWidth="2"
        />
        <rect x="940" y="235" width="25" height="30" fill="none" stroke="#ef4444" strokeWidth="3" />

        {/* Left Goal Line (Red) */}
        <line x1="60" y1="25" x2="60" y2="475" stroke="#ef4444" strokeWidth="2.5" strokeOpacity="0.8" />

        {/* Right Goal Line (Red) */}
        <line x1="940" y1="25" x2="940" y2="475" stroke="#ef4444" strokeWidth="2.5" strokeOpacity="0.8" />

        {/* Left Blue Line */}
        <line x1="350" y1="18" x2="350" y2="482" stroke="#2563eb" strokeWidth="5" strokeOpacity="0.9" />

        {/* Right Blue Line */}
        <line x1="650" y1="18" x2="650" y2="482" stroke="#2563eb" strokeWidth="5" strokeOpacity="0.9" />

        {/* Center Red Line */}
        <line x1="500" y1="18" x2="500" y2="482" stroke="#dc2626" strokeWidth="5" strokeOpacity="0.9" />

        {/* Center Faceoff Circle & Dot */}
        <circle cx="500" cy="250" r="75" fill="none" stroke="#2563eb" strokeWidth="3" strokeOpacity="0.8" />
        <circle cx="500" cy="250" r="6" fill="#2563eb" />

        {/* End-zone Faceoff Circles (Left) */}
        <circle cx="200" cy="120" r="75" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeOpacity="0.6" />
        <circle cx="200" cy="120" r="5" fill="#dc2626" />
        <circle cx="200" cy="380" r="75" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeOpacity="0.6" />
        <circle cx="200" cy="380" r="5" fill="#dc2626" />

        {/* End-zone Faceoff Circles (Right) */}
        <circle cx="800" cy="120" r="75" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeOpacity="0.6" />
        <circle cx="800" cy="120" r="5" fill="#dc2626" />
        <circle cx="800" cy="380" r="75" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeOpacity="0.6" />
        <circle cx="800" cy="380" r="5" fill="#dc2626" />

        {/* Zone Labels */}
        <text x="180" y="45" fill="#64748b" fontSize="13" fontWeight="bold" letterSpacing="2" textAnchor="middle">
          DEFENSIVE ZONE
        </text>
        <text x="500" y="45" fill="#64748b" fontSize="13" fontWeight="bold" letterSpacing="2" textAnchor="middle">
          NEUTRAL ZONE
        </text>
        <text x="820" y="45" fill="#64748b" fontSize="13" fontWeight="bold" letterSpacing="2" textAnchor="middle">
          ATTACKING ZONE
        </text>

        {/* Motion Trails for Skaters */}
        {moment.skaters.map((skater) => {
          const isHcd = skater.teamId === 'HCD';
          const trailColor = isHcd ? '#f5b000' : '#ef4444';
          const pointsStr = skater.trajectory
            .map((p) => `${(p.x / 100) * 970 + 15},${(p.y / 100) * 470 + 15}`)
            .join(' ');

          return (
            <g key={`trail-${skater.playerId}`}>
              <polyline
                points={pointsStr}
                fill="none"
                stroke={trailColor}
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeOpacity="0.4"
              />
            </g>
          );
        })}

        {/* Puck Motion Trail */}
        {moment.puckTrajectory.length > 1 && (
          <polyline
            points={moment.puckTrajectory
              .map((p) => `${(p.x / 100) * 970 + 15},${(p.y / 100) * 470 + 15}`)
              .join(' ')}
            fill="none"
            stroke="#00f2fe"
            strokeWidth="3"
            strokeDasharray="6 3"
            strokeOpacity="0.7"
          />
        )}

        {/* Animated Skaters */}
        {moment.skaters.map((skater) => {
          const isHcd = skater.teamId === 'HCD';
          const currentPos = interpolatePoint(skater.trajectory, currentTime);
          const svgX = (currentPos.x / 100) * 970 + 15;
          const svgY = (currentPos.y / 100) * 470 + 15;

          return (
            <g key={skater.playerId} className="transition-transform duration-75">
              {/* Outer Pulse/Aura for High Speed */}
              {currentPos.speedKmh > 30 && (
                <circle
                  cx={svgX}
                  cy={svgY}
                  r="24"
                  fill="none"
                  stroke={isHcd ? '#f5b000' : '#00f2fe'}
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                  className="animate-ping"
                />
              )}

              {/* Player Body Disc */}
              <circle
                cx={svgX}
                cy={svgY}
                r="16"
                fill={isHcd ? '#0047ba' : '#991b1b'}
                stroke={isHcd ? '#f5b000' : '#ffffff'}
                strokeWidth="3"
                className="drop-shadow-lg"
              />

              {/* Jersey Number */}
              <text
                x={svgX}
                y={svgY + 4}
                textAnchor="middle"
                fill="#ffffff"
                fontSize="11"
                fontWeight="900"
                fontFamily="monospace"
              >
                {skater.jerseyNumber}
              </text>

              {/* Skater Tag & Speed Label */}
              <g transform={`translate(${svgX}, ${svgY - 22})`}>
                <rect
                  x="-42"
                  y="-14"
                  width="84"
                  height="16"
                  rx="4"
                  fill="#0f172a"
                  fillOpacity="0.85"
                  stroke="#334155"
                  strokeWidth="1"
                />
                <text
                  x="0"
                  y="-2"
                  textAnchor="middle"
                  fill="#f1f5f9"
                  fontSize="9"
                  fontWeight="bold"
                >
                  {skater.name.split(' ')[1] || skater.name}
                  {isProLens ? ` · ${currentPos.speedKmh.toFixed(0)}k` : ''}
                </text>
              </g>
            </g>
          );
        })}

        {/* Animated Puck */}
        {(() => {
          const puckSvgX = (currentPuck.x / 100) * 970 + 15;
          const puckSvgY = (currentPuck.y / 100) * 470 + 15;
          return (
            <g filter="url(#puckGlow)">
              <circle
                cx={puckSvgX}
                cy={puckSvgY}
                r="9"
                fill="#00f2fe"
                fillOpacity="0.3"
              />
              <circle
                cx={puckSvgX}
                cy={puckSvgY}
                r="6"
                fill="#000000"
                stroke="#00f2fe"
                strokeWidth="2"
              />
            </g>
          );
        })()}
      </svg>

      {/* Floating Rink Overlay HUD */}
      <div className="absolute top-4 left-4 bg-slate-900/90 border border-slate-800 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-3 text-xs font-mono text-slate-300">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{moment.gameClock} · P{moment.period}</span>
        </span>
        <span className="text-slate-600">|</span>
        <span className="text-neon-cyan font-bold">Puck: {currentPuck.speedKmh.toFixed(1)} km/h</span>
      </div>

      <div className="absolute top-4 right-4 bg-slate-900/90 border border-slate-800 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold text-white">
        <span className="text-hcd-yellow">HC Davos (HCD)</span>
        <span className="text-slate-500">vs</span>
        <span className="text-usa-red">USA Selects</span>
      </div>
    </div>
  );
};
