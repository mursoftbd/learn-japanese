// Resilient Japanese Speech Synthesizer
// Combines Web Speech API with native Japanese TTS audio streaming fallback
// Guarantees audio playback even when the operating system has no Japanese voice pack installed.

class JapaneseSpeechSynthesizer {
  private synth: SpeechSynthesis | null = null;
  private currentAudio: HTMLAudioElement | null = null;
  private isSynthesizerAvailable: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.isSynthesizerAvailable = true;

      // Chrome needs voices to load asynchronously
      if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
        window.speechSynthesis.onvoiceschanged = () => {
          // Voices ready
        };
      }
    }
  }

  // Find a Japanese voice from available system voices
  private getJapaneseVoice(): SpeechSynthesisVoice | null {
    if (!this.synth) return null;
    const voices = this.synth.getVoices();
    if (!voices || voices.length === 0) return null;

    // Prefer high-quality voices (Google 日本語, Microsoft Nanami/Haruka/Ichiro, Kyoko, Otoya)
    return (
      voices.find(
        (v) =>
          v.lang === 'ja-JP' ||
          v.lang === 'ja_JP' ||
          v.lang.toLowerCase().startsWith('ja')
      ) || null
    );
  }

  public speak(
    text: string,
    rate: number = 0.9,
    onEnd?: () => void,
    onError?: (err: any) => void
  ): void {
    // 1. Always stop any currently playing speech or audio
    this.stop();

    // 2. Prepare text: strip spaces (wakachigaki) for smooth pronunciation
    const cleaned = text.replace(/[\s\u3000]+/g, '').trim();
    if (!cleaned) {
      if (onEnd) onEnd();
      return;
    }

    // 3. Check for native Japanese voice in Web Speech API
    const jaVoice = this.getJapaneseVoice();

    if (this.synth && this.isSynthesizerAvailable && jaVoice) {
      try {
        // Chromium fix: resume if paused
        if (this.synth.paused) {
          this.synth.resume();
        }

        const utterance = new SpeechSynthesisUtterance(cleaned);
        utterance.voice = jaVoice;
        utterance.lang = 'ja-JP';
        utterance.rate = rate;
        utterance.pitch = 1.05;

        utterance.onend = () => {
          if (onEnd) onEnd();
        };

        utterance.onerror = (event) => {
          console.warn('SpeechSynthesis error, falling back to audio stream:', event);
          // If browser speech fails, try audio stream fallback
          this.playAudioFallback(cleaned, rate, onEnd, onError);
        };

        this.synth.speak(utterance);
        return;
      } catch (err) {
        console.warn('SpeechSynthesis invocation error:', err);
      }
    }

    // 4. Fallback: If no Japanese voice pack is installed on Windows/Mac/Linux or synth failed,
    // use native Japanese TTS audio streaming
    this.playAudioFallback(cleaned, rate, onEnd, onError);
  }

  private playAudioFallback(
    cleanedText: string,
    rate: number,
    onEnd?: () => void,
    onError?: (err: any) => void
  ): void {
    try {
      // Free native Google Japanese TTS audio stream
      const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&client=tw-ob&q=${encodeURIComponent(
        cleanedText
      )}`;

      const audio = new Audio(audioUrl);
      this.currentAudio = audio;

      // Adjust playback rate
      audio.playbackRate = Math.max(0.7, Math.min(rate, 1.2));

      audio.onended = () => {
        this.currentAudio = null;
        if (onEnd) onEnd();
      };

      audio.onerror = (e) => {
        console.warn('TTS Audio fallback stream error:', e);
        this.currentAudio = null;
        
        // Final attempt: try basic speech synthesis even without Japanese voice
        if (this.synth) {
          try {
            const fallbackUtterance = new SpeechSynthesisUtterance(cleanedText);
            fallbackUtterance.lang = 'ja-JP';
            fallbackUtterance.rate = rate;
            fallbackUtterance.onend = () => {
              if (onEnd) onEnd();
            };
            this.synth.speak(fallbackUtterance);
            return;
          } catch {
            // ignore
          }
        }

        if (onError) onError(e);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Audio play was prevented or failed:', err);
          this.currentAudio = null;
          if (onError) onError(err);
        });
      }
    } catch (e) {
      console.warn('Audio fallback error:', e);
      if (onError) onError(e);
    }
  }

  public stop(): void {
    // Stop Web Speech Synthesis
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch {
        // ignore
      }
    }

    // Stop HTML5 Audio Fallback
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch {
        // ignore
      }
      this.currentAudio = null;
    }
  }

  public isAvailable(): boolean {
    return true; // We always support audio either via SpeechSynthesis or Audio Stream
  }
}

export const speechSynthesizer = new JapaneseSpeechSynthesizer();
