'use client';

import React, { useState } from 'react';
import { useEcosystem } from '@/lib/store';
import { OdiaApp } from '@/lib/types';
import {
  Navigation,
  Wrench,
  HeartPulse,
  Building2,
  ShoppingBag,
  Layers,
  ArrowUpRight,
  Sparkles
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
        return <Navigation className="w-5 h-5 text-[#ff6b4a]" />;
      case 'mahalaxmi':
        return <Wrench className="w-5 h-5 text-[#06b6d4]" />;
      case 'pet-app':
        return <HeartPulse className="w-5 h-5 text-[#14b8a6]" />;
      case 'temple-app':
        return <Building2 className="w-5 h-5 text-[#f59e0b]" />;
      case 'iraya':
        return <ShoppingBag className="w-5 h-5 text-[#10b981]" />;
      default:
        return <Layers className="w-5 h-5 text-[#ff6b4a]" />;
    }
  };

  const getNodeGlow = (slug: string) => {
    switch (slug) {
      case 'atma':
        return 'border-[#ff6b4a]/60 shadow-[0_0_25px_rgba(255,107,74,0.35)]';
      case 'mahalaxmi':
        return 'border-[#06b6d4]/60 shadow-[0_0_25px_rgba(6,182,212,0.35)]';
      case 'pet-app':
        return 'border-[#14b8a6]/60 shadow-[0_0_25px_rgba(20,184,166,0.35)]';
      case 'temple-app':
        return 'border-[#f59e0b]/60 shadow-[0_0_25px_rgba(245,158,11,0.35)]';
      case 'iraya':
        return 'border-[#10b981]/60 shadow-[0_0_25px_rgba(16,185,129,0.35)]';
      default:
        return 'border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.2)]';
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
        : app.slug === 'iraya'
        ? 'iraya'
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
    <div className="relative w-full max-w-[620px] h-[440px] sm:h-[480px] mx-auto flex items-center justify-center select-none">
      {/* Background Studio Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer Ring */}
        <div className="w-[380px] sm:w-[440px] h-[380px] sm:h-[440px] rounded-full border border-white/10 border-dashed animate-spin [animation-duration:60s]" />
        
        {/* Mid Ring with Coral Ember Gradient */}
        <div className="absolute w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] rounded-full border border-[#ff6b4a]/20 animate-spin [animation-duration:40s] [animation-direction:reverse]" />
        
        {/* Ambient Center Glow */}
        <div
          className="absolute w-[220px] h-[220px] rounded-full transition-all duration-700 pointer-events-none blur-2xl"
          style={{
            backgroundColor: hoveredApp
              ? hoveredApp.slug === 'atma'
                ? 'rgba(255, 107, 74, 0.2)'
                : hoveredApp.slug === 'mahalaxmi'
                ? 'rgba(6, 182, 212, 0.2)'
                : hoveredApp.slug === 'pet-app'
                ? 'rgba(20, 184, 166, 0.2)'
                : hoveredApp.slug === 'iraya'
                ? 'rgba(16, 185, 129, 0.2)'
                : 'rgba(245, 158, 11, 0.2)'
              : 'rgba(255, 107, 74, 0.08)',
          }}
        />
      </div>

      {/* SVG Connecting Beams */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 600 600">
        {displayedApps.map((app, index) => {
          const angle = (index * 2 * Math.PI) / totalNodes - Math.PI / 2;
          const radius = 175;
          const centerX = 300;
          const centerY = 300;
          const nodeX = centerX + radius * Math.cos(angle);
          const nodeY = centerY + radius * Math.sin(angle);
          const isHovered = hoveredAppId === app.id;

          const lineColor =
            app.slug === 'atma'
              ? '#ff6b4a'
              : app.slug === 'mahalaxmi'
              ? '#06b6d4'
              : app.slug === 'pet-app'
              ? '#14b8a6'
              : app.slug === 'iraya'
              ? '#10b981'
              : '#f59e0b';

          return (
            <g key={`beam-${app.id}`}>
              <line
                x1={centerX}
                y1={centerY}
                x2={nodeX}
                y2={nodeY}
                stroke={lineColor}
                strokeWidth={isHovered ? '2' : '1'}
                strokeOpacity={isHovered ? 0.9 : 0.25}
                strokeDasharray={isHovered ? 'none' : '4 4'}
                className="transition-all duration-300"
              />
              <circle
                cx={(centerX + nodeX) / 2}
                cy={(centerY + nodeY) / 2}
                r={isHovered ? '3' : '2'}
                fill={lineColor}
                opacity={isHovered ? 1 : 0.4}
                className="transition-all duration-300"
              />
            </g>
          );
        })}
      </svg>

      {/* Central OdiaNXT Studio Core */}
      <div
        className="relative z-20 flex flex-col items-center justify-center group cursor-pointer"
        onClick={() => {
          playSound('ecosystem');
          const eco = document.getElementById('ecosystem');
          if (eco) eco.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#111114] border border-white/20 flex flex-col items-center justify-center shadow-2xl group-hover:border-[#ff6b4a] group-hover:shadow-[0_0_35px_rgba(255,107,74,0.35)] transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff6b4a] to-[#f59e0b] flex items-center justify-center mb-1 shadow-md">
            <span className="text-white font-black text-xs tracking-wider">OX</span>
          </div>
          
          <span className="text-xs font-black tracking-[0.16em] uppercase text-white">
            ODIANXT
          </span>
          <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-[#ff6b4a]">
            CORE ENGINE
          </span>
        </div>

        {/* Central Pulse Pill */}
        <div className="mt-3 px-3 py-1 rounded-full bg-[#111114] border border-white/10 text-[10px] font-mono uppercase tracking-wider text-stone-300 flex items-center gap-1.5 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b4a] animate-pulse" />
          <span>{apps.length} STUDIO NODES LIVE</span>
        </div>
      </div>

      {/* Orbiting Application Nodes */}
      {displayedApps.map((app, index) => {
        const angle = (index * 2 * Math.PI) / totalNodes - Math.PI / 2;
        const radius = 175;
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
            className={`absolute z-30 ${isHovered ? 'z-40 scale-110' : 'hover:scale-105'}`}
            onMouseEnter={() => {
              setHoveredAppId(app.id);
              playSound('hover');
            }}
            onMouseLeave={() => setHoveredAppId(null)}
            onClick={() => handleNodeClick(app)}
          >
            <div className="relative flex flex-col items-center cursor-pointer transition-all duration-300">
              {/* Node Icon Box */}
              <div
                className={`w-13 h-13 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300 border bg-[#111114] ${
                  isHovered
                    ? getNodeGlow(app.slug)
                    : 'border-white/10 hover:border-white/30 shadow-lg'
                }`}
              >
                {getAppIcon(app.slug)}
              </div>

              {/* Node Label Below */}
              <div
                className={`mt-2 px-2.5 py-0.5 rounded-md text-center transition-all duration-200 border whitespace-nowrap ${
                  isHovered
                    ? 'bg-[#ff6b4a] text-white font-bold border-[#ff6b4a] shadow-lg text-[10px]'
                    : 'bg-[#111114]/90 text-stone-300 font-semibold border-white/10 text-[10px] uppercase tracking-wider'
                }`}
              >
                <div className="flex items-center gap-1">
                  <span>{app.name}</span>
                  {isHovered && <ArrowUpRight className="w-2.5 h-2.5 text-white" />}
                </div>
              </div>

              {/* Studio Info Tooltip on Hover */}
              {isHovered && (
                <div className="absolute bottom-full mb-3 w-64 p-3.5 rounded-xl bg-[#111114]/95 border border-white/15 backdrop-blur-xl shadow-2xl pointer-events-none animate-in fade-in zoom-in-95 duration-150 z-50 text-left">
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#ff6b4a]">
                      {app.category}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded font-mono font-bold uppercase bg-white/10 text-stone-300">
                      {app.status.replace('_', ' ')}
                    </span>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed font-normal">
                    {app.tagline}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#ff6b4a] font-bold uppercase tracking-wider">
                    <span>Explore Module</span>
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

