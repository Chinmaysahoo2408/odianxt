'use client';

import React, { useState } from 'react';
import { useEcosystem } from '@/lib/store';
import { getStatusBadgeStyle, formatStatusLabel } from '@/lib/utils';
import {
  ShoppingBag,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Truck,
  RotateCcw,
  Footprints,
  Layers,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export const IrayaSection: React.FC = () => {
  const { apps, playSound, setActiveAppModal } = useEcosystem();
  const irayaApp = apps.find(a => a.slug === 'iraya') || apps[apps.length - 1];

  const [activeCategory, setActiveCategory] = useState<'bags' | 'footwear' | 'craftsmanship'>('bags');

  const statusStyle = getStatusBadgeStyle(irayaApp?.status || 'live');

  const bagItems = [
    {
      id: 'b1',
      name: 'The Atelier Structured Tote',
      tag: 'Signature Drop',
      material: 'Cruelty-Free Vegan Leather & Brass Hardware',
      price: '₹4,899',
      details: 'Spacious 15" laptop compartment with hand-stitched rolled handles and detachable strap.'
    },
    {
      id: 'b2',
      name: 'Kalinga Minimal Crossbody',
      tag: 'Best Seller',
      material: 'Hand-Milled Sustainable Microfiber',
      price: '₹3,499',
      details: 'Compact accordion interior with magnetic flap and subtle geometric edge beveling.'
    },
    {
      id: 'b3',
      name: 'Everyday Artisanal Sling',
      tag: 'New Arrival',
      material: 'Dual-Tone Handwoven Texture',
      price: '₹2,999',
      details: 'Lightweight urban essential featuring weather-resistant lining and quick-access card slots.'
    }
  ];

  const footwearItems = [
    {
      id: 'f1',
      name: 'Ergonomic Urban Mule',
      tag: 'Cloud Stride',
      material: 'Memory Cushion Foam & Supple Upper',
      price: '₹3,999',
      details: 'Orthopedically tuned arch support with slip-resistant textured sole for all-day wear.'
    },
    {
      id: 'f2',
      name: 'Monkstrap Artisan Loafer',
      tag: 'Heritage Luxe',
      material: 'Hand-Burnished Vegan Calfskin',
      price: '₹4,499',
      details: 'Classic dual-buckle silhouette engineered with flexible Goodyear welt stitching.'
    },
    {
      id: 'f3',
      name: 'Minimalist Ease Slip-On',
      tag: 'Studio Classic',
      material: 'Breathable Eco-Knit & Bio-EVA',
      price: '₹2,799',
      details: 'Featherlight 210g profile with contoured heel cup for effortless daily transit.'
    }
  ];

  const craftPillars = [
    {
      title: '100% Handcrafted in India',
      description: 'Hand-cut, assembled, and finished by generational artisans preserving indigenous master craft.',
      icon: <Sparkles className="w-5 h-5 text-[#10B981]" />
    },
    {
      title: 'Cruelty-Free & Sustainable',
      description: 'Zero genuine animal hides. Premium microfibers and bio-polymers engineered for 10+ year longevity.',
      icon: <ShieldCheck className="w-5 h-5 text-[#10B981]" />
    },
    {
      title: 'Ergonomic Human Engineering',
      description: 'Footwear molded to natural podiatric pressure points for fatigue-free daily comfort.',
      icon: <Footprints className="w-5 h-5 text-[#10B981]" />
    },
    {
      title: 'Direct-to-Consumer Atelier',
      description: 'Zero retail markup. Premium global luxury crafted directly from master workshops to your doorstep.',
      icon: <Truck className="w-5 h-5 text-[#10B981]" />
    }
  ];

  const currentItems = activeCategory === 'bags' ? bagItems : activeCategory === 'footwear' ? footwearItems : [];

  return (
    <section
      id="section-iraya"
      className="py-28 relative bg-[#09090b] border-b border-white/10 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#10B981]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#D4AF37]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Eyebrow Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-[#10B981]" />
          <span className="text-xs font-mono tracking-widest text-[#10B981] uppercase font-bold">
            APPLICATION MODULE 05 • LUXURY CRAFTS & E-COMMERCE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Identity */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white flex items-center gap-3">
                <span>IRAYA</span>
              </h2>
              <div
                className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1.5 bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30`}
              >
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Live Flagship Store</span>
              </div>
            </div>

            <div className="inline-block px-3 py-1 rounded-lg bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] font-mono text-xs font-bold uppercase tracking-widest">
              HANDCRAFTED BAGS & FOOTWEAR · MADE IN INDIA
            </div>

            <p className="text-xl sm:text-2xl font-medium text-stone-200">
              {irayaApp?.tagline || 'A House of Handcrafted Bags & Footwear — Made in India'}
            </p>

            <p className="text-sm sm:text-base text-stone-400 leading-relaxed font-normal">
              {irayaApp?.longDescription || irayaApp?.description}
            </p>

            {/* Cultural Craft Note */}
            <div className="p-4 rounded-2xl bg-[#111114] border border-white/10 flex items-start gap-3.5">
              <Sparkles className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-stone-200 uppercase tracking-wider mb-1">
                  Artisanal Heritage Philosophy
                </div>
                <div className="text-xs text-stone-400 leading-relaxed italic">
                  "{irayaApp?.culturalNote || 'Honoring India’s timeless legacy of master handloom and leather craftsmanship, reimagined with sustainable modern luxury.'}"
                </div>
              </div>
            </div>

            {/* Key Capabilities Highlights */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-stone-400 font-bold block">
                FLAGSHIP HIGHLIGHTS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {irayaApp?.highlights?.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#111114] border border-white/10 flex items-center gap-2.5 text-xs text-stone-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://irayaglobal.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('iraya')}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest bg-[#10B981] hover:bg-[#059669] text-white transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] flex items-center gap-2.5 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>VISIT IRAYA GLOBAL</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  playSound('iraya');
                  setActiveAppModal(irayaApp);
                }}
                className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#18181c] hover:bg-[#222228] text-stone-300 hover:text-white border border-white/15 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>SPECIFICATIONS & ARCHITECTURE</span>
                <ChevronRight className="w-4 h-4 text-[#10B981]" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Collection & Craft Visualizer */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#111114] border border-white/15 shadow-2xl relative overflow-hidden">
              {/* Top Selector Tabs */}
              <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10 overflow-x-auto scrollbar-none">
                <button
                  onClick={() => {
                    playSound('click');
                    setActiveCategory('bags');
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                    activeCategory === 'bags'
                      ? 'bg-[#10B981] text-white shadow-[0_0_20px_rgba(16,185,129,0.35)]'
                      : 'bg-[#18181c] text-stone-400 hover:text-white border border-white/5'
                  }`}
                >
                  Handcrafted Bags
                </button>
                <button
                  onClick={() => {
                    playSound('click');
                    setActiveCategory('footwear');
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                    activeCategory === 'footwear'
                      ? 'bg-[#10B981] text-white shadow-[0_0_20px_rgba(16,185,129,0.35)]'
                      : 'bg-[#18181c] text-stone-400 hover:text-white border border-white/5'
                  }`}
                >
                  Luxury Footwear
                </button>
                <button
                  onClick={() => {
                    playSound('click');
                    setActiveCategory('craftsmanship');
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                    activeCategory === 'craftsmanship'
                      ? 'bg-[#10B981] text-white shadow-[0_0_20px_rgba(16,185,129,0.35)]'
                      : 'bg-[#18181c] text-stone-400 hover:text-white border border-white/5'
                  }`}
                >
                  Craftsmanship
                </button>
              </div>

              {/* Tab Content */}
              {activeCategory !== 'craftsmanship' ? (
                <div className="space-y-4">
                  {currentItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-[#18181c] border border-white/10 hover:border-[#10B981]/50 transition-all group relative"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                            {item.tag}
                          </span>
                          <h4 className="text-base font-bold text-white mt-1.5 group-hover:text-[#10B981] transition-colors">
                            {item.name}
                          </h4>
                        </div>
                        <span className="text-sm font-mono font-bold text-white bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                          {item.price}
                        </span>
                      </div>

                      <p className="text-xs text-stone-400 mb-2 leading-relaxed">
                        {item.details}
                      </p>

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-stone-400">
                        <span>{item.material}</span>
                        <a
                          href="https://irayaglobal.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => playSound('iraya')}
                          className="text-[#10B981] font-bold flex items-center gap-1 hover:underline"
                        >
                          <span>Shop Item</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {craftPillars.map((pillar, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-[#18181c] border border-white/10 space-y-2"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center">
                        {pillar.icon}
                      </div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-stone-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Bottom Quick Store Ribbon */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="font-mono text-stone-300">Live on irayaglobal.vercel.app</span>
                </div>
                <a
                  href="https://irayaglobal.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound('iraya')}
                  className="text-xs font-bold text-[#10B981] hover:underline flex items-center gap-1"
                >
                  <span>Open Full Store</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
