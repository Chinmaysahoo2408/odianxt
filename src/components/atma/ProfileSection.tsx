'use client';

import React, { useState } from 'react';
import {
  User,
  Flame,
  Award,
  Sparkles,
  Gift,
  Copy,
  Check,
  Share2,
  Snowflake,
  ShieldCheck,
  Edit3,
  LogOut,
  Crown,
  Trophy
} from 'lucide-react';
import { useAtma } from '@/lib/atma/store';

export const ProfileSection: React.FC = () => {
  const { user, achievements, referralData, updateBio, setIsPremiumModalOpen, logout } = useAtma();
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bioInput, setBioInput] = useState(user?.bio || '');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!user) {
    return (
      <div className="p-8 rounded-2xl bg-[#121212] border border-[#262626] text-center space-y-4 max-w-lg mx-auto">
        <User className="w-12 h-12 text-[#8C8C8C] mx-auto" />
        <h2 className="font-cormorant text-2xl font-bold text-[#F7F7F7]">Sign In to View Profile</h2>
        <p className="text-xs text-[#8C8C8C] font-geist">Access your transformational progress, daily streaks, achievements, and referral rewards.</p>
      </div>
    );
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralData.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleSaveBio = () => {
    updateBio(bioInput);
    setIsEditingBio(false);
  };

  const nextLevelXp = user.level * 500;
  const currentLevelProgress = (user.xp % 500) / 500;

  return (
    <div className="space-y-8 pb-16 animate-fadeIn max-w-4xl">
      {/* Cover Header & Profile Card */}
      <div className="rounded-2xl bg-[#121212] border border-[#262626] overflow-hidden shadow-2xl relative">
        {/* Abstract Marble Cover */}
        <div className="h-44 sm:h-52 w-full bg-gradient-to-r from-[#1B2A22] via-[#121212] to-[#0A3B2C] relative overflow-hidden">
          <div className="absolute inset-0 bg-architectural-grid opacity-30" />
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setIsPremiumModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold font-geist shadow-sm backdrop-blur-md"
            >
              <Crown className="w-3.5 h-3.5" />
              <span>Inner Circle</span>
            </button>
          </div>
        </div>

        {/* Profile Details Container */}
        <div className="px-6 sm:px-8 pb-8 pt-0 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-16 sm:-mt-20 mb-6">
            <div className="flex items-end gap-4">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#050505] border-4 border-[#121212] p-1 shadow-2xl flex-shrink-0">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#115E41] flex items-center justify-center font-cormorant text-4xl sm:text-5xl font-bold text-[#050505] shadow-inner">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#F7F7F7]">
                    {user.name}
                  </h1>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#0A3B2C] text-[#2EA043] font-mono border border-[#115E41] font-semibold">
                    Level {user.level}
                  </span>
                </div>
                <div className="text-xs text-[#8C8C8C] font-mono mt-0.5">{user.email}</div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setIsEditingBio(!isEditingBio)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#050505] hover:bg-[#1A1C1A] text-xs font-geist text-[#B3B3B3] hover:text-[#F7F7F7] border border-[#262626] transition-all"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isEditingBio ? 'Cancel' : 'Edit Bio'}</span>
              </button>
            </div>
          </div>

          {/* Bio Section */}
          {isEditingBio ? (
            <div className="space-y-3 pt-2">
              <textarea
                value={bioInput}
                onChange={e => setBioInput(e.target.value)}
                rows={3}
                placeholder="Share your self-transformation intention..."
                className="w-full p-3.5 rounded-xl bg-[#050505] border border-[#262626] text-xs text-[#F7F7F7] placeholder-[#8C8C8C] focus:outline-none focus:border-[#D4AF37] font-geist resize-none"
              />
              <button
                onClick={handleSaveBio}
                className="px-5 py-2 rounded-xl bg-[#D4AF37] hover:bg-[#E5BD45] text-[#050505] font-semibold text-xs font-geist"
              >
                Save Bio
              </button>
            </div>
          ) : (
            <p className="text-xs sm:text-sm text-[#B3B3B3] font-geist leading-relaxed max-w-2xl">
              {user.bio || 'A disciplined seeker walking the 21-day transformation path.'}
            </p>
          )}

          {/* Level Progress Bar */}
          <div className="pt-6 mt-6 border-t border-[#1F1F1F] space-y-2">
            <div className="flex justify-between text-xs font-mono text-[#8C8C8C]">
              <span>Next Milestone: Level {user.level + 1}</span>
              <span className="text-[#D4AF37]">{user.xp % 500} / 500 XP</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#050505] border border-[#262626] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#D4AF37] to-[#115E41] rounded-full transition-all duration-500"
                style={{ width: `${currentLevelProgress * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-[#121212] border border-[#262626] text-center space-y-1">
          <div className="text-[10px] font-geist tracking-widest text-[#8C8C8C] uppercase">LEVEL</div>
          <div className="font-cormorant text-2xl sm:text-3xl font-bold text-[#F7F7F7]">{user.level}</div>
        </div>
        <div className="p-4 rounded-xl bg-[#121212] border border-[#262626] text-center space-y-1">
          <div className="text-[10px] font-geist tracking-widest text-[#8C8C8C] uppercase">TOTAL XP</div>
          <div className="font-cormorant text-2xl sm:text-3xl font-bold text-[#D4AF37]">{user.xp}</div>
        </div>
        <div className="p-4 rounded-xl bg-[#121212] border border-[#262626] text-center space-y-1">
          <div className="text-[10px] font-geist tracking-widest text-[#8C8C8C] uppercase">STREAK</div>
          <div className="font-cormorant text-2xl sm:text-3xl font-bold text-[#2EA043]">{user.streak}d</div>
        </div>
        <div className="p-4 rounded-xl bg-[#121212] border border-[#262626] text-center space-y-1">
          <div className="text-[10px] font-geist tracking-widest text-[#8C8C8C] uppercase">FREEZES</div>
          <div className="font-cormorant text-2xl sm:text-3xl font-bold text-[#8DD3FF]">{user.freezes_left}</div>
        </div>
      </div>

      {/* Referral Program Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#121212] to-[#1A1C1A] border border-[#262626] space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0A3B2C] border border-[#115E41] flex items-center justify-center text-[#2EA043]">
              <Gift className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-cormorant text-2xl font-bold text-[#F7F7F7]">
                The Guide Program
              </h3>
              <p className="text-xs text-[#8C8C8C] font-geist">
                Invite fellow seekers. Both of you earn +100 XP when they complete their first ritual.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2 flex items-center justify-between p-3.5 rounded-xl bg-[#050505] border border-[#262626]">
            <div>
              <div className="text-[10px] font-geist text-[#8C8C8C] uppercase">Your Invite Code</div>
              <div className="font-mono text-base font-bold text-[#D4AF37] tracking-wider mt-0.5">
                {referralData.code}
              </div>
            </div>
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121212] hover:bg-[#1A1C1A] text-xs font-geist text-[#F7F7F7] border border-[#262626] transition-all"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-[#2EA043]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-[#050505] border border-[#262626] text-center">
            <div className="text-[10px] font-geist text-[#8C8C8C] uppercase">Peers Guided</div>
            <div className="font-cormorant text-2xl font-bold text-[#2EA043] mt-0.5">
              {referralData.count} <span className="text-xs font-mono text-[#8C8C8C]">({referralData.earned_xp} XP)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Showcase */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#262626] space-y-5">
        <div>
          <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#F7F7F7]">
            Earned Badges & Milestones
          </h3>
          <p className="text-xs text-[#8C8C8C] font-geist mt-1">
            Unlock sacred milestones across physical, mental, emotional, and financial mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {achievements.map(ach => (
            <div
              key={ach.id}
              className={`p-4 rounded-xl border text-center space-y-2 transition-all ${
                ach.unlocked
                  ? 'bg-[#1B2A22] border-[#115E41]'
                  : 'bg-[#050505] border-[#1F1F1F] opacity-50'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center ${
                  ach.unlocked
                    ? 'bg-[#0A3B2C] text-[#2EA043] border border-[#115E41]'
                    : 'bg-[#121212] text-[#8C8C8C]'
                }`}
              >
                <Award className="w-5 h-5" />
              </div>

              <div>
                <div className="text-xs font-semibold font-geist text-[#F7F7F7]">{ach.title}</div>
                <div className="text-[11px] text-[#8C8C8C] font-geist leading-tight mt-1">
                  {ach.desc}
                </div>
              </div>

              <div className="pt-2 text-[10px] font-mono">
                {ach.unlocked ? (
                  <span className="text-[#2EA043]">Unlocked ✓</span>
                ) : (
                  <span className="text-[#8C8C8C]">Locked</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
