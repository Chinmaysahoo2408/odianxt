'use client';

import React from 'react';
import { useEcosystem } from '@/lib/store';
import { EcosystemCenterpiece } from './EcosystemCenterpiece';
import { ArrowRight, Compass, ShieldCheck, Sparkles, Zap, Layers } from 'lucide-react';

export const CinematicHero: React.FC = () => {
  const { apps, playSound } = useEcosystem();

  const handleScrollTo = (id: string) => {
    playSound('click');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden bg-paper-grain"
    >
      {/* Subtle Odia Calligraphy Watermark in background */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.04] text-center font-serif text-[120px] sm:text-[200px] md:text-[250px] leading-none whitespace-nowrap text-[#173C35]">
        ଓଡ଼ିଆ NXT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Top Tagline Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#173C35]/15 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#B85C38]" />
            <span className="text-xs sm:text-sm font-semibold text-[#173C35]">
              One Ecosystem. Infinite Possibilities.
            </span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-normal tracking-tight text-[#173C35] leading-none">
            OdiaNXT
          </h1>

          {/* Subtitle */}
          <h2 className="mt-4 text-2xl sm:text-4xl md:text-5xl font-serif text-[#242522]">
            Building the Next{' '}
            <span className="text-[#B85C38] italic">
              Digital Odisha.
            </span>
          </h2>

          {/* Supporting text */}
          <p className="mt-5 text-base sm:text-lg text-[#565851] max-w-2xl mx-auto leading-relaxed font-normal">
            One ecosystem connecting technology, mobility, commerce, pets, culture and everyday life.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleScrollTo('ecosystem')}
              onMouseEnter={() => playSound('hover')}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-[#173C35] hover:bg-[#0F2722] text-[#F7F3EA] shadow-xs hover:shadow-md transition-all flex items-center gap-2.5 group cursor-pointer"
            >
              <span>Explore Ecosystem</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo('apps')}
              onMouseEnter={() => playSound('hover')}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-transparent hover:bg-[#173C35]/5 text-[#173C35] border border-[#173C35]/40 hover:border-[#173C35] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Discover Our Apps</span>
              <Layers className="w-4 h-4 text-[#B85C38]" />
            </button>
          </div>
        </div>

        {/* Centerpiece: Living Network Ecosystem Visualization */}
        <div className="mt-10">
          <EcosystemCenterpiece />
        </div>

        {/* Bottom Feature Badges */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/12 shadow-2xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#173C35]/10 flex items-center justify-center text-[#173C35]">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#242522]">{apps.length} Applications</div>
              <div className="text-[11px] text-[#565851]">Centralized Schema</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/12 shadow-2xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#B85C38]/10 flex items-center justify-center text-[#B85C38]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#242522]">30 Districts</div>
              <div className="text-[11px] text-[#565851]">Odisha Geographic Grid</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/12 shadow-2xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#C49A5A]/15 flex items-center justify-center text-[#8C6B32]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#242522]">Zero Fake Metrics</div>
              <div className="text-[11px] text-[#565851]">Verified System Ledger</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/12 shadow-2xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#A8B7A1]/25 flex items-center justify-center text-[#173C35]">
              <Sparkles className="w-4 h-4 text-[#173C35]" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#242522]">Future Scalable</div>
              <div className="text-[11px] text-[#565851]">100+ App Extensibility</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
