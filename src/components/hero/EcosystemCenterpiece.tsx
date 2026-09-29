'use client';

import React, { useState } from 'react';
import { useEcosystem } from '@/lib/store';
import { OdiaApp } from '@/lib/types';
import { KonarkChakra } from '../ui/KonarkChakra';
import {
  Navigation,
  Wrench,
  HeartPulse,
  Building2,
  Layers,
  ArrowUpRight,
  Route,
  Cog,
  PawPrint,
  Compass
} from 'lucide-react';

export const EcosystemCenterpiece: React.FC = () => {
  const { apps, playSound, setActiveAppModal } = useEcosystem();
  const [hoveredAppId, setHoveredAppId] = useState<string | null>(null);

  const displayedApps = apps.filter(a => a.isActive);
  const totalNodes = displayedApps.length;

  const hoveredApp = displayedApps.find(a => a.id === hoveredAppId);

  const getAppIcon = (slug: string) => {
    switch (slug) {
      case 'atma':
        return <Navigation className="w-5 h-5 text-[#173C35]" />;
      case 'mahalaxmi':
        return <Wrench className="w-5 h-5 text-[#B85C38]" />;
      case 'pet-app':
        return <HeartPulse className="w-5 h-5 text-[#173C35]" />;
      case 'temple-app':
        return <Building2 className="w-5 h-5 text-[#C49A5A]" />;
      default:
        return <Layers className="w-5 h-5 text-[#173C35]" />;
    }
  };

  const handleNodeClick = (app: OdiaApp) => {
    playSound(
      app.slug === 'atma'
        ? 'atma'
        : app.slug === 'mahalaxmi'
        ? 'mahalaxmi'
        : app.slug === 'pet-app'
        ? 'pet'
        : app.slug === 'temple-app'
        ? 'temple'
        : 'click'
    );
    const sectionElement = document.getElementById(`section-${app.slug}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveAppModal(app);
    }
  };

  return (
    <div className="relative w-full max-w-[620px] h-[480px] sm:h-[540px] mx-auto flex items-center justify-center select-none">
      {/* Background Architectural Geometry & Orbit Linework */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer Architectural Dashed Ring */}
        <div className="w-[400px] sm:w-[460px] h-[400px] sm:h-[460px] rounded-full border border-[#173C35]/12 border-dashed animate-delicate-spin" />
        
        {/* Mid Ring */}
        <div className="absolute w-[290px] sm:w-[330px] h-[290px] sm:h-[330px] rounded-full border border-[#B85C38]/15 animate-reverse-delicate-spin" />
        
        {/* Inner Subtle Tint */}
        <div
          className="absolute w-[200px] h-[200px] rounded-full transition-all duration-700 pointer-events-none"
          style={{
            backgroundColor: hoveredApp
              ? hoveredApp.slug === 'atma'
                ? 'rgba(168, 183, 161, 0.25)' // Sage
                : hoveredApp.slug === 'mahalaxmi'
                ? 'rgba(184, 92, 56, 0.12)' // Terracotta
                : hoveredApp.slug === 'pet-app'
                ? 'rgba(168, 183, 161, 0.22)' // Soft Sage
                : 'rgba(196, 154, 90, 0.18)' // Muted Gold
              : 'rgba(23, 60, 53, 0.04)',
          }}
        />
      </div>

      {/* SVG Living Network Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 600 600">
        {displayedApps.map((app, index) => {
          const angle = (index * 2 * Math.PI) / totalNodes - Math.PI / 2;
          const radius = 185;
          const centerX = 300;
          const centerY = 300;
          const nodeX = centerX + radius * Math.cos(angle);
          const nodeY = centerY + radius * Math.sin(angle);
          const isHovered = hoveredAppId === app.id;

          const lineColor =
            app.slug === 'mahalaxmi'
              ? '#B85C38'
              : app.slug === 'temple-app'
              ? '#C49A5A'
              : '#173C35';

          return (
            <g key={`beam-${app.id}`}>
              {/* Architectural Living Connection Line */}
              <line
                x1={centerX}
                y1={centerY}
                x2={nodeX}
                y2={nodeY}
                stroke={lineColor}
                strokeWidth={isHovered ? '2' : '1'}
                strokeOpacity={isHovered ? 0.8 : 0.3}
                strokeDasharray={isHovered ? 'none' : '4 3'}
                className="transition-all duration-300"
              />
              
              {/* Subtle Connection Midpoint Dot */}
              <circle
                cx={(centerX + nodeX) / 2}
                cy={(centerY + nodeY) / 2}
                r={isHovered ? '3' : '2'}
                fill={lineColor}
                opacity={isHovered ? 0.9 : 0.5}
                className="transition-all duration-300"
              />
            </g>
          );
        })}
      </svg>

      {/* Central OdiaNXT Living Hub */}
      <div
        className="relative z-20 flex flex-col items-center justify-center group cursor-pointer"
        onClick={() => {
          playSound('ecosystem');
          const eco = document.getElementById('ecosystem');
          if (eco) eco.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#FFFFFF] border-2 border-[#173C35]/30 flex items-center justify-center shadow-md group-hover:border-[#173C35] group-hover:scale-102 transition-all duration-300">
          <KonarkChakra size={84} accentColor="#173C35" animate />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xs sm:text-sm font-serif font-bold tracking-tight text-[#173C35]">
              OdiaNXT
            </span>
            <span className="text-[8px] font-mono font-semibold uppercase tracking-wider text-[#B85C38]">
              ECOSYSTEM
            </span>
          </div>
        </div>

        {/* Central Badge */}
        <div className="mt-3 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#173C35]/15 text-[10px] font-mono text-[#173C35] flex items-center gap-1.5 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B85C38]" />
          <span>{apps.length} Living Network Nodes</span>
        </div>
      </div>

      {/* Orbiting Application Nodes */}
      {displayedApps.map((app, index) => {
        const angle = (index * 2 * Math.PI) / totalNodes - Math.PI / 2;
        const radius = 185;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        const isHovered = hoveredAppId === app.id;

        return (
          <div
            key={app.id}
            style={{
              transform: `translate(${x}px, ${y}px)`,
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className={`absolute z-30 ${isHovered ? 'z-40 scale-108' : 'hover:scale-104'}`}
            onMouseEnter={() => {
              setHoveredAppId(app.id);
              playSound(
                app.slug === 'atma'
                  ? 'atma'
                  : app.slug === 'mahalaxmi'
                  ? 'mahalaxmi'
                  : app.slug === 'pet-app'
                  ? 'pet'
                  : app.slug === 'temple-app'
                  ? 'temple'
                  : 'hover'
              );
            }}
            onMouseLeave={() => setHoveredAppId(null)}
            onClick={() => handleNodeClick(app)}
          >
            <div className="relative flex flex-col items-center cursor-pointer transition-all duration-300">
              {/* Node Icon Box */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 border shadow-sm ${
                  isHovered
                    ? 'bg-[#FFFFFF] border-[#173C35] shadow-md -translate-y-1'
                    : 'bg-[#FFFFFF] border-[#173C35]/15 hover:border-[#173C35]/40'
                }`}
              >
                {getAppIcon(app.slug)}
              </div>

              {/* Node Label Below */}
              <div
                className={`mt-2 px-2.5 py-1 rounded-lg text-center transition-all duration-200 border whitespace-nowrap ${
                  isHovered
                    ? 'bg-[#173C35] text-[#F7F3EA] font-bold border-[#173C35] shadow-xs'
                    : 'bg-[#FFFFFF] text-[#242522] font-semibold border-[#173C35]/12 text-xs'
                }`}
              >
                <div className="flex items-center gap-1">
                  <span className="text-xs">{app.name}</span>
                  {isHovered && <ArrowUpRight className="w-3 h-3 text-[#B85C38]" />}
                </div>
              </div>

              {/* Editorial Information Tooltip on Hover */}
              {isHovered && (
                <div className="absolute bottom-full mb-3 w-60 p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/20 shadow-xl pointer-events-none animate-in fade-in zoom-in-95 duration-150 z-50 text-left">
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#565851]">
                      {app.category}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded font-bold uppercase bg-[#173C35]/10 text-[#173C35]">
                      {app.status.replace('_', ' ')}
                    </span>
                  </div>

                  <p className="text-xs text-[#242522] leading-relaxed font-normal">
                    {app.tagline}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-[#173C35]/10 flex items-center justify-between text-[10px] text-[#B85C38] font-semibold">
                    <span>Click to explore module</span>
                    <span>→</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
