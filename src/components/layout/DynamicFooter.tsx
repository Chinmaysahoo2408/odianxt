'use client';

import React from 'react';
import { useEcosystem } from '@/lib/store';
import { KonarkChakra } from '../ui/KonarkChakra';
import { ArrowUp, Sparkles } from 'lucide-react';

export const DynamicFooter: React.FC = () => {
  const { apps, playSound, setActiveAppModal, setIsAdminOpen } = useEcosystem();

  const scrollToTop = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    playSound('click');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#173C35] text-[#F7F3EA] pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#F7F3EA]/15">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <KonarkChakra size={36} accentColor="#F7F3EA" />
              <span className="text-2xl font-serif tracking-tight font-bold text-[#F7F3EA]">
                OdiaNXT
              </span>
            </div>

            <p className="text-sm font-serif italic text-[#C49A5A]">
              "Building the Next Digital Odisha."
            </p>

            <p className="text-xs text-[#E4EBE0] leading-relaxed max-w-sm">
              The unified digital platform engineered to connect mobility, commerce, pets, cultural heritage, and citizen tech under a single future-ready ecosystem.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="text-xs font-serif text-[#C49A5A] font-bold">
                ଓଡ଼ିଶାର ଡିଜିଟାଲ୍ ଭବିଷ୍ୟତ
              </span>
              <span className="text-[#F7F3EA]/40">•</span>
              <span className="text-[11px] font-mono text-[#E4EBE0]">
                100% Scalable Architecture
              </span>
            </div>
          </div>

          {/* Column 2: Ecosystem Applications (Dynamic!) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F7F3EA] font-bold">
              Ecosystem Applications
            </h4>
            <ul className="space-y-2 text-xs">
              {apps.map(app => (
                <li key={app.id}>
                  <button
                    onClick={() => {
                      const section = document.getElementById(`section-${app.slug}`);
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        setActiveAppModal(app);
                      }
                    }}
                    className="text-[#E4EBE0] hover:text-[#C49A5A] transition-colors flex items-center gap-2 text-left cursor-pointer"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: app.accentColor === '#173C35' ? '#F7F3EA' : app.accentColor }}
                    />
                    <span>{app.name}</span>
                    <span className="text-[10px] text-[#F7F3EA]/50 font-mono">
                      ({app.category.split('&')[0].trim()})
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F7F3EA] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-[#E4EBE0] hover:text-[#C49A5A] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('ecosystem')} className="text-[#E4EBE0] hover:text-[#C49A5A] transition-colors cursor-pointer">
                  Ecosystem Grid
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('map')} className="text-[#E4EBE0] hover:text-[#C49A5A] transition-colors cursor-pointer">
                  Odisha Map Hub
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('dashboard')} className="text-[#E4EBE0] hover:text-[#C49A5A] transition-colors cursor-pointer">
                  Live Telemetry
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsAdminOpen(true)}
                  className="text-[#C49A5A] hover:text-[#F7F3EA] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Admin Studio</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Mission */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F7F3EA] font-bold">
              Digital Odisha 2026
            </h4>
            <p className="text-xs text-[#E4EBE0] leading-relaxed">
              Designed with state-of-the-art web technologies, zero fake metrics, and deep cultural reverence for Odisha.
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-[#F7F3EA]/10 hover:bg-[#F7F3EA]/20 text-[#F7F3EA] border border-[#F7F3EA]/20 flex items-center gap-2 text-xs transition-all cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#C49A5A]" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E4EBE0]">
          <p>© 2026 OdiaNXT. All rights reserved.</p>

          <div className="flex items-center gap-4 text-[11px]">
            <span>One Ecosystem. Infinite Possibilities.</span>
            <span>•</span>
            <span className="text-[#C49A5A] font-mono">Bhubaneswar, Odisha</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
