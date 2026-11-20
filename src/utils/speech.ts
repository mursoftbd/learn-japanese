// Browser Speech Synthesis utility for Japanese pronunciation (ja-JP)

class JapaneseSpeechSynthesizer {
  private synth: SpeechSynthesis | null = null;
  private japaneseVoice: SpeechSynthesisVoice | null = null;
  private isSupported: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.isSupported = true;
      this.initVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Prefer native Japanese voice (Google 日本語, Kyoko, Otoya, Nanami, etc.)
    const jaVoice = voices.find((v) => v.lang === 'ja-JP' || v.lang.startsWith('ja'));
    if (jaVoice) {
      this.japaneseVoice = jaVoice;
    }
  }

  public speak(
    text: string, 
    rate: number = 0.9, 
    onEnd?: () => void,
    onError?: (err: any) => void
  ): boolean {
    if (!this.isSupported || !this.synth) {
      return false;
    }

    try {
      this.stop(); // Stop any currently playing audio

      // Remove spacing (wakachigaki) for natural speech engine flow
      const cleaned = text.replace(/\s+/g, '');

      const utterance = new SpeechSynthesisUtterance(cleaned);
      utterance.lang = 'ja-JP';
      utterance.rate = rate; // Slightly slower for beginners
      utterance.pitch = 1.05; // Friendly and clear

      if (this.japaneseVoice) {
        utterance.voice = this.japaneseVoice;
      }

      utterance.onend = () => {
        if (onEnd) onEnd();
      };

      utterance.onerror = (e) => {
        if (onError) onError(e);
      };

      this.synth.speak(utterance);
      return true;
    } catch (e) {
      console.warn('Speech synthesis error:', e);
      return false;
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  public isAvailable(): boolean {
    return this.isSupported;
  }
}

export const speechSynthesizer = new JapaneseSpeechSynthesizer();
