import React from 'react';
import { BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-amber-200/80 bg-white/70 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Col 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌸</span>
              <span className="font-japanese font-black text-slate-800 text-lg">
                にほんご よもう！
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Designed specifically for JLPT N5 beginners and children starting their Japanese journey. Featuring 20 engaging graded stories in pure Hiragana and Katakana with zero Kanji, natural word-spacing, Romaji phonetics, and English meanings.
            </p>
          </div>

          {/* Col 2: N5 Beginner Tips */}
          <div>
            <h4 className="font-bold text-slate-800 text-sm mb-3 flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-sakura-500" />
              <span>N5 Reading Tips</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-sakura-500 font-bold">•</span>
                <span><strong>Wakachigaki:</strong> Words are separated with gentle spaces to make identifying particles (は, が, を, に, で) simple.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sakura-500 font-bold">•</span>
                <span><strong>Audio Practice:</strong> Tap the speaker button to hear native Japanese pronunciation for every single sentence.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sakura-500 font-bold">•</span>
                <span><strong>Dual Dropdowns:</strong> Check Romaji only when stuck, then verify the meaning in English!</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200/60 pt-6 text-center sm:text-left text-xs text-slate-500">
          <p>
            © 2026 にほんご よもう！ (Nihongo Yomou). Crafted with ❤️ for Japanese learners.
          </p>
        </div>
      </div>
    </footer>
  );
};
