'use client';

import React from 'react';
import { Bot, Sparkles } from 'lucide-react';
import { useAtma } from '@/lib/atma/store';

export const FloatingCoachFAB: React.FC = () => {
  const { setIsCoachModalOpen, activeTab } = useAtma();

  if (activeTab === 'coach') return null;

  return (
    <button
      onClick={() => setIsCoachModalOpen(true)}
      className="fixed bottom-20 lg:bottom-8 right-6 z-40 group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5BD45] to-[#D4AF37] text-[#050505] font-semibold text-sm shadow-xl shadow-[#D4AF37]/20 hover:scale-105 active:scale-95 transition-all duration-300 font-geist"
      aria-label="Open ATMA AI Coach"
    >
      <div className="relative">
        <Bot className="w-5 h-5 text-[#050505]" />
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#115E41] animate-ping" />
      </div>
      <span className="hidden sm:inline tracking-wide">Ask ATMA Coach</span>
      <Sparkles className="w-3.5 h-3.5 opacity-70 group-hover:rotate-45 transition-transform" />
    </button>
  );
};
