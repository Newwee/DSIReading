import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  Bookmark, 
  Flag, 
  ArrowRight, 
  Sparkles,
  Tag,
  Filter
} from 'lucide-react';
import { STUDY_TOPICS, CATEGORIES } from '../data/studyContent';
import { CategoryId, StudyTopic } from '../types';

interface StudyLibraryViewProps {
  onOpenTopic: (topicId: string) => void;
  selectedCategory: CategoryId | 'all';
  onSelectCategory: (cat: CategoryId | 'all') => void;
  isBookmarked: (id: string) => boolean;
  isCompleted: (id: string) => boolean;
  isFlagged: (id: string) => boolean;
  onToggleBookmark: (id: string) => void;
}

export const StudyLibraryView: React.FC<StudyLibraryViewProps> = ({
  onOpenTopic,
  selectedCategory = 'all',
  onSelectCategory,
  isBookmarked,
  isCompleted,
  isFlagged,
  onToggleBookmark,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'uncompleted' | 'bookmarked'>('all');

  const filteredTopics = STUDY_TOPICS.filter(topic => {
    // Category match
    if (selectedCategory !== 'all' && topic.category !== selectedCategory) {
      return false;
    }

    // Status match
    if (statusFilter === 'completed' && !isCompleted(topic.id)) return false;
    if (statusFilter === 'uncompleted' && isCompleted(topic.id)) return false;
    if (statusFilter === 'bookmarked' && !isBookmarked(topic.id)) return false;

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = topic.title.toLowerCase().includes(q);
      const matchDesc = topic.description.toLowerCase().includes(q);
      const matchTag = topic.tags.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchTag) return false;
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FF6B00]/15 text-[#FF8A33] border border-[#FF6B00]/30">
                คลังบทเรียนครบวงจร ({STUDY_TOPICS.length} บท)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">
              คลังเนื้อหาเตรียมสอบสมรรถนะเทคโนโลยีดิจิทัล
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl">
              เรียงลำดับจากพื้นฐานสู่ขั้นประยุกต์ ครอบคลุม RAID, Algorithm, Big-O, Network, Cloud, Cybersecurity, Digital Literacy และ Logical Thinking
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-3 border-t border-[var(--border-color)]">
          {/* Search box */}
          <div className="sm:col-span-8 relative">
            <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="ค้นหาบทเรียน เช่น RAID 6, Binary Search, DHCP, PDPA..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#FF6B00]"
            />
          </div>

          {/* Status filter buttons */}
          <div className="sm:col-span-4 flex items-center rounded-2xl bg-[var(--bg-elevated)] p-1 border border-[var(--border-color)]">
            <button
              onClick={() => setStatusFilter('all')}
              className={`flex-1 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                statusFilter === 'all' ? 'bg-[#FF6B00] text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              ทั้งหมด
            </button>
            <button
              onClick={() => setStatusFilter('bookmarked')}
              className={`flex-1 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                statusFilter === 'bookmarked' ? 'bg-[#FF6B00] text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              ที่คั่นไว้
            </button>
            <button
              onClick={() => setStatusFilter('completed')}
              className={`flex-1 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                statusFilter === 'completed' ? 'bg-[#FF6B00] text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              อ่านแล้ว
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#FF6B00] text-white shadow-sm'
                : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
            }`}
          >
            ทุกหมวดหมู่ ({STUDY_TOPICS.length})
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#FF6B00] text-white shadow-sm'
                  : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
              }`}
            >
              {cat.nameTh}
            </button>
          ))}
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredTopics.map(topic => {
          const completed = isCompleted(topic.id);
          const bookmarked = isBookmarked(topic.id);
          const category = CATEGORIES.find(c => c.id === topic.category);

          return (
            <div
              key={topic.id}
              className={`p-6 rounded-3xl bg-[var(--bg-card)] border transition-all shadow-sm space-y-4 flex flex-col justify-between group hover:border-[#FF6B00]/40 ${
                completed ? 'border-emerald-500/25' : 'border-[var(--border-color)]'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-color)] text-xs font-bold font-mono flex items-center justify-center text-[#FF6B00]">
                      {topic.lessonNumber}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[var(--bg-elevated)] text-[var(--text-muted)]">
                      {category?.nameTh}
                    </span>
                    {topic.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#35D5F2]/15 text-[#35D5F2]">
                        {topic.badge}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onToggleBookmark(topic.id)}
                    className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[#35D5F2] transition-colors"
                    title={bookmarked ? 'ลบที่คั่น' : 'คั่นหน้านี้'}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-[#35D5F2] text-[#35D5F2]' : ''}`} />
                  </button>
                </div>

                <h3 
                  onClick={() => onOpenTopic(topic.id)}
                  className="text-base font-bold text-[var(--text-primary)] group-hover:text-[#FF8A33] transition-colors cursor-pointer leading-snug"
                >
                  {topic.title}
                </h3>

                <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                  {topic.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {topic.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-[var(--bg-elevated)] text-[var(--text-muted)] font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Meta */}
              <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs">
                <div className="flex items-center gap-3 text-[var(--text-muted)]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>{topic.readingTime} นาที</span>
                  </span>
                  <span>{topic.sections.length} หัวข้อย่อย</span>
                  {completed && (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>อ่านแล้ว</span>
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onOpenTopic(topic.id)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#FF6B00]/15 text-[#FF8A33] hover:bg-[#FF6B00] hover:text-white font-bold transition-all flex items-center gap-1 text-xs"
                >
                  <span>เริ่มอ่าน</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
