'use client';

import React, { useState } from 'react';
import { useEcosystem } from '@/lib/store';
import { ArrowRight, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { playSound } = useEcosystem();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    platform: 'ATMA Mobility',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSound('click');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#09090b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          {/* Left Panel: Vibrant Solid Coral Orange (HuesPost Signature) */}
          <div className="lg:col-span-5 bg-[#ff6b4a] text-white p-8 sm:p-12 md:p-16 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-mono font-bold uppercase tracking-widest mb-6">
                <span>— CONNECT WITH THE STUDIO</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.1]">
                Let’s Build <br />
                The Next <br />
                <span className="italic underline decoration-white/40">Benchmark.</span>
              </h2>

              <p className="mt-6 text-sm sm:text-base text-white/90 leading-relaxed font-medium">
                Whether you want to partner with the ATMA mobility network, integrate genuine auto spares into Mahalaxmi, or support stray rescue & temple digitization — we’d love to collaborate.
              </p>
            </div>

            {/* Studio Info Details */}
            <div className="mt-12 pt-8 border-t border-white/20 flex flex-col gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-mono">studio@odianxt.com</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-mono">+91 (0674) 259-8800</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Patia Tech Corridor, Bhubaneswar, Odisha</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Sleek Dark Obsidian Form (HuesPost Signature) */}
          <div className="lg:col-span-7 bg-[#111114] p-8 sm:p-12 md:p-16 flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#ff6b4a]/20 border border-[#ff6b4a] text-[#ff6b4a] flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(255,107,74,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Inquiry Received!</h3>
                <p className="mt-2 text-sm text-stone-400 max-w-md mx-auto">
                  Thank you for reaching out to OdiaNXT Studio. Our engineering & product team will get in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-stone-400 mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sambit Mohapatra"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#18181c] border border-white/10 text-white text-sm placeholder-stone-400 focus:outline-none focus:border-[#ff6b4a] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-stone-400 mb-2">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sambit@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#18181c] border border-white/10 text-white text-sm placeholder-stone-400 focus:outline-none focus:border-[#ff6b4a] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-stone-400 mb-2">
                      PHONE NUMBER (OPTIONAL)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#18181c] border border-white/10 text-white text-sm placeholder-stone-400 focus:outline-none focus:border-[#ff6b4a] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-stone-400 mb-2">
                    SELECT ECOSYSTEM PLATFORM
                  </label>
                  <select
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#18181c] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff6b4a] transition-all"
                  >
                    <option value="ATMA Mobility" className="bg-[#111114]">ATMA — Urban Mobility & Route Intelligence</option>
                    <option value="MAHALAXMI Spares" className="bg-[#111114]">MAHALAXMI — Genuine Spares & Fitment</option>
                    <option value="PET APP Welfare" className="bg-[#111114]">PET APP — Companion Animal Welfare & SOS</option>
                    <option value="TEMPLE APP Heritage" className="bg-[#111114]">TEMPLE APP — Sacred Heritage & Darshan</option>
                    <option value="OdiaNXT Core" className="bg-[#111114]">OdiaNXT Core Studio Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-stone-400 mb-2">
                    YOUR PROJECT / MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your requirements, partnership proposal, or district integration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#18181c] border border-white/10 text-white text-sm placeholder-stone-400 focus:outline-none focus:border-[#ff6b4a] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => playSound('hover')}
                  className="mt-2 hues-btn-primary w-full py-4 text-xs font-bold uppercase tracking-[0.2em] cursor-pointer"
                >
                  <span>SUBMIT STUDIO INQUIRY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
