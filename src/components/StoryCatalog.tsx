import React, { useState } from 'react';
import { Story, StoryCategory } from '../types/story';
import { CATEGORIES } from '../data';
import { StoryCard } from './StoryCard';
import { Search, Sparkles, BookMarked, Layers } from 'lucide-react';

interface Props {
  stories: Story[];
  completedMap: Record<string, boolean>;
  onSelectStory: (storyId: string) => void;
}

export const StoryCatalog: React.FC<Props> = ({
  stories,
  completedMap,
  onSelectStory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<StoryCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter stories based on category and search
  const filteredStories = stories.filter((story) => {
    const matchesCategory = selectedCategory === 'all' || story.category === selectedCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();

    return (
      story.title.toLowerCase().includes(q) ||
      story.romajiTitle.toLowerCase().includes(q) ||
      story.englishTitle.toLowerCase().includes(q) ||
      story.description.toLowerCase().includes(q)
    );
  });

  const completedCount = stories.filter((s) => completedMap[s.id]).length;
  const progressPercent = Math.round((completedCount / stories.length) * 100);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sakura-500 via-sakura-400 to-rose-400 p-6 sm:p-8 text-white shadow-xl mb-8">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold backdrop-blur-sm mb-3">
            <Sparkles className="h-3.5 w-3.5 text-yellow-200" />
            <span>JLPT N5 • ひらがな と カタカナ の どっかい</span>
          </div>

          <h1 className="font-japanese text-2xl sm:text-4xl font-black tracking-tight leading-snug sm:leading-tight mb-2">
            たのしく よもう！ にほんご の おはなし ２０
          </h1>
          <p className="text-white/95 text-sm sm:text-base font-medium leading-relaxed">
            20 graded Japanese reading stories crafted strictly with beginner Hiragana & Katakana (no Kanji!) and JLPT N5 vocabulary. Tap any sentence to reveal Romaji pronunciation and English meaning.
          </p>

          {/* Progress overview */}
          <div className="mt-5 rounded-2xl bg-white/15 p-3.5 backdrop-blur-md max-w-md border border-white/20">
            <div className="flex items-center justify-between text-xs font-bold mb-1.5">
              <span className="flex items-center gap-1.5">
                <BookMarked className="h-4 w-4 text-yellow-200" />
                Reading Progress
              </span>
              <span>{completedCount} / {stories.length} Stories Done ({progressPercent}%)</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-black/20">
              <div
                className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-amber-300 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Decorative background shapes */}
        <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-8xl opacity-20 select-none hidden md:block">
          🌸
        </div>
      </div>

      {/* Search and Category Filters */}
      <div className="space-y-4 mb-8">
        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search stories by title, Romaji, English or keyword (e.g., ももたろう, cat, train, sakura)..."
            className="w-full rounded-2xl border-2 border-amber-200/80 bg-white pl-12 pr-4 py-3.5 text-sm font-medium text-slate-800 placeholder-slate-400 shadow-sm focus:border-sakura-400 focus:outline-none focus:ring-4 focus:ring-sakura-100 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full h-5 w-5 flex items-center justify-center"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const count = cat.id === 'all' 
              ? stories.length 
              : stories.filter((s) => s.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all shadow-xs active:scale-95 ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white border border-amber-200/80 text-slate-700 hover:bg-amber-50 hover:border-amber-300'
                }`}
              >
                <span>{cat.icon}</span>
                <span className="font-japanese">{cat.labelJa}</span>
                <span className="text-[11px] font-normal opacity-75">({cat.labelEn})</span>
                <span className={`ml-1 rounded-full px-1.5 py-0.2 text-[10px] ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Story Index Grid */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
          <Layers className="h-4 w-4 text-sakura-500" />
          <span>Showing {filteredStories.length} of {stories.length} Stories</span>
        </div>
      </div>

      {filteredStories.length === 0 ? (
        <div className="rounded-3xl border-2 border-dashed border-slate-200 bg-white/60 p-12 text-center">
          <p className="text-4xl mb-3">🔍</p>
          <h3 className="font-bold text-slate-800 text-lg mb-1">No stories found</h3>
          <p className="text-xs text-slate-500 mb-4">Try searching for a different keyword or reset filters.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="rounded-xl bg-sakura-500 px-4 py-2 text-xs font-bold text-white shadow hover:bg-sakura-600 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredStories.map((story) => {
            const originalIndex = stories.findIndex((s) => s.id === story.id) + 1;
            return (
              <StoryCard
                key={story.id}
                story={story}
                indexNumber={originalIndex}
                isCompleted={Boolean(completedMap[story.id])}
                onSelect={onSelectStory}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
