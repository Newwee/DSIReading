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
import { ProgramId } from '../types';
import AnimatedContent from '../components/ui/AnimatedContent';

interface SitGuideViewProps {
  onOpenSlidesModal: () => void;
  onOpenTopic: (topicId: string) => void;
  currentProgram?: ProgramId;
  onSelectProgram?: (prog: ProgramId) => void;
}

export const SitGuideView: React.FC<SitGuideViewProps> = ({
  onOpenSlidesModal,
  onOpenTopic,
  currentProgram = 'DSI',
  onSelectProgram,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
      
      {/* Header */}
      <AnimatedContent distance={30} duration={0.5} trigger="mount">
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
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] text-white font-bold text-xs shadow-md hover:shadow-[#FF6B00]/25 transition-all flex items-center gap-2"
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
      </AnimatedContent>

      {/* 3 Programs Criteria Grid with Direct Entry to IT, DSI, CS */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-black text-[var(--text-primary)]">
            1. เกณฑ์ด้านผลการเรียน (GPAX และ GPA รายวิชา)
          </h2>
          <p className="text-xs text-[var(--text-muted)]">
            โรงเรียนสามารถเสนอชื่อนักเรียนได้ไม่เกิน 3 คนต่อโรงเรียน รวมทุกหลักสูตร โดยสามารถคลิกเข้าสู่โหมดเตรียมสอบของแต่ละสาขาได้ด้านล่างนี้
          </p>
        </div>

        <AnimatedContent distance={40} stagger={0.08} trigger="mount">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SIT_PROGRAMS.map(prog => {
              const isCurrent = currentProgram === prog.code;
              const isIT = prog.code === 'IT';
              const isCS = prog.code === 'CS';
              const isDSI = prog.code === 'DSI';

              const cardBorder = isCurrent 
                ? (isIT ? 'border-[#35D5F2] shadow-lg shadow-[#35D5F2]/10 ring-1 ring-[#35D5F2]/40' 
                   : isCS ? 'border-[#8B7CFF] shadow-lg shadow-[#8B7CFF]/10 ring-1 ring-[#8B7CFF]/40'
                   : 'border-[#FF6B00] shadow-lg shadow-[#FF6B00]/10 ring-1 ring-[#FF6B00]/40')
                : 'border-[var(--border-color)]';

              const codeColor = isIT ? 'text-[#35D5F2]' : isCS ? 'text-[#8B7CFF]' : 'text-[#FF6B00]';

              return (
                <div
                  key={prog.code}
                  className={`p-6 rounded-3xl bg-[var(--bg-card)] border ${cardBorder} space-y-4 shadow-sm transition-all flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-2xl font-black ${codeColor} font-mono`}>
                        {prog.code}
                      </span>
                      {isCurrent ? (
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                          ● สาขาปัจจุบัน
                        </span>
                      ) : (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-muted)] font-semibold">
                          โควตา 2570
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-[var(--text-primary)] leading-snug">{prog.degreeNameTh}</h3>
                      <div className="text-[11px] font-mono text-[var(--text-muted)] mt-0.5">{prog.degreeNameEn}</div>
                      <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">{prog.description}</p>
                    </div>

                    <div className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[var(--text-muted)]">GPAX ขั้นต่ำ:</span>
                        <span className={`font-bold font-mono text-sm ${codeColor}`}>{prog.gpax.toFixed(2)}</span>
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

                  {/* Program Switch Action Buttons */}
                  {onSelectProgram && (
                    <div className="pt-2">
                      {isIT && (
                        <button
                          onClick={() => onSelectProgram('IT')}
                          className={`w-full py-2.5 px-3 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 ${
                            isCurrent
                              ? 'bg-[#35D5F2]/20 text-[#35D5F2] border border-[#35D5F2]/40 hover:bg-[#35D5F2]/30'
                              : 'bg-gradient-to-r from-[#00D2D3] to-[#35D5F2] text-black hover:opacity-95 shadow-md shadow-[#35D5F2]/20'
                          }`}
                        >
                          <span>{isCurrent ? 'กำลังอ่านเนื้อหา IT (คลิกดูคลังบทเรียน)' : 'เข้าสู่โหมดเตรียมสอบ IT (วท.บ.)'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {isCS && (
                        <button
                          onClick={() => onSelectProgram('CS')}
                          className={`w-full py-2.5 px-3 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 ${
                            isCurrent
                              ? 'bg-[#8B7CFF]/20 text-[#8B7CFF] border border-[#8B7CFF]/40 hover:bg-[#8B7CFF]/30'
                              : 'bg-gradient-to-r from-[#8B7CFF] to-[#A78BFA] text-white hover:opacity-95 shadow-md shadow-[#8B7CFF]/20'
                          }`}
                        >
                          <span>{isCurrent ? 'กำลังอ่านเนื้อหา CS (คลิกดูคลังบทเรียน)' : 'เข้าสู่โหมดเตรียมสอบ CS (English)'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {isDSI && (
                        <button
                          onClick={() => onSelectProgram('DSI')}
                          className={`w-full py-2.5 px-3 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 ${
                            isCurrent
                              ? 'bg-[#FF6B00]/20 text-[#FF8A33] border border-[#FF6B00]/40 hover:bg-[#FF6B00]/30'
                              : 'bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] text-white hover:opacity-95 shadow-md shadow-[#FF6B00]/20'
                          }`}
                        >
                          <span>{isCurrent ? 'สาขาหลักปัจจุบัน (DSI)' : 'กลับสู่โหมดเตรียมสอบ DSI'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </AnimatedContent>
      </section>

      {/* 4 Assessment Dimensions */}
      <AnimatedContent distance={40} delay={0.15}>
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
                การเข้าร่วมค่ายอบรมไอที ค่ายโอลิมปิกวิชาการ หรือการแข่งขันพัฒนาซอฟต์แวร์
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-[#53DBAB]/15 text-[#53DBAB] font-bold text-xs flex items-center justify-center font-mono">03</span>
                <h3 className="text-xs font-bold text-[var(--text-primary)]">ทักษะด้านเทคนิค</h3>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed pl-8">
                ทักษะเขียนโปรแกรม พัฒนาเว็บ/แอป วิเคราะห์ข้อมูล หรือโครงสร้างพื้นฐานระบบ
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-pink-500/15 text-pink-400 font-bold text-xs flex items-center justify-center font-mono">04</span>
                <h3 className="text-xs font-bold text-[var(--text-primary)]">ศักยภาพการเรียนรู้</h3>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed pl-8">
                ความคิดสร้างสรรค์ ตรรกะการแก้ปัญหา และความมุ่งมั่นพร้อมเรียนรู้ในระดับมหาวิทยาลัย
              </p>
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* Timeline Section */}
      <AnimatedContent distance={40} delay={0.2}>
        <section className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-6">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-[var(--text-primary)] flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#FF6B00]" />
              <span>3. กำหนดการสำคัญ 8 ขั้นตอน (Timeline ปีการศึกษา 2570)</span>
            </h2>
            <p className="text-xs text-[var(--text-muted)]">
              ติดตามกำหนดการอย่างใกล้ชิดเพื่อไม่ให้พลาดสิทธิ์
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[var(--border-color)]">
            {RECRUITMENT_TIMELINE.map((step) => {
              const isHighlight = step.status === 'current';
              return (
                <div key={step.step} className="relative space-y-1">
                  <div className={`absolute -left-6 sm:-left-8 top-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold font-mono border ${
                    isHighlight 
                      ? 'bg-[#FF6B00] text-white border-[#FF6B00] shadow-md shadow-[#FF6B00]/40' 
                      : 'bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-color)]'
                  }`}>
                    {step.step}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-xs font-bold ${isHighlight ? 'text-[#FF8A33]' : 'text-[var(--text-primary)]'}`}>
                      {step.timeline}
                    </span>
                    {isHighlight && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FF6B00]/20 text-[#FF8A33] font-bold border border-[#FF6B00]/30 animate-pulse">
                        วันสำคัญที่สุด
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-[var(--text-primary)]">
                    {step.title}
                  </div>
                  {step.description && (
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </AnimatedContent>

      {/* Official Contacts Section */}
      <AnimatedContent distance={40} delay={0.25}>
        <section className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4">
          <h2 className="text-lg sm:text-xl font-black text-[var(--text-primary)]">
            4. ข้อมูลติดต่อฝ่ายงานพัฒนานักศึกษา คณะ SIT มจธ.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-2">
              <div className="font-bold text-[var(--text-primary)]">ผู้ประสานงานโครงการ:</div>
              <div className="text-[var(--text-secondary)]">คุณรุ่งนภา คำภัยวงศ์พิทักษ์</div>
              <div className="text-[var(--text-muted)]">ฝ่ายงานพัฒนานักศึกษา คณะเทคโนโลยีสารสนเทศ</div>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF6B00]" />
                <span className="font-bold text-[var(--text-primary)]">02-470-9882</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#35D5F2]" />
                <a href="mailto:info@sit.kmutt.ac.th" className="text-[#35D5F2] hover:underline">info@sit.kmutt.ac.th</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#53DBAB]" />
                <a href="https://www.sit.kmutt.ac.th" target="_blank" rel="noreferrer" className="text-[#53DBAB] hover:underline">www.sit.kmutt.ac.th</a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedContent>

    </div>
  );
};
