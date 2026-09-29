'use client';

import React, { useState } from 'react';
import { useEcosystem } from '@/lib/store';
import { getStatusBadgeStyle, formatStatusLabel } from '@/lib/utils';
import { KonarkChakra } from '../ui/KonarkChakra';
import {
  Building2,
  Bell,
  Clock,
  Compass,
  CalendarDays,
  ChevronRight,
  Volume2
} from 'lucide-react';

export const TempleAppSection: React.FC = () => {
  const { apps, playSound, setActiveAppModal } = useEcosystem();
  const templeApp = apps.find(a => a.slug === 'temple-app') || apps[3];

  const [selectedTemple, setSelectedTemple] = useState<'puri' | 'lingaraj' | 'konark'>('puri');

  const statusStyle = getStatusBadgeStyle(templeApp.status);

  const darshanData = {
    puri: {
      name: 'Shree Jagannath Temple, Puri',
      odia: 'ଶ୍ରୀ ଜଗନ୍ନାଥ ମନ୍ଦିର, ପୁରୀ',
      era: '12th Century CE (Ganga Dynasty)',
      architecture: 'Kalinga Rekha Deula Architecture (65m Shikhara)',
      timings: [
        { niti: 'Mangala Alati', time: '05:00 AM – 06:00 AM', tag: 'Auspicious First Darshan' },
        { niti: 'Mailam & Abakasha', time: '06:00 AM – 07:30 AM', tag: 'Holy Bath & Dressing' },
        { niti: 'Sakala Dhupa (Bhog)', time: '10:00 AM – 11:30 AM', tag: 'Morning Mahaprasad' },
        { niti: 'Sandhya Alati', time: '06:30 PM – 07:30 PM', tag: 'Evening Camphor Aarti' },
        { niti: 'Badasinghara & Pahuda', time: '10:30 PM – 11:30 PM', tag: 'Night Repose Ceremony' },
      ]
    },
    lingaraj: {
      name: 'Lingaraj Temple, Bhubaneswar',
      odia: 'ଶ୍ରୀ ଲିଙ୍ଗରାଜ ମନ୍ଦିର, ଭୁବନେଶ୍ୱର',
      era: '11th Century CE (Somavamsi Dynasty)',
      architecture: 'Quintessential Kalinga Architecture with 4 structures',
      timings: [
        { niti: 'Alati & Snana', time: '06:00 AM – 07:00 AM', tag: 'Early Morning Ritual' },
        { niti: 'Sakala Dhupa', time: '11:00 AM – 12:00 PM', tag: 'Prasad Offering' },
        { niti: 'Sandhya Alati', time: '07:00 PM – 08:00 PM', tag: 'Deepa Darshan' },
      ]
    },
    konark: {
      name: 'Sun Temple, Konark (Arka Kshetra)',
      odia: 'ସୂର୍ଯ୍ୟ ମନ୍ଦିର, କୋଣାର୍କ',
      era: '13th Century CE (King Narasimhadeva I)',
      architecture: 'Colossal Chariot of Sun God with 24 Carved Wheels',
      timings: [
        { niti: 'Sunrise Heritage Access', time: '06:00 AM – 06:00 PM', tag: 'UNESCO World Heritage' },
        { niti: 'Light & Sound Show', time: '07:00 PM – 08:00 PM', tag: 'Historical Narrative' },
      ]
    }
  };

  const currentTemple = darshanData[selectedTemple];

  return (
    <section
      id="section-temple-app"
      className="py-28 relative bg-[#F7F3EA] border-b border-[#173C35]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-[#C49A5A]" />
          <span className="text-xs font-mono tracking-widest text-[#C49A5A] uppercase font-bold">
            APPLICATION MODULE 04 • SACRED KALINGA HERITAGE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Temple App Identity */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-4xl sm:text-6xl font-serif text-[#173C35] font-bold">
                TEMPLE APP
              </h2>
              <div
                className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1.5 ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}
              >
                <span className={`w-2 h-2 rounded-full ${statusStyle.dot}`} />
                <span>{templeApp.statusText || formatStatusLabel(templeApp.status)}</span>
              </div>
            </div>

            <div className="inline-block px-3 py-1 rounded-lg bg-[#C49A5A]/15 border border-[#C49A5A]/30 text-[#8C6B32] font-mono text-xs font-bold uppercase tracking-widest">
              SACRED KALINGA HERITAGE & DIGITAL DARSHAN
            </div>

            <p className="text-xl sm:text-2xl font-serif text-[#242522]">
              "Experience Odisha's temples in a new digital way."
            </p>

            <p className="text-sm sm:text-base text-[#565851] leading-relaxed font-normal">
              {templeApp.longDescription || templeApp.description}
            </p>

            {/* Sacred Bronze Temple Bell Sound Chime Trigger */}
            <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#C49A5A]/30 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2.5 text-xs text-[#242522] font-medium">
                <Bell className="w-4 h-4 text-[#C49A5A]" />
                <span>Sacred Bronze Temple Bell Sound</span>
              </div>
              <button
                onClick={() => playSound('temple')}
                className="px-3.5 py-1.5 rounded-lg bg-[#173C35] hover:bg-[#0F2722] text-[#F7F3EA] text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Ring Temple Bell</span>
              </button>
            </div>

            {/* Architectural Cannons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/12 shadow-2xs flex items-start gap-2.5">
                <Compass className="w-5 h-5 text-[#C49A5A] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#242522]">Rekha & Pidha Deula</div>
                  <div className="text-[11px] text-[#565851]">Architectural 3D documentation</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/12 shadow-2xs flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-[#C49A5A] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#242522]">Daily Niti Timings</div>
                  <div className="text-[11px] text-[#565851]">Verified ritual sequence schedules</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  playSound('temple');
                  setActiveAppModal(templeApp);
                }}
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-[#173C35] hover:bg-[#0F2722] text-[#F7F3EA] shadow-xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Temple App</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  playSound('temple');
                  setActiveAppModal(templeApp);
                }}
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-[#FFFFFF] hover:bg-[#F7F3EA] text-[#242522] border border-[#173C35]/25 transition-all cursor-pointer"
              >
                <span>Kalinga Architecture Visualizer</span>
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Shikhara Visualizer & Daily Darshan Schedules */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#C49A5A]/30 shadow-sm overflow-hidden">
              {/* Emblem Header */}
              <div className="flex justify-center mb-4 relative z-10">
                <div className="w-18 h-18 rounded-full bg-[#F7F3EA] border border-[#C49A5A]/40 flex items-center justify-center">
                  <KonarkChakra size={64} accentColor="#C49A5A" animate />
                </div>
              </div>

              {/* Temple Selector Pills */}
              <div className="relative z-10 grid grid-cols-3 gap-1.5 mb-4 p-1 rounded-xl bg-[#F7F3EA] border border-[#173C35]/10">
                <button
                  onClick={() => {
                    playSound('click');
                    setSelectedTemple('puri');
                  }}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    selectedTemple === 'puri'
                      ? 'bg-[#173C35] text-[#F7F3EA] shadow-2xs'
                      : 'text-[#565851] hover:text-[#242522]'
                  }`}
                >
                  Puri Jagannath
                </button>
                <button
                  onClick={() => {
                    playSound('click');
                    setSelectedTemple('lingaraj');
                  }}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    selectedTemple === 'lingaraj'
                      ? 'bg-[#173C35] text-[#F7F3EA] shadow-2xs'
                      : 'text-[#565851] hover:text-[#242522]'
                  }`}
                >
                  Lingaraj
                </button>
                <button
                  onClick={() => {
                    playSound('click');
                    setSelectedTemple('konark');
                  }}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    selectedTemple === 'konark'
                      ? 'bg-[#173C35] text-[#F7F3EA] shadow-2xs'
                      : 'text-[#565851] hover:text-[#242522]'
                  }`}
                >
                  Konark Sun
                </button>
              </div>

              {/* Temple Info Card */}
              <div className="relative z-10 p-4 rounded-2xl bg-[#F7F3EA] border border-[#C49A5A]/30 mb-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#173C35]">{currentTemple.name}</h4>
                  <span className="text-[11px] font-serif text-[#B85C38] font-bold">
                    {currentTemple.odia}
                  </span>
                </div>
                <div className="text-[11px] text-[#565851] mt-1 font-mono">
                  {currentTemple.era} • {currentTemple.architecture}
                </div>
              </div>

              {/* Daily Niti Ritual Schedule */}
              <div className="relative z-10 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#8C6B32] flex items-center justify-between font-bold">
                  <span>Verified Ritual Schedule (ନୀତି ନିର୍ଘଣ୍ଟ)</span>
                  <span className="text-[#173C35]">● Temple Open</span>
                </div>

                {currentTemple.timings.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#F7F3EA] border border-[#173C35]/10 flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#242522]">{item.niti}</div>
                      <div className="text-[10px] text-[#565851]">{item.tag}</div>
                    </div>
                    <div className="text-right font-mono text-xs font-bold text-[#173C35] bg-[#FFFFFF] px-2.5 py-1 rounded-md border border-[#173C35]/10">
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>

              {/* Reverent Cultural Notice */}
              <div className="relative z-10 mt-4 pt-3 border-t border-[#173C35]/10 text-center">
                <p className="text-[11px] text-[#8C6B32] font-serif italic">
                  ଜୟ ଜଗନ୍ନାଥ • Digital Heritage & Darshan Guide for All 30 Districts of Odisha
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
