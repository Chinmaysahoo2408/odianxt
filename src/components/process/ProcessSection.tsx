'use client';

import React from 'react';
import { useEcosystem } from '@/lib/store';
import { Layers, Cpu, CheckCircle2, Rocket, ArrowRight } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  deliverables: string[];
}

const steps: ProcessStep[] = [
  {
    number: '01',
    eyebrow: 'DISCOVERY & BLUEPRINT',
    title: 'Architectural Grounding',
    description: 'We analyze the core operational frictions across Odisha — from urban traffic bottlenecks to genuine automotive supply chains and temple darshan bottlenecks.',
    deliverables: ['Field User Personas', 'System Data Schemas', 'Low-Latency Architecture'],
  },
  {
    number: '02',
    eyebrow: 'ENGINEERING & FINISH',
    title: 'Post-Production Tech Polish',
    description: 'We build high-performance mobile and web engines using Next.js, real-time WebSockets, and geo-spatial GPS telemetry with studio-grade micro-interactions.',
    deliverables: ['Real-Time Route Engine', '3D CAD Part Renderings', 'Lossless Audio/Video Feeds'],
  },
  {
    number: '03',
    eyebrow: 'VALIDATION & FIELD TESTING',
    title: 'Zero-Glitch Verification',
    description: 'Every subsystem is tested against low-bandwidth 2G/4G networks across Tier-2 and Tier-3 districts in Odisha to ensure 99.9% fault tolerance.',
    deliverables: ['Offline-First Cache', 'SMS / IVR Fallback', 'Stress Load Testing'],
  },
  {
    number: '04',
    eyebrow: 'STATEWIDE LAUNCH & SCALE',
    title: 'Ecosystem Unification',
    description: 'All apps are unified into the OdiaNXT Core ledger, allowing cross-app user profiles, single sign-on rewards, and comprehensive statewide telemetry.',
    deliverables: ['Unified Driver & User ID', 'Centralized Analytics Hub', 'Continuous Deployment'],
  },
];

export const ProcessSection: React.FC = () => {
  const { playSound } = useEcosystem();

  return (
    <section id="process" className="py-24 relative bg-[#09090b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="hues-eyebrow mb-3">
              <Cpu className="w-3.5 h-3.5 text-[#ff6b4a]" />
              <span>— OUR FOUR-PHASE PROCESS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
              How We Build <br className="hidden sm:inline" />
              For <span className="text-[#ff6b4a] italic font-black">Odisha.</span>
            </h2>
          </div>
          <p className="text-stone-400 max-w-md text-sm sm:text-base leading-relaxed">
            From grassroots field research in Cuttack & Bhubaneswar to statewide cloud scale, our development process blends cinematic craft with heavy engineering.
          </p>
        </div>

        {/* 2x2 Grid with Huge Translucent Coral Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              onMouseEnter={() => playSound('hover')}
              className="relative p-8 sm:p-10 rounded-2xl bg-[#111114] border border-white/10 hover:border-[#ff6b4a]/50 transition-all duration-300 group overflow-hidden flex flex-col justify-between"
            >
              {/* Huge Translucent Number in Background */}
              <div className="absolute top-3 right-6 select-none pointer-events-none text-7xl sm:text-8xl md:text-9xl font-black font-mono text-white/[0.04] group-hover:text-[#ff6b4a]/15 transition-colors duration-300">
                {step.number}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#ff6b4a]">
                    {step.eyebrow}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#ff6b4a] transition-colors">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-stone-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverables Pills */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-stone-400 block mb-2.5">
                  KEY DELIVERABLES
                </span>
                <div className="flex flex-wrap gap-2">
                  {step.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs bg-[#18181c] border border-white/10 text-stone-300 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b4a]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
