import React from 'react';
import { Sparkles, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-amber-200/80 bg-white/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Col 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌸</span>
              <span className="font-japanese font-black text-slate-800 text-lg">
                にほんご よもう！
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Designed specifically for JLPT N5 beginners and children starting their Japanese journey. Featuring 20 engaging graded stories in pure Hiragana and Katakana with zero Kanji, natural word-spacing, Romaji phonetics, and English meanings.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>Ready for GitHub Pages Deployment</span>
            </div>
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

          {/* Col 3: Modular Architecture & Roadmap */}
          <div>
            <h4 className="font-bold text-slate-800 text-sm mb-3 flex items-center gap-1.5">
              <Layers className="h-4 w-4 text-sakura-500" />
              <span>Modular Roadmap</span>
            </h4>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="rounded-xl bg-amber-50/80 p-2.5 border border-amber-200/70">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 mb-0.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Phase 1 (Current):</span>
                </div>
                <span>20 Full Stories, Sentence Dropdowns, Audio TTS, Catalog Indexing, GitHub Pages readiness.</span>
              </div>
              <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-200">
                <div className="flex items-center gap-1.5 font-bold text-slate-700 mb-0.5">
                  <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                  <span>Phase 2 (Ready/Future):</span>
                </div>
                <span>Microphone Speaking Practice evaluation, AI Image integration, and interactive N5 Quizzes.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} にほんご よもう！ (Nihongo Yomou). Crafted with ❤️ for Japanese learners.
          </p>
          <div className="flex items-center gap-4">
            <span className="rounded-md bg-amber-100/80 px-2 py-0.5 text-[11px] font-mono text-amber-900 font-bold">
              Base: ./ (GitHub Pages Safe)
            </span>
            <span className="text-slate-400">|</span>
            <span>20 Stories • N5 Graded</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
