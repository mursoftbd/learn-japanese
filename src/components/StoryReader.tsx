import React, { useState } from 'react';
import { Story, SentenceItem } from '../types/story';
import { StoryIllustration } from './StoryIllustration';
import { speechSynthesizer } from '../utils/speech';
import { speechRecognizer, SpeechMatchResult } from '../utils/speechRecognition';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  Volume2,
  VolumeX,
  Languages,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Mic,
  Sparkles,
  Type,
  Gauge,
  ChevronLeft,
  ChevronRight,
  BookA,
} from 'lucide-react';

interface Props {
  story: Story;
  isCompleted: boolean;
  onToggleComplete: (storyId: string) => void;
  onBackToCatalog: () => void;
  onNavigateStory?: (direction: 'prev' | 'next') => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const StoryReader: React.FC<Props> = ({
  story,
  isCompleted,
  onToggleComplete,
  onBackToCatalog,
  onNavigateStory,
  hasPrev,
  hasNext,
}) => {
  // Global reading preferences
  const [showAllRomaji, setShowAllRomaji] = useState(false);
  const [showAllEnglish, setShowAllEnglish] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('large');
  const [audioSpeed, setAudioSpeed] = useState<number>(0.9);
  const [practiceMode, setPracticeMode] = useState<boolean>(false);

  // Per-sentence dropdown states (stored as sets of sentence IDs)
  const [openRomajiIds, setOpenRomajiIds] = useState<Set<string>>(new Set());
  const [openEnglishIds, setOpenEnglishIds] = useState<Set<string>>(new Set());
  const [openVocabIds, setOpenVocabIds] = useState<Set<string>>(new Set());

  // Audio playing sentence tracking
  const [playingSentenceId, setPlayingSentenceId] = useState<string | null>(null);

  // Microphone practice state
  const [activeMicSentenceId, setActiveMicSentenceId] = useState<string | null>(null);
  const [speechResultMap, setSpeechResultMap] = useState<Record<string, SpeechMatchResult>>({});
  const [micError, setMicError] = useState<string | null>(null);

  // Toggle Romaji for a single sentence
  const toggleSentenceRomaji = (id: string) => {
    setOpenRomajiIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Toggle English for a single sentence
  const toggleSentenceEnglish = (id: string) => {
    setOpenEnglishIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Toggle Vocabulary for a single sentence
  const toggleSentenceVocab = (id: string) => {
    setOpenVocabIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Play audio via Web Speech API
  const handlePlayAudio = (sentence: SentenceItem) => {
    if (playingSentenceId === sentence.id) {
      speechSynthesizer.stop();
      setPlayingSentenceId(null);
      return;
    }

    setPlayingSentenceId(sentence.id);
    speechSynthesizer.speak(
      sentence.japanese,
      audioSpeed,
      () => setPlayingSentenceId(null),
      () => setPlayingSentenceId(null)
    );
  };

  // Handle Speech Recognition Mic Practice
  const handleToggleMic = (sentence: SentenceItem) => {
    if (activeMicSentenceId === sentence.id) {
      speechRecognizer.stop();
      setActiveMicSentenceId(null);
      return;
    }

    setMicError(null);
    setActiveMicSentenceId(sentence.id);

    const started = speechRecognizer.startListening(
      sentence.japanese,
      (result) => {
        setSpeechResultMap((prev) => ({ ...prev, [sentence.id]: result }));
        setActiveMicSentenceId(null);
        if (result.isMatch) {
          confetti({
            particleCount: 35,
            spread: 50,
            origin: { y: 0.7 },
          });
        }
      },
      (err) => {
        setMicError(`Mic Error: ${err}`);
        setActiveMicSentenceId(null);
      },
      () => {
        setActiveMicSentenceId(null);
      }
    );

    if (!started) {
      setActiveMicSentenceId(null);
    }
  };

  // Handle Celebration Confetti on completion
  const handleCompleteStory = () => {
    onToggleComplete(story.id);
    if (!isCompleted) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  // Font size classes
  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'xlarge':
        return 'text-2xl sm:text-3xl leading-loose';
      case 'large':
        return 'text-xl sm:text-2xl leading-relaxed';
      case 'normal':
      default:
        return 'text-lg sm:text-xl leading-normal';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-20">
      {/* Top Navigation & Breadcrumbs */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBackToCatalog}
          className="inline-flex items-center gap-2 rounded-xl border border-amber-200/90 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm transition-all hover:bg-amber-50 hover:border-amber-300 active:scale-95"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>もどる (All Stories)</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-sakura-100 px-3 py-1 text-xs font-bold text-sakura-800">
            {story.categoryLabelJa}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {story.difficulty}
          </span>
        </div>
      </div>

      {/* Story Heading Header */}
      <div className="rounded-3xl border-2 border-amber-200/80 bg-gradient-to-b from-amber-50/70 via-white to-white p-6 sm:p-8 shadow-sm mb-6 text-center">
        <div className="inline-block text-4xl sm:text-5xl mb-2 animate-bounce">
          {story.coverEmoji}
        </div>
        <h1 className="font-japanese text-3xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight mb-2">
          {story.title}
        </h1>
        <p className="text-base sm:text-lg font-semibold text-slate-500 italic mb-1">
          {story.romajiTitle}
        </p>
        <p className="text-sm sm:text-base font-bold text-sakura-600">
          {story.englishTitle}
        </p>
      </div>

      {/* Reader Control Toolbar */}
      <div className="sticky top-18 z-30 mb-8 rounded-2xl border border-amber-200/90 bg-white/95 p-3.5 shadow-md backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Global Toggles */}
          <div className="flex items-center gap-2">
            {/* Romaji Global Toggle */}
            <button
              onClick={() => setShowAllRomaji(!showAllRomaji)}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all shadow-xs ${
                showAllRomaji
                  ? 'bg-indigo-600 text-white'
                  : 'bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100'
              }`}
            >
              <BookA className="h-3.5 w-3.5" />
              <span>{showAllRomaji ? 'Romaji ON' : 'Romaji OFF'}</span>
            </button>

            {/* English Global Toggle */}
            <button
              onClick={() => setShowAllEnglish(!showAllEnglish)}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all shadow-xs ${
                showAllEnglish
                  ? 'bg-teal-600 text-white'
                  : 'bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-100'
              }`}
            >
              <Languages className="h-3.5 w-3.5" />
              <span>{showAllEnglish ? 'English ON' : 'English OFF'}</span>
            </button>

            {/* Speaking Practice Mic Feature Toggle */}
            <button
              onClick={() => setPracticeMode(!practiceMode)}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all shadow-xs ${
                practiceMode
                  ? 'bg-rose-600 text-white'
                  : 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100'
              }`}
            >
              <Mic className="h-3.5 w-3.5" />
              <span>{practiceMode ? 'Speaking Mode' : 'Mic Practice'}</span>
            </button>
          </div>

          {/* Right Controls: Font Size and Audio Rate */}
          <div className="flex items-center gap-3">
            {/* Audio Speed Selector */}
            <div className="flex items-center gap-1 text-xs font-bold text-slate-600 bg-slate-50 px-2 py-1 rounded-lg border border-slate-200">
              <Gauge className="h-3.5 w-3.5 text-slate-400" />
              <button
                onClick={() => setAudioSpeed(0.8)}
                className={`px-1.5 py-0.5 rounded ${audioSpeed === 0.8 ? 'bg-amber-300 text-slate-900 font-black' : 'text-slate-500'}`}
              >
                0.8x
              </button>
              <button
                onClick={() => setAudioSpeed(1.0)}
                className={`px-1.5 py-0.5 rounded ${audioSpeed === 1.0 ? 'bg-amber-300 text-slate-900 font-black' : 'text-slate-500'}`}
              >
                1.0x
              </button>
            </div>

            {/* Font Size Selector */}
            <div className="flex items-center gap-1 text-xs font-bold text-slate-600 bg-slate-50 px-2 py-1 rounded-lg border border-slate-200">
              <Type className="h-3.5 w-3.5 text-slate-400" />
              <button
                onClick={() => setFontSize('normal')}
                className={`px-1.5 py-0.5 rounded ${fontSize === 'normal' ? 'bg-amber-300 text-slate-900 font-black' : 'text-slate-500'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-1.5 py-0.5 rounded ${fontSize === 'large' ? 'bg-amber-300 text-slate-900 font-black' : 'text-slate-500'}`}
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-1.5 py-0.5 rounded ${fontSize === 'xlarge' ? 'bg-amber-300 text-slate-900 font-black' : 'text-slate-500'}`}
              >
                A++
              </button>
            </div>
          </div>
        </div>

        {/* Practice Mode Guide Banner */}
        {practiceMode && (
          <div className="mt-3 rounded-xl bg-rose-50 border border-rose-200 p-2.5 text-xs text-rose-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mic className="h-4 w-4 text-rose-600 animate-pulse" />
              <span>
                <strong>Speaking Practice Active:</strong> Tap the microphone icon beside any sentence to pronounce it aloud. Our speech engine compares your pronunciation with natural Japanese!
              </span>
            </div>
            {micError && <span className="text-red-600 font-semibold">{micError}</span>}
          </div>
        )}
      </div>

      {/* Story Paragraphs & Sentences */}
      <div className="space-y-12">
        {story.paragraphs.map((paragraph, pIdx) => (
          <section
            key={paragraph.id}
            className="rounded-3xl border-2 border-amber-200/60 bg-white p-5 sm:p-7 shadow-sm transition-all"
          >
            {/* Paragraph Visual Header */}
            <div className="mb-6">
              <StoryIllustration
                image={paragraph.image}
                storyTitle={story.title}
                paragraphIndex={pIdx}
              />
            </div>

            {/* Sentences in this Paragraph */}
            <div className="space-y-4">
              {paragraph.sentences.map((sentence) => {
                const isRomajiOpen = showAllRomaji || openRomajiIds.has(sentence.id);
                const isEnglishOpen = showAllEnglish || openEnglishIds.has(sentence.id);
                const isVocabOpen = openVocabIds.has(sentence.id);
                const isPlaying = playingSentenceId === sentence.id;
                const isRecording = activeMicSentenceId === sentence.id;
                const speechResult = speechResultMap[sentence.id];

                return (
                  <div
                    key={sentence.id}
                    className="group rounded-2xl border border-slate-200/80 bg-amber-50/20 p-4 transition-all duration-200 hover:border-amber-300 hover:bg-amber-50/50"
                  >
                    {/* Sentence Line with Audio & Mic Controls */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      {/* Japanese Text */}
                      <div className="flex-1">
                        <p
                          className={`font-japanese font-medium text-slate-800 select-text ${getFontSizeClass()}`}
                          style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
                        >
                          {sentence.japanese}
                        </p>
                      </div>

                      {/* Action Buttons for Sentence */}
                      <div className="flex items-center gap-1.5 shrink-0 pt-1">
                        {/* Audio Play Button */}
                        <button
                          onClick={() => handlePlayAudio(sentence)}
                          title="Listen to Japanese pronunciation"
                          className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all active:scale-90 ${
                            isPlaying
                              ? 'bg-sakura-500 text-white border-sakura-600 ring-2 ring-sakura-300 animate-pulse'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-sakura-50 hover:text-sakura-600 hover:border-sakura-300'
                          }`}
                        >
                          {isPlaying ? (
                            <VolumeX className="h-4 w-4" />
                          ) : (
                            <Volume2 className="h-4 w-4" />
                          )}
                        </button>

                        {/* Speaking Practice Mic Button */}
                        {practiceMode && (
                          <button
                            onClick={() => handleToggleMic(sentence)}
                            title="Practice speaking this sentence"
                            className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all active:scale-90 ${
                              isRecording
                                ? 'bg-red-500 text-white border-red-600 ring-2 ring-red-300 animate-bounce'
                                : 'bg-white text-rose-600 border-rose-200 hover:bg-rose-50'
                            }`}
                          >
                            <Mic className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Speaking Accuracy Feedback if tested */}
                    {speechResult && (
                      <div className={`mt-2 mb-3 rounded-xl p-2.5 text-xs flex items-center justify-between ${
                        speechResult.isMatch
                          ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                          : 'bg-amber-50 border border-amber-200 text-amber-900'
                      }`}>
                        <div>
                          <p className="font-bold">
                            {speechResult.isMatch ? '🎉 すばらしい！ Great Job!' : '💪 もういちど！ Try again!'}
                          </p>
                          <p className="text-[11px] opacity-80">
                            Heard: "{speechResult.transcript}" ({speechResult.similarity}% match)
                          </p>
                        </div>
                        <span className="rounded-full bg-white px-2.5 py-1 font-bold text-xs shadow-xs">
                          {speechResult.similarity}%
                        </span>
                      </div>
                    )}

                    {/* Dropdown Toggle Buttons */}
                    <div className="flex flex-wrap items-center gap-2 mt-3 pt-2 border-t border-slate-200/50">
                      {/* Romaji Dropdown Button */}
                      <button
                        onClick={() => toggleSentenceRomaji(sentence.id)}
                        className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                          isRomajiOpen
                            ? 'bg-indigo-100 text-indigo-800'
                            : 'bg-white text-slate-600 border border-slate-200/70 hover:bg-slate-100'
                        }`}
                      >
                        <BookA className="h-3 w-3 text-indigo-600" />
                        <span>Romaji (English Pronunciation)</span>
                        {isRomajiOpen ? (
                          <ChevronUp className="h-3 w-3" />
                        ) : (
                          <ChevronDown className="h-3 w-3" />
                        )}
                      </button>

                      {/* English Meaning Dropdown Button */}
                      <button
                        onClick={() => toggleSentenceEnglish(sentence.id)}
                        className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                          isEnglishOpen
                            ? 'bg-teal-100 text-teal-800'
                            : 'bg-white text-slate-600 border border-slate-200/70 hover:bg-slate-100'
                        }`}
                      >
                        <Languages className="h-3 w-3 text-teal-600" />
                        <span>English Meaning</span>
                        {isEnglishOpen ? (
                          <ChevronUp className="h-3 w-3" />
                        ) : (
                          <ChevronDown className="h-3 w-3" />
                        )}
                      </button>

                      {/* Vocabulary Breakdown Button if available */}
                      {sentence.vocabHighlight && sentence.vocabHighlight.length > 0 && (
                        <button
                          onClick={() => toggleSentenceVocab(sentence.id)}
                          className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                            isVocabOpen
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-white text-slate-600 border border-slate-200/70 hover:bg-slate-100'
                          }`}
                        >
                          <Sparkles className="h-3 w-3 text-amber-600" />
                          <span>Vocab ({sentence.vocabHighlight.length})</span>
                          {isVocabOpen ? (
                            <ChevronUp className="h-3 w-3" />
                          ) : (
                            <ChevronDown className="h-3 w-3" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Expandable Romaji Content */}
                    {isRomajiOpen && (
                      <div className="mt-2.5 rounded-xl bg-indigo-50/70 p-3 text-xs sm:text-sm font-mono text-indigo-950 border border-indigo-100 transition-all">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500 block mb-0.5">
                          Romaji Pronunciation:
                        </span>
                        {sentence.romaji}
                      </div>
                    )}

                    {/* Expandable English Meaning Content */}
                    {isEnglishOpen && (
                      <div className="mt-2 rounded-xl bg-teal-50/70 p-3 text-xs sm:text-sm font-medium text-teal-950 border border-teal-100 transition-all">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 block mb-0.5">
                          English Translation:
                        </span>
                        {sentence.english}
                      </div>
                    )}

                    {/* Expandable Vocabulary Chips */}
                    {isVocabOpen && sentence.vocabHighlight && (
                      <div className="mt-2 rounded-xl bg-amber-50/90 p-3 border border-amber-200/70 transition-all">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block mb-2">
                          Key JLPT N5 Words:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {sentence.vocabHighlight.map((v, vIdx) => (
                            <div
                              key={vIdx}
                              className="rounded-lg bg-white px-2.5 py-1 text-xs shadow-xs border border-amber-200"
                            >
                              <span className="font-japanese font-bold text-slate-800 mr-1.5">
                                {v.word}
                              </span>
                              <span className="text-[11px] text-slate-500 italic mr-1.5">
                                ({v.romaji})
                              </span>
                              <span className="text-slate-700 font-medium">
                                : {v.meaning}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Story Bottom Bar with Complete and Navigation */}
      <div className="mt-12 rounded-3xl border-2 border-amber-200/80 bg-white p-6 shadow-md text-center">
        <h3 className="font-japanese text-xl font-bold text-slate-800 mb-1">
          {isCompleted ? 'よくできました！ (Well Done!)' : 'おはなし を よみおわりましたか？'}
        </h3>
        <p className="text-xs text-slate-500 mb-5">
          Mark this story as completed to keep track of your reading progress!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Previous Story */}
          {hasPrev && onNavigateStory && (
            <button
              onClick={() => onNavigateStory('prev')}
              className="inline-flex items-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>まえのおはなし (Previous)</span>
            </button>
          )}

          {/* Mark Complete Button with Confetti */}
          <button
            onClick={handleCompleteStory}
            className={`inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-bold shadow-md transition-all active:scale-95 ${
              isCompleted
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-200'
                : 'bg-gradient-to-r from-sakura-500 to-rose-500 text-white hover:from-sakura-600 hover:to-rose-600 shadow-sakura-200'
            }`}
          >
            <CheckCircle className="h-4 w-4" />
            <span>{isCompleted ? 'Completed! (よみおわった)' : 'Finish Story & Celebrate! 🎉'}</span>
          </button>

          {/* Next Story */}
          {hasNext && onNavigateStory && (
            <button
              onClick={() => onNavigateStory('next')}
              className="inline-flex items-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 active:scale-95"
            >
              <span>つぎのおはなし (Next)</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
