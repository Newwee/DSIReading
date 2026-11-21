import { useState, useEffect } from 'react';
import { ReadingProgressState, FlaggedItem } from '../types';

const STORAGE_KEY = 'kmutt_dsi_study_progress_v1';
const THEME_KEY = 'kmutt_dsi_theme_mode';

const DEFAULT_STATE: ReadingProgressState = {
  completedTopicIds: [],
  completedSectionIds: [],
  bookmarkedTopicIds: [],
  flaggedItems: [],
  lastReadTopicId: undefined,
  lastReadSectionId: undefined,
  lastReadTimestamp: undefined,
  history: [],
  fontSize: 'base',
  readingWidth: 'standard',
};

export function useStudyState() {
  const [state, setState] = useState<ReadingProgressState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_STATE, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error('Failed to load study state from localStorage', e);
    }
    return DEFAULT_STATE;
  });

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // fallback
    }
    return 'dark'; // Dark theme default for eye comfort
  });

  // Apply theme to document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  // Persist state to localStorage whenever changed
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save study state to localStorage', e);
    }
  }, [state]);

  const toggleBookmark = (topicId: string) => {
    setState(prev => {
      const exists = prev.bookmarkedTopicIds.includes(topicId);
      const updated = exists
        ? prev.bookmarkedTopicIds.filter(id => id !== topicId)
        : [...prev.bookmarkedTopicIds, topicId];
      return { ...prev, bookmarkedTopicIds: updated };
    });
  };

  const toggleCompleted = (topicId: string) => {
    setState(prev => {
      const exists = prev.completedTopicIds.includes(topicId);
      const updated = exists
        ? prev.completedTopicIds.filter(id => id !== topicId)
        : [...prev.completedTopicIds, topicId];
      return { ...prev, completedTopicIds: updated };
    });
  };

  const toggleCompletedSection = (sectionId: string) => {
    setState(prev => {
      const exists = prev.completedSectionIds?.includes(sectionId);
      const list = prev.completedSectionIds || [];
      const updated = exists
        ? list.filter(id => id !== sectionId)
        : [...list, sectionId];
      return { ...prev, completedSectionIds: updated };
    });
  };

  // Flagging items for review (จุดที่ไม่เข้าใจ)
  const toggleFlag = (item: Omit<FlaggedItem, 'timestamp'>) => {
    setState(prev => {
      const exists = prev.flaggedItems?.some(f => f.id === item.id);
      const list = prev.flaggedItems || [];
      const updated = exists
        ? list.filter(f => f.id !== item.id)
        : [{ ...item, timestamp: Date.now() }, ...list];
      return { ...prev, flaggedItems: updated };
    });
  };

  const updateFlagNote = (id: string, note: string) => {
    setState(prev => {
      const list = prev.flaggedItems || [];
      const updated = list.map(f => (f.id === id ? { ...f, note } : f));
      return { ...prev, flaggedItems: updated };
    });
  };

  const removeFlag = (id: string) => {
    setState(prev => ({
      ...prev,
      flaggedItems: (prev.flaggedItems || []).filter(f => f.id !== id),
    }));
  };

  const recordTopicVisit = (topicId: string, sectionId?: string, scrollPercentage?: number) => {
    setState(prev => {
      const filteredHistory = (prev.history || []).filter(h => h.topicId !== topicId);
      const newEntry = {
        topicId,
        sectionId,
        timestamp: Date.now(),
        scrollPercentage: scrollPercentage ?? 0,
      };
      return {
        ...prev,
        lastReadTopicId: topicId,
        lastReadSectionId: sectionId || prev.lastReadSectionId,
        lastReadTimestamp: Date.now(),
        history: [newEntry, ...filteredHistory].slice(0, 30),
      };
    });
  };

  const setFontSize = (size: 'sm' | 'base' | 'lg' | 'xl') => {
    setState(prev => ({ ...prev, fontSize: size }));
  };

  const setReadingWidth = (width: 'compact' | 'standard' | 'wide') => {
    setState(prev => ({ ...prev, readingWidth: width }));
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const resetAllProgress = () => {
    if (window.confirm('คุณต้องการรีเซ็ตประวัติการอ่านและสถานะทั้งหมดใช่หรือไม่?')) {
      setState(DEFAULT_STATE);
    }
  };

  return {
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
    isBookmarked: (id: string) => state.bookmarkedTopicIds.includes(id),
    isCompleted: (id: string) => state.completedTopicIds.includes(id),
    isSectionCompleted: (id: string) => (state.completedSectionIds || []).includes(id),
    isFlagged: (id: string) => (state.flaggedItems || []).some(f => f.id === id),
    getFlagNote: (id: string) => (state.flaggedItems || []).find(f => f.id === id)?.note || '',
  };
}
