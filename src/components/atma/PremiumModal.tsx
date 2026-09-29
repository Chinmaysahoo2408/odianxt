'use client';

import React, { useState } from 'react';
import {
  Crown,
  Check,
  Sparkles,
  ShieldCheck,
  X,
  ArrowRight,
  Diamond
} from 'lucide-react';
import { useAtma } from '@/lib/atma/store';

const PREMIUM_BENEFITS = [
  'Unlimited AI Coach conversations and personalized reflections',
  'The complete 21-Day Transformation master curriculum & certifications',
  'Exclusive weekly & monthly advanced Stoic challenges',
  'Access to the private Inner Circle tribe discussions',
  'Advanced streak analytics & habit momentum insights',
  'Guided high-fidelity somatic breathwork & soundscapes'
];

export const PremiumSection: React.FC = () => {
  const { setIsPremiumModalOpen } = useAtma();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setIsPremiumModalOpen(false);
      }, 2500);
    }, 1200);
  };

  return (
    <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-[#1B2A22] via-[#121212] to-[#050505] border-2 border-[#D4AF37]/50 shadow-2xl relative overflow-hidden space-y-8 text-center max-w-2xl mx-auto animate-fadeIn">
      {/* Background Ambient Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Diamond Crown Icon */}
      <div className="w-16 h-16 rounded-full mx-auto bg-gradient-to-br from-[#121212] via-[#1B2A22] to-[#0A3B2C] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-xl shadow-[#D4AF37]/10">
        <Crown className="w-8 h-8 animate-pulse" />
      </div>

      <div className="space-y-2">
        <div className="text-xs font-geist font-bold tracking-[0.3em] text-[#D4AF37] uppercase">
          ATMA Inner Circle
        </div>
        <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F7F7] tracking-tight leading-tight">
          The Full Transformation.
        </h2>
        <p className="text-xs sm:text-sm text-[#B3B3B3] font-geist max-w-md mx-auto">
          Cross the threshold. Unlock full access to AI coaching, advanced courses, and exclusive tribe circles.
        </p>
      </div>

      {/* Pricing Plan Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
        {/* Monthly Plan */}
        <div
          onClick={() => setSelectedPlan('monthly')}
          className={`p-5 rounded-2xl border-2 transition-all cursor-pointer select-none relative ${
            selectedPlan === 'monthly'
              ? 'bg-[#1A1C1A] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/5'
              : 'bg-[#050505] border-[#262626] hover:border-[#8C8C8C]'
          }`}
        >
          <div className="text-[10px] font-geist font-bold tracking-widest text-[#8C8C8C] uppercase">
            Monthly
          </div>
          <div className="font-cormorant text-3xl font-bold text-[#F7F7F7] mt-1">
            $14 <span className="text-xs font-geist text-[#8C8C8C] font-normal">/ month</span>
          </div>
          <div className="text-[11px] text-[#8C8C8C] font-geist mt-2">
            Flexible transformation membership.
          </div>
        </div>

        {/* Yearly Plan (Best Value) */}
        <div
          onClick={() => setSelectedPlan('yearly')}
          className={`p-5 rounded-2xl border-2 transition-all cursor-pointer select-none relative ${
            selectedPlan === 'yearly'
              ? 'bg-[#1A1C1A] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/15'
              : 'bg-[#050505] border-[#262626] hover:border-[#8C8C8C]'
          }`}
        >
          <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-[#0A3B2C] text-[#2EA043] font-mono text-[10px] font-bold border border-[#115E41] uppercase tracking-wider">
            Save 40%
          </span>
          <div className="text-[10px] font-geist font-bold tracking-widest text-[#D4AF37] uppercase">
            Yearly Passage
          </div>
          <div className="font-cormorant text-3xl font-bold text-[#D4AF37] mt-1">
            $99 <span className="text-xs font-geist text-[#8C8C8C] font-normal">($8.25 / mo)</span>
          </div>
          <div className="text-[11px] text-[#8C8C8C] font-geist mt-2">
            365 days of sacred discipline and guidance.
          </div>
        </div>
      </div>

      {/* Benefits List */}
      <div className="p-5 rounded-2xl bg-[#050505] border border-[#262626] text-left space-y-2.5">
        <div className="text-xs font-geist font-semibold tracking-wider text-[#D4AF37] uppercase mb-3">
          Inner Circle Privileges
        </div>
        {PREMIUM_BENEFITS.map((b, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F7F7F7] font-geist">
            <Check className="w-4 h-4 text-[#2EA043] flex-shrink-0 mt-0.5" />
            <span>{b}</span>
          </div>
        ))}
      </div>

      {/* Action CTA */}
      <div className="space-y-3">
        {isSuccess ? (
          <div className="p-4 rounded-xl bg-[#0A3B2C] border border-[#115E41] text-[#2EA043] font-geist text-sm font-semibold animate-scaleIn">
            ✓ Welcome to the Inner Circle. Transformation Activated.
          </div>
        ) : (
          <button
            onClick={handleCheckout}
            disabled={isProcessing}
            className="w-full py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5BD45] text-[#050505] font-semibold text-xs tracking-wider uppercase font-geist transition-all shadow-xl hover:scale-101"
          >
            {isProcessing ? 'Activating Passage...' : `Begin ${selectedPlan === 'yearly' ? 'Yearly' : 'Monthly'} Membership`}
          </button>
        )}
        <div className="text-[11px] text-[#8C8C8C] font-geist">
          7-Day Free Trial included. Cancel anytime without hassle.
        </div>
      </div>
    </div>
  );
};

export const PremiumModal: React.FC = () => {
  const { isPremiumModalOpen, setIsPremiumModalOpen } = useAtma();

  if (!isPremiumModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl">
        <button
          onClick={() => setIsPremiumModalOpen(false)}
          className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-[#050505] hover:bg-[#1A1C1A] text-[#8C8C8C] hover:text-[#F7F7F7] border border-[#262626]"
        >
          <X className="w-4 h-4" />
        </button>
        <PremiumSection />
      </div>
    </div>
  );
};
