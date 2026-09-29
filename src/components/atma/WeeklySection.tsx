'use client';

import React, { useState } from 'react';
import {
  CalendarDays,
  CheckCircle2,
  Sparkles,
  Flame,
  Award,
  Clock,
  Send,
  MessageSquare,
  Shield,
  Heart
} from 'lucide-react';
import { useAtma } from '@/lib/atma/store';

export const WeeklySection: React.FC = () => {
  const { activeWeeklyChallenge, weeklyProgress, checkinWeeklyChallenge, user } = useAtma();
  const [reflectionInput, setReflectionInput] = useState('');
  const [threadPosts, setThreadPosts] = useState([
    {
      id: 't1',
      name: 'Swati Panigrahi',
      level: 6,
      text: 'Day 4 of the Vow of Silence. 30 minutes in the early morning before anyone else wakes up has completely eliminated my afternoon anxiety.',
      likes: 18,
      time: '3 hours ago'
    },
    {
      id: 't2',
      name: 'Debashish Mishra',
      level: 7,
      text: 'Resisted the urge to check notifications during the silence window today. The mental noise quieted down around minute 18.',
      likes: 12,
      time: '6 hours ago'
    }
  ]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCheckin = () => {
    const res = checkinWeeklyChallenge();
    if (res.success) {
      setToastMessage(
        res.isCompleted
          ? `🏆 Quest Mastered! +${res.xpEarned} XP Unlocked!`
          : `✓ Day Checked In! +${res.xpEarned} XP Earned.`
      );
      setTimeout(() => setToastMessage(null), 3500);
    } else {
      setToastMessage("You have already checked in for today's quest. Keep the silence unbroken.");
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const handlePostReflection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reflectionInput.trim()) return;
    const newThread = {
      id: `t_${Date.now()}`,
      name: user?.name || 'Seeker',
      level: user?.level || 1,
      text: reflectionInput.trim(),
      likes: 0,
      time: 'Just now'
    };
    setThreadPosts([newThread, ...threadPosts]);
    setReflectionInput('');
  };

  return (
    <div className="space-y-8 pb-16 animate-fadeIn max-w-4xl">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 p-4 rounded-xl bg-[#0A3B2C] border border-[#115E41] text-[#2EA043] font-geist text-xs font-semibold shadow-2xl flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Quest Hero Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#121212] via-[#1A1C1A] to-[#0A3B2C]/50 border border-[#262626] relative overflow-hidden shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase font-geist">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>Active Quest · Week {activeWeeklyChallenge.week}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050505] border border-[#262626] text-xs font-mono text-[#2EA043]">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span>+{activeWeeklyChallenge.xp_bonus} XP Bonus</span>
          </div>
        </div>

        <div>
          <h1 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F7F7] tracking-tight">
            {activeWeeklyChallenge.title}
          </h1>
          <p className="text-sm sm:text-base text-[#B3B3B3] font-geist mt-2 max-w-2xl leading-relaxed">
            {activeWeeklyChallenge.subtitle}
          </p>
        </div>

        {/* 7-Day Visual Progress Track */}
        <div className="space-y-2 pt-2">
          <div className="flex justify-between text-xs font-mono text-[#8C8C8C]">
            <span>Quest Progress: Day {weeklyProgress.daysDone} of {activeWeeklyChallenge.days}</span>
            <span className="text-[#D4AF37]">{Math.round((weeklyProgress.daysDone / activeWeeklyChallenge.days) * 100)}%</span>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: activeWeeklyChallenge.days }).map((_, idx) => {
              const isDone = idx < weeklyProgress.daysDone;
              return (
                <div
                  key={idx}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    isDone
                      ? 'bg-[#1B2A22] border-[#115E41] text-[#2EA043]'
                      : 'bg-[#050505] border-[#262626] text-[#8C8C8C]'
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase">Day {idx + 1}</div>
                  <div className="mt-1 flex justify-center">
                    {isDone ? (
                      <CheckCircle2 className="w-4 h-4 text-[#2EA043]" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-[#262626]" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quest Check-in Action */}
        <div className="pt-4 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#8C8C8C] font-geist">
            {weeklyProgress.checkedInToday
              ? '✓ You have checked in for today.'
              : 'Execute your 30 minutes of silence today, then record your check-in.'}
          </div>

          <button
            onClick={handleCheckin}
            disabled={weeklyProgress.checkedInToday}
            className={`w-full sm:w-auto px-8 py-3 rounded-xl font-geist font-semibold text-xs tracking-wider uppercase transition-all shadow-lg ${
              weeklyProgress.checkedInToday
                ? 'bg-[#1F1F1F] text-[#8C8C8C] border border-[#262626] cursor-not-allowed'
                : 'bg-[#D4AF37] hover:bg-[#E5BD45] text-[#050505] hover:scale-102'
            }`}
          >
            {weeklyProgress.checkedInToday ? 'Checked In Today ✓' : 'I Did This Today (+50 XP)'}
          </button>
        </div>
      </div>

      {/* Quest Guidelines */}
      <div className="p-6 rounded-2xl bg-[#121212] border border-[#262626] space-y-4">
        <h3 className="font-cormorant text-2xl font-bold text-[#F7F7F7]">
          Guidelines for the Practice
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {activeWeeklyChallenge.instructions.map((inst, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#050505] border border-[#262626] text-xs text-[#B3B3B3] font-geist">
              <span className="w-5 h-5 rounded-full bg-[#1A1C1A] text-[#D4AF37] flex items-center justify-center font-mono font-bold flex-shrink-0 text-[10px] border border-[#D4AF37]/30">
                {i + 1}
              </span>
              <span>{inst}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quest Discussion & Reflections Thread */}
      <div className="p-6 rounded-2xl bg-[#121212] border border-[#262626] space-y-5">
        <h3 className="font-cormorant text-2xl font-bold text-[#F7F7F7] flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[#D4AF37]" />
          <span>Quest Reflections</span>
        </h3>

        {/* Post Form */}
        <form onSubmit={handlePostReflection} className="flex gap-2">
          <input
            type="text"
            value={reflectionInput}
            onChange={e => setReflectionInput(e.target.value)}
            placeholder="Share an insight from today's silence practice..."
            className="flex-1 p-3.5 rounded-xl bg-[#050505] border border-[#262626] text-xs text-[#F7F7F7] placeholder-[#8C8C8C] focus:outline-none focus:border-[#D4AF37] font-geist"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#E5BD45] text-[#050505] font-semibold text-xs font-geist flex items-center gap-1.5 shadow-sm"
          >
            <span>Post</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Thread List */}
        <div className="space-y-3 pt-2">
          {threadPosts.map(post => (
            <div
              key={post.id}
              className="p-4 rounded-xl bg-[#050505] border border-[#262626] space-y-2"
            >
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#F7F7F7]">{post.name}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#1A1C1A] text-[#D4AF37] font-mono border border-[#262626]">
                    Lv.{post.level}
                  </span>
                </div>
                <span className="text-[10px] text-[#8C8C8C] font-mono">{post.time}</span>
              </div>
              <p className="text-xs text-[#B3B3B3] font-geist leading-relaxed">
                {post.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
