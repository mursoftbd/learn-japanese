// Web Speech Recognition for Japanese Speaking Practice

export interface SpeechMatchResult {
  transcript: string;
  target: string;
  similarity: number; // 0 to 100
  isMatch: boolean;
}

export class JapaneseSpeechRecognizer {
  private recognition: any = null;
  private isListening: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.lang = 'ja-JP';
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 3;
      }
    }
  }

  public isSupported(): boolean {
    return this.recognition !== null;
  }

  public startListening(
    targetKana: string,
    onResult: (result: SpeechMatchResult) => void,
    onError: (error: string) => void,
    onEnd: () => void
  ): boolean {
    if (!this.recognition) {
      onError('Browser does not support Speech Recognition. Try Chrome or Edge.');
      return false;
    }

    if (this.isListening) {
      this.stop();
    }

    try {
      this.isListening = true;

      this.recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        const similarity = this.calculateSimilarity(transcript, targetKana);
        
        onResult({
          transcript,
          target: targetKana,
          similarity,
          isMatch: similarity >= 65,
        });
      };

      this.recognition.onerror = (event: any) => {
        this.isListening = false;
        onError(event.error || 'Speech recognition error');
      };

      this.recognition.onend = () => {
        this.isListening = false;
        onEnd();
      };

      this.recognition.start();
      return true;
    } catch (e: any) {
      this.isListening = false;
      onError(e.message || 'Could not start microphone');
      return false;
    }
  }

  public stop() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
      this.isListening = false;
    }
  }

  // Levenshtein / character overlap similarity between spoken Kana/Kanji and target Kana
  private calculateSimilarity(str1: string, str2: string): number {
    const clean1 = str1.replace(/[\s、。！？]/g, '');
    const clean2 = str2.replace(/[\s、。！？]/g, '');

    if (!clean1 || !clean2) return 0;
    if (clean1 === clean2) return 100;

    let matches = 0;
    for (let char of clean1) {
      if (clean2.includes(char)) {
        matches++;
      }
    }

    const ratio = (matches * 2) / (clean1.length + clean2.length);
    return Math.min(100, Math.round(ratio * 100));
  }
}

export const speechRecognizer = new JapaneseSpeechRecognizer();
