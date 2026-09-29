'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Shield, Compass } from 'lucide-react';
import { useAtma } from '@/lib/atma/store';

export const OdiaNxtTopBar: React.FC = () => {
  const { user, setIsAuthModalOpen, setIsPremiumModalOpen, activeTab, setActiveTab } = useAtma();
  const odiaNxtUrl = process.env.NEXT_PUBLIC_ODIANXT_URL || '/';

  return (
    <header className="sticky top-0 z-40 w-full bg-[#050505]/90 backdrop-blur-md border-b border-[#262626]/80 px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Ecosystem Back Link */}
        <div className="flex items-center gap-4">
          <Link
            href={odiaNxtUrl}
            className="group flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wider text-[#B3B3B3] hover:text-[#D4AF37] transition-colors py-1 px-2.5 rounded-md hover:bg-[#121212] border border-transparent hover:border-[#262626]"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform text-[#D4AF37]" />
            <span className="font-geist">OdiaNXT Ecosystem</span>
          </Link>

          <span className="text-[#262626] font-light hidden sm:inline">/</span>

          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#115E41] animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase font-geist">
              ATMA Platform
            </span>
          </div>
        </div>

        {/* Right: Quick Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Premium Upgrade Button */}
          <button
            onClick={() => setIsPremiumModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37]/15 to-[#115E41]/20 hover:from-[#D4AF37]/25 hover:to-[#115E41]/35 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-[#D4AF37]/10"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">ATMA Premium</span>
          </button>

          {/* User Account / Sign In */}
          {user ? (
            <button
              onClick={() => setActiveTab('profile')}
              className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-full bg-[#121212] hover:bg-[#1A1C1A] border border-[#262626] text-xs text-[#F7F7F7] transition-all"
            >
              <div className="w-6 h-6 rounded-full bg-[#D4AF37] text-[#121212] font-bold font-cormorant flex items-center justify-center text-sm shadow-inner">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="font-medium hidden md:inline">{user.name.split(' ')[0]}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#0A3B2C] text-[#2EA043] font-mono border border-[#115E41]">
                Lv.{user.level}
              </span>
            </button>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="px-3.5 py-1.5 rounded-md bg-[#D4AF37] hover:bg-[#E5BD45] text-[#121212] text-xs font-semibold tracking-wider font-geist transition-all shadow-sm"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
