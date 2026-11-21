import React, { useState } from 'react';
import { 
  Flame, 
  Calculator, 
  AlertCircle, 
  Sparkles, 
  Check, 
  HelpCircle,
  Database,
  Binary,
  Layers
} from 'lucide-react';
import { CHEAT_SHEET_TRAPS, QUICK_FORMULAS } from '../data/summaryCheatSheet';

export const CheatSheetView: React.FC = () => {
  // Interactive RAID Calculator State
  const [diskCount, setDiskCount] = useState<number>(6);
  const [diskSize, setDiskSize] = useState<number>(4);

  // Binary Search Calculator State
  const [arraySize, setArraySize] = useState<number>(1024);

  // Calculations
  const rawCapacity = diskCount * diskSize;
  const raid0Capacity = diskCount >= 2 ? diskCount * diskSize : 0;
  const raid1Capacity = diskCount >= 2 ? (diskCount % 2 === 0 ? (diskCount / 2) * diskSize : Math.floor(diskCount / 2) * diskSize) : 0;
  const raid5Capacity = diskCount >= 3 ? (diskCount - 1) * diskSize : 0;
  const raid6Capacity = diskCount >= 4 ? (diskCount - 2) * diskSize : 0;
  const raid10Capacity = diskCount >= 4 && diskCount % 2 === 0 ? (diskCount / 2) * diskSize : 0;

  const binarySearchMaxSteps = arraySize > 0 ? Math.floor(Math.log2(arraySize)) + 1 : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
      
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-elevated)] to-[var(--bg-card)] border border-[var(--border-color)] space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FF6B00]/15 text-[#FF8A33] border border-[#FF6B00]/30 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5" />
            <span>สรุปจุดจำเร็ว 1 หน้า & กับดักข้อสอบ</span>
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">
          สูตรคำนวณ & ตารางเทียบจุดที่มักสับสน (Exam Traps)
        </h1>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl">
          รวบรวมจากคู่มือทบทวนสอบบทที่ 8 และ 10 เพื่อให้อ่านทบทวนใน 5 นาทีก่อนเข้าห้องสอบ ป้องกันการตอบผิดจากความสับสน
        </p>
      </div>

      {/* Interactive RAID Calculator */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-color)] pb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00]">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                เครื่องมือทดลองคำนวณพื้นที่ RAID เสมือนจริง
              </h2>
              <p className="text-xs text-[var(--text-muted)]">
                ปรับเปลี่ยนจำนวนดิสก์และขนาดดิสก์เพื่อดูผลลัพธ์ความจุและการทนดิสก์เสียแบบ Real-time
              </p>
            </div>
          </div>
        </div>

        {/* Input sliders/controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)]">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-[var(--text-secondary)]">จำนวนดิสก์ (N):</span>
              <span className="text-[#FF6B00] font-mono text-sm">{diskCount} ลูก</span>
            </div>
            <input
              type="range"
              min="2"
              max="16"
              value={diskCount}
              onChange={e => setDiskCount(parseInt(e.target.value))}
              className="w-full accent-[#FF6B00] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[var(--text-muted)] font-mono">
              <span>2 ลูก</span>
              <span>8 ลูก</span>
              <span>16 ลูก</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-[var(--text-secondary)]">ความจุต่อลูก (S):</span>
              <span className="text-[#35D5F2] font-mono text-sm">{diskSize} TB</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={diskSize}
              onChange={e => setDiskSize(parseInt(e.target.value))}
              className="w-full accent-[#35D5F2] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[var(--text-muted)] font-mono">
              <span>1 TB</span>
              <span>10 TB</span>
              <span>20 TB</span>
            </div>
          </div>
        </div>

        {/* Results Comparison Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* RAID 0 */}
          <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-[var(--text-primary)]">RAID 0 (Striping)</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 font-bold">ทนเสีย 0 ลูก</span>
            </div>
            <div className="text-xl font-black text-[var(--text-primary)] font-mono">
              {raid0Capacity} TB
            </div>
            <div className="text-[11px] text-[var(--text-muted)]">
              สูตร: N × S = {diskCount} × {diskSize} TB
            </div>
          </div>

          {/* RAID 5 */}
          <div className={`p-4 rounded-2xl border space-y-2 ${diskCount >= 3 ? 'bg-[var(--bg-elevated)] border-[var(--border-color)]' : 'opacity-40 bg-[var(--bg-card)]'}`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-[#FF6B00]">RAID 5 (Single Parity)</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">ทนเสีย 1 ลูก</span>
            </div>
            <div className="text-xl font-black text-[#FF6B00] font-mono">
              {diskCount >= 3 ? `${raid5Capacity} TB` : 'ต้องการ ≥ 3 ลูก'}
            </div>
            <div className="text-[11px] text-[var(--text-muted)]">
              สูตร: (N - 1) × S = ({diskCount} - 1) × {diskSize} TB
            </div>
          </div>

          {/* RAID 6 (Hot Exam focus!) */}
          <div className={`p-4 rounded-2xl border-2 space-y-2 ${diskCount >= 4 ? 'bg-[#FF6B00]/10 border-[#FF6B00]/40' : 'opacity-40 bg-[var(--bg-card)]'}`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-[#FF8A33]">RAID 6 (Dual Parity) 🔥</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">ทนเสีย 2 ลูก!</span>
            </div>
            <div className="text-2xl font-black text-white font-mono">
              {diskCount >= 4 ? `${raid6Capacity} TB` : 'ต้องการ ≥ 4 ลูก'}
            </div>
            <div className="text-[11px] text-[#FF8A33] font-semibold">
              สูตร: (N - 2) × S = ({diskCount} - 2) × {diskSize} TB
            </div>
          </div>

          {/* RAID 10 */}
          <div className={`p-4 rounded-2xl border space-y-2 ${diskCount >= 4 && diskCount % 2 === 0 ? 'bg-[var(--bg-elevated)] border-[var(--border-color)]' : 'opacity-40 bg-[var(--bg-card)]'}`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-[#35D5F2]">RAID 10 (Stripe Mirrors)</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#35D5F2]/20 text-[#35D5F2] font-bold">ทน 1-{diskCount/2} ลูก</span>
            </div>
            <div className="text-xl font-black text-[#35D5F2] font-mono">
              {diskCount >= 4 && diskCount % 2 === 0 ? `${raid10Capacity} TB` : 'ต้องการ ≥ 4 ลูกเลขคู่'}
            </div>
            <div className="text-[11px] text-[var(--text-muted)]">
              สูตร: (N / 2) × S = ได้ความจุ 50%
            </div>
          </div>
        </div>
      </section>

      {/* Binary Search Calculator */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-5">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-[#35D5F2]/15 text-[#35D5F2]">
            <Binary className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
              เครื่องมือจำลอง Binary Search (Time Complexity)
            </h2>
            <p className="text-xs text-[var(--text-muted)]">
              ทดสอบว่าข้อมูล n รายการ จะต้องเปรียบเทียบสูงสุดกี่ครั้งใน Worst Case (O(log n))
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)]">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[var(--text-secondary)]">
              จำนวนข้อมูลที่เรียงลำดับแล้ว (n รายการ):
            </label>
            <input
              type="number"
              value={arraySize}
              onChange={e => setArraySize(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-sm font-mono text-[var(--text-primary)] focus:outline-none focus:border-[#35D5F2]"
            />
          </div>

          <div className="p-3.5 rounded-xl bg-[#030712] border border-[var(--border-color)] space-y-1 text-center sm:text-left">
            <span className="text-[11px] text-[var(--text-muted)]">จำนวนรอบสูงสุด (Worst-case Comparisons):</span>
            <div className="text-2xl font-black text-[#53DBAB] font-mono">
              {binarySearchMaxSteps} ครั้ง
            </div>
            <span className="text-[10px] text-[var(--text-muted)] font-mono">
              สูตร: ⌊log₂({arraySize})⌋ + 1
            </span>
          </div>
        </div>
      </section>

      {/* 10 Classic Traps Table */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-black text-[var(--text-primary)] flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#FF6B00]" />
            <span>10 ตารางกับดักข้อสอบที่คนมักตอบผิด (จากคู่มือบทที่ 8)</span>
          </h2>
          <p className="text-xs text-[var(--text-muted)]">
            อ่านตรวจทานซ้ำก่อนเข้าห้องสอบ เพื่อไม่ให้หลงกลตัวเลือกหลอก
          </p>
        </div>

        <div className="space-y-3">
          {CHEAT_SHEET_TRAPS.map((entry, idx) => (
            <div
              key={idx}
              className="p-5 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-3 shadow-sm hover:border-[#FF6B00]/30 transition-all"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider font-mono">
                  {entry.topic}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-muted)] font-semibold">
                  {entry.category}
                </span>
              </div>

              <div className="font-bold text-sm text-[var(--text-primary)]">
                ถ้าโจทย์ถามว่า: "{entry.question}"
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 space-y-0.5">
                  <div className="font-bold flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>คำตอบที่ถูกต้อง:</span>
                  </div>
                  <div className="font-bold text-sm text-white pl-5">{entry.correctAnswer}</div>
                </div>

                <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-300 space-y-0.5">
                  <div className="font-bold flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span>อย่าจำสับสนกับ:</span>
                  </div>
                  <div className="font-medium text-white pl-5">{entry.trapToAvoid}</div>
                </div>
              </div>

              <div className="text-[11px] text-[var(--text-secondary)] bg-[var(--bg-elevated)] p-2.5 rounded-xl border border-[var(--border-color)]">
                💡 <span className="font-semibold text-[#FF8A33]">หลักจำ:</span> {entry.ruleToRemember}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
