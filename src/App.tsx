import React, { useState, useEffect } from 'react';
import { allStories, getStoryById } from './data';
import { Navbar } from './components/Navbar';
import { StoryCatalog } from './components/StoryCatalog';
import { StoryReader } from './components/StoryReader';
import { HiraganaChartModal } from './components/HiraganaChartModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Current view and selected story based on URL hash
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
  const [isHiraganaChartOpen, setIsHiraganaChartOpen] = useState(false);

  // Completed stories map in LocalStorage
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('nihongo_yomou_completed');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Sync with URL Hash for seamless GitHub Pages routing and back-button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      if (hash && allStories.some((s) => s.id === hash || s.slug === hash)) {
        const found = allStories.find((s) => s.id === hash || s.slug === hash);
        if (found) {
          setSelectedStoryId(found.id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      setSelectedStoryId(null);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Save completed stories to localStorage
  const handleToggleComplete = (storyId: string) => {
    setCompletedMap((prev) => {
      const updated = { ...prev, [storyId]: !prev[storyId] };
      try {
        localStorage.setItem('nihongo_yomou_completed', JSON.stringify(updated));
      } catch (e) {
        console.warn('LocalStorage error:', e);
      }
      return updated;
    });
  };

  // Navigate to story
  const handleSelectStory = (storyId: string) => {
    window.location.hash = `#/story/${storyId}`;
  };

  // Navigate back to catalog
  const handleBackToCatalog = () => {
    window.location.hash = '#';
  };

  // Next / Previous Story Navigation
  const currentStoryIndex = selectedStoryId
    ? allStories.findIndex((s) => s.id === selectedStoryId)
    : -1;

  const handleNavigateStory = (direction: 'prev' | 'next') => {
    if (currentStoryIndex === -1) return;
    const nextIndex =
      direction === 'prev' ? currentStoryIndex - 1 : currentStoryIndex + 1;

    if (nextIndex >= 0 && nextIndex < allStories.length) {
      handleSelectStory(allStories[nextIndex].id);
    }
  };

  const currentStory = selectedStoryId ? getStoryById(selectedStoryId) : null;
  const completedCount = allStories.filter((s) => completedMap[s.id]).length;

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] text-slate-800">
      {/* Top Navbar */}
      <Navbar
        completedCount={completedCount}
        totalCount={allStories.length}
        onOpenHiraganaChart={() => setIsHiraganaChartOpen(true)}
        onGoHome={handleBackToCatalog}
        currentView={currentStory ? 'reader' : 'catalog'}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentStory ? (
          <StoryReader
            story={currentStory}
            isCompleted={Boolean(completedMap[currentStory.id])}
            onToggleComplete={handleToggleComplete}
            onBackToCatalog={handleBackToCatalog}
            onNavigateStory={handleNavigateStory}
            hasPrev={currentStoryIndex > 0}
            hasNext={currentStoryIndex < allStories.length - 1}
          />
        ) : (
          <StoryCatalog
            stories={allStories}
            completedMap={completedMap}
            onSelectStory={handleSelectStory}
          />
        )}
      </main>

      {/* Interactive Hiragana & Katakana Chart Modal */}
      <HiraganaChartModal
        isOpen={isHiraganaChartOpen}
        onClose={() => setIsHiraganaChartOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
