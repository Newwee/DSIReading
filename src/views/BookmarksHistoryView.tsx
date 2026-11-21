import React, { useState } from 'react';
import { Bookmark, Clock, CheckCircle2, ArrowRight, Trash2, RotateCcw, BookOpen } from 'lucide-react';
import { STUDY_TOPICS, getTopicById } from '../data/studyContent';

interface BookmarksHistoryViewProps {
  bookmarkedIds: string[];
  completedIds: string[];
  history: {
    topicId: string;
    sectionId?: string;
    timestamp: number;
    scrollPercentage?: number;
  }[];
  onOpenTopic: (topicId: string, sectionId?: string) => void;
  onToggleBookmark: (id: string) => void;
  onResetProgress?: () => void;
}

export const BookmarksHistoryView: React.FC<BookmarksHistoryViewProps> = ({
  bookmarkedIds = [],
  completedIds = [],
  history = [],
  onOpenTopic,
  onToggleBookmark,
  onResetProgress,
}) => {
  const [activeTab, setActiveTab] = useState<'bookmarks' | 'history'>('bookmarks');

  const bookmarkedTopics = bookmarkedIds
    .map(id => getTopicById(id))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FF6B00]/15 text-[#FF8A33] border border-[#FF6B00]/30">
              การจัดการการอ่าน
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">
              ที่คั่นหน้า & ประวัติการอ่านล่าสุด
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              ติดตามความคืบหน้าการอ่าน ย้อนดูหัวข้อที่เคยเปิด และจัดการบทเรียนที่คั่นไว้
            </p>
          </div>

          {onResetProgress && (
            <button
              onClick={onResetProgress}
              className="p-2.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-red-500/40 text-xs font-semibold text-[var(--text-muted)] hover:text-red-400 transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>รีเซ็ตประวัติ</span>
            </button>
          )}
        </div>

        {/* Tab switcher */}
        <div className="flex items-center rounded-2xl bg-[var(--bg-elevated)] p-1 border border-[var(--border-color)] max-w-sm">
          <button
            onClick={() => setActiveTab('bookmarks')}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'bookmarks' ? 'bg-[#FF6B00] text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>ที่คั่นหน้า ({bookmarkedTopics.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'history' ? 'bg-[#FF6B00] text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>ประวัติการอ่าน ({history.length})</span>
          </button>
        </div>
      </div>

      {/* Bookmarks Tab Content */}
      {activeTab === 'bookmarks' && (
        <div className="space-y-4">
          {bookmarkedTopics.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-2">
              <Bookmark className="w-10 h-10 text-[var(--text-muted)] mx-auto" />
              <h3 className="text-base font-bold text-[var(--text-primary)]">ยังไม่มีบทเรียนที่คั่นหน้าไว้</h3>
              <p className="text-xs text-[var(--text-muted)]">
                กดไอคอนที่คั่นหน้าที่มุมบนขวาของบทเรียนใดๆ เพื่อเก็บไว้อ่านภายหลัง
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bookmarkedTopics.map(topic => (
                <div
                  key={topic.id}
                  className="p-5 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#FF6B00]/40 transition-all shadow-sm space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[var(--bg-elevated)] text-[#FF8A33]">
                        บทที่ {topic.lessonNumber}
                      </span>
                      <button
                        onClick={() => onToggleBookmark(topic.id)}
                        className="text-red-400 p-1 hover:bg-red-500/10 rounded-lg transition-colors"
                        title="ลบที่คั่น"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <h3 className="text-sm font-bold text-[var(--text-primary)] line-clamp-1">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] line-clamp-2">
                      {topic.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[var(--border-color)] flex items-center justify-between text-xs">
                    <span className="text-[var(--text-muted)]">{topic.readingTime} นาที</span>
                    <button
                      onClick={() => onOpenTopic(topic.id)}
                      className="px-3 py-1.5 rounded-xl bg-[#FF6B00]/15 text-[#FF8A33] hover:bg-[#FF6B00] hover:text-white font-bold transition-all flex items-center gap-1"
                    >
                      <span>เปิดอ่าน</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* History Tab Content */}
      {activeTab === 'history' && (
        <div className="space-y-3">
          {history.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-2">
              <Clock className="w-10 h-10 text-[var(--text-muted)] mx-auto" />
              <h3 className="text-base font-bold text-[var(--text-primary)]">ยังไม่มีประวัติการอ่าน</h3>
              <p className="text-xs text-[var(--text-muted)]">
                เมื่อเริ่มเปิดอ่านบทเรียน ระบบจะบันทึกตำแหน่งล่าสุดไว้ที่นี่โดยอัตโนมัติ
              </p>
            </div>
          ) : (
            history.map((h, idx) => {
              const topic = getTopicById(h.topicId);
              if (!topic) return null;

              return (
                <div
                  key={idx}
                  onClick={() => onOpenTopic(h.topicId, h.sectionId)}
                  className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#FF6B00]/40 cursor-pointer transition-all flex items-center justify-between gap-4"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-[#FF6B00] font-mono">
                        บทที่ {topic.lessonNumber}
                      </span>
                      {h.scrollPercentage !== undefined && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-[var(--bg-elevated)] text-[var(--text-muted)] font-mono">
                          เลื่อนถึง {h.scrollPercentage}%
                        </span>
                      )}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                      {topic.title}
                    </div>
                    <div className="text-[10px] text-[var(--text-muted)]">
                      {new Date(h.timestamp).toLocaleDateString('th-TH', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-[var(--text-muted)] hover:text-[#FF6B00] shrink-0" />
                </div>
              );
            })
          )}
        </div>
      )}

    </div>
  );
};
