'use client';

import React, { useState } from 'react';
import { useEcosystem } from '@/lib/store';
import { getStatusBadgeStyle, formatStatusLabel } from '@/lib/utils';
import {
  Wrench,
  Cog,
  ShieldCheck,
  Truck,
  CheckCircle2,
  ChevronRight,
  Volume2
} from 'lucide-react';

export const MahalaxmiSection: React.FC = () => {
  const { apps, playSound, setActiveAppModal } = useEcosystem();
  const mahaApp = apps.find(a => a.slug === 'mahalaxmi') || apps[1];

  const [selectedVehicleType, setSelectedVehicleType] = useState<'two-wheeler' | 'four-wheeler' | 'commercial'>('two-wheeler');
  const [selectedCategory, setSelectedCategory] = useState<'brakes' | 'engine' | 'transmission' | 'suspension'>('engine');

  const statusStyle = getStatusBadgeStyle(mahaApp.status);

  const sampleParts = [
    {
      id: 'p1',
      name: 'Ceramic Composite Brake Pad Set',
      code: 'OEM-BRK-9921-OD',
      category: 'brakes',
      fitment: 'Universal 150cc-250cc Motorcycles',
      rating: 'Certified OEM Grade',
    },
    {
      id: 'p2',
      name: 'High-Velocity Fuel Injection Nozzle',
      code: 'OEM-INJ-8812-XT',
      category: 'engine',
      fitment: 'BS-VI Petrol & Hybrid Engines',
      rating: '100% Genuine Bosch Spec',
    },
    {
      id: 'p3',
      name: 'Double-Lip Viton Crankshaft Oil Seal',
      code: 'OEM-ENG-4401-PR',
      category: 'engine',
      fitment: 'Heavy Duty 4-Stroke Assemblies',
      rating: 'High Temp Resistant',
    },
    {
      id: 'p4',
      name: 'Heavy Duty Nitrogen Monoshock Damper',
      code: 'OEM-SUS-7703-KL',
      category: 'suspension',
      fitment: 'Commercial Transport & Off-road',
      rating: 'ISO 9001 Certified',
    },
  ];

  const filteredParts = sampleParts.filter(p => p.category === selectedCategory);

  return (
    <section
      id="section-mahalaxmi"
      className="py-28 relative bg-[#F7F3EA] border-b border-[#173C35]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-[#B85C38]" />
          <span className="text-xs font-mono tracking-widest text-[#B85C38] uppercase font-bold">
            APPLICATION MODULE 02 • AUTOMOTIVE & SPARES
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Identity */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-4xl sm:text-6xl font-serif text-[#242522] font-bold">
                MAHALAXMI
              </h2>
              <div
                className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1.5 ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}
              >
                <span className={`w-2 h-2 rounded-full ${statusStyle.dot}`} />
                <span>{mahaApp.statusText || formatStatusLabel(mahaApp.status)}</span>
              </div>
            </div>

            <div className="inline-block px-3 py-1 rounded-lg bg-[#B85C38]/10 border border-[#B85C38]/25 text-[#B85C38] font-mono text-xs font-bold uppercase tracking-widest">
              GENUINE SPARES & OEM LOGISTICS
            </div>

            <p className="text-xl sm:text-2xl font-serif text-[#242522]">
              {mahaApp.tagline}
            </p>

            <p className="text-sm sm:text-base text-[#565851] leading-relaxed font-normal">
              {mahaApp.longDescription || mahaApp.description}
            </p>

            {/* Sound trigger info */}
            <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#B85C38]/20 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2.5 text-xs text-[#242522] font-medium">
                <Wrench className="w-4 h-4 text-[#B85C38]" />
                <span>Mechanical Sound Signature</span>
              </div>
              <button
                onClick={() => playSound('mahalaxmi')}
                className="px-3 py-1.5 rounded-lg bg-[#B85C38]/10 hover:bg-[#B85C38]/20 text-[#B85C38] text-xs font-bold border border-[#B85C38]/30 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Play Sound</span>
              </button>
            </div>

            {/* Key Feature Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/12 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-[#B85C38] mb-1.5" />
                <div className="text-xs font-bold text-[#242522]">Anti-Counterfeit QR</div>
                <div className="text-[11px] text-[#565851]">Direct factory ledger verification</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/12 shadow-2xs">
                <Truck className="w-5 h-5 text-[#B85C38] mb-1.5" />
                <div className="text-xs font-bold text-[#242522]">Workshop Dispatch</div>
                <div className="text-[11px] text-[#565851]">Same-day regional fulfilment</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  playSound('mahalaxmi');
                  setActiveAppModal(mahaApp);
                }}
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-[#B85C38] hover:bg-[#9E4E2E] text-[#F7F3EA] shadow-xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Mahalaxmi</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  playSound('mahalaxmi');
                  setActiveAppModal(mahaApp);
                }}
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-[#FFFFFF] hover:bg-[#F7F3EA] text-[#242522] border border-[#173C35]/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>View Genuine Spares</span>
              </button>
            </div>
          </div>

          {/* Right Column: Rotating Mechanical Gear & Spares Fitment Explorer */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#B85C38]/25 shadow-sm overflow-hidden">
              {/* Subtle Background Mechanical Gear Linework */}
              <div className="absolute -top-10 -right-10 pointer-events-none opacity-10">
                <Cog className="w-48 h-48 text-[#B85C38] animate-delicate-spin" />
              </div>

              {/* Visualizer Header */}
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[#173C35]/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#B85C38]/10 border border-[#B85C38]/30 flex items-center justify-center text-[#B85C38]">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#242522] tracking-wide">
                      MAHALAXMI FITMENT DISCOVERY
                    </div>
                    <div className="text-[10px] text-[#B85C38] font-mono font-semibold">
                      OEM Verified Database
                    </div>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-md bg-[#F7F3EA] border border-[#B85C38]/20 text-[10px] font-mono font-bold text-[#B85C38]">
                  15,000+ SKUs
                </div>
              </div>

              {/* Vehicle Type Tabs */}
              <div className="relative z-10 grid grid-cols-3 gap-1.5 my-4 p-1 rounded-xl bg-[#F7F3EA] border border-[#173C35]/10">
                <button
                  onClick={() => {
                    playSound('click');
                    setSelectedVehicleType('two-wheeler');
                  }}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    selectedVehicleType === 'two-wheeler'
                      ? 'bg-[#B85C38] text-[#F7F3EA] shadow-2xs'
                      : 'text-[#565851] hover:text-[#242522]'
                  }`}
                >
                  Two Wheeler
                </button>
                <button
                  onClick={() => {
                    playSound('click');
                    setSelectedVehicleType('four-wheeler');
                  }}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    selectedVehicleType === 'four-wheeler'
                      ? 'bg-[#B85C38] text-[#F7F3EA] shadow-2xs'
                      : 'text-[#565851] hover:text-[#242522]'
                  }`}
                >
                  Four Wheeler
                </button>
                <button
                  onClick={() => {
                    playSound('click');
                    setSelectedVehicleType('commercial');
                  }}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    selectedVehicleType === 'commercial'
                      ? 'bg-[#B85C38] text-[#F7F3EA] shadow-2xs'
                      : 'text-[#565851] hover:text-[#242522]'
                  }`}
                >
                  Commercial
                </button>
              </div>

              {/* Component Categories Selector */}
              <div className="relative z-10 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-3">
                {(['engine', 'brakes', 'transmission', 'suspension'] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      playSound('click');
                      setSelectedCategory(cat);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#242522] text-[#F7F3EA]'
                        : 'bg-[#F7F3EA] text-[#565851] hover:text-[#242522]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Parts Listing Showcase */}
              <div className="relative z-10 space-y-2.5">
                {filteredParts.map(part => (
                  <div
                    key={part.id}
                    className="p-3.5 rounded-xl bg-[#F7F3EA] border border-[#173C35]/10 hover:border-[#B85C38]/40 transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#242522] group-hover:text-[#B85C38] transition-colors">
                          {part.name}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B85C38] flex-shrink-0" />
                      </div>
                      <div className="text-[10px] font-mono text-[#565851] flex items-center gap-2">
                        <span className="text-[#B85C38] font-semibold">{part.code}</span>
                        <span>•</span>
                        <span>{part.fitment}</span>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-[#FFFFFF] border border-[#B85C38]/25 text-[#B85C38]">
                        {part.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verification Hologram Card */}
              <div className="relative z-10 mt-4 p-3 rounded-xl bg-[#E4EBE0] border border-[#173C35]/15 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#173C35] font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#173C35]" />
                  <span>Cryptographic OEM Warranty Protection</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#173C35]">
                  VERIFIED REPO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
