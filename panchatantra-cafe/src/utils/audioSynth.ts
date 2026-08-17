// Web Audio API based ambient cafe/vinyl hiss generator for immersive atmosphere

class CafeAudioPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private noiseNode: AudioNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private gainNode: GainNode | null = null;
  private intervalId: number | null = null;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start() {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      this.ctx = new AudioContextClass();
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      // Generate brown/pink vinyl ambient crackle
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Soft brown noise filter
        output[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = output[i];
        // Add occasional vinyl clicks
        if (Math.random() < 0.0008) {
          output[i] += (Math.random() - 0.5) * 0.4;
        }
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Filter to create warm cozy low-end coffeehouse warmth
      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = 'lowpass';
      this.filterNode.frequency.setValueAtTime(650, this.ctx.currentTime);

      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.06, this.ctx.currentTime);

      whiteNoise.connect(this.filterNode);
      this.filterNode.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      whiteNoise.start();
      this.noiseNode = whiteNoise;
      this.isPlaying = true;

      // Play soft warm pentatonic Rhodes ambient chime every 4 seconds
      this.playGentleChime();
      this.intervalId = window.setInterval(() => {
        if (this.isPlaying) {
          this.playGentleChime();
        }
      }, 5500);

    } catch (e) {
      console.warn('Audio context init issue:', e);
      this.isPlaying = false;
    }
  }

  private playGentleChime() {
    if (!this.ctx || !this.isPlaying) return;
    try {
      const frequencies = [220, 261.63, 293.66, 329.63, 392.0, 440]; // A minor pentatonic cozy chord
      const freq = frequencies[Math.floor(Math.random() * frequencies.length)];
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(900, this.ctx.currentTime);

      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.025, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 3.5);
    } catch {
      // safe fallback
    }
  }

  public stop() {
    try {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      if (this.gainNode && this.ctx) {
        this.gainNode.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      }
      if (this.ctx) {
        this.ctx.close();
      }
    } catch {
      // safe cleanup
    }
    this.isPlaying = false;
    this.ctx = null;
  }
}

export const cafeAudio = new CafeAudioPlayer();
