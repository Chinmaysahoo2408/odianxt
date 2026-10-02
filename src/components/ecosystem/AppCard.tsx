'use client';

import React from 'react';
import { OdiaApp } from '@/lib/types';
import { useEcosystem } from '@/lib/store';
import { formatStatusLabel } from '@/lib/utils';
import {
  Navigation,
  Wrench,
  HeartPulse,
  Building2,
  Layers,
  ArrowRight,
  ExternalLink,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface AppCardProps {
  app: OdiaApp;
  index: number;
}

export const AppCard: React.FC<AppCardProps> = ({ app, index }) => {
  const { playSound, setActiveAppModal } = useEcosystem();

  const getAccentConfig = () => {
    switch (app.slug) {
      case 'atma':
        return {
          icon: <Navigation className="w-5 h-5 text-[#ff6b4a]" />,
          glow: 'shadow-[0_0_25px_rgba(255,107,74,0.35)]',
          border: 'group-hover:border-[#ff6b4a]/50',
          accent: '#ff6b4a',
          badgeBg: 'bg-[#ff6b4a]/15 text-[#ff6b4a] border-[#ff6b4a]/30'
        };
      case 'mahalaxmi':
        return {
          icon: <Wrench className="w-5 h-5 text-[#06b6d4]" />,
          glow: 'shadow-[0_0_25px_rgba(6,182,212,0.35)]',
          border: 'group-hover:border-[#06b6d4]/50',
          accent: '#06b6d4',
          badgeBg: 'bg-[#06b6d4]/15 text-[#06b6d4] border-[#06b6d4]/30'
        };
      case 'pet-app':
        return {
          icon: <HeartPulse className="w-5 h-5 text-[#14b8a6]" />,
          glow: 'shadow-[0_0_25px_rgba(20,184,166,0.35)]',
          border: 'group-hover:border-[#14b8a6]/50',
          accent: '#14b8a6',
          badgeBg: 'bg-[#14b8a6]/15 text-[#14b8a6] border-[#14b8a6]/30'
        };
      case 'temple-app':
        return {
          icon: <Building2 className="w-5 h-5 text-[#f59e0b]" />,
          glow: 'shadow-[0_0_25px_rgba(245,158,11,0.35)]',
          border: 'group-hover:border-[#f59e0b]/50',
          accent: '#f59e0b',
          badgeBg: 'bg-[#f59e0b]/15 text-[#f59e0b] border-[#f59e0b]/30'
        };
      default:
        return {
          icon: <Layers className="w-5 h-5 text-[#ff6b4a]" />,
          glow: 'shadow-[0_0_25px_rgba(255,107,74,0.35)]',
          border: 'group-hover:border-[#ff6b4a]/50',
          accent: '#ff6b4a',
          badgeBg: 'bg-[#ff6b4a]/15 text-[#ff6b4a] border-[#ff6b4a]/30'
        };
    }
  };

  const config = getAccentConfig();

  const handleExplore = () => {
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
    <div className={`relative flex flex-col justify-between rounded-2xl bg-[#111114] border border-white/10 p-7 transition-all duration-300 group hover:shadow-[0_12px_35px_rgba(0,0,0,0.8)] ${config.border}`}>
      <div>
        {/* Top Header Row */}
        <div className="flex items-start justify-between gap-3 mb-5">
          {/* App Icon with Neon Box Glow */}
          <div className={`w-12 h-12 rounded-xl bg-[#18181c] border border-white/10 flex items-center justify-center transition-all group-hover:scale-105 ${config.glow}`}>
            {config.icon}
          </div>

          {/* Dynamic Status Badge */}
          <div
            className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border flex items-center gap-1.5 ${config.badgeBg}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            <span>{app.statusText || formatStatusLabel(app.status)}</span>
          </div>
        </div>

        {/* Category & Serial Number */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-mono uppercase tracking-[0.16em] text-stone-400">
            {app.category}
          </span>
          <span className="text-white/20">•</span>
          <span className="text-[11px] font-mono font-bold text-[#ff6b4a]">
            0{index + 1}
          </span>
        </div>

        {/* Name & Tagline */}
        <h3 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <span>{app.name}</span>
          {app.logoBadge && (
            <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-stone-300 border border-white/10">
              {app.logoBadge}
            </span>
          )}
        </h3>

        <p className="mt-1 text-xs font-medium text-[#ff6b4a] italic">
          "{app.tagline}"
        </p>

        <p className="mt-3.5 text-xs sm:text-sm text-stone-400 line-clamp-3 leading-relaxed">
          {app.description}
        </p>

        {/* Key Features List */}
        <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-2">
          <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-stone-400">
            CORE CAPABILITIES
          </span>
          <div className="flex flex-wrap gap-1.5">
            {app.features.slice(0, 3).map(feat => (
              <span
                key={feat.id}
                className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#18181c] text-stone-300 border border-white/10 flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3 h-3 text-[#ff6b4a] flex-shrink-0" />
                <span className="truncate max-w-[170px]">{feat.title}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-3.5 flex flex-wrap gap-1">
          {app.technologies.slice(0, 4).map(tech => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-stone-400 border border-white/5 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="mt-7 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
        <button
          onClick={handleExplore}
          onMouseEnter={() => playSound('hover')}
          className="flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold uppercase tracking-[0.14em] bg-[#ff6b4a] hover:bg-[#ff8a6d] text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,107,74,0.3)]"
        >
          <span>EXPLORE PLATFORM</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => {
            playSound('click');
            setActiveAppModal(app);
          }}
          title="Full Specifications"
          className="p-2.5 rounded-lg bg-[#18181c] hover:bg-[#202026] border border-white/10 text-stone-300 hover:text-white transition-all flex items-center justify-center cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-[#ff6b4a]" />
        </button>

        {/* Open App / Visit Website button */}
        {(app.appUrl || app.websiteUrl) ? (
          <a
            href={app.appUrl || app.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound('click')}
            className="py-2.5 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 border border-white/15 transition-all flex items-center gap-1"
          >
            <span>LAUNCH</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span
            className="px-3 py-2.5 rounded-lg text-[10px] font-mono uppercase tracking-wider text-stone-400 bg-[#18181c] border border-white/10 select-none"
          >
            {app.status === 'live' ? 'READY' : 'IN DEV'}
          </span>
        )}
      </div>
    </div>
  );
};

