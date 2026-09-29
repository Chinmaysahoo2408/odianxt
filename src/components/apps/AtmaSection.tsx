'use client';

import React, { useState, useRef } from 'react';
import { useEcosystem } from '@/lib/store';
import { getStatusBadgeStyle, formatStatusLabel } from '@/lib/utils';
import {
  Navigation,
  Route,
  ShieldAlert,
  Languages,
  Activity,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Wifi
} from 'lucide-react';

export const AtmaSection: React.FC = () => {
  const { apps, playSound, setActiveAppModal } = useEcosystem();
  const atmaApp = apps.find(a => a.slug === 'atma') || apps[0];
  
  const [activeScreen, setActiveScreen] = useState<'radar' | 'routing' | 'bilingual' | 'sos'>('radar');
  const [phoneTilt, setPhoneTilt] = useState({ x: 0, y: 0 });
  const phoneRef = useRef<HTMLDivElement>(null);

  const handlePhoneMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!phoneRef.current) return;
    const rect = phoneRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPhoneTilt({
      x: -(y / rect.height) * 8,
      y: (x / rect.width) * 8,
    });
  };

  const handlePhoneLeave = () => {
    setPhoneTilt({ x: 0, y: 0 });
  };

  const statusStyle = getStatusBadgeStyle(atmaApp.status);

  return (
    <section
      id="section-atma"
      className="py-28 relative bg-[#F7F3EA] border-b border-[#173C35]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-[#173C35]" />
          <span className="text-xs font-mono tracking-widest text-[#173C35] uppercase font-bold">
            APPLICATION MODULE 01 • MOBILITY & TRANSIT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: ATMA Identity */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-4xl sm:text-6xl font-serif text-[#173C35] font-bold">
                ATMA
              </h2>
              <div
                className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1.5 ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}
              >
                <span className={`w-2 h-2 rounded-full ${statusStyle.dot}`} />
                <span>{atmaApp.statusText || formatStatusLabel(atmaApp.status)}</span>
              </div>
            </div>

            <p className="text-xl sm:text-2xl font-serif text-[#242522]">
              {atmaApp.tagline}
            </p>

            <p className="text-sm sm:text-base text-[#565851] leading-relaxed font-normal">
              {atmaApp.longDescription || atmaApp.description}
            </p>

            {/* Cultural Architecture Note */}
            {atmaApp.culturalNote && (
              <div className="p-4 rounded-2xl bg-[#E4EBE0] border border-[#173C35]/15 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#173C35] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#173C35] leading-relaxed italic font-medium">
                  {atmaApp.culturalNote}
                </p>
              </div>
            )}

            {/* Screen Switcher Controls */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono text-[#565851] uppercase tracking-wider block font-semibold">
                Interactive Telemetry Previews:
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => {
                    playSound('atma');
                    setActiveScreen('radar');
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                    activeScreen === 'radar'
                      ? 'bg-[#173C35] border-[#173C35] text-[#F7F3EA] shadow-xs'
                      : 'bg-[#FFFFFF] border-[#173C35]/12 text-[#242522] hover:border-[#173C35]/30'
                  }`}
                >
                  <Navigation className={`w-4 h-4 ${activeScreen === 'radar' ? 'text-[#F7F3EA]' : 'text-[#173C35]'}`} />
                  <div>
                    <div className="text-xs font-bold">Transit Radar</div>
                    <div className={`text-[10px] ${activeScreen === 'radar' ? 'text-[#E4EBE0]' : 'text-[#565851]'}`}>Live GPS Fleet ETA</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    playSound('atma');
                    setActiveScreen('routing');
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                    activeScreen === 'routing'
                      ? 'bg-[#173C35] border-[#173C35] text-[#F7F3EA] shadow-xs'
                      : 'bg-[#FFFFFF] border-[#173C35]/12 text-[#242522] hover:border-[#173C35]/30'
                  }`}
                >
                  <Route className={`w-4 h-4 ${activeScreen === 'routing' ? 'text-[#F7F3EA]' : 'text-[#173C35]'}`} />
                  <div>
                    <div className="text-xs font-bold">Smart Routing</div>
                    <div className={`text-[10px] ${activeScreen === 'routing' ? 'text-[#E4EBE0]' : 'text-[#565851]'}`}>Multi-Modal Transit</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    playSound('atma');
                    setActiveScreen('bilingual');
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                    activeScreen === 'bilingual'
                      ? 'bg-[#173C35] border-[#173C35] text-[#F7F3EA] shadow-xs'
                      : 'bg-[#FFFFFF] border-[#173C35]/12 text-[#242522] hover:border-[#173C35]/30'
                  }`}
                >
                  <Languages className={`w-4 h-4 ${activeScreen === 'bilingual' ? 'text-[#F7F3EA]' : 'text-[#173C35]'}`} />
                  <div>
                    <div className="text-xs font-bold">Odia Voice AI</div>
                    <div className={`text-[10px] ${activeScreen === 'bilingual' ? 'text-[#E4EBE0]' : 'text-[#565851]'}`}>ଓଡ଼ିଆ Guidance</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    playSound('atma');
                    setActiveScreen('sos');
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                    activeScreen === 'sos'
                      ? 'bg-[#173C35] border-[#173C35] text-[#F7F3EA] shadow-xs'
                      : 'bg-[#FFFFFF] border-[#173C35]/12 text-[#242522] hover:border-[#173C35]/30'
                  }`}
                >
                  <ShieldAlert className={`w-4 h-4 ${activeScreen === 'sos' ? 'text-[#B85C38]' : 'text-[#B85C38]'}`} />
                  <div>
                    <div className="text-xs font-bold">Emergency SOS</div>
                    <div className={`text-[10px] ${activeScreen === 'sos' ? 'text-[#E4EBE0]' : 'text-[#565851]'}`}>Civic Alert Grid</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  playSound('atma');
                  setActiveAppModal(atmaApp);
                }}
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-[#173C35] hover:bg-[#0F2722] text-[#F7F3EA] shadow-xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore ATMA Specs</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              {(atmaApp.appUrl || atmaApp.websiteUrl) ? (
                <a
                  href={atmaApp.appUrl || atmaApp.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-semibold text-sm bg-transparent hover:bg-[#173C35]/5 text-[#173C35] border border-[#173C35]/30 transition-all flex items-center gap-2"
                >
                  <span>Open App</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="px-5 py-3 rounded-xl text-xs font-semibold text-[#565851] bg-[#FFFFFF] border border-[#173C35]/15 select-none">
                  App Deployment Coming Soon
                </span>
              )}
            </div>
          </div>

          {/* Right Column: Smartphone Mockup in Deep Forest & Ivory Tones */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              ref={phoneRef}
              onMouseMove={handlePhoneMove}
              onMouseLeave={handlePhoneLeave}
              style={{
                transform: `rotateX(${phoneTilt.x}deg) rotateY(${phoneTilt.y}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-[300px] sm:w-[340px] h-[580px] sm:h-[620px] rounded-[44px] bg-[#173C35] border-[6px] border-[#0F2722] shadow-xl p-3.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Phone Status Bar */}
              <div className="relative z-20 flex items-center justify-between px-6 pt-2 pb-1 text-[#E4EBE0]">
                <span className="text-[10px] font-mono font-bold">09:41</span>
                <div className="w-20 h-4 bg-[#0F2722] rounded-full flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8B7A1]" />
                  <span className="text-[8px] font-mono text-[#F7F3EA]">ATMA</span>
                </div>
                <div className="flex items-center gap-1">
                  <Wifi className="w-3 h-3" />
                  <span className="text-[9px] font-mono">5G</span>
                </div>
              </div>

              {/* Screen Interior */}
              <div className="relative z-10 flex-1 my-2 rounded-[30px] bg-[#F7F3EA] border border-[#173C35]/15 p-4 flex flex-col justify-between overflow-hidden text-[#242522]">
                {/* Header in App */}
                <div className="flex items-center justify-between pb-3 border-b border-[#173C35]/10">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#173C35] flex items-center justify-center text-[#F7F3EA]">
                      <Navigation className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#173C35]">ATMA NAV</div>
                      <div className="text-[9px] text-[#565851]">Bhubaneswar-Cuttack</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 text-[9px] font-bold bg-[#E4EBE0] text-[#173C35] rounded-full">
                    GPS SYNCED
                  </span>
                </div>

                {/* Screen Content Variants */}
                {activeScreen === 'radar' && (
                  <div className="my-auto space-y-3">
                    {/* Simulated Radar Visualizer */}
                    <div className="relative w-36 h-36 mx-auto rounded-full border border-[#173C35]/20 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-dashed border-[#173C35]/15 animate-delicate-spin" />
                      <div className="w-20 h-20 rounded-full border border-[#173C35]/30 flex items-center justify-center">
                        <span className="w-3 h-3 rounded-full bg-[#173C35]" />
                      </div>
                      <div className="absolute top-4 right-6 w-2 h-2 rounded-full bg-[#B85C38]" />
                      <div className="absolute bottom-6 left-8 w-2 h-2 rounded-full bg-[#A8B7A1]" />
                    </div>

                    <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#173C35]/15 shadow-2xs">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="text-[#565851]">Next Mo Bus 23A:</span>
                        <span className="font-bold text-[#173C35]">2 min away</span>
                      </div>
                      <div className="text-[9px] text-[#565851] mt-1 font-medium">
                        Master Canteen ➔ Patia Square
                      </div>
                    </div>
                  </div>
                )}

                {activeScreen === 'routing' && (
                  <div className="my-auto space-y-2.5">
                    <div className="p-3 rounded-xl bg-[#E4EBE0] border border-[#173C35]/20">
                      <div className="text-[10px] font-mono text-[#173C35] font-bold">Fastest Multi-Modal Route</div>
                      <div className="text-xs font-bold text-[#173C35] mt-1">Mo Bus + E-Auto Feeder</div>
                      <div className="text-[10px] text-[#565851] mt-1">Total Time: 24 mins • ₹35</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#173C35]/10">
                      <div className="text-[10px] font-mono text-[#565851]">Alternative Direct</div>
                      <div className="text-xs font-semibold text-[#242522] mt-1">Walking + Shared Transit</div>
                      <div className="text-[10px] text-[#565851] mt-1">Total Time: 32 mins • ₹20</div>
                    </div>
                  </div>
                )}

                {activeScreen === 'bilingual' && (
                  <div className="my-auto space-y-3 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#E4EBE0] border border-[#173C35]/20 mx-auto flex items-center justify-center text-[#173C35]">
                      <Languages className="w-6 h-6" />
                    </div>
                    <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#173C35]/15 shadow-2xs">
                      <p className="text-sm font-serif text-[#173C35] font-bold">
                        "ପରବର୍ତ୍ତୀ ବସ୍ ୨ ମିନିଟ୍‌ରେ ପହଞ୍ଚିବ"
                      </p>
                      <p className="text-[10px] text-[#565851] mt-1">
                        (Next bus arriving in 2 minutes)
                      </p>
                    </div>
                    <span className="text-[10px] text-[#173C35] font-mono font-semibold">
                      Voice Guidance Active (Odia)
                    </span>
                  </div>
                )}

                {activeScreen === 'sos' && (
                  <div className="my-auto space-y-3 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#B85C38]/10 border-2 border-[#B85C38]/40 mx-auto flex items-center justify-center text-[#B85C38]">
                      <ShieldAlert className="w-7 h-7" />
                    </div>
                    <div className="text-xs font-bold text-[#242522]">
                      One-Tap Civic Alert Grid
                    </div>
                    <p className="text-[10px] text-[#565851]">
                      Instant spatial telemetry broadcast to local emergency responders.
                    </p>
                  </div>
                )}

                {/* Bottom App Bar */}
                <div className="pt-2 border-t border-[#173C35]/10 flex justify-around text-[#565851]">
                  <div className="flex flex-col items-center">
                    <Navigation className="w-3.5 h-3.5 text-[#173C35]" />
                    <span className="text-[8px] text-[#173C35] font-bold">Transit</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Route className="w-3.5 h-3.5" />
                    <span className="text-[8px]">Routes</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Activity className="w-3.5 h-3.5" />
                    <span className="text-[8px]">Live</span>
                  </div>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="w-24 h-1 bg-[#0F2722] rounded-full mx-auto my-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
