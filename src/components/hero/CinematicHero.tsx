'use client';

import React from 'react';
import { useEcosystem } from '@/lib/store';
import { EcosystemCenterpiece } from './EcosystemCenterpiece';
import { ArrowRight, Play, Sparkles, Layers, ShieldCheck, Zap, TrendingUp } from 'lucide-react';

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
      className="relative min-h-screen pt-36 pb-16 flex flex-col justify-between items-center overflow-hidden bg-[#09090b]"
    >
      {/* HuesPost Fiery Ambient Ember Radial Glow Backdrop */}
      <div className="absolute inset-0 hues-ember-radial pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ff6b4a]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
        {/* HuesPost Style Eyebrow */}
        <div className="flex justify-center mb-5">
          <div className="hues-eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111114] border border-white/10 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#ff6b4a] animate-pulse" />
            <span>— DIGITAL ECOSYSTEM STUDIO | POST-GRADE PLATFORMS</span>
          </div>
        </div>

        {/* Hero Main Headline (HuesPost signature typography) */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.05]">
            Where Technology <br className="hidden sm:inline" />
            Becomes <span className="text-[#ff6b4a] italic font-black">Unforgettable.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed font-normal">
            A united digital ecosystem crafted for Odisha — connecting urban mobility, genuine automotive commerce, animal welfare rescue, and sacred temple heritage.
          </p>

          {/* HuesPost Dual Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleScrollTo('ecosystem')}
              onMouseEnter={() => playSound('hover')}
              className="hues-btn-primary cursor-pointer group"
            >
              <span>EXPLORE ECOSYSTEM</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo('showreels')}
              onMouseEnter={() => playSound('hover')}
              className="hues-btn-ghost cursor-pointer group"
            >
              <Play className="w-3.5 h-3.5 fill-white group-hover:scale-110 transition-transform" />
              <span>WATCH SHOWREELS</span>
            </button>
          </div>
        </div>

        {/* Centerpiece: Living Network Ecosystem Visualization */}
        <div className="mt-12 mb-6">
          <EcosystemCenterpiece />
        </div>
      </div>

      {/* HuesPost Metrics / Stats Counter Strip */}
      <div className="w-full border-y border-white/10 bg-[#0d0d10]/90 backdrop-blur-md relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          <div className="py-3 md:py-0 px-4">
            <div className="text-3xl sm:text-4xl font-black tracking-tight text-white">4+</div>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-stone-400 mt-1">FLAGSHIP PLATFORMS</div>
          </div>

          <div className="py-3 md:py-0 px-4">
            <div className="text-3xl sm:text-4xl font-black tracking-tight text-[#ff6b4a]">30</div>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-stone-400 mt-1">DISTRICTS IN ODISHA</div>
          </div>

          <div className="py-3 md:py-0 px-4">
            <div className="text-3xl sm:text-4xl font-black tracking-tight text-white">150K+</div>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-stone-400 mt-1">COMMUNITY REACH</div>
          </div>

          <div className="py-3 md:py-0 px-4">
            <div className="text-3xl sm:text-4xl font-black tracking-tight text-[#ff6b4a]">100%</div>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-stone-400 mt-1">IN-HOUSE FINISH</div>
          </div>
        </div>
      </div>
    </section>
  );
};

