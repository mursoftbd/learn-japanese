import React from 'react';
import { Story } from '../types/story';
import { Clock, BookOpen, CheckCircle2, ChevronRight } from 'lucide-react';

interface Props {
  story: Story;
  isCompleted: boolean;
  onSelect: (storyId: string) => void;
  indexNumber: number;
}

export const StoryCard: React.FC<Props> = ({
  story,
  isCompleted,
  onSelect,
  indexNumber,
}) => {
  // Theme styling based on category/color
  const getThemeClasses = () => {
    switch (story.coverTheme) {
      case 'sakura':
        return 'border-pink-200 hover:border-pink-300 bg-gradient-to-b from-pink-50/60 to-white';
      case 'matcha':
        return 'border-emerald-200 hover:border-emerald-300 bg-gradient-to-b from-emerald-50/60 to-white';
      case 'fuji':
        return 'border-sky-200 hover:border-sky-300 bg-gradient-to-b from-sky-50/60 to-white';
      case 'yuzu':
        return 'border-amber-200 hover:border-amber-300 bg-gradient-to-b from-amber-50/60 to-white';
      case 'lavender':
        return 'border-purple-200 hover:border-purple-300 bg-gradient-to-b from-purple-50/60 to-white';
      case 'coral':
      default:
        return 'border-orange-200 hover:border-orange-300 bg-gradient-to-b from-orange-50/60 to-white';
    }
  };

  return (
    <div
      onClick={() => onSelect(story.id)}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer ${getThemeClasses()}`}
    >
      {/* Top badges */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/90 text-xs font-bold text-slate-700 shadow-xs border border-slate-200/60">
            #{indexNumber}
          </span>
          <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-slate-600 shadow-xs border border-slate-200/50">
            {story.categoryLabelJa} • {story.categoryLabelEn}
          </span>
        </div>

        {isCompleted ? (
          <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 shadow-xs">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            <span>よんだ</span>
          </span>
        ) : (
          <span className="rounded-full bg-amber-100/80 px-2 py-0.5 text-[11px] font-semibold text-amber-800">
            {story.difficulty}
          </span>
        )}
      </div>

      {/* Main Content */}
      <div className="my-2">
        {/* Cover Emoji icon */}
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100 text-2xl group-hover:scale-110 transition-transform">
            {story.coverEmoji}
          </div>
          <div>
            <h3 className="font-japanese text-xl font-bold text-slate-800 leading-tight group-hover:text-sakura-600 transition-colors">
              {story.title}
            </h3>
            <p className="text-xs font-semibold text-slate-500 italic mt-0.5">
              {story.romajiTitle}
            </p>
          </div>
        </div>

        <p className="text-sm font-semibold text-slate-700 mb-2">
          {story.englishTitle}
        </p>

        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {story.description}
        </p>
      </div>

      {/* Bottom info & Call to action */}
      <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            {story.estimatedMinutes} min
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5 text-slate-400" />
            {story.paragraphs.length} paragraphs
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs font-bold text-sakura-600 group-hover:translate-x-1 transition-transform">
          <span>よむ</span>
          <ChevronRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};
