'use client';

import React, { useState } from 'react';
import {
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Mail,
  Lock,
  User as UserIcon,
  Gift
} from 'lucide-react';
import { useAtma } from '@/lib/atma/store';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setIsAuthModalOpen, login } = useAtma();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [referralCode, setReferralCode] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    login(email, name || undefined);
  };

  const handleDemoSignIn = () => {
    login('chinmay@odianxt.com', 'Chinmay Sahoo');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md bg-[#121212] border border-[#262626] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 relative">
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[#8C8C8C] hover:text-[#F7F7F7] bg-[#050505] border border-[#262626]"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Brand Header */}
        <div className="text-center space-y-1.5">
          <div className="w-12 h-12 rounded-xl mx-auto bg-gradient-to-br from-[#121212] via-[#1B2A22] to-[#0A3B2C] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] font-cormorant font-bold text-2xl shadow-lg">
            A
          </div>
          <h2 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#F7F7F7] pt-2">
            {mode === 'login' ? 'Enter the Sanctuary' : 'Begin Your Transformation'}
          </h2>
          <p className="text-xs text-[#8C8C8C] font-geist">
            {mode === 'login'
              ? 'Access your daily rituals, streak momentum, and course path.'
              : 'Create your account to embark on the 21-Day Transformation.'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="text-xs font-geist text-[#8C8C8C] block mb-1">Full Name</label>
              <div className="relative">
                <UserIcon className="w-4 h-4 text-[#8C8C8C] absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#050505] border border-[#262626] text-xs text-[#F7F7F7] placeholder-[#8C8C8C] focus:outline-none focus:border-[#D4AF37] font-geist"
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-xs font-geist text-[#8C8C8C] block mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#8C8C8C] absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#050505] border border-[#262626] text-xs text-[#F7F7F7] placeholder-[#8C8C8C] focus:outline-none focus:border-[#D4AF37] font-geist"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-geist text-[#8C8C8C] block mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#8C8C8C] absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#050505] border border-[#262626] text-xs text-[#F7F7F7] placeholder-[#8C8C8C] focus:outline-none focus:border-[#D4AF37] font-geist"
              />
            </div>
          </div>

          {mode === 'register' && (
            <div>
              <label className="text-xs font-geist text-[#8C8C8C] block mb-1">
                Referral / Invite Code (Optional)
              </label>
              <div className="relative">
                <Gift className="w-4 h-4 text-[#8C8C8C] absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={referralCode}
                  onChange={e => setReferralCode(e.target.value)}
                  placeholder="e.g. ATMA99X"
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#050505] border border-[#262626] text-xs text-[#F7F7F7] placeholder-[#8C8C8C] focus:outline-none focus:border-[#D4AF37] font-geist uppercase"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5BD45] text-[#050505] font-semibold text-xs tracking-wider uppercase font-geist transition-all shadow-md mt-2"
          >
            {mode === 'login' ? 'Sign In to ATMA' : 'Create Account (+100 XP)'}
          </button>
        </form>

        {/* Demo Fast Access */}
        <div className="pt-2 border-t border-[#1F1F1F] text-center space-y-2">
          <button
            onClick={handleDemoSignIn}
            className="w-full py-2.5 rounded-xl bg-[#1A1C1A] hover:bg-[#1F1F1F] text-xs font-geist font-medium text-[#D4AF37] border border-[#D4AF37]/30 transition-all"
          >
            ⚡ Quick Demo Sign-In (Chinmay Sahoo)
          </button>

          <div className="text-xs text-[#8C8C8C] font-geist">
            {mode === 'login' ? (
              <span>
                New to ATMA?{' '}
                <button
                  onClick={() => setMode('register')}
                  className="text-[#D4AF37] hover:underline font-semibold"
                >
                  Create an account
                </button>
              </span>
            ) : (
              <span>
                Already have an account?{' '}
                <button
                  onClick={() => setMode('login')}
                  className="text-[#D4AF37] hover:underline font-semibold"
                >
                  Sign in
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
