import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  CheckCircle2, 
  Check, 
  Copy, 
  Type, 
  Maximize2, 
  Minimize2, 
  ListOrdered, 
  BookOpen, 
  Clock, 
  Tag, 
  Sparkles, 
  AlertCircle, 
  Lightbulb, 
  Flame, 
  HelpCircle,
  Flag,
  Share2,
  ArrowUp,
  X
} from 'lucide-react';
import { StudyTopic, CategoryId, FlaggedItem } from '../types';
import { CATEGORIES, STUDY_TOPICS, getTopicById } from '../data/studyContent';
import { FlagModal } from '../components/FlagModal';
import { MarkdownRenderer } from '../components/ui/MarkdownRenderer';

interface ReadingPageViewProps {
  currentTopicId?: string;
  onSelectTopic: (topicId: string, sectionId?: string) => void;
  isBookmarked: (id: string) => boolean;
  isCompleted: (id: string) => boolean;
  isSectionCompleted: (id: string) => boolean;
  isFlagged: (id: string) => boolean;
  getFlagNote: (id: string) => string;
  onToggleBookmark: (id: string) => void;
  onToggleCompleted: (id: string) => void;
  onToggleCompletedSection: (id: string) => void;
  onSaveFlag: (item: Omit<FlaggedItem, 'timestamp'>) => void;
  onRemoveFlag: (id: string) => void;
  onRecordVisit: (topicId: string, sectionId?: string, scrollPercentage?: number) => void;
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  onChangeFontSize: (size: 'sm' | 'base' | 'lg' | 'xl') => void;
  readingWidth: 'compact' | 'standard' | 'wide';
  onChangeReadingWidth: (width: 'compact' | 'standard' | 'wide') => void;
  isZenMode?: boolean;
  onToggleZenMode?: () => void;
}

