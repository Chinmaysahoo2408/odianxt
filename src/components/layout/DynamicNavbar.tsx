'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useEcosystem } from '@/lib/store';
import { KonarkChakra } from '../ui/KonarkChakra';
import { Volume2, VolumeX, Settings, Menu, X, ArrowRight } from 'lucide-react';

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
          ? 'py-3.5 bg-[#F7F3EA]/92 backdrop-blur-md border-b border-[#173C35]/12 shadow-sm'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#home"
          onClick={() => playSound('click')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative flex items-center justify-center">
            <KonarkChakra size={32} accentColor="#173C35" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-serif tracking-tight text-[#173C35] font-bold">
                OdiaNXT
              </span>
              <span className="px-1.5 py-0.2 text-[9px] font-mono uppercase tracking-widest bg-[#173C35]/10 text-[#173C35] rounded font-semibold">
                CORE
              </span>
            </div>
            <span className="text-[10px] font-medium tracking-wide text-[#565851] flex items-center gap-1">
              <span>Digital Odisha</span>
              <span className="inline-block w-1 h-1 rounded-full bg-[#B85C38]" />
              <span className="text-[#B85C38] font-serif font-semibold">ଓଡ଼ିଆ NXT</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/70 border border-[#173C35]/10 shadow-xs backdrop-blur-md">
          <button
            onClick={() => handleNavClick('home')}
            onMouseEnter={() => playSound('hover')}
            className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-[#242522] hover:text-[#173C35] rounded-full hover:bg-[#173C35]/5 transition-all cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('ecosystem')}
            onMouseEnter={() => playSound('hover')}
            className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-[#242522] hover:text-[#173C35] rounded-full hover:bg-[#173C35]/5 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Ecosystem</span>
            <span className="px-1.5 py-0.2 text-[10px] font-bold bg-[#173C35] text-[#F7F3EA] rounded-full">
              {apps.length}
            </span>
          </button>
          <button
            onClick={() => handleNavClick('apps')}
            onMouseEnter={() => playSound('hover')}
            className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-[#242522] hover:text-[#173C35] rounded-full hover:bg-[#173C35]/5 transition-all cursor-pointer"
          >
            Apps
          </button>
          <button
            onClick={() => handleNavClick('map')}
            onMouseEnter={() => playSound('hover')}
            className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-[#242522] hover:text-[#173C35] rounded-full hover:bg-[#173C35]/5 transition-all cursor-pointer"
          >
            Odisha Map
          </button>
          <button
            onClick={() => handleNavClick('dashboard')}
            onMouseEnter={() => playSound('hover')}
            className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-[#242522] hover:text-[#173C35] rounded-full hover:bg-[#173C35]/5 transition-all cursor-pointer"
          >
            Live Metrics
          </button>
        </nav>

        {/* Right Action Bar */}
        <div className="hidden md:flex items-center gap-3">
          {/* Sound Toggle (OFF by default) */}
          <button
            onClick={toggleSound}
            title={soundMuted ? 'Enable Sound FX' : 'Mute Sound FX'}
            className={`p-2.5 rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer ${
              soundMuted
                ? 'bg-[#FFFFFF]/60 border-[#173C35]/12 text-[#565851] hover:text-[#173C35] hover:border-[#173C35]/25'
                : 'bg-[#173C35]/10 border-[#173C35]/30 text-[#173C35]'
            }`}
          >
            {soundMuted ? (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="text-[11px] font-medium hidden lg:inline">Audio Off</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-[#173C35]" />
                <span className="text-[11px] font-bold text-[#173C35] hidden lg:inline">Audio On</span>
              </>
            )}
          </button>

          {/* Admin Studio Trigger */}
          <button
            onClick={() => {
              playSound('click');
              setIsAdminOpen(true);
            }}
            title="Content Management Studio"
            className="p-2.5 rounded-xl bg-[#FFFFFF]/60 border border-[#173C35]/12 text-[#242522] hover:text-[#B85C38] hover:border-[#B85C38]/30 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Settings className="w-4 h-4 text-[#B85C38]" />
            <span className="text-[11px] font-semibold hidden xl:inline">CMS Studio</span>
          </button>

          {/* Primary Button: Explore Ecosystem → */}
          <button
            onClick={() => handleNavClick('ecosystem')}
            onMouseEnter={() => playSound('hover')}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#173C35] hover:bg-[#0F2722] text-[#F7F3EA] shadow-xs hover:shadow-md transition-all flex items-center gap-2 group cursor-pointer"
          >
            <span>Explore Ecosystem</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg bg-[#FFFFFF] border border-[#173C35]/15 text-[#173C35]"
          >
            {soundMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#B85C38]" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#FFFFFF] border border-[#173C35]/15 text-[#173C35]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#F7F3EA] border-b border-[#173C35]/15 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left px-3 py-2.5 rounded-lg text-sm text-[#242522] hover:bg-[#173C35]/5 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('ecosystem')}
              className="text-left px-3 py-2.5 rounded-lg text-sm text-[#242522] hover:bg-[#173C35]/5 font-medium flex justify-between items-center"
            >
              <span>Ecosystem</span>
              <span className="text-xs bg-[#173C35] text-[#F7F3EA] px-2 py-0.5 rounded-full font-bold">{apps.length} Apps</span>
            </button>
            <button
              onClick={() => handleNavClick('apps')}
              className="text-left px-3 py-2.5 rounded-lg text-sm text-[#242522] hover:bg-[#173C35]/5 font-medium"
            >
              Apps Showcase
            </button>
            <button
              onClick={() => handleNavClick('map')}
              className="text-left px-3 py-2.5 rounded-lg text-sm text-[#242522] hover:bg-[#173C35]/5 font-medium"
            >
              Odisha Map
            </button>
            <button
              onClick={() => handleNavClick('dashboard')}
              className="text-left px-3 py-2.5 rounded-lg text-sm text-[#242522] hover:bg-[#173C35]/5 font-medium"
            >
              Live Metrics
            </button>
            <div className="pt-3 border-t border-[#173C35]/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAdminOpen(true);
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#B85C38] bg-[#B85C38]/10 border border-[#B85C38]/20 flex items-center justify-between"
              >
                <span>CMS Admin Studio</span>
                <Settings className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleNavClick('ecosystem')}
                className="w-full text-center py-2.5 rounded-xl text-xs font-bold bg-[#173C35] text-[#F7F3EA]"
              >
                Explore All Apps
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
