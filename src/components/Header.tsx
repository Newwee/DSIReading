import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Sun, 
  Moon, 
  BookOpen, 
  Bookmark, 
  FileText, 
  Award,
  Layers,
  Flag,
  Flame,
  GraduationCap,
  Menu,
  X
} from 'lucide-react';
import { GradientText } from './ui/GradientText';

import { ProgramId } from '../types';

export type NavTab = 
  | 'home' 
  | 'library' 
  | 'reading' 
  | 'exam' 
  | 'cheatsheet' 
  | 'flagged' 
  | 'sit-guide' 
  | 'bookmarks';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenSearch: () => void;
  bookmarkedCount: number;
  flaggedCount: number;
  visible?: boolean;
  activeProgram?: ProgramId;
  onSelectProgram?: (prog: ProgramId) => void;
  questionCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  theme,
  onToggleTheme,
  onOpenSearch,
  bookmarkedCount,
  flaggedCount,
  visible = true,
  activeProgram = 'DSI',
  onSelectProgram,
  questionCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isIT = activeProgram === 'IT';
  const isCS = activeProgram === 'CS';
  const programColor = isIT ? 'text-[#35D5F2]' : isCS ? 'text-[#8B7CFF]' : 'text-[#FF6B00]';

  const navItems: { id: NavTab; label: string; icon: React.ElementType; badge?: number; tag?: string }[] = [
    { id: 'home', label: 'แดชบอร์ด', icon: Layers },
    { id: 'library', label: 'คลังบทเรียน', icon: BookOpen },
    { id: 'reading', label: 'อ่านเตรียมสอบ', icon: FileText },
    { id: 'exam', label: 'แบบทดสอบ', icon: Award, tag: questionCount ? `${questionCount} ข้อ` : 'ข้อสอบ' },
    { id: 'cheatsheet', label: 'สรุปจุดจำ & สูตร', icon: Flame, tag: 'HOT' },
    { id: 'flagged', label: 'จุดที่ติดธงไว้', icon: Flag, badge: flaggedCount },
    { id: 'sit-guide', label: 'โควตา SIT มจธ.', icon: GraduationCap, tag: '2570' },
    { id: 'bookmarks', label: 'ที่คั่น & ประวัติ', icon: Bookmark, badge: bookmarkedCount },
  ];

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full glass-header transition-transform duration-300 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full pointer-events-none'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Logo & Brand */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group"
          >
            <div className={`w-10 h-10 rounded-xl p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md ${
              isIT ? 'bg-gradient-to-tr from-[#00D2D3] to-[#35D5F2]' 
              : isCS ? 'bg-gradient-to-tr from-[#8B7CFF] to-[#A78BFA]' 
              : 'bg-gradient-to-tr from-[#FF6B00] via-[#FF8A33] to-[#35D5F2]'
            }`}>
              <div className="w-full h-full bg-[#080D1A] rounded-[10px] flex items-center justify-center">
                <Sparkles className={`w-5 h-5 ${programColor}`} />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className={`text-[11px] font-black tracking-wider uppercase ${programColor}`}>
                  KMUTT SIT
                </span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#35D5F2]/20 text-[#35D5F2] font-bold border border-[#35D5F2]/30">2570</span>
              </div>
              <div className="text-sm font-black text-[var(--text-primary)] leading-tight flex items-center gap-1">
                <span className={programColor}>KMUTT_{activeProgram}</span>
                <span className="text-[#A7B2C8] font-normal text-xs">เตรียมตัวสอบ</span>
              </div>
            </div>
          </button>

          {/* Quick return to DSI button if in IT or CS */}
          {activeProgram !== 'DSI' && onSelectProgram && (
            <button
              onClick={() => onSelectProgram('DSI')}
              className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[#FF6B00] hover:border-[#FF6B00]/40 transition-all ml-2"
              title="คลิกเพื่อสลับกลับสู่สาขาหลัก DSI"
            >
              <span>← กลับ DSI</span>
            </button>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 relative ${
                  isActive
                    ? 'bg-[#FF6B00]/15 text-[#FF8A33] border border-[#FF6B00]/30 shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#FF6B00]' : ''}`} />
                <span>{item.label}</span>
                {item.tag && (
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#FF6B00]/20 text-[#FF8A33] font-bold">
                    {item.tag}
                  </span>
                )}
                {item.badge !== undefined && item.badge > 0 && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                    item.id === 'flagged' ? 'bg-red-500/20 text-red-400' : 'bg-[#35D5F2]/20 text-[#35D5F2]'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#FF6B00]/40 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all flex items-center gap-2 text-xs font-medium"
            title="ค้นหาเนื้อหา (Ctrl + K)"
          >
            <Search className="w-4 h-4 text-[#FF6B00]" />
            <span className="hidden sm:inline">ค้นหา...</span>
            <kbd className="hidden md:inline px-1.5 py-0.5 rounded bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[10px] text-[var(--text-muted)] font-mono">
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
            title={theme === 'dark' ? 'เปลี่ยนเป็นธีมสว่าง' : 'เปลี่ยนเป็นธีมมืด'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#F59E0B]" /> : <Moon className="w-4 h-4 text-[#8B7CFF]" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="lg:hidden p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-3 space-y-1 animate-fade-in shadow-xl">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#FF6B00]/15 text-[#FF8A33] border border-[#FF6B00]/30'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#FF6B00]' : ''}`} />
                  <span>{item.label}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {item.tag && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FF6B00]/20 text-[#FF8A33] font-bold">
                      {item.tag}
                    </span>
                  )}
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      item.id === 'flagged' ? 'bg-red-500/20 text-red-400' : 'bg-[#35D5F2]/20 text-[#35D5F2]'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
