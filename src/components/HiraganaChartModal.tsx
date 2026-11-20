import React, { useState } from 'react';
import { X, Volume2 } from 'lucide-react';
import { speechSynthesizer } from '../utils/speech';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface KanaItem {
  kana: string;
  katakana: string;
  romaji: string;
}

const KANA_TABLE: (KanaItem | null)[][] = [
  // Vowels
  [
    { kana: 'あ', katakana: 'ア', romaji: 'a' },
    { kana: 'い', katakana: 'イ', romaji: 'i' },
    { kana: 'う', katakana: 'ウ', romaji: 'u' },
    { kana: 'え', katakana: 'エ', romaji: 'e' },
    { kana: 'お', katakana: 'オ', romaji: 'o' },
  ],
  // K-row
  [
    { kana: 'か', katakana: 'カ', romaji: 'ka' },
    { kana: 'き', katakana: 'キ', romaji: 'ki' },
    { kana: 'く', katakana: 'ク', romaji: 'ku' },
    { kana: 'け', katakana: 'ケ', romaji: 'ke' },
    { kana: 'こ', katakana: 'コ', romaji: 'ko' },
  ],
  // S-row
  [
    { kana: 'さ', katakana: 'サ', romaji: 'sa' },
    { kana: 'し', katakana: 'シ', romaji: 'shi' },
    { kana: 'す', katakana: 'ス', romaji: 'su' },
    { kana: 'せ', katakana: 'セ', romaji: 'se' },
    { kana: 'そ', katakana: 'ソ', romaji: 'so' },
  ],
  // T-row
  [
    { kana: 'た', katakana: 'タ', romaji: 'ta' },
    { kana: 'ち', katakana: 'チ', romaji: 'chi' },
    { kana: 'つ', katakana: 'ツ', romaji: 'tsu' },
    { kana: 'て', katakana: 'テ', romaji: 'te' },
    { kana: 'と', katakana: 'ト', romaji: 'to' },
  ],
  // N-row
  [
    { kana: 'な', katakana: 'ナ', romaji: 'na' },
    { kana: 'に', katakana: 'ニ', romaji: 'ni' },
    { kana: 'ぬ', katakana: 'ヌ', romaji: 'nu' },
    { kana: 'ね', katakana: 'ネ', romaji: 'ne' },
    { kana: 'の', katakana: 'ノ', romaji: 'no' },
  ],
  // H-row
  [
    { kana: 'は', katakana: 'ハ', romaji: 'ha' },
    { kana: 'ひ', katakana: 'ヒ', romaji: 'hi' },
    { kana: 'ふ', katakana: 'フ', romaji: 'fu' },
    { kana: 'へ', katakana: 'ヘ', romaji: 'he' },
    { kana: 'ほ', katakana: 'ホ', romaji: 'ho' },
  ],
  // M-row
  [
    { kana: 'ま', katakana: 'マ', romaji: 'ma' },
    { kana: 'み', katakana: 'ミ', romaji: 'mi' },
    { kana: 'む', katakana: 'ム', romaji: 'mu' },
    { kana: 'め', katakana: 'メ', romaji: 'me' },
    { kana: 'も', katakana: 'モ', romaji: 'mo' },
  ],
  // Y-row
  [
    { kana: 'や', katakana: 'ヤ', romaji: 'ya' },
    null,
    { kana: 'ゆ', katakana: 'ユ', romaji: 'yu' },
    null,
    { kana: 'よ', katakana: 'ヨ', romaji: 'yo' },
  ],
  // R-row
  [
    { kana: 'ら', katakana: 'ラ', romaji: 'ra' },
    { kana: 'り', katakana: 'リ', romaji: 'ri' },
    { kana: 'る', katakana: 'ル', romaji: 'ru' },
    { kana: 'れ', katakana: 'レ', romaji: 're' },
    { kana: 'ろ', katakana: 'ロ', romaji: 'ro' },
  ],
  // W / N row
  [
    { kana: 'わ', katakana: 'ワ', romaji: 'wa' },
    null,
    null,
    null,
    { kana: 'を', katakana: 'ヲ', romaji: 'wo' },
  ],
  [
    { kana: 'ん', katakana: 'ン', romaji: 'n' },
    null,
    null,
    null,
    null,
  ],
];

export const HiraganaChartModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'hiragana' | 'katakana'>('hiragana');

  if (!isOpen) return null;

  const handleSpeak = (char: string) => {
    speechSynthesizer.speak(char, 0.9);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl flex flex-col border border-amber-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-100 p-5 bg-amber-50/70">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌸</span>
            <div>
              <h2 className="font-japanese text-lg font-bold text-slate-800">
                かな ひょう (Kana Reference Chart)
              </h2>
              <p className="text-xs text-slate-500">
                Tap any character to listen to clear pronunciation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-400 hover:text-slate-600 shadow-sm border border-slate-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex p-3 bg-amber-50/30 border-b border-amber-100 justify-center gap-3">
          <button
            onClick={() => setActiveTab('hiragana')}
            className={`rounded-xl px-5 py-2 text-xs font-bold transition-all ${
              activeTab === 'hiragana'
                ? 'bg-sakura-500 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            ひらがな (Hiragana)
          </button>
          <button
            onClick={() => setActiveTab('katakana')}
            className={`rounded-xl px-5 py-2 text-xs font-bold transition-all ${
              activeTab === 'katakana'
                ? 'bg-fuji-500 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            カタカナ (Katakana)
          </button>
        </div>

        {/* Grid Body */}
        <div className="flex-1 overflow-y-auto p-5">
          <div className="space-y-2">
            {KANA_TABLE.map((row, rIdx) => (
              <div key={rIdx} className="grid grid-cols-5 gap-2">
                {row.map((item, cIdx) => {
                  if (!item) {
                    return (
                      <div
                        key={cIdx}
                        className="h-16 rounded-xl bg-slate-50/50 border border-dashed border-slate-200/50"
                      />
                    );
                  }

                  const displayChar = activeTab === 'hiragana' ? item.kana : item.katakana;

                  return (
                    <button
                      key={cIdx}
                      onClick={() => handleSpeak(displayChar)}
                      className="group relative flex h-16 flex-col items-center justify-center rounded-xl border border-amber-200/80 bg-white p-1 text-center shadow-xs transition-all hover:-translate-y-0.5 hover:border-sakura-400 hover:bg-sakura-50/40 active:scale-95"
                    >
                      <span className="font-japanese text-xl font-bold text-slate-800 group-hover:text-sakura-600 transition-colors">
                        {displayChar}
                      </span>
                      <span className="text-[11px] font-mono font-medium text-slate-500">
                        {item.romaji}
                      </span>
                      <Volume2 className="absolute top-1.5 right-1.5 h-3 w-3 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-sakura-500 transition-opacity" />
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="border-t border-amber-100 bg-amber-50/50 p-3 text-center text-xs text-slate-600">
          💡 Tip: Click any box to hear the native pronunciation aloud!
        </div>
      </div>
    </div>
  );
};
