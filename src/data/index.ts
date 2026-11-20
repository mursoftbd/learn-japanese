import { Story, StoryCategory } from '../types/story';
import { storiesGroup1 } from './storiesGroup1';
import { storiesGroup2 } from './storiesGroup2';
import { storiesGroup3 } from './storiesGroup3';
import { storiesGroup4 } from './storiesGroup4';

export const allStories: Story[] = [
  ...storiesGroup1,
  ...storiesGroup2,
  ...storiesGroup3,
  ...storiesGroup4,
];

export interface CategoryInfo {
  id: StoryCategory | 'all';
  labelJa: string;
  labelEn: string;
  icon: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: 'all', labelJa: 'すべて', labelEn: 'All Stories', icon: '📚' },
  { id: 'folktale', labelJa: 'むかしばなし', labelEn: 'Folktales', icon: '🍑' },
  { id: 'animals', labelJa: 'どうぶつ', labelEn: 'Cute Animals', icon: '🐾' },
  { id: 'daily-life', labelJa: 'にちじょう', labelEn: 'Daily Life', icon: '🏡' },
  { id: 'school', labelJa: 'がっこう', labelEn: 'School Life', icon: '🎒' },
  { id: 'food', labelJa: 'たべもの', labelEn: 'Food & Cooking', icon: '🍙' },
  { id: 'adventure', labelJa: 'ぼうけん', labelEn: 'Adventures', icon: '🚀' },
  { id: 'fantasy', labelJa: 'ファンタジー', labelEn: 'Fantasy', icon: '✨' },
];

export function getStoryById(id: string): Story | undefined {
  return allStories.find((story) => story.id === id);
}

export function getStoryBySlug(slug: string): Story | undefined {
  return allStories.find((story) => story.slug === slug);
}

export function searchStories(query: string, category: StoryCategory | 'all' = 'all'): Story[] {
  const normalized = query.trim().toLowerCase();
  
  return allStories.filter((story) => {
    const matchesCategory = category === 'all' || story.category === category;
    if (!matchesCategory) return false;

    if (!normalized) return true;

    return (
      story.title.toLowerCase().includes(normalized) ||
      story.romajiTitle.toLowerCase().includes(normalized) ||
      story.englishTitle.toLowerCase().includes(normalized) ||
      story.description.toLowerCase().includes(normalized) ||
      story.paragraphs.some((p) =>
        p.sentences.some(
          (s) =>
            s.japanese.includes(query) ||
            s.romaji.toLowerCase().includes(normalized) ||
            s.english.toLowerCase().includes(normalized)
        )
      )
    );
  });
}
