import React from 'react';
import { BookOpen, Award, Grid } from 'lucide-react';

interface Props {
  completedCount: number;
  totalCount: number;
  onOpenHiraganaChart: () => void;
  onGoHome: () => void;
  currentView: 'catalog' | 'reader';
}

export const Navbar: React.FC<Props> = ({
  completedCount,
  totalCount,
  onOpenHiraganaChart,
  onGoHome,
  currentView,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-200/80 bg-white/90 backdrop-blur-md transition-all shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={onGoHome}
          className="flex items-center gap-3 group text-left transition-transform active:scale-95"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sakura-400 to-sakura-500 flex items-center justify-center text-white shadow-md shadow-sakura-200 group-hover:scale-105 transition-transform">
            <span className="text-xl">🌸</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-japanese font-black text-lg text-slate-800 tracking-tight">
                にほんご　よもう！
              </span>
              <span className="rounded-full bg-sakura-100 px-2 py-0.5 text-[10px] font-bold uppercase text-sakura-700 tracking-wide">
                N5 Reading
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
              Japanese Kana Stories for Beginners
            </p>
          </div>
        </button>

        {/* Right Navigation & Tools */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Hiragana Chart Tool */}
          <button
            onClick={onOpenHiraganaChart}
            className="flex items-center gap-1.5 rounded-xl border border-amber-300 bg-amber-50/80 px-3 py-1.5 text-xs font-bold text-amber-900 shadow-sm transition-all hover:bg-amber-100 hover:border-amber-400 active:scale-95"
          >
            <Grid className="h-3.5 w-3.5 text-amber-700" />
            <span className="hidden sm:inline">ひらがな ひょう</span>
            <span className="sm:hidden">Kana</span>
            <span className="rounded bg-amber-200/90 px-1 py-0.2 text-[10px] font-mono">Chart</span>
          </button>

          {/* Catalog shortcut if in reader */}
          {currentView === 'reader' && (
            <button
              onClick={onGoHome}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300 active:scale-95"
            >
              <BookOpen className="h-3.5 w-3.5 text-slate-500" />
              <span>All Stories (20)</span>
            </button>
          )}

          {/* Progress pill */}
          <div className="flex items-center gap-1.5 rounded-xl bg-matcha-100/90 border border-matcha-300 px-3 py-1.5 text-xs font-bold text-matcha-800 shadow-sm">
            <Award className="h-3.5 w-3.5 text-matcha-600" />
            <span>{completedCount} / {totalCount}</span>
            <span className="hidden md:inline text-[10px] font-medium text-matcha-700">Done</span>
          </div>
        </div>
      </div>
    </header>
  );
};