export const ReadingPageView: React.FC<ReadingPageViewProps> = ({
  currentTopicId,
  onSelectTopic,
  isBookmarked,
  isCompleted,
  isSectionCompleted,
  isFlagged,
  getFlagNote,
  onToggleBookmark,
  onToggleCompleted,
  onToggleCompletedSection,
  onSaveFlag,
  onRemoveFlag,
  onRecordVisit,
  fontSize,
  onChangeFontSize,
  readingWidth,
  onChangeReadingWidth,
  isZenMode = false,
  onToggleZenMode,
}) => {
  const activeTopic: StudyTopic = (currentTopicId && getTopicById(currentTopicId)) || STUDY_TOPICS[0];

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightTocOpen, setRightTocOpen] = useState(false);
  const [copiedSectionId, setCopiedSectionId] = useState<string | null>(null);

  // Flag Modal state
  const [flagModalTarget, setFlagModalTarget] = useState<{
    id: string;
    type: 'section' | 'question' | 'topic';
    topicId?: string;
    topicTitle?: string;
    sectionId?: string;
    sectionTitle?: string;
    questionId?: number;
    questionText?: string;
    existingNote?: string;
    isFlagged: boolean;
  } | null>(null);

  // Record visit
  useEffect(() => {
    if (activeTopic) {
      onRecordVisit(activeTopic.id, activeSectionId, scrollProgress);
    }
  }, [activeTopic?.id]);

  // Track scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)));
        setScrollProgress(currentProgress);
      }

      if (activeTopic?.sections) {
        for (let i = activeTopic.sections.length - 1; i >= 0; i--) {
          const section = activeTopic.sections[i];
          const el = document.getElementById(section.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 180) {
              setActiveSectionId(section.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTopic]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
      setActiveSectionId(sectionId);
      setRightTocOpen(false);
    }
  };

  const handleCopySection = (sectionTitle: string, content: string, secId: string) => {
    const textToCopy = `${sectionTitle}\n\n${content}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedSectionId(secId);
    setTimeout(() => setCopiedSectionId(null), 2000);
  };

  const currentIndex = STUDY_TOPICS.findIndex(t => t.id === activeTopic.id);
  const prevTopic = currentIndex > 0 ? STUDY_TOPICS[currentIndex - 1] : null;
  const nextTopic = currentIndex < STUDY_TOPICS.length - 1 ? STUDY_TOPICS[currentIndex + 1] : null;

  const widthClasses = {
    compact: 'max-w-2xl',
    standard: 'max-w-3xl',
    wide: 'max-w-4xl',
  }[readingWidth];

  const fontClasses = {
    sm: 'reading-font-sm',
    base: 'reading-font-base',
    lg: 'reading-font-lg',
    xl: 'reading-font-xl',
  }[fontSize];

  const bookmarked = isBookmarked(activeTopic.id);
  const completed = isCompleted(activeTopic.id);
  const currentCategory = CATEGORIES.find(c => c.id === activeTopic.category);

  return (
    <div className={`relative min-h-screen ${isZenMode ? 'zen-reading-mode' : ''}`}>
      {/* Top Fixed Reading Progress Indicator */}
      <div 
        className="fixed left-0 w-full h-[3px] bg-[var(--border-color)] z-30 transition-all duration-300"
        style={{ top: isZenMode ? '0px' : 'calc(4rem + env(safe-area-inset-top, 0px))' }}
      >
        <div
          className="h-full bg-gradient-to-r from-[#FF6B00] via-[#35D5F2] to-[#53DBAB] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Sub-Header Floating Controls */}
      {!isZenMode && (
        <div className="lg:hidden sticky top-16 z-20 glass-panel px-4 py-2.5 flex items-center justify-between border-b border-[var(--border-color)]">
          <button
            onClick={() => setLeftSidebarOpen(true)}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-[var(--bg-elevated)] text-[var(--text-primary)] min-h-[38px]"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>บทที่ ({activeTopic.lessonNumber}/{STUDY_TOPICS.length})</span>
          </button>

          <span className="text-xs font-mono text-[#FF6B00] font-bold">
            {scrollProgress}%
          </span>

          <button
            onClick={() => setRightTocOpen(true)}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-[var(--bg-elevated)] text-[var(--text-primary)] min-h-[38px]"
          >
            <ListOrdered className="w-3.5 h-3.5 text-[#35D5F2]" />
            <span>สารบัญหัวข้อ</span>
          </button>
        </div>
      )}

      {/* Main Container */}
      <div 
        className={`max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 ${isZenMode ? 'py-8 sm:py-12' : 'py-6'}`}
        style={{
          paddingLeft: 'max(1rem, env(safe-area-inset-left, 0px))',
          paddingRight: 'max(1rem, env(safe-area-inset-right, 0px))',
        }}
      >
        <div className={`grid grid-cols-1 ${isZenMode ? '' : 'lg:grid-cols-12'} gap-8 items-start`}>
          
          {/* Left Sidebar: Lesson Selector (Desktop) */}
          {!isZenMode && (
            <aside className="hidden lg:block lg:col-span-3 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2 space-y-4 scrollbar-thin">
              <div className="p-4 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    สารบัญบทเรียน
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#FF6B00]/15 font-bold text-[#FF8A33]">
                    {STUDY_TOPICS.length} บท
                  </span>
                </div>

                <div className="space-y-1.5">
                  {STUDY_TOPICS.map(topic => {
                    const isCurrent = topic.id === activeTopic.id;
                    const isDone = isCompleted(topic.id);
                    return (
                      <button
                        key={topic.id}
                        onClick={() => onSelectTopic(topic.id)}
                        className={`w-full p-2.5 rounded-2xl text-left text-xs transition-all flex items-start gap-2.5 ${
                          isCurrent
                            ? 'bg-[#FF6B00]/15 text-[#FF8A33] font-bold border border-[#FF6B00]/30 shadow-sm'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {isDone ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <span className="w-3.5 h-3.5 rounded-full border border-[var(--text-muted)] flex items-center justify-center text-[9px] font-mono">
                              {topic.lessonNumber}
                            </span>
                          )}
                        </div>
                        <span className="line-clamp-2 leading-relaxed">
                          {topic.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>
          )}

          {/* Center Column: Main Content */}
          <main className={`${isZenMode ? 'w-full' : 'lg:col-span-6 xl:col-span-6'} mx-auto ${widthClasses} space-y-8`}>
            
            {/* Topic Header Card */}
            <header className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FF6B00]/15 text-[#FF8A33] border border-[#FF6B00]/25">
                    {currentCategory?.nameTh || 'บทเรียน'}
                  </span>
                  {activeTopic.badge && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#35D5F2]/15 text-[#35D5F2] border border-[#35D5F2]/25">
                      {activeTopic.badge}
                    </span>
                  )}
                </div>

                {/* Header Actions */}
                <div className="flex items-center gap-1.5">
                  {/* Complete toggle */}
                  <button
                    onClick={() => onToggleCompleted(activeTopic.id)}
                    className={`p-2 rounded-xl border text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      completed
                        ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                        : 'border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--bg-elevated)]'
                    }`}
                    title={completed ? 'ทำเครื่องหมายว่ายังไม่ได้อ่าน' : 'ทำเครื่องหมายว่าอ่านจบแล้ว'}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="hidden sm:inline">{completed ? 'อ่านแล้ว' : 'ทำเครื่องหมายอ่านแล้ว'}</span>
                  </button>

                  {/* Bookmark toggle */}
                  <button
                    onClick={() => onToggleBookmark(activeTopic.id)}
                    className={`p-2 rounded-xl border transition-all ${
                      bookmarked
                        ? 'bg-[#35D5F2]/20 border-[#35D5F2]/40 text-[#35D5F2]'
                        : 'border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--bg-elevated)]'
                    }`}
                    title={bookmarked ? 'ลบที่คั่นหน้า' : 'คั่นหน้านี้ไว้'}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-[#35D5F2]' : ''}`} />
                  </button>

                  {/* Zen Mode */}
                  {onToggleZenMode && (
                    <button
                      onClick={onToggleZenMode}
                      className="p-2 rounded-xl border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--bg-elevated)]"
                      title={isZenMode ? 'ออกจากโหมดอ่านเต็มจอ' : 'โหมดอ่านเต็มจอ (Focus Mode)'}
                    >
                      {isZenMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              </div>

              {/* Title & Desc */}
              <div className="space-y-2">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-[var(--text-primary)] leading-tight tracking-tight">
                  {activeTopic.title}
                </h1>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {activeTopic.description}
                </p>
              </div>

              {/* Meta Stats & Reader Controls */}
              <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>อ่านประมาณ {activeTopic.readingTime} นาที</span>
                  </span>
                  <span>{activeTopic.sections.length} หัวข้อย่อย</span>
                </div>

                {/* Font Size & Reading Width controls */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center rounded-xl bg-[var(--bg-elevated)] p-0.5 border border-[var(--border-color)]">
                    {(['sm', 'base', 'lg', 'xl'] as const).map(size => (
                      <button
                        key={size}
                        onClick={() => onChangeFontSize(size)}
                        className={`px-2 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                          fontSize === size ? 'bg-[#FF6B00] text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        {size.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </header>

            {/* Sections Rendering */}
            <div className={`space-y-8 ${fontClasses}`}>
              {activeTopic.sections.map((section, sIdx) => {
                const sectionFlagId = `${activeTopic.id}#${section.id}`;
                const sectionFlagged = isFlagged(sectionFlagId);
                const sectionFlagNote = getFlagNote(sectionFlagId);
                const sectionDone = isSectionCompleted(section.id);

                return (
                  <article
                    key={section.id}
                    id={section.id}
                    className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-5 transition-all shadow-sm scroll-mt-24 relative overflow-hidden group"
                  >
                    {/* Section Top Header */}
                    <div className="flex items-start justify-between gap-3 border-b border-[var(--border-color)] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-[#FF6B00]/15 text-[#FF8A33] text-xs font-bold font-mono flex items-center justify-center shrink-0">
                          {sIdx + 1}
                        </span>
                        <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug">
                          {section.title}
                        </h2>
                      </div>

                      {/* Section Action Buttons: Flag 🚩 and Mark Read */}
                      <div className="flex items-center gap-1 shrink-0">
                        {/* Flag button */}
                        <button
                          onClick={() => setFlagModalTarget({
                            id: sectionFlagId,
                            type: 'section',
                            topicId: activeTopic.id,
                            topicTitle: activeTopic.title,
                            sectionId: section.id,
                            sectionTitle: section.title,
                            existingNote: sectionFlagNote,
                            isFlagged: sectionFlagged,
                          })}
                          className={`p-2 rounded-xl transition-all flex items-center gap-1 ${
                            sectionFlagged
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                              : 'text-[var(--text-muted)] hover:text-red-400 hover:bg-red-500/10'
                          }`}
                          title={sectionFlagged ? 'แก้ไขหรือดูโน้ตที่ติดธงไว้' : 'ติดธง: ยังไม่เข้าใจจุดนี้ 🚩'}
                        >
                          <Flag className={`w-4 h-4 ${sectionFlagged ? 'fill-red-500' : ''}`} />
                        </button>

                        {/* Copy Section */}
                        <button
                          onClick={() => handleCopySection(section.title, section.content, section.id)}
                          className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
                          title="คัดลอกเนื้อหาหัวข้อนี้"
                        >
                          {copiedSectionId === section.id ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>

                        {/* Mark Section Done */}
                        <button
                          onClick={() => onToggleCompletedSection(section.id)}
                          className={`p-2 rounded-xl transition-colors ${
                            sectionDone ? 'text-emerald-400 bg-emerald-500/10' : 'text-[var(--text-muted)] hover:text-emerald-400'
                          }`}
                          title={sectionDone ? 'ทำเครื่องหมายว่ายังไม่อ่าน' : 'ทำเครื่องหมายว่าอ่านหัวข้อนี้แล้ว'}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Flag Note Banner (if flagged) */}
                    {sectionFlagged && (
                      <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/25 flex items-start gap-2.5 text-xs text-red-300">
                        <Flag className="w-4 h-4 text-red-400 shrink-0 mt-0.5 fill-red-400" />
                        <div className="space-y-0.5">
                          <span className="font-bold text-red-400">คุณติดธงจุดนี้ไว้ (ยังไม่เข้าใจ/ต้องทบทวน):</span>
                          <p className="text-[var(--text-secondary)]">{sectionFlagNote || '(ไม่ได้ใส่โน้ตเพิ่มเติม)'}</p>
                        </div>
                      </div>
                    )}

                    {/* Section Text Content */}
                    <div className="text-[var(--text-secondary)] leading-relaxed space-y-4">
                      <MarkdownRenderer content={section.content} />
                    </div>

                    {/* ASCII Diagram (if any) */}
                    {section.diagram && (
                      <div className="p-4 rounded-2xl bg-[#030712] border border-[var(--border-color)] overflow-x-auto">
                        <pre className="font-mono text-xs text-[#35D5F2] leading-relaxed">
                          {section.diagram}
                        </pre>
                      </div>
                    )}

                    {/* Code Snippets (if any) */}
                    {section.codeSnippets?.map((cs, cIdx) => (
                      <div key={cIdx} className="rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[#030712] space-y-0">
                        {cs.title && (
                          <div className="px-4 py-2 bg-[var(--bg-elevated)] border-b border-[var(--border-color)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                            <span>{cs.title}</span>
                            <span className="font-mono text-[10px] uppercase">{cs.language}</span>
                          </div>
                        )}
                        <pre className="p-4 font-mono text-xs text-[#53DBAB] overflow-x-auto leading-relaxed">
                          <code>{cs.code}</code>
                        </pre>
                      </div>
                    ))}

                    {/* Tables (if any) */}
                    {section.tables?.map((table, tIdx) => (
                      <div key={tIdx} className="space-y-2">
                        {table.caption && (
                          <div className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                            <span>{table.caption}</span>
                          </div>
                        )}
                        <div className="overflow-x-auto rounded-2xl border border-[var(--border-color)]">
                          <table className="w-full text-xs text-left">
                            <thead className="bg-[var(--bg-elevated)] text-[var(--text-primary)] font-bold border-b border-[var(--border-color)]">
                              <tr>
                                {table.headers.map((h, hIdx) => (
                                  <th key={hIdx} className="px-4 py-3 whitespace-nowrap">{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[var(--border-color)]">
                              {table.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-[var(--bg-elevated)]/50 transition-colors">
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className="px-4 py-3 text-[var(--text-secondary)]">{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}

                    {/* Callouts (if any) */}
                    {section.callouts?.map((co, coIdx) => {
                      const calloutConfig = {
                        note: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', icon: Lightbulb },
                        tip: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', icon: Sparkles },
                        warning: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', icon: AlertCircle },
                        exam: { bg: 'bg-[#FF6B00]/15', border: 'border-[#FF6B00]/30', text: 'text-[#FF8A33]', icon: Flame },
                        concept: { bg: 'bg-[#8B7CFF]/15', border: 'border-[#8B7CFF]/30', text: 'text-[#A78BFA]', icon: HelpCircle },
                      }[co.type];
                      const Icon = calloutConfig.icon;

                      return (
                        <div key={coIdx} className={`p-4 rounded-2xl ${calloutConfig.bg} border ${calloutConfig.border} space-y-1.5`}>
                          <div className={`text-xs font-bold ${calloutConfig.text} flex items-center gap-1.5`}>
                            <Icon className="w-4 h-4" />
                            <span>{co.title}</span>
                          </div>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            {co.content}
                          </p>
                        </div>
                      );
                    })}
                  </article>
                );
              })}
            </div>

            {/* Formulas Box (if any) */}
            {activeTopic.formulas && activeTopic.formulas.length > 0 && (
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 shadow-sm">
                <div className="text-sm font-bold text-[#FF6B00] flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  <span>สูตรคำนวณที่ต้องใช้ในข้อสอบ</span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {activeTopic.formulas.map((f, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-2">
                      <div className="text-xs font-bold text-[var(--text-primary)]">{f.name}</div>
                      <div className="p-2.5 rounded-xl bg-[#030712] font-mono text-sm text-[#35D5F2] font-bold">
                        {f.formula}
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]">{f.explanation}</p>
                      {f.example && (
                        <div className="text-[11px] text-[#53DBAB] font-mono">ตัวอย่าง: {f.example}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Exam Traps Section (if any) */}
            {activeTopic.examTraps && activeTopic.examTraps.length > 0 && (
              <div className="p-6 sm:p-8 rounded-3xl bg-[#FF6B00]/10 border border-[#FF6B00]/25 space-y-4">
                <div className="text-sm font-bold text-[#FF8A33] flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#FF6B00]" />
                  <span>จุดที่คนมักตอบผิด & กับดักข้อสอบ (Exam Traps)</span>
                </div>
                <div className="space-y-3">
                  {activeTopic.examTraps.map((trap, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-1.5 text-xs">
                      <div className="font-bold text-[var(--text-primary)]">❌ กับดัก: {trap.trap}</div>
                      <div className="text-red-400">ทำไมถึงผิด: {trap.whyWrong}</div>
                      <div className="text-emerald-400 font-semibold">✅ ความเข้าใจที่ถูกต้อง: {trap.correctUnderstanding}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Lesson Navigation */}
            <nav className="p-5 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-between gap-4">
              {prevTopic ? (
                <button
                  onClick={() => onSelectTopic(prevTopic.id)}
                  className="flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)] hover:text-[#FF6B00] transition-colors text-left"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <div>
                    <div className="text-[10px] text-[var(--text-muted)]">บทก่อนหน้า</div>
                    <div className="line-clamp-1">{prevTopic.title}</div>
                  </div>
                </button>
              ) : <div />}

              {nextTopic && (
                <button
                  onClick={() => onSelectTopic(nextTopic.id)}
                  className="flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)] hover:text-[#FF6B00] transition-colors text-right ml-auto"
                >
                  <div>
                    <div className="text-[10px] text-[var(--text-muted)]">บทถัดไป</div>
                    <div className="line-clamp-1">{nextTopic.title}</div>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </nav>
          </main>

          {/* Right Sidebar: Table of Contents for Active Lesson (Desktop) */}
          {!isZenMode && (
            <aside className="hidden xl:block xl:col-span-3 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pl-2 space-y-4 scrollbar-thin">
              <div className="p-4 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center justify-between">
                  <span>สารบัญในบทนี้</span>
                  <span className="font-mono text-[#35D5F2] font-semibold">{scrollProgress}%</span>
                </div>

                <div className="space-y-1">
                  {activeTopic.sections.map((section, idx) => {
                    const isSecActive = activeSectionId === section.id;
                    const secDone = isSectionCompleted(section.id);
                    const secFlagged = isFlagged(`${activeTopic.id}#${section.id}`);

                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full p-2 rounded-xl text-left text-xs transition-all flex items-center justify-between group ${
                          isSecActive
                            ? 'bg-[#35D5F2]/15 text-[#35D5F2] font-bold border border-[#35D5F2]/30'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                        }`}
                      >
                        <span className="line-clamp-1 pr-2">{section.title}</span>
                        <div className="flex items-center gap-1 shrink-0">
                          {secFlagged && <Flag className="w-3 h-3 text-red-400 fill-red-400" />}
                          {secDone && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>
          )}

        </div>
      </div>

      {/* Mobile Drawer: Left Sidebar Lessons */}
      {leftSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div onClick={() => setLeftSidebarOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-[var(--bg-card)] border-r border-[var(--border-color)] p-5 space-y-4 overflow-y-auto animate-fade-in z-10">
            <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
              <span className="text-sm font-bold text-[var(--text-primary)]">เลือกบทเรียน ({STUDY_TOPICS.length} บท)</span>
              <button onClick={() => setLeftSidebarOpen(false)} className="p-1 rounded-lg hover:bg-[var(--bg-elevated)]">
                <X className="w-4 h-4 text-[var(--text-muted)]" />
              </button>
            </div>
            <div className="space-y-1.5">
              {STUDY_TOPICS.map(topic => (
                <button
                  key={topic.id}
                  onClick={() => {
                    onSelectTopic(topic.id);
                    setLeftSidebarOpen(false);
                  }}
                  className={`w-full p-3 rounded-2xl text-left text-xs transition-all flex items-start gap-2.5 ${
                    topic.id === activeTopic.id
                      ? 'bg-[#FF6B00]/15 text-[#FF8A33] font-bold border border-[#FF6B00]/30'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full border border-[var(--text-muted)] text-[9px] flex items-center justify-center shrink-0 mt-0.5">
                    {topic.lessonNumber}
                  </span>
                  <span className="line-clamp-2">{topic.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer: Right Sidebar TOC */}
      {rightTocOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div onClick={() => setRightTocOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-[var(--bg-card)] border-l border-[var(--border-color)] p-5 space-y-4 overflow-y-auto animate-fade-in z-10">
            <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
              <span className="text-sm font-bold text-[var(--text-primary)]">สารบัญในบทนี้</span>
              <button onClick={() => setRightTocOpen(false)} className="p-1 rounded-lg hover:bg-[var(--bg-elevated)]">
                <X className="w-4 h-4 text-[var(--text-muted)]" />
              </button>
            </div>
            <div className="space-y-1.5">
              {activeTopic.sections.map((section, idx) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full p-3 rounded-2xl text-left text-xs transition-all flex items-center justify-between ${
                    activeSectionId === section.id
                      ? 'bg-[#35D5F2]/15 text-[#35D5F2] font-bold border border-[#35D5F2]/30'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]'
                  }`}
                >
                  <span className="line-clamp-1">{section.title}</span>
                  {isFlagged(`${activeTopic.id}#${section.id}`) && (
                    <Flag className="w-3.5 h-3.5 text-red-400 fill-red-400 shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Flag Modal Component */}
      <FlagModal
        isOpen={flagModalTarget !== null}
        onClose={() => setFlagModalTarget(null)}
        targetItem={flagModalTarget}
        onSaveFlag={onSaveFlag}
        onRemoveFlag={onRemoveFlag}
      />
    </div>
  );
};
