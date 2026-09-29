'use client';

import React from 'react';

interface KonarkChakraProps {
  className?: string;
  size?: number;
  accentColor?: string;
  animate?: boolean;
}

export const KonarkChakra: React.FC<KonarkChakraProps> = ({
  className = '',
  size = 64,
  accentColor = '#173C35',
  animate = true,
}) => {
  const spokesCount = 24; // Traditional 24 spokes of Konark Sun Temple

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={animate ? 'animate-delicate-spin' : ''}
      >
        {/* Outer Fine Ring */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke={accentColor}
          strokeWidth="1.2"
          strokeOpacity="0.35"
          strokeDasharray="3 2"
        />
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke={accentColor}
          strokeWidth="1.5"
          strokeOpacity="0.85"
        />

        {/* Traditional 24 Architectural Spokes */}
        {Array.from({ length: spokesCount }).map((_, index) => {
          const angle = (index * 360) / spokesCount;
          const isMajor = index % 3 === 0;
          return (
            <line
              key={index}
              x1="50"
              y1="50"
              x2="50"
              y2={isMajor ? "11" : "18"}
              stroke={accentColor}
              strokeWidth={isMajor ? "1.6" : "0.9"}
              strokeOpacity={isMajor ? "0.9" : "0.5"}
              transform={`rotate(${angle} 50 50)`}
            />
          );
        })}

        {/* Intermediate Ring */}
        <circle
          cx="50"
          cy="50"
          r="27"
          stroke={accentColor}
          strokeWidth="1.2"
          strokeOpacity="0.6"
        />

        {/* Center Hub */}
        <circle
          cx="50"
          cy="50"
          r="13"
          stroke={accentColor}
          strokeWidth="1.8"
          fill="#F7F3EA"
          strokeOpacity="0.9"
        />
        <circle
          cx="50"
          cy="50"
          r="5"
          fill="#B85C38"
          opacity="0.9"
        />
      </svg>
    </div>
  );
};
