'use client';

import React, { useState } from 'react';
import { useEcosystem } from '@/lib/store';
import { Play, X, Volume2, VolumeX, Maximize2, Sparkles, Film, ArrowUpRight } from 'lucide-react';

interface Showreel {
  id: string;
  title: string;
  category: string;
  duration: string;
  aspect: string;
  thumbnailGradient: string;
  tagline: string;
  description: string;
  accent: string;
  stats: { label: string; value: string }[];
}

const showreelsData: Showreel[] = [
  {
    id: 'atma-reel',
    title: 'ATMA — High-Speed Urban Mobility Reel',
    category: 'Commercial Mobility',
    duration: '01:45',
    aspect: '16:9 4K Cinema',
    thumbnailGradient: 'from-[#ff6b4a]/40 via-[#18181c] to-[#09090b]',
    tagline: 'Hyper-local route algorithms, zero-cancellation drivers & live telemetry across Bhubaneswar.',
    description: 'A cinematic walkthrough of the ATMA mobility engine in real-world high congestion conditions, showing AI driver dispatching, live fare negotiation, and emergency SOS.',
    accent: '#ff6b4a',
    stats: [
      { label: 'Dispatch Latency', value: '< 2.4s' },
      { label: 'Daily Rides', value: '18,500+' },
      { label: 'Driver Retention', value: '94.8%' },
    ],
  },
  {
    id: 'mahalaxmi-reel',
    title: 'MAHALAXMI — Industrial Precision & Fitment',
    category: 'Automotive Commerce',
    duration: '02:10',
    aspect: '16:9 Master Grade',
    thumbnailGradient: 'from-[#06b6d4]/30 via-[#18181c] to-[#09090b]',
    tagline: '3D exploded CAD schematics, genuine OEM verification & 90-minute express courier delivery.',
    description: 'Showcasing the precision spare parts pipeline for two-wheelers, tractors, and heavy machinery, verifying QR barcodes against authentic manufacturer serial registries.',
    accent: '#06b6d4',
    stats: [
      { label: 'OEM Verified SKUs', value: '45,000+' },
      { label: 'Express Delivery', value: '90 Mins' },
      { label: 'Return Rate', value: '0.4%' },
    ],
  },
  {
    id: 'temple-reel',
    title: 'TEMPLE APP — Sacred 4K Darshan & Cultural Heritage',
    category: 'Cultural Finishing',
    duration: '01:30',
    aspect: '16:9 HDR Cinema',
    thumbnailGradient: 'from-[#f59e0b]/30 via-[#18181c] to-[#09090b]',
    tagline: 'Live morning Mangala Alati streams, Vedic Sanskrit audio, and sacred digital seva offerings.',
    description: 'An immersive cinematic capture of Odisha’s 1,000-year-old temples, Puri Jagannath daily rituals, and heritage archival preservation for millions of devotees globally.',
    accent: '#f59e0b',
    stats: [
      { label: 'Live Viewers', value: '120K+' },
      { label: 'Temples Mapped', value: '108+' },
      { label: 'Audio Quality', value: 'Lossless 24-bit' },
    ],
  },
];

