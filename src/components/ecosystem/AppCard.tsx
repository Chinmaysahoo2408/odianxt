'use client';

import React from 'react';
import { OdiaApp } from '@/lib/types';
import { useEcosystem } from '@/lib/store';
import { getStatusBadgeStyle, formatStatusLabel } from '@/lib/utils';
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

  const statusStyle = getStatusBadgeStyle(app.status);

  const getIcon = () => {
    switch (app.slug) {
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
    <div className="relative flex flex-col justify-between rounded-3xl bg-[#FFFFFF] border border-[#173C35]/12 p-7 shadow-xs hover:shadow-md hover:border-[#173C35]/30 transition-all duration-300 group">
      <div>
        {/* Top Header Row */}
        <div className="flex items-start justify-between gap-3 mb-5">
          {/* App Icon */}
          <div className="w-12 h-12 rounded-2xl bg-[#F7F3EA] border border-[#173C35]/12 flex items-center justify-center transition-transform group-hover:scale-105">
            {getIcon()}
          </div>

          {/* Dynamic Status Badge */}
          <div
            className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide border flex items-center gap-1.5 ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`} />
            <span>{app.statusText || formatStatusLabel(app.status)}</span>
          </div>
        </div>

        {/* Category & Serial Number */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-mono uppercase tracking-wider text-[#565851]">
            {app.category}
          </span>
          <span className="text-[#A8B7A1]">•</span>
          <span className="text-[11px] font-mono font-semibold text-[#173C35]">
            0{index + 1}
          </span>
        </div>

        {/* Name & Tagline */}
        <h3 className="text-2xl font-serif text-[#173C35] font-bold flex items-center gap-2">
          <span>{app.name}</span>
          {app.logoBadge && (
            <span className="text-[9px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#173C35]/8 text-[#173C35] border border-[#173C35]/15">
              {app.logoBadge}
            </span>
          )}
        </h3>

        <p className="mt-1 text-xs font-medium text-[#B85C38] italic">
          "{app.tagline}"
        </p>

        <p className="mt-3.5 text-xs sm:text-sm text-[#565851] line-clamp-3 leading-relaxed">
          {app.description}
        </p>

        {/* Key Features List */}
        <div className="mt-5 pt-4 border-t border-[#173C35]/10 flex flex-col gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#565851]">
            Core Modules
          </span>
          <div className="flex flex-wrap gap-1.5">
            {app.features.slice(0, 3).map(feat => (
              <span
                key={feat.id}
                className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#F7F3EA] text-[#242522] border border-[#173C35]/10 flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3 h-3 text-[#173C35] flex-shrink-0" />
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
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#E4EBE0] text-[#173C35] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="mt-7 pt-4 border-t border-[#173C35]/10 flex items-center justify-between gap-2">
        <button
          onClick={handleExplore}
          onMouseEnter={() => playSound('hover')}
          className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#173C35] hover:bg-[#0F2722] text-[#F7F3EA] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
        >
          <span>Explore App</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => {
            playSound('click');
            setActiveAppModal(app);
          }}
          title="Full Specifications"
          className="p-2.5 rounded-xl bg-[#F7F3EA] hover:bg-[#E4EBE0] border border-[#173C35]/15 text-[#173C35] transition-all flex items-center justify-center cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-[#B85C38]" />
        </button>

        {/* Open App / Visit Website button ONLY if URL exists (Rule: No fake URLs) */}
        {(app.appUrl || app.websiteUrl) ? (
          <a
            href={app.appUrl || app.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound('click')}
            className="py-2.5 px-3 rounded-xl text-xs font-semibold bg-[#B85C38] text-[#F7F3EA] hover:bg-[#9E4E2E] transition-all flex items-center gap-1 shadow-2xs"
          >
            <span>Open</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span
            className="px-3 py-2.5 rounded-xl text-[10px] font-medium text-[#565851] bg-[#F7F3EA] border border-[#173C35]/10 select-none"
          >
            {app.status === 'live' ? 'Internal Link' : 'In Dev'}
          </span>
        )}
      </div>
    </div>
  );
};
