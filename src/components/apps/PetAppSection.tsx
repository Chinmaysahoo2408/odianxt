'use client';

import React, { useState } from 'react';
import { useEcosystem } from '@/lib/store';
import { getStatusBadgeStyle, formatStatusLabel } from '@/lib/utils';
import {
  HeartPulse,
  Heart,
  Video,
  MapPin,
  ChevronRight,
  PawPrint,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export const PetAppSection: React.FC = () => {
  const { apps, playSound, setActiveAppModal } = useEcosystem();
  const petApp = apps.find(a => a.slug === 'pet-app') || apps[2];

  const [activeTab, setActiveTab] = useState<'passport' | 'rescue'>('passport');

  const statusStyle = getStatusBadgeStyle(petApp.status);

  return (
    <section
      id="section-pet-app"
      className="py-28 relative bg-[#F7F3EA] border-b border-[#173C35]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-[#173C35]" />
          <span className="text-xs font-mono tracking-widest text-[#173C35] uppercase font-bold">
            APPLICATION MODULE 03 • COMPANION & COMMUNITY CARE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Pet App Identity */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-4xl sm:text-6xl font-serif text-[#173C35] font-bold">
                PET APP
              </h2>
              <div
                className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1.5 ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}
              >
                <span className={`w-2 h-2 rounded-full ${statusStyle.dot}`} />
                <span>{petApp.statusText || formatStatusLabel(petApp.status)}</span>
              </div>
            </div>

            <div className="inline-block px-3 py-1 rounded-lg bg-[#E4EBE0] border border-[#173C35]/15 text-[#173C35] font-mono text-xs font-bold uppercase tracking-widest">
              COMPANION ANIMAL & STRAY WELFARE
            </div>

            <p className="text-xl sm:text-2xl font-serif text-[#242522]">
              {petApp.tagline}
            </p>

            <p className="text-sm sm:text-base text-[#565851] leading-relaxed font-normal">
              {petApp.longDescription || petApp.description}
            </p>

            {/* Cultural Coexistence Note */}
            {petApp.culturalNote && (
              <div className="p-4 rounded-2xl bg-[#E4EBE0] border border-[#173C35]/15 flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#B85C38] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#173C35] leading-relaxed italic font-medium">
                  {petApp.culturalNote}
                </p>
              </div>
            )}

            {/* Key Service Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/12 shadow-2xs flex items-start gap-2.5">
                <HeartPulse className="w-5 h-5 text-[#173C35] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#242522]">Digital Health Record</div>
                  <div className="text-[11px] text-[#565851]">Vaccines, microchips & weight</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/12 shadow-2xs flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#B85C38] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#242522]">Geo Stray Alert</div>
                  <div className="text-[11px] text-[#565851]">Volunteer rescue dispatch</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  playSound('pet');
                  setActiveAppModal(petApp);
                }}
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-[#173C35] hover:bg-[#0F2722] text-[#F7F3EA] shadow-xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore PET APP</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  playSound('pet');
                  setActiveTab('rescue');
                }}
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-[#FFFFFF] hover:bg-[#F7F3EA] text-[#242522] border border-[#173C35]/25 transition-all cursor-pointer"
              >
                <span>View Rescue Grid</span>
              </button>
            </div>
          </div>

          {/* Right Column: Companion Passport & Animal Welfare Visualizer */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#173C35]/15 shadow-sm overflow-hidden">
              {/* Card Header & Tab Selector */}
              <div className="flex items-center justify-between pb-4 border-b border-[#173C35]/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E4EBE0] border border-[#173C35]/15 flex items-center justify-center text-[#173C35]">
                    <PawPrint className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#173C35]">CAREPAWS / PET APP</div>
                    <div className="text-[10px] text-[#565851] font-mono">Odisha Companion Care Grid</div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#F7F3EA] border border-[#173C35]/10">
                  <button
                    onClick={() => {
                      playSound('pet');
                      setActiveTab('passport');
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === 'passport'
                        ? 'bg-[#173C35] text-[#F7F3EA] shadow-2xs'
                        : 'text-[#565851] hover:text-[#242522]'
                    }`}
                  >
                    Passport
                  </button>
                  <button
                    onClick={() => {
                      playSound('pet');
                      setActiveTab('rescue');
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === 'rescue'
                        ? 'bg-[#173C35] text-[#F7F3EA] shadow-2xs'
                        : 'text-[#565851] hover:text-[#242522]'
                    }`}
                  >
                    Rescue Map
                  </button>
                </div>
              </div>

              {/* Interactive Passport Tab */}
              {activeTab === 'passport' && (
                <div className="mt-5 space-y-4">
                  {/* Pet Profile Card */}
                  <div className="p-4 rounded-2xl bg-[#F7F3EA] border border-[#173C35]/12 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#E4EBE0] border border-[#173C35]/15 flex items-center justify-center text-2xl">
                      🐾
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-[#242522]">Leo (Indie Rescued)</h4>
                        <span className="text-[10px] font-mono bg-[#173C35]/10 text-[#173C35] px-2 py-0.5 rounded-full font-bold">
                          PASS: OD-2026-440
                        </span>
                      </div>
                      <p className="text-[11px] text-[#565851] mt-0.5">
                        Age: 2 Yrs • Neutered • Rabies Vaccinated
                      </p>
                      <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[#173C35] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#173C35]" />
                        <span>Next booster: November 2026</span>
                      </div>
                    </div>
                  </div>

                  {/* Medical Records Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#F7F3EA] border border-[#173C35]/10">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#242522] mb-1">
                        <Calendar className="w-3.5 h-3.5 text-[#B85C38]" />
                        <span>Vaccine Tracker</span>
                      </div>
                      <div className="text-[10px] text-[#565851]">Anti-Rabies: Up-to-date</div>
                      <div className="text-[10px] text-[#173C35] font-mono mt-0.5 font-semibold">DHPPiL: Complete</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F7F3EA] border border-[#173C35]/10">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#242522] mb-1">
                        <Video className="w-3.5 h-3.5 text-[#173C35]" />
                        <span>Vet Telehealth</span>
                      </div>
                      <div className="text-[10px] text-[#565851]">Dr. S. Mohanty (OUAT)</div>
                      <div className="text-[10px] text-[#173C35] font-mono mt-0.5 font-semibold">Consulted 12d ago</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Interactive Rescue Map Tab */}
              {activeTab === 'rescue' && (
                <div className="mt-5 space-y-4">
                  <div className="p-4 rounded-2xl bg-[#F7F3EA] border border-[#B85C38]/25 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#242522]">
                        <MapPin className="w-4 h-4 text-[#B85C38]" />
                        <span>Stray Alert #OD-882 (Patia, Bhubaneswar)</span>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 rounded font-bold bg-[#B85C38]/10 text-[#B85C38]">
                        Volunteer En Route
                      </span>
                    </div>

                    <p className="text-xs text-[#565851] leading-relaxed">
                      Injured street puppy reported near KIIT Square. First-aid volunteer dispatched from Animal Welfare Trust Odisha.
                    </p>

                    <div className="pt-2 border-t border-[#173C35]/10 flex items-center justify-between text-[10px] text-[#565851] font-mono">
                      <span>Coordinates: 20.354°N, 85.819°E</span>
                      <span className="text-[#173C35] font-semibold">ETA: 14 Mins</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#E4EBE0] border border-[#173C35]/15 text-center">
                    <span className="text-xs text-[#173C35] font-semibold">
                      🤝 100% Non-Profit Community Animal Welfare Architecture
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
