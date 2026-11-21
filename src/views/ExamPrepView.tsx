import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  Sparkles, 
  Flag, 
  Flame, 
  BookOpen, 
  Filter,
  Check,
  ChevronRight
} from 'lucide-react';
import { 
  PRACTICE_QUESTIONS, 
  getOfficialDocxQuestions,
  getFourPillarsQuestions,
  getBinaryQuestions
} from '../data/practiceQuestions';
import { PracticeQuestion, CategoryId, FlaggedItem, ProgramId } from '../types';
import { FlagModal } from '../components/FlagModal';
import AnimatedContent from '../components/ui/AnimatedContent';

interface ExamPrepViewProps {
  onSelectTab?: (tab: any) => void;
  isFlagged: (id: string) => boolean;
  getFlagNote: (id: string) => string;
  onSaveFlag: (item: Omit<FlaggedItem, 'timestamp'>) => void;
  onRemoveFlag: (id: string) => void;
  questions?: PracticeQuestion[];
  activeProgram?: ProgramId;
}

export const ExamPrepView: React.FC<ExamPrepViewProps> = ({
  onSelectTab,
  isFlagged,
  getFlagNote,
  onSaveFlag,
  onRemoveFlag,
  questions,
  activeProgram = 'DSI',
}) => {
  const [filterMode, setFilterMode] = useState<'all' | '4pillars' | 'binary' | 'docx' | 'flagged'>('all');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [revealedExplanations, setRevealedExplanations] = useState<Record<number, boolean>>({});

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

  const isDSI = activeProgram === 'DSI';
  const baseQuestions = (questions && questions.length > 0) ? questions : PRACTICE_QUESTIONS;

  // Filter questions
  let displayedQuestions = baseQuestions;

  if (isDSI) {
    if (filterMode === 'docx') {
      displayedQuestions = getOfficialDocxQuestions();
    } else if (filterMode === '4pillars') {
      displayedQuestions = getFourPillarsQuestions();
    } else if (filterMode === 'binary') {
      displayedQuestions = getBinaryQuestions();
    } else if (filterMode === 'flagged') {
      displayedQuestions = baseQuestions.filter(q => isFlagged(`quiz_${q.id}`));
    }
  } else {
    if (filterMode === 'flagged') {
      displayedQuestions = baseQuestions.filter(q => isFlagged(`quiz_${q.id}`));
    }
  }

  if (selectedCategory !== 'all') {
    displayedQuestions = displayedQuestions.filter(q => q.category === selectedCategory);
  }

  // Answer handler
  const handleSelectOption = (questionId: number, optionLabel: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: optionLabel }));
    setRevealedExplanations(prev => ({ ...prev, [questionId]: true }));
  };

  const handleToggleExplanation = (questionId: number) => {
    setRevealedExplanations(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleResetQuiz = () => {
    if (window.confirm('คุณต้องการรีเซ็ตคำตอบทั้งหมดในหน้านี้ใช่หรือไม่?')) {
      setUserAnswers({});
      setRevealedExplanations({});
    }
  };

  // Score calculation
  const totalQuestions = displayedQuestions.length;
  const answeredCount = displayedQuestions.filter(q => userAnswers[q.id] !== undefined).length;
  const correctCount = displayedQuestions.filter(q => userAnswers[q.id] === q.correctAnswer).length;
  const scorePercent = answeredCount > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const isPassed = scorePercent >= 50;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      
      {/* Top Hero Banner */}
      <AnimatedContent distance={40} direction="vertical" duration={0.6} trigger="mount">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-elevated)] to-[var(--bg-card)] border border-[var(--border-color)] shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FF6B00]/15 text-[#FF8A33] border border-[#FF6B00]/30">
                  ระบบฝึกทำข้อสอบออนไลน์ ({activeProgram})
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#35D5F2]/15 text-[#35D5F2] border border-[#35D5F2]/30">
                  เกณฑ์ผ่าน ≥ 50%
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">
                {isDSI
                  ? 'แบบทดสอบประเมินสมรรถนะดิจิทัล (Digital Test Prep)'
                  : `แบบทดสอบเตรียมความพร้อม ${activeProgram} (Official Manual)`}
              </h1>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl">
                {isDSI
                  ? 'รวมข้อสอบ 150 ข้อเข้มข้น ครอบคลุม Docx ทางการ, 4 เสาหลัก, และการแปลงเลขฐาน 2 & 8-Bit พร้อมคำอธิบายเหตุผลและเฉลยละเอียด'
                  : `ข้อสอบจำลอง 15 ข้อทางการจากคู่มือเตรียมความพร้อม ${activeProgram} (SIT มจธ.) พร้อมคำอธิบายและเฉลยละเอียดทุกข้อ`}
              </p>
            </div>

            {/* Reset button */}
            <button
              onClick={handleResetQuiz}
              className="p-2.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[#FF6B00] hover:border-[#FF6B00]/40 transition-all flex items-center gap-2 text-xs font-semibold"
            >
              <RotateCcw className="w-4 h-4" />
              <span>ทำใหม่ทั้งหมด</span>
            </button>
          </div>

          {/* Score & Progress Stats Card */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[var(--border-color)]">
            <div className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <span className="text-[11px] text-[var(--text-muted)] font-medium">ข้อสอบทั้งหมด</span>
              <div className="text-xl font-black text-[var(--text-primary)] mt-1">{totalQuestions} ข้อ</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <span className="text-[11px] text-[var(--text-muted)] font-medium">ทำแล้ว</span>
              <div className="text-xl font-black text-[#35D5F2] mt-1">{answeredCount} / {totalQuestions}</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <span className="text-[11px] text-[var(--text-muted)] font-medium">ตอบถูก</span>
              <div className="text-xl font-black text-emerald-400 mt-1">{correctCount} ข้อ</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <span className="text-[11px] text-[var(--text-muted)] font-medium">คะแนนประเมิน</span>
              <div className={`text-xl font-black mt-1 flex items-center gap-1.5 ${isPassed ? 'text-emerald-400' : 'text-amber-400'}`}>
                <span>{scorePercent}%</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[var(--bg-elevated)] font-bold">
                  {isPassed ? 'ผ่านเกณฑ์' : 'ต่ำกว่า 50%'}
                </span>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            {/* Main filter mode */}
            <div className="flex flex-wrap items-center rounded-2xl bg-[var(--bg-card)] p-1 border border-[var(--border-color)] gap-1">
              <button
                onClick={() => setFilterMode('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  filterMode === 'all' ? 'bg-[#FF6B00] text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                ทั้งหมด ({baseQuestions.length} ข้อ)
              </button>
              {isDSI && (
                <>
                  <button
                    onClick={() => setFilterMode('4pillars')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      filterMode === '4pillars' ? 'bg-[#FF6B00] text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    4 เสาหลัก (80 ข้อ)
                  </button>
                  <button
                    onClick={() => setFilterMode('binary')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      filterMode === 'binary' ? 'bg-[#35D5F2] text-black font-extrabold shadow-sm' : 'text-[var(--text-muted)] hover:text-[#35D5F2]'
                    }`}
                  >
                    เลขฐาน 2 & 8-Bit (15 ข้อ)
                  </button>
                  <button
                    onClick={() => setFilterMode('docx')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      filterMode === 'docx' ? 'bg-[#FF6B00] text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    ข้อสอบทางการ 25 ข้อ (Docx)
                  </button>
                </>
              )}
              <button
                onClick={() => setFilterMode('flagged')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                  filterMode === 'flagged' ? 'bg-red-500 text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-red-400'
                }`}
              >
                <Flag className="w-3 h-3" />
                <span>เฉพาะข้อที่ติดธง 🚩</span>
              </button>
            </div>
          </div>
        </div>
      </AnimatedContent>

      {/* Empty State when no questions */}
      {displayedQuestions.length === 0 && (
        <div className="p-12 text-center rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-3">
          <HelpCircle className="w-10 h-10 text-[var(--text-muted)] mx-auto" />
          <h3 className="text-base font-bold text-[var(--text-primary)]">ไม่พบข้อสอบในหมวดนี้</h3>
          <p className="text-xs text-[var(--text-muted)]">
            {filterMode === 'flagged' ? 'คุณยังไม่ได้ติดธงข้อสอบใดๆ สามารถกดรูปธง 🚩 ที่หัวข้อคำถามเพื่อบันทึกข้อที่ยังไม่เข้าใจ' : 'ลองเลือกหมวดหมู่อื่นเพื่อดูข้อสอบ'}
          </p>
        </div>
      )}

      {/* Questions List */}
      <AnimatedContent distance={30} direction="vertical" duration={0.6} stagger={0.06}>
        <div className="space-y-6">
        {displayedQuestions.map((q, qIndex) => {
          const userAnswer = userAnswers[q.id];
          const isAnswered = userAnswer !== undefined;
          const isCorrect = userAnswer === q.correctAnswer;
          const isExplanationShown = revealedExplanations[q.id];
          const questionFlagId = `quiz_${q.id}`;
          const questionFlagged = isFlagged(questionFlagId);
          const questionFlagNote = getFlagNote(questionFlagId);

          return (
            <div
              key={q.id}
              className={`p-6 sm:p-7 rounded-3xl bg-[var(--bg-card)] border transition-all shadow-sm space-y-4 ${
                isAnswered
                  ? isCorrect
                    ? 'border-emerald-500/30 bg-emerald-500/[0.02]'
                    : 'border-red-500/30 bg-red-500/[0.02]'
                  : 'border-[var(--border-color)]'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <span className="w-7 h-7 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-xs font-bold font-mono flex items-center justify-center shrink-0 text-[#FF6B00]">
                    {q.id}
                  </span>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-[var(--bg-elevated)] text-[var(--text-muted)] font-semibold">
                        {q.source === 'docx_official' ? 'ข้อสอบคู่มือ Docx' : 'ข้อสอบจำลอง'}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-md font-semibold ${
                        q.difficulty === 'easy' ? 'text-emerald-400 bg-emerald-500/10' : q.difficulty === 'medium' ? 'text-amber-400 bg-amber-500/10' : 'text-red-400 bg-red-500/10'
                      }`}>
                        {q.difficulty === 'easy' ? 'ง่าย' : q.difficulty === 'medium' ? 'ปานกลาง' : 'ท้าทาย'}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug">
                      {q.question}
                    </h3>
                  </div>
                </div>

                {/* Flag Question Button */}
                <button
                  onClick={() => setFlagModalTarget({
                    id: questionFlagId,
                    type: 'question',
                    questionId: q.id,
                    questionText: q.question,
                    existingNote: questionFlagNote,
                    isFlagged: questionFlagged,
                  })}
                  className={`p-2 rounded-xl transition-all shrink-0 ${
                    questionFlagged
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : 'text-[var(--text-muted)] hover:text-red-400 hover:bg-red-500/10'
                  }`}
                  title={questionFlagged ? 'แก้ไขโน้ตที่ติดธงไว้' : 'ติดธง: ยังไม่เข้าใจข้อนี้ 🚩'}
                >
                  <Flag className={`w-4 h-4 ${questionFlagged ? 'fill-red-500' : ''}`} />
                </button>
              </div>

              {/* Flag Note Banner (if flagged) */}
              {questionFlagged && (
                <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/25 flex items-start gap-2 text-xs text-red-300">
                  <Flag className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5 fill-red-400" />
                  <div>
                    <span className="font-bold text-red-400">ติดธงไว้: </span>
                    <span>{questionFlagNote || '(ไม่มีโน้ตเพิ่มเติม)'}</span>
                  </div>
                </div>
              )}

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {q.options.map(opt => {
                  const isSelected = userAnswer === opt.label;
                  const isThisCorrect = q.correctAnswer === opt.label;

                  let optStyle = 'border-[var(--border-color)] bg-[var(--bg-elevated)] hover:border-[#FF6B00]/40 text-[var(--text-secondary)]';

                  if (isAnswered) {
                    if (isThisCorrect) {
                      optStyle = 'border-emerald-500 bg-emerald-500/15 text-emerald-300 font-bold';
                    } else if (isSelected && !isThisCorrect) {
                      optStyle = 'border-red-500 bg-red-500/15 text-red-300 font-bold';
                    } else {
                      optStyle = 'border-[var(--border-color)] opacity-50 bg-[var(--bg-card)]';
                    }
                  }

                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleSelectOption(q.id, opt.label)}
                      disabled={isAnswered}
                      className={`p-3.5 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-2.5 ${optStyle}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-[var(--bg-card)] text-xs font-bold font-mono flex items-center justify-center shrink-0 border border-[var(--border-color)]">
                          {opt.label}
                        </span>
                        <span>{opt.text}</span>
                      </div>
                      {isAnswered && isThisCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                      {isAnswered && isSelected && !isThisCorrect && (
                        <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Reasoning Section */}
              {isAnswered && (
                <div className="pt-2 animate-fade-in space-y-2.5">
                  <div className={`p-4 rounded-2xl border text-xs leading-relaxed space-y-2 ${
                    isCorrect
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-200'
                      : 'bg-red-500/10 border-red-500/20 text-red-200'
                  }`}>
                    <div className="flex items-center justify-between font-bold">
                      <span className="flex items-center gap-1.5">
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-400">ถูกต้อง! คำตอบคือข้อ {q.correctAnswer}</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-red-400" />
                            <span className="text-red-400">ยังไม่ถูกต้อง! คำตอบที่ถูกคือข้อ {q.correctAnswer}</span>
                          </>
                        )}
                      </span>
                    </div>

                    <p className="text-[var(--text-secondary)] whitespace-pre-line">
                      {q.explanation}
                    </p>

                    <div className="pt-2 border-t border-[var(--border-color)]/30 text-[11px] font-semibold text-[#FF8A33] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>หลักการสำคัญ: {q.keyConcept}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      </AnimatedContent>

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
