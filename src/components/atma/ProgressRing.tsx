'use client';

import React from 'react';

interface ProgressRingProps {
  progress: number; // 0 to 1
  size?: number;
  strokeWidth?: number;
  centerValue?: string;
  centerLabel?: string;
  strokeColor?: string;
  bgColor?: string;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  progress,
  size = 230,
  strokeWidth = 10,
  centerValue = '0/5',
  centerLabel = 'RITUALS TODAY',
  strokeColor = '#D4AF37',
  bgColor = '#1F1F1F'
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - Math.min(1, Math.max(0, progress)) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90 origin-center transition-all duration-700 ease-out"
      >
        {/* Glow Filter */}
        <defs>
          <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progress Arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          filter="url(#gold-glow)"
          style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
        />
      </svg>

      {/* Center Label & Value */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none">
        <span className="font-cormorant text-4xl sm:text-5xl font-bold tracking-tight text-[#F7F7F7] drop-shadow-md">
          {centerValue}
        </span>
        <span className="font-geist text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#D4AF37] uppercase mt-1">
          {centerLabel}
        </span>
      </div>
    </div>
  );
};
