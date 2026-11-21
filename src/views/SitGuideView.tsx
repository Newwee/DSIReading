import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  CheckCircle2, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Sparkles, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { SIT_PROGRAMS, RECRUITMENT_TIMELINE, SIT_SLIDES } from '../data/sitActiveRecruitmentData';

interface SitGuideViewProps {
  onOpenSlidesModal: () => void;
  onOpenTopic: (topicId: string) => void;
}

export const SitGuideView: React.FC<SitGuideViewProps> = ({
  onOpenSlidesModal,
  onOpenTopic,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
      
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#121A2F] via-[#0F172A] to-[#0A0F1D] border border-[var(--border-color)] space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FF6B00]/20 text-[#FF8A33] border border-[#FF6B00]/30 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>โครงการ Active Recruitment ประจำปีการศึกษา 2570</span>
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-[#35D5F2]/20 text-[#35D5F2] font-semibold border border-[#35D5F2]/30">
            โควตาเครือข่ายโรงเรียน (ไม่เกิน 3 คน/โรงเรียน)
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            คู่มือการรับสมัคร คณะเทคโนโลยีสารสนเทศ (SIT) มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
          </h1>
          <p className="text-xs sm:text-sm text-[#A7B2C8] leading-relaxed max-w-3xl">
            สรุปข้อมูลทางการจากเวทีชี้แจงสำหรับคุณครู (วันที่ 16 พ.ย. 2569) เกณฑ์คะแนน GPAX, 4 เสาหลักการประเมินสมรรถนะ, กำหนดการคัดเลือก 8 ขั้นตอน และแนวทางการเตรียมตัวสอบสัมภาษณ์
          </p>
        </div>

        <div className="pt-2 flex flex-wrap gap-3">
          <button
            onClick={onOpenSlidesModal}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] text-white font-bold text-xs shadow-md hover:opacity-95 transition-all flex items-center gap-2"
          >
            <Maximize2 className="w-4 h-4" />
            <span>เปิดดูสไลด์ชี้แจงฉบับเต็ม 7 สไลด์</span>
          </button>

          <button
            onClick={() => onOpenTopic('topic-14-sit-kmutt-guide')}
            className="px-5 py-2.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] text-white font-bold text-xs hover:border-[#35D5F2] transition-all flex items-center gap-2"
          >
            <span>อ่านบทเรียนสรุปเกณฑ์รับสมัคร</span>
            <ArrowRight className="w-4 h-4 text-[#35D5F2]" />
          </button>
        </div>
      </div>

      {/* 3 Programs Criteria Grid */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-black text-[var(--text-primary)]">
            1. เกณฑ์ด้านผลการเรียน (GPAX และ GPA รายวิชา)
          </h2>
          <p className="text-xs text-[var(--text-muted)]">
            โรงเรียนสามารถเสนอชื่อนักเรียนได้ไม่เกิน 3 คนต่อโรงเรียน รวมทุกหลักสูตร โดยต้องมีผลการเรียนไม่ต่ำกว่าเกณฑ์ดังนี้
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SIT_PROGRAMS.map(prog => (
            <div
              key={prog.code}
              className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-[#FF6B00] font-mono">
                  {prog.code}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-muted)] font-semibold">
                  โควตา 2570
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] leading-snug">{prog.degreeNameTh}</h3>
                <div className="text-[11px] font-mono text-[var(--text-muted)] mt-0.5">{prog.degreeNameEn}</div>
                <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">{prog.description}</p>
              </div>

              <div className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[var(--text-muted)]">GPAX ขั้นต่ำ:</span>
                  <span className="font-bold text-[#FF8A33] font-mono text-sm">{prog.gpax.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--text-muted)]">GPA คณิตศาสตร์:</span>
                  <span className="font-bold text-[var(--text-primary)] font-mono">{prog.gpaMath.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--text-muted)]">GPA ภาษาอังกฤษ:</span>
                  <span className="font-bold text-[var(--text-primary)] font-mono">{prog.gpaEng.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Assessment Dimensions */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-5">
        <div>
          <h2 className="text-lg sm:text-xl font-black text-[var(--text-primary)]">
            2. เกณฑ์ด้านผลงาน ประสบการณ์ และศักยภาพ (4 มิติ)
          </h2>
          <p className="text-xs text-[var(--text-muted)]">
            การคัดเลือกไม่ได้ดูเฉพาะผลการเรียน แต่เน้นประเมินศักยภาพรอบด้านผ่าน 4 มิติ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#FF6B00]/15 text-[#FF8A33] font-bold text-xs flex items-center justify-center font-mono">01</span>
              <h3 className="text-xs font-bold text-[var(--text-primary)]">ผลงานหรือโครงงาน</h3>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed pl-8">
              โครงงานคอมพิวเตอร์ เทคโนโลยีสารสนเทศ และนวัตกรรมดิจิทัลที่เคยพัฒนา
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#35D5F2]/15 text-[#35D5F2] font-bold text-xs flex items-center justify-center font-mono">02</span>
              <h3 className="text-xs font-bold text-[var(--text-primary)]">กิจกรรมและการแข่งขัน</h3>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed pl-8">
              การเข้าร่วมค่ายอบรมไอที หรือการแข่งขันด้านเทคโนโลยีและนวัตกรรม
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#8B7CFF]/15 text-[#8B7CFF] font-bold text-xs flex items-center justify-center font-mono">03</span>
              <h3 className="text-xs font-bold text-[var(--text-primary)]">ทักษะด้านเทคนิค</h3>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed pl-8">
              ความสามารถในการเขียนโปรแกรม พัฒนาซอฟต์แวร์ หรือการวิเคราะห์ข้อมูล
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-400 font-bold text-xs flex items-center justify-center font-mono">04</span>
              <h3 className="text-xs font-bold text-[var(--text-primary)]">ศักยภาพการเรียนรู้</h3>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed pl-8">
              ความคิดสร้างสรรค์ การแก้ปัญหาอย่างมีตรรกะ และความพร้อมในการศึกษาต่อ
            </p>
          </div>
        </div>
      </section>

      {/* 8 Steps Timeline */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-black text-[var(--text-primary)]">
            3. กำหนดการดำเนินโครงการ (8 ขั้นตอนสำคัญ)
          </h2>
          <p className="text-xs text-[var(--text-muted)]">
            ไทม์ไลน์กระบวนการคัดเลือกตั้งแต่เสนอชื่อจนถึงยืนยันสิทธิ์ในระบบ มจธ.
          </p>
        </div>

        <div className="space-y-2.5">
          {RECRUITMENT_TIMELINE.map(step => (
            <div
              key={step.step}
              className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                step.status === 'current'
                  ? 'bg-[#FF6B00]/10 border-[#FF6B00]/40 shadow-sm'
                  : 'bg-[var(--bg-card)] border-[var(--border-color)]'
              }`}
            >
              <div className="flex items-start sm:items-center gap-3">
                <span className={`w-7 h-7 rounded-xl text-xs font-bold font-mono flex items-center justify-center shrink-0 ${
                  step.status === 'current' ? 'bg-[#FF6B00] text-white' : 'bg-[var(--bg-elevated)] text-[var(--text-muted)]'
                }`}>
                  {step.step}
                </span>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                    {step.title}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] mt-0.5">
                    {step.description}
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono font-semibold text-[#FF8A33] bg-[var(--bg-elevated)] px-3 py-1.5 rounded-xl shrink-0 self-start sm:self-center border border-[var(--border-color)]">
                {step.timeline}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official Slides Carousel Preview */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-[var(--text-primary)]">
              4. สไลด์ชี้แจงทางการจากที่ประชุม (7 สไลด์)
            </h2>
            <p className="text-xs text-[var(--text-muted)]">
              ถ่ายจากเวทีชี้แจงสำหรับคุณครู ณ อาคารคณะ SIT มจธ.
            </p>
          </div>

          <button
            onClick={onOpenSlidesModal}
            className="text-xs font-bold text-[#FF6B00] hover:underline flex items-center gap-1"
          >
            <span>เปิดดูแบบขยายใหญ่</span>
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {SIT_SLIDES.slice(0, 4).map((slide, idx) => (
            <div
              key={slide.id}
              onClick={onOpenSlidesModal}
              className="rounded-2xl overflow-hidden border border-[var(--border-color)] hover:border-[#FF6B00] cursor-pointer group transition-all"
            >
              <img src={slide.filename} alt={slide.title} className="w-full h-28 object-cover group-hover:scale-105 transition-transform" />
              <div className="p-2 bg-[var(--bg-elevated)] text-[10px] font-bold text-[var(--text-primary)] line-clamp-1">
                สไลด์ที่ {idx + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Channels */}
      <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-elevated)] to-[var(--bg-card)] border border-[var(--border-color)] space-y-5">
        <h2 className="text-lg sm:text-xl font-black text-[var(--text-primary)] flex items-center gap-2">
          <span>ข้อมูลติดต่อ คณะเทคโนโลยีสารสนเทศ (SIT) มจธ.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-1">
            <span className="text-[10px] font-bold text-[#FF6B00] uppercase">ผู้ประสานงาน & หน่วยงาน</span>
            <div className="font-bold text-[var(--text-primary)]">คุณรุ่งนภา คำภัยวงศ์พิทักษ์</div>
            <div className="text-[var(--text-secondary)]">ฝ่ายงานพัฒนานักศึกษา คณะ SIT มจธ.</div>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-1">
            <span className="text-[10px] font-bold text-[#35D5F2] uppercase">เบอร์โทรศัพท์ & อีเมล</span>
            <div className="font-bold text-[var(--text-primary)]">โทร: 02-470-9882</div>
            <div className="text-[var(--text-secondary)]">อีเมล: info@sit.kmutt.ac.th</div>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-1 sm:col-span-2">
            <span className="text-[10px] font-bold text-[#53DBAB] uppercase">ที่อยู่และช่องทางออนไลน์</span>
            <div className="text-[var(--text-secondary)]">126 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140</div>
            <div className="pt-1 flex flex-wrap gap-4 text-[#35D5F2]">
              <a href="https://www.sit.kmutt.ac.th" target="_blank" rel="noreferrer" className="hover:underline">www.sit.kmutt.ac.th</a>
              <span>LINE: @SIT.KMUTT</span>
              <span>FB/IG: SIT.Family</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
