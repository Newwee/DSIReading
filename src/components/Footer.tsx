import React from 'react';
import { Sparkles, Heart, GraduationCap, ExternalLink, Shield, BookOpen } from 'lucide-react';
import { NavTab } from './Header';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="w-full border-t border-[var(--border-color)] bg-[var(--bg-secondary)] mt-auto relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#FF6B00] to-[#35D5F2] p-[1px]">
                <div className="w-full h-full bg-[#080D1A] rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#FF6B00]" />
                </div>
              </div>
              <span className="font-black text-base tracking-tight text-[var(--text-primary)]">
                KMUTT_DSI เตรียมตัวสอบ
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-md">
              ระบบสรุปเนื้อหาและแบบทดสอบเตรียมความพร้อมสำหรับการทดสอบสมรรถนะด้านเทคโนโลยีดิจิทัล (Digital Technology Competency Test) โครงการ Active Recruitment คณะเทคโนโลยีสารสนเทศ (SIT) มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ประจำปีการศึกษา 2570
            </p>
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] pt-1">
              <span className="px-2 py-0.5 rounded-md bg-[#FF6B00]/10 text-[#FF8A33] font-semibold border border-[#FF6B00]/20">
                หลักสูตร IT • DSI • CS
              </span>
              <span>เกณฑ์ผ่าน 50%</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              เมนูทบทวน
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onSelectTab('library')}
                  className="text-[var(--text-secondary)] hover:text-[#FF6B00] transition-colors"
                >
                  คลังบทเรียน 15 หัวข้อ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('exam')}
                  className="text-[var(--text-secondary)] hover:text-[#FF6B00] transition-colors"
                >
                  แบบทดสอบ 55 ข้อพร้อมเฉลย
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('cheatsheet')}
                  className="text-[var(--text-secondary)] hover:text-[#FF6B00] transition-colors"
                >
                  สรุปจุดจำ & สูตรคำนวณ RAID
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('flagged')}
                  className="text-[var(--text-secondary)] hover:text-[#FF6B00] transition-colors"
                >
                  จุดที่ไม่เข้าใจ (Flagged 🚩)
                </button>
              </li>
            </ul>
          </div>

          {/* SIT Official Contact */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              ข้อมูลคณะ SIT มจธ.
            </div>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              <li>โทรศัพท์: 02-470-9882</li>
              <li>อีเมล: info@sit.kmutt.ac.th</li>
              <li>
                <a 
                  href="https://www.sit.kmutt.ac.th" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[#35D5F2] hover:underline"
                >
                  <span>www.sit.kmutt.ac.th</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>126 ถ.ประชาอุทิศ แขวงบางมด เขตทุ่งครุ กทม. 10140</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div>
            © 2570 KMUTT_DSI Study Prep. All study notes referenced from SIT Active Recruitment & Official IT Guide.
          </div>
          <div className="flex items-center gap-1">
            <span>สร้างขึ้นเพื่อเป็นวิทยาทานแก่นักเรียนผู้สมัครทุกท่าน</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
