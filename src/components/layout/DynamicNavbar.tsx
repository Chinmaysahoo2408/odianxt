'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useEcosystem } from '@/lib/store';
import { Volume2, VolumeX, Settings, Menu, X, ArrowRight, Sparkles, Globe } from 'lucide-react';

export const DynamicNavbar: React.FC = () => {
  const { apps, soundMuted, toggleSound, playSound, setIsAdminOpen } = useEcosystem();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetId: string) => {
    playSound('click');
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#09090b]/85 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - HuesPost Chromatic Prism & Monogram */}
        <Link
          href="#home"
          onClick={() => playSound('click')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          {/* Multi-Hue Prism Icon */}
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[#ff6b4a] via-[#f59e0b] to-[#a855f7] p-[1.5px] transition-transform group-hover:scale-105 shadow-[0_0_20px_rgba(255,107,74,0.35)]">
            <div className="w-full h-full bg-[#09090b] rounded-[7px] flex items-center justify-center">
              <span className="text-white font-black text-xs tracking-wider">OX</span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-[0.14em] text-white uppercase">
                ODIANXT
              </span>
              <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-widest bg-[#ff6b4a]/15 text-[#ff6b4a] border border-[#ff6b4a]/30 rounded font-bold">
                STUDIO
              </span>
            </div>
            <span className="text-[10px] font-medium tracking-[0.18em] text-stone-400 uppercase flex items-center gap-1.5">
              <span>DIGITAL ODISHA</span>
              <span className="inline-block w-1 h-1 rounded-full bg-[#ff6b4a]" />
              <span className="text-[#ff6b4a] font-bold">POST-TECH</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#111114]/80 border border-white/10 backdrop-blur-md shadow-inner">
          <button
            onClick={() => handleNavClick('home')}
            onMouseEnter={() => playSound('hover')}
            className="px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-stone-300 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer"
          >
            STUDIO
          </button>
          <button
            onClick={() => handleNavClick('ecosystem')}
            onMouseEnter={() => playSound('hover')}
            className="px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-stone-300 hover:text-white hover:bg-white/5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>ECOSYSTEM</span>
            <span className="px-1.5 py-0.2 text-[9px] font-bold bg-[#ff6b4a] text-white rounded-full">
              {apps.length}
            </span>
          </button>
          <button
            onClick={() => handleNavClick('showreels')}
            onMouseEnter={() => playSound('hover')}
            className="px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-stone-300 hover:text-[#ff6b4a] hover:bg-white/5 rounded-full transition-all flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-[#ff6b4a]" />
            <span>SHOWREELS</span>
          </button>
          <button
            onClick={() => handleNavClick('apps')}
            onMouseEnter={() => playSound('hover')}
            className="px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-stone-300 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer"
          >
            PLATFORMS
          </button>
          <button
            onClick={() => handleNavClick('process')}
            onMouseEnter={() => playSound('hover')}
            className="px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-stone-300 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer"
          >
            PROCESS
          </button>
          <button
            onClick={() => handleNavClick('map')}
            onMouseEnter={() => playSound('hover')}
            className="px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-stone-300 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer"
          >
            MAP
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            onMouseEnter={() => playSound('hover')}
            className="px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-stone-300 hover:text-[#ff6b4a] hover:bg-white/5 rounded-full transition-all cursor-pointer"
          >
            CONTACT
          </button>
        </nav>

        {/* Right Action Bar */}
        <div className="hidden md:flex items-center gap-3">
          {/* Social Links */}
          <div className="hidden xl:flex items-center gap-2 border-r border-white/10 pr-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-stone-400 hover:text-[#ff6b4a] transition-colors"
              title="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-stone-400 hover:text-[#ff6b4a] transition-colors"
              title="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>


          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundMuted ? 'Enable Sound FX' : 'Mute Sound FX'}
            className={`p-2.5 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer ${
              soundMuted
                ? 'bg-[#111114] border-white/10 text-stone-500 hover:text-white hover:border-white/20'
                : 'bg-[#ff6b4a]/15 border-[#ff6b4a]/40 text-[#ff6b4a]'
            }`}
          >
            {soundMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#ff6b4a]" />}
          </button>

          {/* Admin Studio Trigger */}
          <button
            onClick={() => {
              playSound('click');
              setIsAdminOpen(true);
            }}
            title="Studio CMS"
            className="p-2.5 rounded-lg bg-[#111114] border border-white/10 text-stone-400 hover:text-[#ff6b4a] hover:border-[#ff6b4a]/40 transition-all cursor-pointer"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* HuesPost Signature Outline CTA Button */}
          <button
            onClick={() => handleNavClick('contact')}
            onMouseEnter={() => playSound('hover')}
            className="px-5 py-2.5 rounded-lg border border-white/30 hover:border-white text-xs font-semibold uppercase tracking-[0.16em] text-white hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer group shadow-sm"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#ff6b4a] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg bg-[#111114] border border-white/15 text-stone-300"
          >
            {soundMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#ff6b4a]" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#111114] border border-white/15 text-stone-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 bg-[#0d0d10] border-b border-white/10 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-[0.14em] text-stone-300 hover:text-white hover:bg-white/5"
            >
              STUDIO HOME
            </button>
            <button
              onClick={() => handleNavClick('ecosystem')}
              className="text-left px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-[0.14em] text-stone-300 hover:text-white hover:bg-white/5 flex justify-between items-center"
            >
              <span>ECOSYSTEM PLATFORMS</span>
              <span className="text-[10px] bg-[#ff6b4a] text-white px-2 py-0.5 rounded-full font-bold">{apps.length}</span>
            </button>
            <button
              onClick={() => handleNavClick('showreels')}
              className="text-left px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-[0.14em] text-[#ff6b4a] hover:bg-white/5"
            >
              SHOWREELS & DEMOS
            </button>
            <button
              onClick={() => handleNavClick('apps')}
              className="text-left px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-[0.14em] text-stone-300 hover:text-white hover:bg-white/5"
            >
              FLAGSHIP PLATFORMS
            </button>
            <button
              onClick={() => handleNavClick('process')}
              className="text-left px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-[0.14em] text-stone-300 hover:text-white hover:bg-white/5"
            >
              HOW IT WORKS
            </button>
            <button
              onClick={() => handleNavClick('map')}
              className="text-left px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-[0.14em] text-stone-300 hover:text-white hover:bg-white/5"
            >
              ODISHA REGIONAL MAP
            </button>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAdminOpen(true);
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold tracking-wider text-[#ff6b4a] bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 flex items-center justify-between"
              >
                <span>STUDIO CMS ADMIN</span>
                <Settings className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center py-3 rounded-lg text-xs font-bold uppercase tracking-[0.18em] bg-[#ff6b4a] text-white shadow-lg"
              >
                START A PROJECT →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

