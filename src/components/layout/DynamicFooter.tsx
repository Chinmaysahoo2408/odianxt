'use client';

import React from 'react';
import Link from 'next/link';
import { useEcosystem } from '@/lib/store';
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
    <footer className="relative bg-[#09090b] text-[#f4f4f5] pt-20 pb-12 border-t border-white/10 overflow-hidden">
      {/* Ambient bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#ff6b4a]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Studio Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff6b4a] to-[#a855f7] p-[1px]">
                <div className="w-full h-full bg-[#09090b] rounded-[7px] flex items-center justify-center">
                  <span className="text-white font-black text-[10px]">OX</span>
                </div>
              </div>
              <span className="text-2xl font-black uppercase tracking-[0.16em] text-white">
                ODIANXT
              </span>
              <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase bg-[#ff6b4a]/20 text-[#ff6b4a] rounded font-bold">
                STUDIO
              </span>
            </div>

            <p className="text-sm font-medium italic text-[#ff6b4a]">
              "Where Technology & Heritage Become Unforgettable."
            </p>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              The unified digital platform engineered to connect mobility, commerce, stray welfare, cultural heritage, and telemetry under a single future-ready studio ecosystem.
            </p>

            {/* Social Icons with inline SVGs */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#111114] border border-white/10 flex items-center justify-center text-stone-400 hover:text-[#ff6b4a] hover:border-[#ff6b4a]/40 transition-colors"
                title="Instagram"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#111114] border border-white/10 flex items-center justify-center text-stone-400 hover:text-[#ff6b4a] hover:border-[#ff6b4a]/40 transition-colors"
                title="LinkedIn"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#111114] border border-white/10 flex items-center justify-center text-stone-400 hover:text-[#ff6b4a] hover:border-[#ff6b4a]/40 transition-colors"
                title="X / Twitter"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Ecosystem Applications */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.18em] text-white font-bold">
              PLATFORMS & REELS
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
                    className="text-stone-400 hover:text-[#ff6b4a] transition-colors flex items-center gap-2 text-left cursor-pointer group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b4a] group-hover:scale-125 transition-transform" />
                    <span className="font-semibold">{app.name}</span>
                    <span className="text-[10px] text-stone-400 font-mono">
                      ({app.category.split('&')[0].trim()})
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Studio Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.18em] text-white font-bold">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-stone-400 hover:text-white transition-colors cursor-pointer uppercase font-medium">
                  Studio Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('showreels')} className="text-stone-400 hover:text-[#ff6b4a] transition-colors cursor-pointer uppercase font-medium">
                  Showreels
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('ecosystem')} className="text-stone-400 hover:text-white transition-colors cursor-pointer uppercase font-medium">
                  Ecosystem Grid
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('process')} className="text-stone-400 hover:text-white transition-colors cursor-pointer uppercase font-medium">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('map')} className="text-stone-400 hover:text-white transition-colors cursor-pointer uppercase font-medium">
                  Odisha Map Hub
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-stone-400 hover:text-[#ff6b4a] transition-colors cursor-pointer uppercase font-medium">
                  Start A Project
                </button>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-stone-400 hover:text-[#ff6b4a] transition-colors uppercase font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsAdminOpen(true)}
                  className="text-[#ff6b4a] hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-bold uppercase"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>CMS Studio</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio Engineering */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.18em] text-white font-bold">
              ODISHA 2026
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Engineered with low-latency WebSockets, Next.js high-throughput architecture, and deep cultural reverence for Odisha.
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-lg bg-[#111114] hover:bg-[#18181c] text-white border border-white/10 hover:border-white/30 flex items-center gap-2 text-xs uppercase tracking-wider font-bold transition-all cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#ff6b4a]" />
                <span>BACK TO TOP</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-4">
            <p>© 2026 OdiaNXT Studio. All rights reserved.</p>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-[#ff6b4a] transition-colors underline decoration-white/20">
              Privacy Policy
            </Link>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono">
            <span>BHUBANESWAR, ODISHA</span>
            <span>•</span>
            <span className="text-[#ff6b4a] font-bold">HIGH-PERFORMANCE TECH</span>
          </div>
        </div>
      </div>
    </footer>

  );
};
