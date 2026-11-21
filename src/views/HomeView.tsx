import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Award, 
  Flag, 
  Flame, 
  GraduationCap, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Network, 
  Code, 
  BookCheck, 
  BrainCircuit,
  Calendar,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { STUDY_TOPICS, CATEGORIES, getTopicById } from '../data/studyContent';
import { PRACTICE_QUESTIONS } from '../data/practiceQuestions';
import { RECRUITMENT_TIMELINE, SIT_PROGRAMS } from '../data/sitActiveRecruitmentData';
import { CHEAT_SHEET_TRAPS } from '../data/summaryCheatSheet';
import { NavTab } from '../components/Header';
import { CategoryId } from '../types';

interface HomeViewProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenTopic: (topicId: string, sectionId?: string) => void;
  onSelectCategoryFilter: (cat: CategoryId) => void;
  completedIds: string[];
  bookmarkedIds: string[];
  flaggedCount: number;
  lastReadTopicId?: string;
  onOpenSlidesModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenTopic,
  onSelectCategoryFilter,
  completedIds = [],
  bookmarkedIds = [],
  flaggedCount = 0,
  lastReadTopicId,
  onOpenSlidesModal,
}) => {
  const lastReadTopic = lastReadTopicId ? getTopicById(lastReadTopicId) : STUDY_TOPICS[0];
  const progressPercent = Math.round((completedIds.length / STUDY_TOPICS.length) * 100);

  const pillarCards: {
    id: CategoryId;
    titleTh: string;
    titleEn: string;
    icon: React.ElementType;
    desc: string;
    color: string;
    gradient: string;
    topicIds: string[];
  }[] = [
    {
      id: 'network-storage',
      titleTh: '1. เครือข่าย, สตอเรจ & RAID',
      titleEn: 'Network Infrastructure & RAID',
      icon: Network,
      desc: 'IP Address, Subnetting, DHCP DORA, NAT/PAT, ARP, TCP Handshake และการคำนวณ RAID 0-60',
      color: '#FF6B00',
      gradient: 'from-[#FF6B00]/20 to-[#FFA149]/10',
      topicIds: ['topic-1-networking-basics', 'topic-2-ip-addressing', 'topic-3-dhcp-dns-arp-nat', 'topic-4-tcp-ip-handshake', 'topic-5-raid-architecture'],
    },
    {
      id: 'cybersecurity-cloud',
      titleTh: 'ความปลอดภัยไซเบอร์ & คลาวด์',
      titleEn: 'Cloud Computing & Cybersecurity',
      icon: ShieldCheck,
      desc: 'IaaS, PaaS, SaaS, CIA Triad, ภัยคุกคามไซเบอร์, Phishing, Ransomware, Firewall, 2FA และ Cryptography',
      color: '#35D5F2',
      gradient: 'from-[#00D2D3]/20 to-[#35D5F2]/10',
      topicIds: ['topic-6-cloud-computing', 'topic-7-cybersecurity-infosec'],
    },
    {
      id: 'programming-algo',
      titleTh: '2. การเขียนโปรแกรม, อัลกอริทึม & AI',
      titleEn: 'Programming, Algorithms & AI',
      icon: Code,
      desc: 'ตัวแปร, If-Else, Loop, Function, Debugging, Flowchart, Big-O, Binary Search และเทคโนโลยี Generative AI',
      color: '#8B7CFF',
      gradient: 'from-[#8B7CFF]/20 to-[#A78BFA]/10',
      topicIds: ['topic-8-programming-fundamentals', 'topic-9-algorithms-flowcharts', 'topic-10-big-o-search-sort', 'topic-11-artificial-intelligence'],
    },
    {
      id: 'digital-literacy',
      titleTh: '3. ความรู้เท่าทันดิจิทัล & กฎหมาย',
      titleEn: 'Digital Literacy & Cyber Laws',
      icon: BookCheck,
      desc: 'พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA), พ.ร.บ. คอมพิวเตอร์, การตรวจสอบข่าวปลอม (CRAAP Test) และลิขสิทธิ์',
      color: '#53DBAB',
      gradient: 'from-[#10B981]/20 to-[#53DBAB]/10',
      topicIds: ['topic-12-digital-literacy'],
    },
    {
      id: 'problem-solving',
      titleTh: '4. การแก้ปัญหาเชิงตรรกะ & อนุกรม',
      titleEn: 'Problem Solving / Logical Thinking',
      icon: BrainCircuit,
      desc: 'การคิดเชิงคำนวณ, อนุกรมตัวเลข, ตรรกศาสตร์และตารางค่าความจริง, โจทย์เงื่อนไข และการวิเคราะห์ข้อมูล',
      color: '#F59E0B',
      gradient: 'from-[#F59E0B]/20 to-[#FBBF24]/10',
      topicIds: ['topic-13-problem-solving-logic'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
      
      {/* Hero Welcome Card */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#121A2F] via-[#0F172A] to-[#0A0F1D] border border-[var(--border-color)] p-6 sm:p-10 shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FF6B00]/20 text-[#FF8A33] border border-[#FF6B00]/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>โครงการ Active Recruitment SIT มจธ. ปีการศึกษา 2570</span>
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#35D5F2]/20 text-[#35D5F2] border border-[#35D5F2]/30">
              เกณฑ์ผ่านการสอบ ≥ 50%
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              KMUTT_DSI <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8A33] to-[#35D5F2] bg-clip-text text-transparent">เตรียมตัวสอบ</span>
            </h1>
            <p className="text-sm sm:text-base text-[#A7B2C8] leading-relaxed">
              คู่มือติวเข้มและระบบข้อสอบจำลองเสมือนจริง ออกแบบมาเพื่อปูพื้นฐาน (Basic) ให้แน่นที่สุด ครอบคลุมทั้งเนื้อหาคู่มือสอบทางการ (RAID, Algorithms, Networking, TCP) และ 4 เสาหลักการทดสอบสมรรถนะเทคโนโลยีดิจิทัลของคณะ SIT มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onSelectTab('reading')}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-[#FF6B00]/25 hover:opacity-95 active:scale-95 transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>เริ่มอ่านบทเรียน ({STUDY_TOPICS.length} บท)</span>
            </button>

            <button
              onClick={() => onSelectTab('exam')}
              className="px-6 py-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#35D5F2]/50 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-[#35D5F2]" />
              <span>ทำข้อสอบจำลอง ({PRACTICE_QUESTIONS.length} ข้อ)</span>
            </button>

            <button
              onClick={onOpenSlidesModal}
              className="px-5 py-3.5 rounded-2xl bg-[#080D1A] border border-[var(--border-color)] text-[#A7B2C8] hover:text-white text-xs font-semibold transition-all flex items-center gap-2"
            >
              <span>ดูสไลด์ชี้แจงทางการ 7 สไลด์</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Ambient background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FF6B00]/15 via-[#35D5F2]/10 to-transparent blur-3xl pointer-events-none" />
      </section>

      {/* Resume Reading & Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Resume Card (2 cols) */}
        {lastReadTopic && (
          <div className="md:col-span-2 p-6 sm:p-7 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#FF6B00] flex items-center gap-1.5 uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>อ่านต่อจากจุดเดิม</span>
                </span>
                <span className="text-[var(--text-muted)] font-mono">
                  บทที่ {lastReadTopic.lessonNumber} / {STUDY_TOPICS.length}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug">
                {lastReadTopic.title}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] line-clamp-2">
                {lastReadTopic.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ภาพรวมการอ่าน {progressPercent}%</span>
              </div>

              <button
                onClick={() => onOpenTopic(lastReadTopic.id)}
                className="px-4 py-2 rounded-xl bg-[#FF6B00]/15 text-[#FF8A33] hover:bg-[#FF6B00] hover:text-white font-bold text-xs transition-all flex items-center gap-1.5"
              >
                <span>เปิดอ่านต่อ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Flagged Review Quick Card */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[var(--bg-card)] border border-red-500/20 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-red-400 flex items-center gap-1.5 uppercase tracking-wider">
                <Flag className="w-3.5 h-3.5 fill-red-400" />
                <span>จุดที่ติดธงไว้</span>
              </span>
              <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 text-xs font-bold font-mono flex items-center justify-center">
                {flaggedCount}
              </span>
            </div>
            <h3 className="text-base font-bold text-[var(--text-primary)]">
              {flaggedCount > 0 ? `มี ${flaggedCount} หัวข้อที่บันทึกไว้` : 'ยังไม่มีจุดที่ติดธง'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              จุดที่คุณไม่เข้าใจหรือคำถามที่ต้องการทบทวนซ้ำก่อนเข้าห้องสอบ
            </p>
          </div>

          <button
            onClick={() => onSelectTab('flagged')}
            className="w-full py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white font-bold text-xs transition-all text-center"
          >
            เปิดดูรายการที่ติดธง
          </button>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-[var(--text-primary)]">
              4 เสาหลักการทดสอบสมรรถนะเทคโนโลยีดิจิทัล
            </h2>
            <p className="text-xs text-[var(--text-muted)]">
              อิงตามประกาศโครงการ Active Recruitment คณะ SIT มจธ. (เกณฑ์ผ่าน 50%)
            </p>
          </div>
          <button
            onClick={() => onSelectTab('library')}
            className="text-xs font-bold text-[#FF6B00] hover:underline flex items-center gap-1"
          >
            <span>ดูทั้งหมด</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillarCards.map(pillar => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                onClick={() => {
                  onSelectCategoryFilter(pillar.id);
                  onSelectTab('library');
                }}
                className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#FF6B00]/40 transition-all shadow-sm space-y-4 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
                    style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[#FF8A33] transition-colors">
                      {pillar.titleTh}
                    </h3>
                    <div className="text-[11px] font-mono text-[var(--text-muted)]">
                      {pillar.titleEn}
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <span>{pillar.topicIds.length} บทเรียน</span>
                  <span className="font-semibold text-[#FF8A33] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>เปิดอ่าน</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Program Criteria Preview (IT, DSI, CS) */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
              เกณฑ์คะแนนขั้นต่ำ โควตาเครือข่ายโรงเรียน SIT มจธ.
            </span>
            <h2 className="text-lg sm:text-xl font-black text-[var(--text-primary)] mt-1">
              3 หลักสูตรที่เปิดรับสมัคร (เสนอชื่อไม่เกิน 3 คน/โรงเรียน)
            </h2>
          </div>

          <button
            onClick={() => onSelectTab('sit-guide')}
            className="px-4 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)] hover:border-[#FF6B00] text-xs font-bold text-[var(--text-primary)] transition-all flex items-center gap-1.5"
          >
            <span>ดูรายละเอียด & กำหนดการ</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF6B00]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SIT_PROGRAMS.map(prog => (
            <div
              key={prog.code}
              className="p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-black text-[#FF6B00] font-mono">
                  {prog.code}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)] font-semibold">
                  โควตา 2570
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[var(--text-primary)] line-clamp-1">{prog.degreeNameTh}</h4>
                <p className="text-[11px] text-[var(--text-secondary)] mt-1">{prog.highlight}</p>
              </div>
              <div className="pt-2 border-t border-[var(--border-color)] grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-1.5 rounded-lg bg-[var(--bg-card)]">
                  <div className="text-[10px] text-[var(--text-muted)]">GPAX</div>
                  <div className="font-bold text-[var(--text-primary)]">{prog.gpax.toFixed(2)}</div>
                </div>
                <div className="p-1.5 rounded-lg bg-[var(--bg-card)]">
                  <div className="text-[10px] text-[var(--text-muted)]">GPA คณิต</div>
                  <div className="font-bold text-[var(--text-primary)]">{prog.gpaMath.toFixed(2)}</div>
                </div>
                <div className="p-1.5 rounded-lg bg-[var(--bg-card)]">
                  <div className="text-[10px] text-[var(--text-muted)]">GPA อังกฤษ</div>
                  <div className="font-bold text-[var(--text-primary)]">{prog.gpaEng.toFixed(2)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Traps & Formulas Quick Teaser */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-[#FF6B00]/10 border border-[#FF6B00]/25 space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#FF8A33]">
              <Flame className="w-4 h-4 text-[#FF6B00]" />
              <span>สรุปจุดจำ & กับดักข้อสอบ (Cheat Sheet)</span>
            </div>
            <h3 className="text-base font-bold text-[var(--text-primary)]">
              ตารางเปรียบเทียบจุดที่คนมักตอบผิด
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              รวบรวม 10 กับดักคลาสสิก: RAID 6 vs RAID 5, Binary Search vs Linear Search, DORA vs Handshake, และความหมายของคำว่า ACK
            </p>
          </div>
          <button
            onClick={() => onSelectTab('cheatsheet')}
            className="w-full py-2.5 rounded-xl bg-[#FF6B00] text-white font-bold text-xs shadow-md hover:opacity-95 transition-all text-center"
          >
            เปิดตารางสรุปจุดจำ
          </button>
        </div>

        <div className="p-6 rounded-3xl bg-[#35D5F2]/10 border border-[#35D5F2]/25 space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#35D5F2]">
              <Award className="w-4 h-4" />
              <span>แบบทดสอบประเมินสมรรถนะ</span>
            </div>
            <h3 className="text-base font-bold text-[var(--text-primary)]">
              ฝึกทำโจทย์ 25 ข้อทางการ + 30 ข้อเสมือนจริง
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              จำลองบรรยากาศสอบจริง พร้อมตรวจคำตอบและแสดงคำอธิบายเหตุผลอย่างละเอียดทันทีหลังตอบ
            </p>
          </div>
          <button
            onClick={() => onSelectTab('exam')}
            className="w-full py-2.5 rounded-xl bg-[#35D5F2] text-black font-bold text-xs shadow-md hover:opacity-95 transition-all text-center"
          >
            เริ่มทำแบบทดสอบ
          </button>
        </div>
      </section>

    </div>
  );
};
