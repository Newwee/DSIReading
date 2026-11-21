import React from 'react';
import { 
  Layers, 
  BookOpen, 
  FileText, 
  Award, 
  Flag,
  MoreHorizontal,
  Flame,
  Bookmark,
  GraduationCap,
  Search,
  Sun,
  Moon,
  X
} from 'lucide-react';
import { NavTab } from './Header';

interface AppleTabBarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  bookmarkedCount: number;
  flaggedCount: number;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenSearch: () => void;
  moreSheetOpen: boolean;
  onToggleMoreSheet: () => void;
  visible?: boolean;
}

export const AppleTabBar: React.FC<AppleTabBarProps> = ({
  currentTab,
  onSelectTab,
  bookmarkedCount,
  flaggedCount,
  theme,
  onToggleTheme,
  onOpenSearch,
  moreSheetOpen,
  onToggleMoreSheet,
  visible = true,
}) => {
  const primaryTabs: { id: NavTab; label: string; icon: React.ElementType; badge?: number }[] = [
    { id: 'home', label: 'หน้าแรก', icon: Layers },
    { id: 'library', label: 'คลังบทเรียน', icon: BookOpen },
    { id: 'reading', label: 'อ่านเนื้อหา', icon: FileText },
    { id: 'exam', label: 'ข้อสอบ', icon: Award },
    { id: 'flagged', label: 'ติดธงไว้', icon: Flag, badge: flaggedCount },
  ];

  const moreItems: { id: NavTab; label: string; icon: React.ElementType; desc: string; badge?: number }[] = [
    { id: 'cheatsheet', label: 'สรุปจุดจำ & สูตรลัด', icon: Flame, desc: 'ตารางกับดักข้อสอบ สูตร RAID และ Big-O' },
    { id: 'sit-guide', label: 'ข้อมูลโควตา SIT มจธ.', icon: GraduationCap, desc: 'เกณฑ์ GPAX, ไทม์ไลน์ 8 ขั้นตอน และสไลด์ 7 รูป' },
    { id: 'bookmarks', label: 'ที่คั่น & ประวัติอ่าน', icon: Bookmark, desc: 'บทเรียนที่คั่นหน้าและประวัติการอ่านล่าสุด', badge: bookmarkedCount },
  ];

  return (
    <>
      {/* Mobile More Sheet Modal */}
      {moreSheetOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            onClick={onToggleMoreSheet} 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
          />
          <div 
            className="absolute bottom-20 left-4 right-4 max-w-lg mx-auto rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl p-5 space-y-4 animate-fade-in"
            style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
          >
            <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
              <span className="text-sm font-bold text-[var(--text-primary)]">
                เมนูและการตั้งค่าเพิ่มเติม
              </span>
              <button 
                onClick={onToggleMoreSheet}
                className="p-1.5 rounded-xl hover:bg-[var(--bg-elevated)] text-[var(--text-muted)]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  onOpenSearch();
                  onToggleMoreSheet();
                }}
                className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#FF6B00]/40 flex items-center gap-2.5 text-xs font-semibold text-[var(--text-primary)] text-left transition-all"
              >
                <Search className="w-4 h-4 text-[#FF6B00]" />
                <span>ค้นหาเนื้อหา (⌘K)</span>
              </button>

              <button
                onClick={onToggleTheme}
                className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#35D5F2]/40 flex items-center gap-2.5 text-xs font-semibold text-[var(--text-primary)] text-left transition-all"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 text-[#F59E0B]" />
                    <span>ธีมสว่าง (Light)</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-[#8B7CFF]" />
                    <span>ธีมมืด (Dark)</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-1.5 pt-1">
              {moreItems.map(item => {
                const Icon = item.icon;
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectTab(item.id);
                      onToggleMoreSheet();
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all text-left ${
                      isActive 
                        ? 'bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FF8A33]' 
                        : 'bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-primary)]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[var(--bg-card)]">
                        <Icon className="w-4 h-4 text-[#FF6B00]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[var(--text-primary)]">{item.label}</div>
                        <div className="text-[11px] text-[var(--text-muted)] line-clamp-1">{item.desc}</div>
                      </div>
                    </div>
                    {item.badge !== undefined && item.badge > 0 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#35D5F2]/20 text-[#35D5F2] font-bold">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Persistent Bottom Tab Bar */}
      <nav
        className={`lg:hidden fixed bottom-3 left-4 right-4 z-40 max-w-lg mx-auto rounded-3xl glass-panel border border-[var(--border-color)] shadow-2xl transition-transform duration-300 ease-in-out ${
          visible ? 'translate-y-0' : 'translate-y-28'
        }`}
        style={{
          marginBottom: 'env(safe-area-inset-bottom, 0px)',
          background: 'rgba(15, 23, 42, 0.88)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="flex items-center justify-around p-1.5">
          {primaryTabs.map(tab => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all relative ${
                  isActive
                    ? 'text-[#FF6B00] bg-[#FF6B00]/10 font-bold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
                }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 text-[#FF6B00]' : ''}`} />
                  {tab.badge !== undefined && tab.badge > 0 && (
                    <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center">
                      {tab.badge}
                    </span>
                  )}
                </div>
                <span className="text-[10px] mt-1 font-medium tracking-tight">
                  {tab.label}
                </span>
              </button>
            );
          })}

          {/* More Sheets Button */}
          <button
            onClick={onToggleMoreSheet}
            className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all ${
              moreSheetOpen ? 'text-[#35D5F2] bg-[#35D5F2]/10' : 'text-[var(--text-muted)]'
            }`}
          >
            <MoreHorizontal className="w-5 h-5" />
            <span className="text-[10px] mt-1 font-medium">เพิ่มเติม</span>
          </button>
        </div>
      </nav>
    </>
  );
};
