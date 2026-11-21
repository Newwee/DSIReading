import React, { useState, useEffect, useRef } from 'react';
import { useStudyState } from './hooks/useStudyState';
import { Header, NavTab } from './components/Header';
import { AppleTabBar } from './components/AppleTabBar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { SlidesViewerModal } from './components/SlidesViewerModal';
import { BackgroundEffects } from './components/ui/BackgroundEffects';

import { HomeView } from './views/HomeView';
import { StudyLibraryView } from './views/StudyLibraryView';
import { ReadingPageView } from './views/ReadingPageView';
import { ExamPrepView } from './views/ExamPrepView';
import { CheatSheetView } from './views/CheatSheetView';
import { FlaggedReviewView } from './views/FlaggedReviewView';
import { SitGuideView } from './views/SitGuideView';
import { BookmarksHistoryView } from './views/BookmarksHistoryView';

import { CategoryId, ProgramId } from './types';
import { STUDY_TOPICS } from './data/studyContent';
import { getProgramTopics, getProgramQuestions } from './data/programs';

const getInitialProgram = (): ProgramId => {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname.toUpperCase();
    if (path.includes('/IT')) return 'IT';
    if (path.includes('/CS')) return 'CS';
  }
  return 'DSI';
};

export function App() {
  const [activeProgram, setActiveProgram] = useState<ProgramId>(getInitialProgram);
  const currentTopics = getProgramTopics(activeProgram);
  const currentQuestions = getProgramQuestions(activeProgram);

  const {
    state,
    theme,
    toggleTheme,
    toggleBookmark,
    toggleCompleted,
    toggleCompletedSection,
    toggleFlag,
    updateFlagNote,
    removeFlag,
    recordTopicVisit,
    setFontSize,
    setReadingWidth,
    resetAllProgress,
    isBookmarked,
    isCompleted,
    isSectionCompleted,
    isFlagged,
    getFlagNote,
  } = useStudyState();

  const [currentTab, setCurrentTab] = useState<NavTab>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toUpperCase();
      if (path.includes('/IT') || path.includes('/CS')) return 'reading';
    }
    return 'home';
  });

  const [selectedTopicId, setSelectedTopicId] = useState<string>(() => {
    const prog = getInitialProgram();
    const topics = getProgramTopics(prog);
    return state.lastReadTopicId && topics.some(t => t.id === state.lastReadTopicId)
      ? state.lastReadTopicId
      : (topics[0]?.id || '');
  });

  const [libraryCategoryFilter, setLibraryCategoryFilter] = useState<CategoryId | 'all'>('all');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSlidesModalOpen, setIsSlidesModalOpen] = useState(false);
  const [moreSheetOpen, setMoreSheetOpen] = useState(false);
  const [isZenMode, setIsZenMode] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  // Sync state when browser back/forward buttons are clicked
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toUpperCase();
      let prog: ProgramId = 'DSI';
      if (path.includes('/IT')) prog = 'IT';
      else if (path.includes('/CS')) prog = 'CS';

      setActiveProgram(prog);
      const progTopics = getProgramTopics(prog);
      if (progTopics.length > 0) {
        setSelectedTopicId(progTopics[0].id);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Program selection handler
  const handleSelectProgram = (program: ProgramId, targetTab: NavTab = 'reading') => {
    setActiveProgram(program);
    const targetUrl = program === 'DSI' ? '/' : `/${program}`;
    if (window.location.pathname.toUpperCase() !== targetUrl.toUpperCase()) {
      window.history.pushState(null, '', targetUrl);
    }
    const progTopics = getProgramTopics(program);
    if (progTopics.length > 0) {
      setSelectedTopicId(progTopics[0].id);
    }
    setCurrentTab(targetTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Auto-hide navigation on mobile scroll down, reveal on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollYRef.current;

      if (currentScrollY < 60) {
        setIsNavVisible(true);
      } else if (diff > 45) {
        setIsNavVisible(false);
      } else if (diff < -15) {
        setIsNavVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showNav = isNavVisible && !isZenMode;

  const handleOpenTopic = (topicId: string, sectionId?: string) => {
    setSelectedTopicId(topicId);
    setCurrentTab('reading');
    setIsNavVisible(true);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const topOffset = el.getBoundingClientRect().top + window.scrollY - 85;
          window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectTab = (tab: NavTab) => {
    setIsZenMode(false);
    setIsNavVisible(true);
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col relative transition-colors duration-200">
      <BackgroundEffects />

      {/* Global Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenSearch={() => setIsSearchOpen(true)}
        bookmarkedCount={state.bookmarkedTopicIds.length}
        flaggedCount={state.flaggedItems?.length || 0}
        visible={showNav}
        activeProgram={activeProgram}
        onSelectProgram={handleSelectProgram}
        questionCount={currentQuestions.length}
      />

      {/* Views Container */}
      <div className="flex-1 relative z-10 pb-24 lg:pb-8">
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onOpenTopic={handleOpenTopic}
            onSelectCategoryFilter={cat => {
              setLibraryCategoryFilter(cat);
              setCurrentTab('library');
            }}
            completedIds={state.completedTopicIds}
            bookmarkedIds={state.bookmarkedTopicIds}
            flaggedCount={state.flaggedItems?.length || 0}
            lastReadTopicId={state.lastReadTopicId}
            onOpenSlidesModal={() => setIsSlidesModalOpen(true)}
            activeProgram={activeProgram}
            onSelectProgram={handleSelectProgram}
            topics={currentTopics}
            questionsCount={currentQuestions.length}
          />
        )}

        {currentTab === 'library' && (
          <StudyLibraryView
            onOpenTopic={handleOpenTopic}
            selectedCategory={libraryCategoryFilter}
            onSelectCategory={setLibraryCategoryFilter}
            isBookmarked={isBookmarked}
            isCompleted={isCompleted}
            isFlagged={isFlagged}
            onToggleBookmark={toggleBookmark}
            topics={currentTopics}
            activeProgram={activeProgram}
          />
        )}

        {currentTab === 'reading' && (
          <ReadingPageView
            currentTopicId={selectedTopicId}
            onSelectTopic={handleOpenTopic}
            isBookmarked={isBookmarked}
            isCompleted={isCompleted}
            isSectionCompleted={isSectionCompleted}
            isFlagged={isFlagged}
            getFlagNote={getFlagNote}
            onToggleBookmark={toggleBookmark}
            onToggleCompleted={toggleCompleted}
            onToggleCompletedSection={toggleCompletedSection}
            onSaveFlag={toggleFlag}
            onRemoveFlag={removeFlag}
            onRecordVisit={recordTopicVisit}
            fontSize={state.fontSize}
            onChangeFontSize={setFontSize}
            readingWidth={state.readingWidth}
            onChangeReadingWidth={setReadingWidth}
            isZenMode={isZenMode}
            onToggleZenMode={() => setIsZenMode(prev => !prev)}
            topics={currentTopics}
            activeProgram={activeProgram}
          />
        )}

        {currentTab === 'exam' && (
          <ExamPrepView
            onSelectTab={handleSelectTab}
            isFlagged={isFlagged}
            getFlagNote={getFlagNote}
            onSaveFlag={toggleFlag}
            onRemoveFlag={removeFlag}
            questions={currentQuestions}
            activeProgram={activeProgram}
          />
        )}

        {currentTab === 'cheatsheet' && (
          <CheatSheetView />
        )}

        {currentTab === 'flagged' && (
          <FlaggedReviewView
            flaggedItems={state.flaggedItems || []}
            onOpenTopic={handleOpenTopic}
            onSelectTab={handleSelectTab}
            onSaveFlag={toggleFlag}
            onRemoveFlag={removeFlag}
          />
        )}

        {currentTab === 'sit-guide' && (
          <SitGuideView
            onOpenSlidesModal={() => setIsSlidesModalOpen(true)}
            onOpenTopic={handleOpenTopic}
            currentProgram={activeProgram}
            onSelectProgram={p => handleSelectProgram(p, 'reading')}
          />
        )}

        {currentTab === 'bookmarks' && (
          <BookmarksHistoryView
            bookmarkedIds={state.bookmarkedTopicIds}
            completedIds={state.completedTopicIds}
            history={state.history}
            onOpenTopic={handleOpenTopic}
            onToggleBookmark={toggleBookmark}
            onResetProgress={resetAllProgress}
          />
        )}
      </div>

      {/* Global Footer */}
      {!isZenMode && <Footer onSelectTab={handleSelectTab} />}

      {/* Apple-style Bottom Mobile Tab Bar */}
      <AppleTabBar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        bookmarkedCount={state.bookmarkedTopicIds.length}
        flaggedCount={state.flaggedItems?.length || 0}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenSearch={() => setIsSearchOpen(true)}
        moreSheetOpen={moreSheetOpen}
        onToggleMoreSheet={() => setMoreSheetOpen(prev => !prev)}
        visible={showNav}
      />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTopic={handleOpenTopic}
      />

      {/* Presentation Slides Viewer Modal */}
      <SlidesViewerModal
        isOpen={isSlidesModalOpen}
        onClose={() => setIsSlidesModalOpen(false)}
      />
    </div>
  );
}

export default App;
