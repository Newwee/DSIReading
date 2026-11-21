import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, ArrowRight, FileText, HelpCircle, Flame } from 'lucide-react';
import { STUDY_TOPICS } from '../data/studyContent';
import { PRACTICE_QUESTIONS } from '../data/practiceQuestions';
import { CHEAT_SHEET_TRAPS } from '../data/summaryCheatSheet';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTopic: (topicId: string, sectionId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectTopic,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.trim().toLowerCase();

  // Search in topics & sections
  const matchedTopics = !cleanQuery ? [] : STUDY_TOPICS.filter(t => 
    t.title.toLowerCase().includes(cleanQuery) ||
    t.description.toLowerCase().includes(cleanQuery) ||
    t.tags.some(tag => tag.toLowerCase().includes(cleanQuery)) ||
    t.sections.some(s => s.title.toLowerCase().includes(cleanQuery) || s.content.toLowerCase().includes(cleanQuery))
  ).slice(0, 5);

  // Search in Questions
  const matchedQuestions = !cleanQuery ? [] : PRACTICE_QUESTIONS.filter(q =>
    q.question.toLowerCase().includes(cleanQuery) ||
    q.keyConcept.toLowerCase().includes(cleanQuery) ||
    q.explanation.toLowerCase().includes(cleanQuery)
  ).slice(0, 3);

  // Search in Traps
  const matchedTraps = !cleanQuery ? [] : CHEAT_SHEET_TRAPS.filter(trap =>
    trap.topic.toLowerCase().includes(cleanQuery) ||
    trap.question.toLowerCase().includes(cleanQuery) ||
    trap.trapToAvoid.toLowerCase().includes(cleanQuery)
  ).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-fade-in"
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl overflow-hidden animate-fade-in z-10">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border-color)] bg-[var(--bg-elevated)]">
          <Search className="w-5 h-5 text-[#FF6B00] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="ค้นหา เช่น RAID 6, Binary Search, DHCP DORA, Private IP, PDPA..."
            className="w-full bg-transparent text-sm sm:text-base text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded-lg hover:bg-[var(--bg-card)] text-[var(--text-muted)]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="px-2 py-1 rounded-lg text-xs font-mono bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)]"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!cleanQuery ? (
            <div className="py-8 text-center text-xs text-[var(--text-muted)]">
              พิมพ์คำค้นหาเพื่อสำรวจบทเรียน 15 หัวข้อ, ข้อสอบ 150 ข้อ และตารางกับดัก
            </div>
          ) : (
            <>
              {matchedTopics.length === 0 && matchedQuestions.length === 0 && matchedTraps.length === 0 && (
                <div className="py-8 text-center text-xs text-[var(--text-muted)]">
                  ไม่พบผลการค้นหาสำหรับ "{query}"
                </div>
              )}

              {/* Topics Matches */}
              {matchedTopics.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] px-2">
                    บทเรียนที่เกี่ยวข้อง ({matchedTopics.length})
                  </div>
                  {matchedTopics.map(topic => (
                    <button
                      key={topic.id}
                      onClick={() => {
                        onSelectTopic(topic.id);
                        onClose();
                      }}
                      className="w-full p-3 rounded-2xl bg-[var(--bg-elevated)] hover:border-[#FF6B00]/40 border border-[var(--border-color)] text-left flex items-center justify-between group transition-all"
                    >
                      <div className="space-y-1 pr-3">
                        <div className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[#FF8A33] transition-colors">
                          {topic.title}
                        </div>
                        <div className="text-[11px] text-[var(--text-muted)] line-clamp-1">
                          {topic.description}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[#FF6B00] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </button>
                  ))}
                </div>
              )}

              {/* Traps Matches */}
              {matchedTraps.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00] px-2 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5" />
                    <span>กับดักข้อสอบที่ต้องระวัง</span>
                  </div>
                  {matchedTraps.map((trap, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-xs space-y-1"
                    >
                      <div className="font-bold text-[var(--text-primary)]">{trap.question}</div>
                      <div className="text-[#FF8A33] font-semibold">คำตอบ: {trap.correctAnswer}</div>
                      <div className="text-[var(--text-muted)] text-[11px]">อย่าสับสนกับ: {trap.trapToAvoid}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Practice Questions Matches */}
              {matchedQuestions.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#35D5F2] px-2 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>ข้อสอบฝึกฝน</span>
                  </div>
                  {matchedQuestions.map(q => (
                    <div
                      key={q.id}
                      className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-xs space-y-1"
                    >
                      <div className="font-bold text-[var(--text-primary)]">ข้อที่ {q.id}: {q.question}</div>
                      <div className="text-[var(--text-secondary)] text-[11px] line-clamp-2">
                        {q.explanation}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