export const ShowreelsSection: React.FC = () => {
  const { playSound } = useEcosystem();
  const [activeReel, setActiveReel] = useState<Showreel | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(38);

  const handleOpenModal = (reel: Showreel) => {
    playSound('click');
    setActiveReel(reel);
    setIsPlaying(true);
  };

  const handleCloseModal = () => {
    playSound('click');
    setActiveReel(null);
  };

  return (
    <section id="showreels" className="py-24 relative bg-[#09090b] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ff6b4a]/8 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="hues-eyebrow mb-3">
              <Film className="w-3.5 h-3.5 text-[#ff6b4a]" />
              <span>— CINEMATIC SHOWREELS & TECH REELS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
              Watch The Ecosystem <br className="hidden sm:inline" />
              In <span className="text-[#ff6b4a] italic font-black">Motion.</span>
            </h2>
          </div>
          <p className="text-stone-400 max-w-md text-sm sm:text-base leading-relaxed">
            Experience our flagship platforms in 4K studio fidelity. Real-time interfaces, field deployments, and community impact captured on camera.
          </p>
        </div>

        {/* 3 Widescreen Showreel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {showreelsData.map((reel) => (
            <div
              key={reel.id}
              onClick={() => handleOpenModal(reel)}
              onMouseEnter={() => playSound('hover')}
              className="group cursor-pointer rounded-2xl bg-[#111114] border border-white/10 hover:border-[#ff6b4a]/60 p-5 transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,107,74,0.25)] flex flex-col justify-between"
            >
              <div>
                {/* Widescreen Preview Frame */}
                <div className={`relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br ${reel.thumbnailGradient} border border-white/10 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300 shadow-inner`}>
                  {/* Subtle Grid Overlay */}
                  <div className="absolute inset-0 bg-film-grain opacity-60" />

                  {/* Center Play Button */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-black/70 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-[#ff6b4a] group-hover:border-[#ff6b4a] group-hover:scale-110 transition-all shadow-2xl">
                    <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                  </div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono font-bold uppercase tracking-wider text-white">
                    {reel.category}
                  </div>

                  {/* Bottom Duration Tag */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-stone-300">
                    {reel.duration}
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="mt-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#ff6b4a] font-bold">
                      {reel.aspect}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="mt-1.5 text-lg font-bold text-white group-hover:text-[#ff6b4a] transition-colors leading-snug">
                    {reel.title}
                  </h3>
                  <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                    {reel.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Mini Metrics */}
              <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                {reel.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-xs font-bold text-white">{stat.value}</div>
                    <div className="text-[9px] font-mono uppercase tracking-wider text-stone-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Interactive Video Player Modal (HuesPost Style) */}
      {activeReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl rounded-2xl bg-[#111114] border border-white/20 shadow-2xl overflow-hidden flex flex-col">
            {/* Modal Top Bar */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#18181c]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b4a] animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  {activeReel.title}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-stone-300">
                  {activeReel.aspect}
                </span>
              </div>

              <button
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Stage Simulation */}
            <div className="relative aspect-video w-full bg-[#09090b] flex items-center justify-center overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-tr ${activeReel.thumbnailGradient} opacity-40`} />

              {/* Animated Waveform Visualizer */}
              <div className="relative z-10 flex flex-col items-center text-center p-6 max-w-lg">
                <div className="w-20 h-20 rounded-full bg-[#ff6b4a]/20 border border-[#ff6b4a]/50 flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(255,107,74,0.4)]">
                  <Play className="w-8 h-8 fill-white text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">{activeReel.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-300">{activeReel.description}</p>

                {/* Simulated Audio Bars */}
                <div className="flex items-end gap-1.5 h-8 mt-6">
                  {[40, 75, 55, 90, 30, 85, 60, 95, 45, 70, 100, 65, 80, 50, 90].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: isPlaying ? `${h}%` : '20%' }}
                      className="w-1 bg-[#ff6b4a] rounded-full transition-all duration-300"
                    />
                  ))}
                </div>
              </div>

              {/* Video Player Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-2">
                {/* Scrubbing Bar */}
                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const percent = ((e.clientX - rect.left) / rect.width) * 100;
                    setPlaybackProgress(Math.round(percent));
                  }}
                  className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer overflow-hidden group"
                >
                  <div
                    style={{ width: `${playbackProgress}%` }}
                    className="h-full bg-[#ff6b4a] group-hover:bg-[#ff8a6d] transition-all relative"
                  />
                </div>

                {/* Control Actions */}
                <div className="flex items-center justify-between text-xs text-stone-300">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1 text-white hover:text-[#ff6b4a]"
                    >
                      {isPlaying ? 'PAUSE' : 'PLAY'}
                    </button>
                    <span className="font-mono text-[11px]">00:42 / {activeReel.duration}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1 hover:text-white"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#ff6b4a]" />}
                    </button>
                    <button className="p-1 hover:text-white">
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
