'use client';

import React from 'react';
import {
  LayoutDashboard,
  Compass,
  Users,
  Trophy,
  User,
  Bot
} from 'lucide-react';
import { useAtma } from '@/lib/atma/store';

export const MobileBottomNav: React.FC = () => {
  const { activeTab, setActiveTab } = useAtma();

  const TABS = [
    { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
    { id: 'course', label: 'Course', icon: Compass },
    { id: 'coach', label: 'Coach', icon: Bot },
    { id: 'community', label: 'Tribe', icon: Users },
    { id: 'leaderboard', label: 'Ranks', icon: Trophy },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#050505]/95 backdrop-blur-xl border-t border-[#262626] px-2 py-2 flex items-center justify-around select-none">
      {TABS.map(tab => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center gap-1 py-1 px-2.5 rounded-lg transition-all ${
              isActive ? 'text-[#D4AF37]' : 'text-[#8C8C8C] hover:text-[#B3B3B3]'
            }`}
          >
            <div className={`p-1 rounded-full ${isActive ? 'bg-[#D4AF37]/15' : ''}`}>
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-geist font-medium tracking-tight">
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
