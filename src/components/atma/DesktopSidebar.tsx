'use client';

import React from 'react';
import {
  Flame,
  LayoutDashboard,
  Compass,
  Users,
  Trophy,
  CalendarDays,
  Bot,
  User,
  Crown,
  Sparkles,
  LogOut,
  ShieldCheck,
  Gift
} from 'lucide-react';
import { useAtma } from '@/lib/atma/store';

export const DesktopSidebar: React.FC = () => {
  const { user, activeTab, setActiveTab, setIsCoachModalOpen, setIsPremiumModalOpen, logout } = useAtma();

  const NAV_ITEMS = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: undefined },
    { id: 'course', label: '21-Day Course', icon: Compass, badge: '21 Days' },
    { id: 'community', label: 'Tribe & Feed', icon: Users, badge: undefined },
    { id: 'weekly', label: 'Weekly Quest', icon: CalendarDays, badge: 'Active' },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy, badge: undefined },
    { id: 'coach', label: 'AI Coach', icon: Bot, badge: 'AI' },
    { id: 'profile', label: 'My Journey', icon: User, badge: undefined },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-[#050505] border-r border-[#262626] h-[calc(100vh-57px)] sticky top-[57px] p-4 select-none justify-between overflow-y-auto">
      <div className="space-y-6">
        {/* Brand Logo & Name */}
        <div className="px-3 pt-2 pb-1">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#121212] via-[#1B2A22] to-[#0A3B2C] border border-[#D4AF37]/50 flex items-center justify-center shadow-lg shadow-[#D4AF37]/5">
              <span className="font-cormorant font-bold text-xl text-[#D4AF37]">A</span>
            </div>
            <div>
              <div className="font-cormorant text-2xl font-bold tracking-wider text-[#F7F7F7] leading-none">
                ATMA
              </div>
              <div className="text-[10px] font-geist tracking-[0.2em] text-[#D4AF37] uppercase mt-1">
                Self-Transformation
              </div>
            </div>
          </div>
        </div>

        {/* User Quick Stats Card (Streak & Level) */}
        {user && (
          <div className="p-3.5 rounded-xl bg-[#121212] border border-[#262626] space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-[#B3B3B3]">
                <Flame className="w-4 h-4 text-[#D4AF37] animate-pulse" />
                <span className="font-geist font-medium">Daily Streak</span>
              </div>
              <span className="font-cormorant text-lg font-bold text-[#D4AF37]">
                {user.streak} Days
              </span>
            </div>

            <div className="w-full bg-[#1F1F1F] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#D4AF37] to-[#115E41] h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (user.xp % 500) / 5)}%` }}
              />
            </div>

            <div className="flex justify-between text-[11px] text-[#8C8C8C] font-mono">
              <span>Level {user.level}</span>
              <span className="text-[#D4AF37] font-semibold">{user.xp} XP</span>
            </div>
          </div>
        )}

        {/* Main Navigation List */}
        <nav className="space-y-1">
          {NAV_ITEMS.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-geist transition-all ${
                  isActive
                    ? 'bg-[#1A1C1A] text-[#D4AF37] font-semibold border border-[#D4AF37]/30 shadow-sm shadow-[#D4AF37]/5'
                    : 'text-[#B3B3B3] hover:text-[#F7F7F7] hover:bg-[#121212] border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? 'text-[#D4AF37]' : 'text-[#8C8C8C]'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-medium ${
                      item.badge === 'Active'
                        ? 'bg-[#0A3B2C] text-[#2EA043] border border-[#115E41]'
                        : item.badge === 'AI'
                        ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30'
                        : 'bg-[#1F1F1F] text-[#8C8C8C]'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Actions: Premium Promo & Referral */}
      <div className="space-y-3 pt-4 border-t border-[#1F1F1F]">
        <button
          onClick={() => setIsPremiumModalOpen(true)}
          className="w-full p-3 rounded-xl bg-gradient-to-b from-[#1B2A22] to-[#0A3B2C] border border-[#D4AF37]/30 text-left hover:border-[#D4AF37]/60 transition-all group shadow-md"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-geist font-bold tracking-widest text-[#D4AF37] uppercase">
              Inner Circle
            </span>
            <Crown className="w-3.5 h-3.5 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
          </div>
          <p className="text-xs font-medium text-[#F7F7F7] line-clamp-1">
            Unlock Full 21-Day Path
          </p>
        </button>

        {user && (
          <button
            onClick={logout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-[#8C8C8C] hover:text-[#D33D44] hover:bg-[#121212] transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        )}
      </div>
    </aside>
  );
};
