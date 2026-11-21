export type CategoryId = 
  | 'network-storage'
  | 'programming-algo'
  | 'cybersecurity-cloud'
  | 'digital-literacy'
  | 'problem-solving'
  | 'sit-recruitment';

export interface CategoryInfo {
  id: CategoryId;
  nameTh: string;
  nameEn: string;
  iconName: string;
  description: string;
  color: string;
  gradient: string;
  topicsCount?: number;
}

export interface ContentCallout {
  type: 'note' | 'tip' | 'warning' | 'exam' | 'concept';
  title: string;
  content: string;
}

export interface ContentTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface ContentCodeSnippet {
  language: string;
  title?: string;
  code: string;
}

export interface ContentSection {
  id: string;
  title: string;
  content: string;
  keyTakeaways?: string[];
  callouts?: ContentCallout[];
  tables?: ContentTable[];
  codeSnippets?: ContentCodeSnippet[];
  diagram?: string;
}

export interface ImportantTerm {
  term: string;
  definition: string;
  category?: string;
}

export interface FormulaItem {
  name: string;
  formula: string;
  explanation: string;
  example?: string;
}

export interface ExamTrapItem {
  trap: string;
  whyWrong: string;
  correctUnderstanding: string;
}

export interface StudyTopic {
  id: string;
  lessonNumber: number;
  title: string;
  category: CategoryId;
  description: string;
  tags: string[];
  readingTime: number; // in minutes
  badge?: string;
  sourceDocCitation?: string;
  sections: ContentSection[];
  summary?: string;
  keyPoints?: string[];
  importantTerms?: ImportantTerm[];
  formulas?: FormulaItem[];
  examTraps?: ExamTrapItem[];
}

export interface FlaggedItem {
  id: string; // unique identifier
  type: 'section' | 'question' | 'topic';
  topicId?: string;
  topicTitle?: string;
  sectionId?: string;
  sectionTitle?: string;
  questionId?: number;
  questionText?: string;
  note?: string;
  timestamp: number;
}

export interface ReadingProgressState {
  completedTopicIds: string[];
  completedSectionIds: string[];
  bookmarkedTopicIds: string[];
  flaggedItems: FlaggedItem[];
  lastReadTopicId?: string;
  lastReadSectionId?: string;
  lastReadTimestamp?: number;
  history: {
    topicId: string;
    sectionId?: string;
    timestamp: number;
    scrollPercentage?: number;
  }[];
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  readingWidth: 'compact' | 'standard' | 'wide';
}

export interface PracticeQuestion {
  id: number;
  source: 'docx_official' | 'mock_exam' | 'sit_challenge' | 'docx_4pillars' | 'binary_basics';
  category: CategoryId;
  question: string;
  options: { label: string; text: string }[];
  correctAnswer: string; // 'ก' | 'ข' | 'ค' | 'ง' or 'A' | 'B' | 'C' | 'D'
  explanation: string;
  keyConcept: string;
  difficulty: 'easy' | 'medium' | 'hard';
}
