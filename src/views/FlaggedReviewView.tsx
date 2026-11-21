import React, { useState } from 'react';
import { Flag, Trash2, Edit3, ArrowRight, BookOpen, HelpCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { FlaggedItem } from '../types';
import { FlagModal } from '../components/FlagModal';

interface FlaggedReviewViewProps {
  flaggedItems: FlaggedItem[];
  onOpenTopic: (topicId: string, sectionId?: string) => void;
  onOpenExamQuestion?: (questionId: number) => void;
  onSelectTab: (tab: any) => void;
  onSaveFlag: (item: Omit<FlaggedItem, 'timestamp'>) => void;
  onRemoveFlag: (id: string) => void;
}

export const FlaggedReviewView: React.FC<FlaggedReviewViewProps> = ({
  flaggedItems = [],
  onOpenTopic,
  onSelectTab,
  onSaveFlag,
  onRemoveFlag,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'section' | 'question'>('all');
  const [editModalTarget, setEditModalTarget] = useState<any>(null);

  const displayedItems = flaggedItems.filter(item => {
    if (filterType === 'all') return true;
    return item.type === filterType;
  });

  const sectionCount = flaggedItems.filter(f => f.type === 'section').length;
  const questionCount = flaggedItems.filter(f => f.type === 'question').length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-elevated)] to-[var(--bg-card)] border border-[var(--border-color)] shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-500/15 text-red-400 border border-red-500/30 flex items-center gap-1.5">
                <Flag className="w-3.5 h-3.5 fill-red-400" />
                <span>จุดที่ยังไม่เข้าใจ (Flagged Review)</span>
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)] font-mono">
                {flaggedItems.length} รายการ
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">
              คลังจุดที่ติดธงไว้ทบทวนก่อนสอบ
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl">
              รวบรวมเนื้อหาและข้อสอบทั้งหมดที่คุณกดติดธง 🚩 ไว้ เพื่อให้กลับมาทบทวนจุดที่ยังสงสัยได้ตรงจุด ไม่เสียเวลาค้นหา
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[var(--border-color)]">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterType === 'all' ? 'bg-[#FF6B00] text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--bg-card)]'
            }`}
          >
            ทั้งหมด ({flaggedItems.length})
          </button>
          <button
            onClick={() => setFilterType('section')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterType === 'section' ? 'bg-[#FF6B00] text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--bg-card)]'
            }`}
          >
            หัวข้อบทเรียน ({sectionCount})
          </button>
          <button
            onClick={() => setFilterType('question')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterType === 'question' ? 'bg-[#FF6B00] text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--bg-card)]'
            }`}
          >
            ข้อสอบที่ยังไม่เข้าใจ ({questionCount})
          </button>
        </div>
      </div>

      {/* Empty State */}
      {flaggedItems.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center mx-auto">
            <Flag className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-[var(--text-primary)]">ยังไม่มีรายการที่ติดธงไว้</h3>
            <p className="text-xs text-[var(--text-muted)] max-w-md mx-auto">
              ขณะอ่านบทเรียนหรือทำข้อสอบ หากพบจุดที่ยังไม่เข้าใจ สามารถกดไอคอนรูปธง 🚩 ที่มุมขวาบนของหัวข้อ เพื่อบันทึกโน้ตและรวบรวมมาไว้ที่นี่ได้ทันที
            </p>
          </div>
          <button
            onClick={() => onSelectTab('reading')}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] text-white text-xs font-bold shadow-md hover:opacity-95 transition-all"
          >
            ไปที่หน้าอ่านบทเรียน
          </button>
        </div>
      ) : displayedItems.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--text-muted)]">
          ไม่พบรายการในหมวดที่เลือก
        </div>
      ) : (
        /* Items Grid */
        <div className="space-y-4">
          {displayedItems.map(item => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-3xl bg-[var(--bg-card)] border border-red-500/20 hover:border-red-500/40 transition-all shadow-sm space-y-4 group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-red-500/15 text-red-400 font-bold uppercase flex items-center gap-1">
                      <Flag className="w-3 h-3 fill-red-400" />
                      <span>{item.type === 'section' ? 'หัวข้อบทเรียน' : 'ข้อสอบ'}</span>
                    </span>
                    {item.topicTitle && (
                      <span className="text-[11px] text-[var(--text-muted)] font-medium">
                        {item.topicTitle}
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug">
                    {item.sectionTitle || item.questionText || item.id}
                  </h3>
                </div>

                {/* Remove / Edit buttons */}
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => setEditModalTarget({
                      id: item.id,
                      type: item.type,
                      topicId: item.topicId,
                      topicTitle: item.topicTitle,
                      sectionId: item.sectionId,
                      sectionTitle: item.sectionTitle,
                      questionId: item.questionId,
                      questionText: item.questionText,
                      existingNote: item.note,
                      isFlagged: true,
                    })}
                    className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
                    title="แก้ไขโน้ต"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveFlag(item.id)}
                    className="p-2 rounded-xl text-red-400/60 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                    title="ปลดธงออก"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* User note */}
              {item.note && (
                <div className="p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)] space-y-1">
                  <span className="font-semibold text-[#FF8A33] text-[11px]">โน้ตเตือนความจำ:</span>
                  <p className="whitespace-pre-line leading-relaxed">{item.note}</p>
                </div>
              )}

              {/* Action Jump Button */}
              <div className="flex items-center justify-between pt-2 border-t border-[var(--border-color)] text-xs">
                <span className="text-[11px] text-[var(--text-muted)] font-mono">
                  บันทึกเมื่อ {new Date(item.timestamp).toLocaleDateString('th-TH', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </span>

                {item.type === 'section' && item.topicId ? (
                  <button
                    onClick={() => onOpenTopic(item.topicId!, item.sectionId)}
                    className="px-3.5 py-1.5 rounded-xl bg-[#FF6B00]/15 text-[#FF8A33] hover:bg-[#FF6B00] hover:text-white font-bold transition-all flex items-center gap-1.5"
                  >
                    <span>อ่านหัวข้อนี้</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => onSelectTab('exam')}
                    className="px-3.5 py-1.5 rounded-xl bg-[#35D5F2]/15 text-[#35D5F2] hover:bg-[#35D5F2] hover:text-black font-bold transition-all flex items-center gap-1.5"
                  >
                    <span>ไปที่โหมดข้อสอบ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      <FlagModal
        isOpen={editModalTarget !== null}
        onClose={() => setEditModalTarget(null)}
        targetItem={editModalTarget}
        onSaveFlag={onSaveFlag}
        onRemoveFlag={onRemoveFlag}
      />
    </div>
  );
};
