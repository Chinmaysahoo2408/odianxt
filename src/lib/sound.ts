'use client';

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true; // Default OFF as per requirement

  private initCtx() {
    if (typeof window === 'undefined') return;
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.ctx = new AudioCtxClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (!muted) {
      this.initCtx();
      this.playClick();
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public toggleMute(): boolean {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  // Crisp futuristic UI click
  public playClick() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04);
      
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch {
      // AudioContext policy safe catch
    }
  }

  // Soft hover shimmer
  public playHover() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(680, this.ctx.currentTime + 0.06);
      
      gain.gain.setValueAtTime(0.025, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.06);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {
      // Safe catch
    }
  }

  // ATMA - Cybernetic radar pulse
  public playAtma() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(880, this.ctx.currentTime + 0.12);
      osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.25);
      
      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch {}
  }

  // MAHALAXMI - Mechanical gear harmonic sweep / engine rev
  public playMahalaxmi() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc1.type = 'sawtooth';
      osc2.type = 'triangle';
      
      osc1.frequency.setValueAtTime(110, this.ctx.currentTime);
      osc1.frequency.linearRampToValueAtTime(220, this.ctx.currentTime + 0.2);
      osc1.frequency.linearRampToValueAtTime(140, this.ctx.currentTime + 0.4);

      osc2.frequency.setValueAtTime(165, this.ctx.currentTime);
      osc2.frequency.linearRampToValueAtTime(330, this.ctx.currentTime + 0.2);
      osc2.frequency.linearRampToValueAtTime(210, this.ctx.currentTime + 0.4);
      
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
      
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc1.start();
      osc2.start();
      osc1.stop(this.ctx.currentTime + 0.4);
      osc2.stop(this.ctx.currentTime + 0.4);
    } catch {}
  }

  // PET APP - Warm cheerful ascending chime
  public playPet() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.05);
        
        gain.gain.setValueAtTime(0.03, this.ctx.currentTime + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + idx * 0.05 + 0.15);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(this.ctx.currentTime + idx * 0.05);
        osc.stop(this.ctx.currentTime + idx * 0.05 + 0.15);
      });
    } catch {}
  }

  // TEMPLE APP - Resonant bronze bell tone with rich overtones (Ghanta sound)
  public playTemple() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      
      // Harmonics for a bronze bell: fundamental + partials
      const partials = [
        { f: 587.33, g: 0.07, d: 1.2 },  // D5 fundamental
        { f: 1174.66, g: 0.04, d: 0.8 }, // 2nd harmonic
        { f: 1761.99, g: 0.03, d: 0.6 }, // 3rd harmonic
        { f: 2349.32, g: 0.015, d: 0.4 }, // shimmer
      ];
      
      partials.forEach(p => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(p.f, this.ctx.currentTime);
        
        gain.gain.setValueAtTime(p.g, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.00001, this.ctx.currentTime + p.d);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start();
        osc.stop(this.ctx.currentTime + p.d);
      });
    } catch {}
  }

  // IRAYA - Elegant silk and emerald shimmer chime
  public playIraya() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 luxury chord
      notes.forEach((f, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, this.ctx.currentTime + idx * 0.04);
        gain.gain.setValueAtTime(0.04, this.ctx.currentTime + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + idx * 0.04 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.04);
        osc.stop(this.ctx.currentTime + idx * 0.04 + 0.35);
      });
    } catch {}
  }

  // Cosmic Ecosystem warp chord
  public playEcosystemPulse() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const freqs = [220, 277.18, 329.63, 440, 554.37];
      freqs.forEach((f, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.03);
        gain.gain.setValueAtTime(0.035, this.ctx.currentTime + i * 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + i * 0.03 + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + i * 0.03);
        osc.stop(this.ctx.currentTime + i * 0.03 + 0.4);
      });
    } catch {}
  }
}

export const sound = new SoundEngine();
