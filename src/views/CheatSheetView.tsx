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
  Layers,
  Cpu,
  Hash,
  ArrowRightLeft,
  RotateCcw
} from 'lucide-react';
import { CHEAT_SHEET_TRAPS, QUICK_FORMULAS } from '../data/summaryCheatSheet';
import AnimatedContent from '../components/ui/AnimatedContent';

export const CheatSheetView: React.FC = () => {
  // Interactive RAID Calculator State
  const [diskCount, setDiskCount] = useState<number>(6);
  const [diskSize, setDiskSize] = useState<number>(4);

  // Binary Search Calculator State
  const [arraySize, setArraySize] = useState<number>(1024);

  // 8-Bit Interactive Converter State
  // bits array: index 0 = bit 7 (128), index 7 = bit 0 (1)
  const [bits, setBits] = useState<number[]>([1, 0, 1, 0, 1, 1, 0, 0]); // 172 default
  const [showStepDetails, setShowStepDetails] = useState<boolean>(true);

  const bitWeights = [128, 64, 32, 16, 8, 4, 2, 1];

  // RAID Calculations
  const rawCapacity = diskCount * diskSize;
  const raid0Capacity = diskCount >= 2 ? diskCount * diskSize : 0;
  const raid1Capacity = diskCount >= 2 ? (diskCount % 2 === 0 ? (diskCount / 2) * diskSize : Math.floor(diskCount / 2) * diskSize) : 0;
  const raid5Capacity = diskCount >= 3 ? (diskCount - 1) * diskSize : 0;
  const raid6Capacity = diskCount >= 4 ? (diskCount - 2) * diskSize : 0;
  const raid10Capacity = diskCount >= 4 && diskCount % 2 === 0 ? (diskCount / 2) * diskSize : 0;

  const binarySearchMaxSteps = arraySize > 0 ? Math.floor(Math.log2(arraySize)) + 1 : 0;

  // 8-Bit Calculations
  const toggleBit = (index: number) => {
    setBits(prev => {
      const next = [...prev];
      next[index] = next[index] === 1 ? 0 : 1;
      return next;
    });
  };

  const handleDecimalInput = (num: number) => {
    const clamped = Math.max(0, Math.min(255, isNaN(num) ? 0 : num));
    let rem = clamped;
    const newBits = bitWeights.map(w => {
      if (rem >= w) {
        rem -= w;
        return 1;
      }
      return 0;
    });
    setBits(newBits);
  };

  const setPresetBits = (presetBits: number[]) => {
    setBits(presetBits);
  };

  const decimalVal = bits.reduce((sum, b, i) => sum + b * bitWeights[i], 0);
  const binaryFormatted = `${bits.slice(0, 4).join('')} ${bits.slice(4).join('')}`;
  const hexVal = '0x' + decimalVal.toString(16).toUpperCase().padStart(2, '0');
  const highNibbleHex = decimalVal.toString(16).toUpperCase().padStart(2, '0')[0];
  const lowNibbleHex = decimalVal.toString(16).toUpperCase().padStart(2, '0')[1];

  const activeWeights = bits
    .map((b, i) => (b === 1 ? bitWeights[i] : null))
    .filter((w): w is number => w !== null);

  const formulaStr = activeWeights.length > 0 ? activeWeights.join(' + ') + ` = ${decimalVal}` : '0';
  const isEven = bits[7] === 0; // Bit 0 is weights[7]=1

  // Detect subnet mask
  const getSubnetInfo = (val: number) => {
    switch (val) {
      case 255: return { cidr: '/24 (หรือเต็ม 8 บิต)', desc: 'Full Octet หรือ Subnet Mask 255.255.255.0 (254 Usable Hosts)' };
      case 254: return { cidr: '/31', desc: 'Point-to-Point RFC 3021 (2 IPs)' };
      case 252: return { cidr: '/30', desc: 'Point-to-Point Router Link (2 Usable Hosts)' };
      case 248: return { cidr: '/29', desc: 'Subnet Mask ขนาดเล็ก (6 Usable Hosts)' };
      case 240: return { cidr: '/28', desc: 'Subnet Mask ยอดฮิต (14 Usable Hosts)' };
      case 224: return { cidr: '/27', desc: 'Subnet Mask ขนาดกลาง (30 Usable Hosts)' };
      case 192: return { cidr: '/26', desc: 'Subnet Mask ขนาดยอดนิยม (62 Usable Hosts)' };
      case 128: return { cidr: '/25', desc: 'Subnet Mask ครึ่ง Class C (126 Usable Hosts)' };
      case 0: return { cidr: '/16 หรือ Host Bits', desc: 'บิต 0 ทั้งหมด (ไม่มี Network Bit ใน Octet นี้)' };
      default: return null;
    }
  };

  const subnetInfo = getSubnetInfo(decimalVal);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
      
      {/* Header */}
      <AnimatedContent distance={40} direction="vertical" duration={0.6} trigger="mount">
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
            รวบรวมเครื่องมือจำลองคำนวณสด ทั้ง 8-Bit Converter, RAID, Binary Search และ 10 กับดักข้อสอบสำคัญ ป้องกันการตอบผิดจากความสับสน
          </p>
        </div>
      </AnimatedContent>

      {/* TOOL 1: Interactive 8-Bit Octet & Base Converter */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border-2 border-[#35D5F2]/30 space-y-6 shadow-lg shadow-[#35D5F2]/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#35D5F2]/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Title */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-color)] pb-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#35D5F2]/20 text-[#35D5F2] border border-[#35D5F2]/30">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-[var(--text-primary)]">
                  เครื่องมือจำลอง 8-Bit & แปลงเลขฐานสด (Interactive Octet Converter)
                </h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#35D5F2]/20 text-[#35D5F2] font-bold">
                  เบสิกสำคัญมาก
                </span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                กดคลิกที่แต่ละบิตเพื่อเปิด/ปิด (0 หรือ 1) และดูการแปลงเป็นฐาน 10, ฐาน 16 และสูตร Subnet Mask ทันที
              </p>
            </div>
          </div>
        </div>

        {/* 8-Bit Interactive Buttons */}
        <div className="space-y-3 relative z-10">
          <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
            <span className="font-semibold flex items-center gap-1.5">
              <span>คลิกที่กล่องบิตด้านล่างเพื่อเปิด (1) / ปิด (0):</span>
            </span>
            <div className="hidden sm:flex items-center gap-4 text-[11px] font-mono">
              <span className="text-[#35D5F2]">High Nibble (บิต 7-4)</span>
              <span>•</span>
              <span className="text-[#53DBAB]">Low Nibble (บิต 3-0)</span>
            </div>
          </div>

          <div className="grid grid-cols-8 gap-1.5 sm:gap-3">
            {bits.map((bit, idx) => {
              const bitNum = 7 - idx;
              const weight = bitWeights[idx];
              const isHighNibble = idx < 4;
              const isOn = bit === 1;

              return (
                <button
                  key={idx}
                  onClick={() => toggleBit(idx)}
                  className={`flex flex-col items-center justify-between p-2 sm:p-3.5 rounded-2xl border transition-all select-none group ${
                    isOn
                      ? isHighNibble
                        ? 'bg-gradient-to-b from-[#35D5F2]/25 to-[#35D5F2]/10 border-[#35D5F2] shadow-md shadow-[#35D5F2]/20 scale-[1.02]'
                        : 'bg-gradient-to-b from-[#53DBAB]/25 to-[#53DBAB]/10 border-[#53DBAB] shadow-md shadow-[#53DBAB]/20 scale-[1.02]'
                      : 'bg-[var(--bg-elevated)] border-[var(--border-color)] opacity-70 hover:opacity-100 hover:border-[var(--text-muted)]'
                  }`}
                >
                  <span className={`text-[10px] sm:text-xs font-mono font-bold ${isOn ? (isHighNibble ? 'text-[#35D5F2]' : 'text-[#53DBAB]') : 'text-[var(--text-muted)]'}`}>
                    2^{bitNum}
                  </span>
                  
                  <div className={`my-1 text-xl sm:text-3xl font-black font-mono transition-transform group-hover:scale-110 ${
                    isOn 
                      ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' 
                      : 'text-[var(--text-muted)]'
                  }`}>
                    {bit}
                  </div>

                  <span className={`text-[10px] sm:text-xs font-mono font-bold px-1.5 py-0.5 rounded-lg ${
                    isOn 
                      ? isHighNibble ? 'bg-[#35D5F2]/20 text-[#35D5F2]' : 'bg-[#53DBAB]/20 text-[#53DBAB]'
                      : 'bg-[var(--bg-card)] text-[var(--text-muted)]'
                  }`}>
                    {weight}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex justify-between items-center text-[10px] sm:text-xs text-[var(--text-muted)] font-mono px-1">
            <span>← MSB (บิตซ้ายสุด = 128)</span>
            <span>LSB (บิตขวาสุด = 1) →</span>
          </div>
        </div>

        {/* Live Converted Results Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
          {/* Decimal */}
          <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-1">
            <span className="text-xs font-semibold text-[var(--text-muted)]">ฐานสิบ (Decimal):</span>
            <div className="text-3xl font-black text-[#FF6B00] font-mono">
              {decimalVal}
            </div>
            <div className="text-[11px] text-[var(--text-secondary)] font-mono">
              ช่วงค่า 0 - 255 ({isEven ? 'เลขคู่' : 'เลขคี่'})
            </div>
          </div>

          {/* Binary */}
          <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-1">
            <span className="text-xs font-semibold text-[var(--text-muted)]">ฐานสอง (8-Bit Binary):</span>
            <div className="text-2xl sm:text-3xl font-black text-[#35D5F2] font-mono tracking-wider">
              {binaryFormatted}
            </div>
            <div className="text-[11px] text-[var(--text-muted)] font-mono">
              High: {bits.slice(0, 4).join('')} | Low: {bits.slice(4).join('')}
            </div>
          </div>

          {/* Hexadecimal */}
          <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-1">
            <span className="text-xs font-semibold text-[var(--text-muted)]">ฐานสิบหก (Hexadecimal):</span>
            <div className="text-3xl font-black text-[#53DBAB] font-mono">
              {hexVal}
            </div>
            <div className="text-[11px] text-[var(--text-muted)] font-mono">
              {highNibbleHex} ({bits.slice(0, 4).join('')}) และ {lowNibbleHex} ({bits.slice(4).join('')})
            </div>
          </div>
        </div>

        {/* Mathematical Breakdown Formula */}
        <div className="p-4 rounded-2xl bg-[#030712] border border-[var(--border-color)] space-y-2 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#FF8A33] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>สูตรการกระจายน้ำหนักบิต (Sum of Active Powers):</span>
            </span>
            <span className="text-[11px] font-mono text-[var(--text-muted)]">
              บิตที่เป็น 1 นำมาบวกกัน
            </span>
          </div>
          <div className="font-mono text-sm text-emerald-400 break-all bg-[var(--bg-elevated)] p-3 rounded-xl border border-[var(--border-color)]">
            {formulaStr}
          </div>
        </div>

        {/* Subnet Mask & Network Context Badge (if matched) */}
        {subnetInfo && (
          <div className="p-4 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 space-y-1 relative z-10 animate-fade-in">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#FF6B00] text-white">
                ตรวจพบ Subnet Mask
              </span>
              <span className="text-sm font-black text-[#FF8A33] font-mono">
                {subnetInfo.cidr}
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)]">
              {subnetInfo.desc}
            </p>
          </div>
        )}

        {/* Manual Decimal Input & Quick Presets */}
        <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)] space-y-3 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-[var(--text-primary)]">
                พิมพ์เลขฐานสิบที่ต้องการทดสอบ (0-255):
              </label>
              <input
                type="number"
                min="0"
                max="255"
                value={decimalVal}
                onChange={e => handleDecimalInput(parseInt(e.target.value))}
                className="w-24 px-3 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] font-mono text-sm font-bold text-[#FF6B00] text-center focus:outline-none focus:border-[#35D5F2]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-[11px] text-[var(--text-muted)] font-medium mr-1">ปุ่มลัดค่าฮิต:</span>
              <button
                onClick={() => setPresetBits([0, 0, 0, 0, 0, 0, 0, 0])}
                className="px-2.5 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-white text-xs font-mono"
              >
                0 (รีเซ็ต)
              </button>
              <button
                onClick={() => setPresetBits([1, 1, 1, 1, 1, 1, 1, 1])}
                className="px-2.5 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[#35D5F2] hover:bg-[#35D5F2]/10 text-xs font-mono font-bold"
              >
                255 (เต็ม)
              </button>
              <button
                onClick={() => setPresetBits([1, 1, 0, 0, 0, 0, 0, 0])}
                className="px-2.5 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[#FF8A33] hover:bg-[#FF6B00]/10 text-xs font-mono font-bold"
              >
                192 (/26)
              </button>
              <button
                onClick={() => setPresetBits([1, 1, 1, 0, 0, 0, 0, 0])}
                className="px-2.5 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[#FF8A33] hover:bg-[#FF6B00]/10 text-xs font-mono font-bold"
              >
                224 (/27)
              </button>
              <button
                onClick={() => setPresetBits([1, 1, 1, 1, 0, 0, 0, 0])}
                className="px-2.5 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[#FF8A33] hover:bg-[#FF6B00]/10 text-xs font-mono font-bold"
              >
                240 (/28)
              </button>
              <button
                onClick={() => setPresetBits([1, 1, 1, 1, 1, 1, 0, 0])}
                className="px-2.5 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[#53DBAB] hover:bg-[#53DBAB]/10 text-xs font-mono font-bold"
              >
                252 (/30)
              </button>
              <button
                onClick={() => setPresetBits([1, 0, 1, 0, 1, 1, 0, 0])}
                className="px-2.5 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-purple-400 hover:bg-purple-500/10 text-xs font-mono font-bold"
              >
                172 (IP)
              </button>
            </div>
          </div>
        </div>

        {/* Step-by-Step Subtraction Breakdown Toggle */}
        <div className="space-y-2 relative z-10">
          <button
            onClick={() => setShowStepDetails(!showStepDetails)}
            className="text-xs font-bold text-[#35D5F2] hover:underline flex items-center gap-1.5"
          >
            <span>{showStepDetails ? '▼ ซ่อน' : '► ดู'} ขั้นตอนการแปลง {decimalVal} เป็นฐานสองด้วยวิธีหักลบน้ำหนัก (Step-by-Step)</span>
          </button>

          {showStepDetails && (
            <div className="p-4 rounded-2xl bg-[#030712] border border-[var(--border-color)] overflow-x-auto text-xs font-mono text-[var(--text-secondary)] space-y-1">
              <div className="text-[var(--text-muted)] font-semibold pb-1 border-b border-[var(--border-color)]">
                กระบวนการเปรียบเทียบน้ำหนัก 8 บิตจากซ้ายไปขวา:
              </div>
              {(() => {
                let current = decimalVal;
                return bitWeights.map((w, idx) => {
                  const bitNum = 7 - idx;
                  const fit = current >= w;
                  const prev = current;
                  if (fit) current -= w;
                  return (
                    <div key={idx} className={`py-0.5 flex items-center justify-between ${fit ? 'text-[#35D5F2] font-bold' : 'text-[var(--text-muted)]'}`}>
                      <span>
                        บิต {bitNum} ({w}): {prev} {fit ? `≥ ${w} → ใส่ 1 (เหลือ ${current})` : `< ${w} → ใส่ 0 (ยังคงเหลือ ${current})`}
                      </span>
                      <span>บิตที่ {bitNum} = {fit ? '1' : '0'}</span>
                    </div>
                  );
                });
              })()}
              <div className="pt-2 text-emerald-400 font-bold border-t border-[var(--border-color)] text-right">
                ผลลัพธ์ฐานสอง: {bits.join('')} (ขนาด 8 บิต)
              </div>
            </div>
          )}
        </div>
      </section>

      {/* TOOL 2: Interactive RAID Calculator */}
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

      {/* TOOL 3: Binary Search Calculator */}
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
