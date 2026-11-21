import React, { useState, useEffect } from 'react';
import { Flag, X, Check, Trash2, HelpCircle, Tag } from 'lucide-react';
import { FlaggedItem } from '../types';

interface FlagModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetItem: {
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
  } | null;
  onSaveFlag: (item: Omit<FlaggedItem, 'timestamp'>) => void;
  onRemoveFlag: (id: string) => void;
}

export const FlagModal: React.FC<FlagModalProps> = ({
  isOpen,
  onClose,
  targetItem,
  onSaveFlag,
  onRemoveFlag,
}) => {
  const [note, setNote] = useState('');

  useEffect(() => {
    if (targetItem) {
      setNote(targetItem.existingNote || '');
    }
  }, [targetItem]);

  if (!isOpen || !targetItem) return null;

  const quickTags = [
    'ยังไม่เข้าใจวิธีคิด',
    'จำสูตรคำนวณสับสน',
    'ระวังจุดนี้ในข้อสอบ',
    'ต้องกลับมาอ่านทวนซ้ำ',
    'อยากหาข้อมูลเพิ่ม',
  ];

  const handleSave = () => {
    onSaveFlag({
      id: targetItem.id,
      type: targetItem.type,
      topicId: targetItem.topicId,
      topicTitle: targetItem.topicTitle,
      sectionId: targetItem.sectionId,
      sectionTitle: targetItem.sectionTitle,
      questionId: targetItem.questionId,
      questionText: targetItem.questionText,
      note: note.trim(),
    });
    onClose();
  };

  const handleRemove = () => {
    onRemoveFlag(targetItem.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
      />

      {/* Dialog */}
      <div className="relative w-full max-w-md rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl p-5 space-y-4 animate-fade-in z-10">
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-red-500/15 text-red-500">
              <Flag className="w-5 h-5 fill-red-500" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[var(--text-primary)]">
                {targetItem.isFlagged ? 'แก้ไขโน้ตจุดที่ติดธง' : 'ติดธงจุดที่ยังไม่เข้าใจ 🚩'}
              </h3>
              <p className="text-[11px] text-[var(--text-muted)]">
                บันทึกไว้ทบทวนก่อนเข้าห้องสอบ
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[var(--bg-elevated)] text-[var(--text-muted)]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Target Details */}
        <div className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-xs space-y-1">
          <span className="text-[10px] uppercase font-bold text-[#FF6B00]">
            {targetItem.type === 'section' ? 'หัวข้อย่อย' : targetItem.type === 'question' ? 'ข้อสอบ' : 'บทเรียน'}
          </span>
          <div className="font-semibold text-[var(--text-primary)] line-clamp-2">
            {targetItem.sectionTitle || targetItem.questionText || targetItem.topicTitle}
          </div>
        </div>

        {/* Note textarea */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-[var(--text-secondary)]">
            บันทึกความเข้าใจ หรือคำถามที่ยังสงสัย:
          </label>
          <textarea
            value={note}
            onChange={e => setNote(e.target.value)}
            rows={3}
            placeholder="เช่น ยังไม่เข้าใจว่าทำไม RAID 6 ถึงเสียได้ 2 ลูก, สับสนระหว่าง NAT กับ PAT..."
            className="w-full p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#FF6B00] resize-none"
          />
        </div>

        {/* Quick Tag suggestions */}
        <div className="space-y-1.5">
          <span className="text-[10px] text-[var(--text-muted)] flex items-center gap-1 font-semibold">
            <Tag className="w-3 h-3" />
            แท็กด่วนช่วยบันทึก:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {quickTags.map((tag, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setNote(prev => prev ? `${prev} | ${tag}` : tag)}
                className="px-2 py-1 rounded-lg text-[10px] bg-[var(--bg-elevated)] hover:bg-[#FF6B00]/15 text-[var(--text-secondary)] hover:text-[#FF8A33] border border-[var(--border-color)] transition-colors"
              >
                + {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-[var(--border-color)]">
          {targetItem.isFlagged ? (
            <button
              onClick={handleRemove}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-red-400 hover:bg-red-500/10 flex items-center gap-1.5 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>ปลดธงออก</span>
            </button>
          ) : <div />}

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-[var(--text-muted)] hover:bg-[var(--bg-elevated)]"
            >
              ยกเลิก
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] text-white shadow-md hover:opacity-95 transition-all flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              <span>บันทึกการติดธง</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
