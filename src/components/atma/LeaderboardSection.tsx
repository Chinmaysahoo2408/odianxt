'use client';

import React, { useState } from 'react';
import {
  Trophy,
  Flame,
  Medal,
  Crown,
  Sparkles,
  TrendingUp,
  Award
} from 'lucide-react';
import { useAtma } from '@/lib/atma/store';

export const LeaderboardSection: React.FC = () => {
  const { leaderboard, user } = useAtma();
  const [scope, setScope] = useState<'week' | 'all'>('week');

  const top3 = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);

  return (
    <div className="space-y-8 pb-16 animate-fadeIn max-w-4xl">
      {/* Header & Scope Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#121212] border border-[#262626]">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase font-geist mb-1">
            <Trophy className="w-3.5 h-3.5" />
            <span>The Sacred Order</span>
          </div>
          <h1 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#F7F7F7]">
            Ranks & Discipline
          </h1>
          <p className="text-xs text-[#8C8C8C] font-geist mt-1">
            Ranked by transformation momentum, XP earned, and unbroken daily streaks.
          </p>
        </div>

        {/* Scope Switcher */}
        <div className="flex p-1 rounded-xl bg-[#050505] border border-[#262626] self-start sm:self-auto">
          <button
            onClick={() => setScope('week')}
            className={`px-4 py-2 rounded-lg text-xs font-geist font-medium transition-all ${
              scope === 'week'
                ? 'bg-[#1A1C1A] text-[#D4AF37] border border-[#D4AF37]/30 shadow-sm'
                : 'text-[#8C8C8C] hover:text-[#F7F7F7]'
            }`}
          >
            This Week
          </button>
          <button
            onClick={() => setScope('all')}
            className={`px-4 py-2 rounded-lg text-xs font-geist font-medium transition-all ${
              scope === 'all'
                ? 'bg-[#1A1C1A] text-[#D4AF37] border border-[#D4AF37]/30 shadow-sm'
                : 'text-[#8C8C8C] hover:text-[#F7F7F7]'
            }`}
          >
            All-Time
          </button>
        </div>
      </div>

      {/* Top 3 Podium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        {/* Rank 2 (Silver) */}
        {top3[1] && (
          <div className="order-2 md:order-1 p-6 rounded-2xl bg-[#121212] border border-[#262626] text-center space-y-3 relative overflow-hidden flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[#1F1F1F] text-[#B3B3B3] font-mono font-bold text-xs flex items-center justify-center border border-[#262626]">
              #2
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1F1F1F] to-[#262626] border-2 border-[#B3B3B3] flex items-center justify-center font-cormorant text-2xl font-bold text-[#F7F7F7] shadow-lg">
              {top3[1].name.charAt(0)}
            </div>
            <div>
              <h3 className="font-geist font-semibold text-sm text-[#F7F7F7]">
                {top3[1].name}
              </h3>
              <div className="text-[11px] text-[#8C8C8C] font-mono mt-0.5">
                Level {top3[1].level} · {top3[1].streak}d Streak
              </div>
            </div>
            <div className="font-cormorant text-2xl font-bold text-[#D4AF37]">
              {top3[1].xp} XP
            </div>
          </div>
        )}

        {/* Rank 1 (Gold / Champion) */}
        {top3[0] && (
          <div className="order-1 md:order-2 p-7 rounded-2xl bg-gradient-to-b from-[#1B2A22] to-[#121212] border-2 border-[#D4AF37] text-center space-y-3 relative overflow-hidden flex flex-col items-center shadow-2xl shadow-[#D4AF37]/10 -translate-y-2">
            <div className="absolute top-3 right-3">
              <Crown className="w-5 h-5 text-[#D4AF37] animate-pulse" />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#050505] font-mono font-bold text-xs flex items-center justify-center shadow-sm">
              #1
            </div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#115E41] p-1 shadow-xl">
              <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center font-cormorant text-3xl font-bold text-[#D4AF37]">
                {top3[0].name.charAt(0)}
              </div>
            </div>
            <div>
              <h3 className="font-geist font-bold text-base text-[#F7F7F7]">
                {top3[0].name}
              </h3>
              <div className="text-xs text-[#2EA043] font-mono mt-0.5 font-semibold">
                Grandmaster · Level {top3[0].level}
              </div>
            </div>
            <div className="font-cormorant text-3xl font-bold text-[#D4AF37]">
              {top3[0].xp} XP
            </div>
            <div className="flex items-center gap-1 text-xs font-mono text-[#8C8C8C]">
              <Flame className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{top3[0].streak} Days Unbroken</span>
            </div>
          </div>
        )}

        {/* Rank 3 (Bronze / Emerald) */}
        {top3[2] && (
          <div className="order-3 p-6 rounded-2xl bg-[#121212] border border-[#262626] text-center space-y-3 relative overflow-hidden flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[#1F1F1F] text-[#C49A5A] font-mono font-bold text-xs flex items-center justify-center border border-[#262626]">
              #3
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1F1F1F] to-[#1B2A22] border-2 border-[#C49A5A] flex items-center justify-center font-cormorant text-2xl font-bold text-[#F7F7F7] shadow-lg">
              {top3[2].name.charAt(0)}
            </div>
            <div>
              <h3 className="font-geist font-semibold text-sm text-[#F7F7F7]">
                {top3[2].name}
              </h3>
              <div className="text-[11px] text-[#8C8C8C] font-mono mt-0.5">
                Level {top3[2].level} · {top3[2].streak}d Streak
              </div>
            </div>
            <div className="font-cormorant text-2xl font-bold text-[#D4AF37]">
              {top3[2].xp} XP
            </div>
          </div>
        )}
      </div>

      {/* Full Leaderboard Table (Ranks 4+) */}
      <div className="p-6 rounded-2xl bg-[#121212] border border-[#262626] space-y-4">
        <h3 className="font-cormorant text-2xl font-bold text-[#F7F7F7]">
          All Seekers
        </h3>

        <div className="space-y-2">
          {rest.map(item => {
            const isMe = user?.name === item.name || item.is_me;
            return (
              <div
                key={item.id}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                  isMe
                    ? 'bg-[#1B2A22] border-[#115E41] text-[#F7F7F7]'
                    : 'bg-[#050505] border-[#262626] text-[#B3B3B3]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="w-6 font-mono text-xs font-bold text-[#8C8C8C]">
                    #{item.rank}
                  </span>

                  <div className="w-8 h-8 rounded-full bg-[#121212] border border-[#262626] flex items-center justify-center font-cormorant font-bold text-xs text-[#D4AF37]">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium font-geist text-[#F7F7F7]">
                        {item.name}
                      </span>
                      {isMe && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#0A3B2C] text-[#2EA043] font-mono border border-[#115E41] uppercase">
                          You
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-[#8C8C8C] font-mono">
                      Level {item.level}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-right">
                  <div className="flex items-center gap-1 text-xs font-mono text-[#8C8C8C]">
                    <Flame className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{item.streak}d</span>
                  </div>

                  <div className="font-cormorant text-lg font-bold text-[#D4AF37] min-w-[70px]">
                    {item.xp} XP
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
