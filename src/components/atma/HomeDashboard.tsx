'use client';

import React from 'react';
import {
  Flame,
  Snowflake,
  CheckCircle2,
  Circle,
  ArrowRight,
  Sparkles,
  BookOpen,
  Activity,
  Droplets,
  BookMarked,
  Leaf,
  CalendarDays,
  Quote,
  TrendingUp,
  Award
} from 'lucide-react';
import { useAtma } from '@/lib/atma/store';
import { ProgressRing } from './ProgressRing';

export const HomeDashboard: React.FC = () => {
  const {
    user,
    rituals,
    toggleRitual,
    completedRitualsCount,
    totalRitualsCount,
    ritualProgress,
    currentQuote,
    activeWeeklyChallenge,
    weeklyProgress,
    setActiveTab,
    setIsCoachModalOpen,
    courseLessons
  } = useAtma();

  const nextLesson = courseLessons.find(l => !l.completed) || courseLessons[0];
  const firstName = (user?.name || 'Seeker').split(' ')[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf': return Leaf;
      case 'BookOpen': return BookOpen;
      case 'Activity': return Activity;
      case 'BookMarked': return BookMarked;
      case 'Droplets': return Droplets;
      default: return Sparkles;
    }
  };

  return (
    <div className="space-y-8 pb-16 animate-fadeIn">
      {/* Top Welcome & Streak Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#262626]/60 pb-6">
        <div>
          <div className="text-xs font-geist font-semibold tracking-[0.2em] text-[#D4AF37] uppercase mb-1">
            Daily Sanctuary
          </div>
          <h1 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F7F7]">
            Good morning, <span className="text-[#D4AF37] italic font-normal">{firstName}</span>.
          </h1>
          <p className="text-xs sm:text-sm text-[#B3B3B3] font-geist mt-1">
            Confront the day with quiet discipline, mindful presence, and single-pointed focus.
          </p>
        </div>

        {/* Streak & Freeze Badges */}
        <div className="flex items-center gap-3 self-start sm:self-auto">
          {user && (
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#121212] border border-[#262626] shadow-sm">
              <Flame className="w-5 h-5 text-[#D4AF37] animate-pulse" />
              <div className="text-left">
                <div className="font-cormorant text-lg font-bold text-[#F7F7F7] leading-none">
                  {user.streak} Days
                </div>
                <div className="text-[10px] font-geist tracking-wider text-[#8C8C8C] uppercase">
                  Streak
                </div>
              </div>
            </div>
          )}

          {user && user.freezes_left > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#121212] border border-[#262626] text-[#8DD3FF]">
              <Snowflake className="w-4 h-4" />
              <span className="text-xs font-mono font-medium">{user.freezes_left} Freeze</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Grid: Progress Ring Hero + Today's Challenge */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Circular Progress Ring Card */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#262626] flex flex-col items-center justify-center relative overflow-hidden shadow-xl">
          {/* Subtle Ambient Background Glow */}
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-[#115E41]/10 rounded-full blur-3xl pointer-events-none" />

          <ProgressRing
            progress={ritualProgress}
            size={220}
            centerValue={`${completedRitualsCount}/${totalRitualsCount}`}
            centerLabel="RITUALS TODAY"
          />

          {/* XP & Level Chips */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full mt-6 pt-6 border-t border-[#1F1F1F]">
            <div className="p-2.5 rounded-lg bg-[#050505] border border-[#262626] text-center">
              <div className="text-[10px] font-geist tracking-widest text-[#8C8C8C] uppercase">
                LEVEL
              </div>
              <div className="font-cormorant text-xl font-bold text-[#F7F7F7] mt-0.5">
                {user?.level || 1}
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#050505] border border-[#262626] text-center">
              <div className="text-[10px] font-geist tracking-widest text-[#8C8C8C] uppercase">
                TOTAL XP
              </div>
              <div className="font-cormorant text-xl font-bold text-[#D4AF37] mt-0.5">
                {user?.xp || 0}
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#050505] border border-[#262626] text-center">
              <div className="text-[10px] font-geist tracking-widest text-[#8C8C8C] uppercase">
                STREAK
              </div>
              <div className="font-cormorant text-xl font-bold text-[#2EA043] mt-0.5">
                {user?.streak || 0}d
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Today's Featured Challenge & Next Lesson */}
        <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#121212] via-[#1A1C1A] to-[#0A3B2C]/40 border border-[#262626] relative overflow-hidden shadow-xl group">
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase font-geist">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Today's Lesson · Day {nextLesson.day}</span>
              </div>
              <span className="text-xs font-mono text-[#8C8C8C]">{nextLesson.duration}</span>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F7F7F7] tracking-tight group-hover:text-[#D4AF37] transition-colors">
                {nextLesson.title}
              </h2>
              <p className="text-sm text-[#B3B3B3] font-geist mt-1.5 max-w-xl line-clamp-2">
                {nextLesson.subtitle}
              </p>
            </div>

            {/* Checklist Highlights */}
            <div className="space-y-2 pt-2">
              {nextLesson.checklist.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#8C8C8C] font-geist">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 flex-shrink-0" />
                  <span className="line-clamp-1">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-[#262626]/80 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-mono">
              <Award className="w-4 h-4" />
              <span>Reward: +50 XP upon completion</span>
            </div>

            <button
              onClick={() => setActiveTab('course')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5BD45] text-[#050505] font-semibold text-xs tracking-wider uppercase font-geist transition-all shadow-md hover:scale-102"
            >
              <span>Start Day {nextLesson.day}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Daily Rituals Checklist Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#F7F7F7]">
              Daily Rituals
            </h3>
            <p className="text-xs text-[#8C8C8C] font-geist">
              Complete each micro-habit to maintain your daily streak and earn XP.
            </p>
          </div>
          <span className="text-xs font-mono text-[#D4AF37]">
            {completedRitualsCount} / {totalRitualsCount} Completed
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {rituals.map(ritual => {
            const Icon = getIcon(ritual.icon);
            return (
              <div
                key={ritual.id}
                onClick={() => toggleRitual(ritual.id)}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer select-none group ${
                  ritual.done
                    ? 'bg-[#1B2A22]/80 border-[#115E41] text-[#F7F7F7]'
                    : 'bg-[#121212] border-[#262626] text-[#B3B3B3] hover:border-[#D4AF37]/40 hover:bg-[#1A1C1A]'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <button className="focus:outline-none">
                    {ritual.done ? (
                      <CheckCircle2 className="w-6 h-6 text-[#2EA043] flex-shrink-0 animate-scaleIn" />
                    ) : (
                      <Circle className="w-6 h-6 text-[#8C8C8C] group-hover:text-[#D4AF37] flex-shrink-0 transition-colors" />
                    )}
                  </button>

                  <div>
                    <div
                      className={`text-sm font-medium font-geist ${
                        ritual.done ? 'line-through text-[#8C8C8C]' : 'text-[#F7F7F7]'
                      }`}
                    >
                      {ritual.title}
                    </div>
                    <div className="text-[11px] text-[#8C8C8C] font-mono mt-0.5">
                      {ritual.duration}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${
                      ritual.done
                        ? 'bg-[#0A3B2C] text-[#2EA043] border-[#115E41]'
                        : 'bg-[#1F1F1F] text-[#D4AF37] border-[#262626]'
                    }`}
                  >
                    +{ritual.xp} XP
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two-Column Footer: Stoic Quote Card + Weekly Challenge Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Stoic Quote Card */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-[#121212] border border-[#262626] flex flex-col justify-between relative overflow-hidden">
          <Quote className="w-10 h-10 text-[#D4AF37]/20 absolute top-4 right-4" />
          <div className="space-y-3 relative z-10">
            <span className="text-[10px] font-geist tracking-[0.25em] text-[#D4AF37] uppercase">
              Wisdom of the Ancients
            </span>
            <blockquote className="font-cormorant italic text-lg sm:text-xl text-[#F7F7F7] leading-relaxed">
              "{currentQuote.text}"
            </blockquote>
          </div>
          <div className="text-xs font-geist text-[#8C8C8C] font-medium mt-4 pt-3 border-t border-[#1F1F1F]">
            — {currentQuote.author}
          </div>
        </div>

        {/* Weekly Challenge Banner Card */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-gradient-to-r from-[#121212] to-[#1A1C1A] border border-[#262626] flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-geist font-semibold tracking-wider text-[#D4AF37] uppercase">
                  Weekly Quest · {activeWeeklyChallenge.week}
                </span>
              </div>
              <span className="text-xs font-mono text-[#2EA043]">
                +{activeWeeklyChallenge.xp_bonus} XP Bonus
              </span>
            </div>

            <h4 className="font-cormorant text-xl sm:text-2xl font-bold text-[#F7F7F7]">
              {activeWeeklyChallenge.title}
            </h4>
            <p className="text-xs text-[#B3B3B3] font-geist line-clamp-2">
              {activeWeeklyChallenge.subtitle}
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-[#1F1F1F] flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#8C8C8C]">
                Day {weeklyProgress.daysDone} of {activeWeeklyChallenge.days}
              </span>
              <div className="flex gap-1">
                {Array.from({ length: activeWeeklyChallenge.days }).map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < weeklyProgress.daysDone ? 'bg-[#D4AF37]' : 'bg-[#262626]'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() => setActiveTab('weekly')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#E5BD45] font-geist"
            >
              <span>View Quest</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
