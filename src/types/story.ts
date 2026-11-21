export interface VocabWord {
  word: string;
  romaji: string;
  meaning: string;
  type?: 'noun' | 'verb' | 'adjective' | 'particle' | 'greeting' | 'counter';
}

export interface SentenceItem {
  id: string;
  japanese: string;       // Spaced Hiragana and Katakana (NO Kanji, N5 level)
  romaji: string;         // English phonetic pronunciation
  english: string;        // English translation
  vocabHighlight?: VocabWord[];
}

export interface StoryImage {
  src?: string;           // Path to actual image (e.g. images/stories/story-01/scene-1.jpeg)
  altJa: string;
  altEn: string;
  svgTheme?: 'forest' | 'home' | 'river' | 'city' | 'school' | 'kitchen' | 'park' | 'beach' | 'mountain' | 'night' | 'market';
}

export interface StoryParagraph {
  id: string;
  paragraphNumber: number;
  image: StoryImage;
  sentences: SentenceItem[];
}

export type StoryCategory = 
  | 'folktale' 
  | 'animals' 
  | 'daily-life' 
  | 'adventure' 
  | 'school' 
  | 'food' 
  | 'fantasy';

export interface Story {
  id: string;
  slug: string;
  title: string;          // In Kana, e.g. "ももたろう"
  romajiTitle: string;    // e.g. "Momotarou"
  englishTitle: string;   // e.g. "Peach Boy"
  category: StoryCategory;
  categoryLabelJa: string;
  categoryLabelEn: string;
  difficulty: 'N5 Kana' | 'N5 Easy' | 'N5 Standard';
  charCount: number;
  estimatedMinutes: number;
  description: string;
  coverEmoji: string;
  coverTheme: 'sakura' | 'matcha' | 'yuzu' | 'fuji' | 'lavender' | 'coral';
  paragraphs: StoryParagraph[];
}

export interface ReadingPreferences {
  showAllRomaji: boolean;
  showAllEnglish: boolean;
  fontSize: 'normal' | 'large' | 'xlarge';
  fontFamily: 'rounded' | 'kosugi' | 'system';
  speechRate: number;      // 0.7 to 1.3
  practiceMode: boolean;   // Micro-speaking practice mode
}

export interface StoryProgress {
  [storyId: string]: {
    completed: boolean;
    lastReadSentenceId?: string;
    completedAt?: string;
    bookmarked: boolean;
  };
}
