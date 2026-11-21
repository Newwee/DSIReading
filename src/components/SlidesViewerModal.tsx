import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';
import { SIT_SLIDES, SlideItem } from '../data/sitActiveRecruitmentData';

interface SlidesViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSlideIndex?: number;
}

export const SlidesViewerModal: React.FC<SlidesViewerModalProps> = ({
  isOpen,
  onClose,
  initialSlideIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialSlideIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!isOpen) return null;

  const currentSlide: SlideItem = SIT_SLIDES[currentIndex] || SIT_SLIDES[0];

  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : SIT_SLIDES.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev < SIT_SLIDES.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fade-in"
      />

      {/* Main Container */}
      <div className={`relative w-full ${isFullscreen ? 'max-w-[96vw] max-h-[96vh]' : 'max-w-4xl max-h-[90vh]'} rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl flex flex-col overflow-hidden animate-fade-in z-10 transition-all`}>
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border-color)] bg-[var(--bg-elevated)] shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
              สไลด์ชี้แจงทางการ SIT มจธ.
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)] font-mono">
              {currentIndex + 1} / {SIT_SLIDES.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullscreen(prev => !prev)}
              className="p-1.5 rounded-xl hover:bg-[var(--bg-card)] text-[var(--text-muted)]"
              title={isFullscreen ? 'ย่อหน้าต่าง' : 'ขยายเต็มจอ'}
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-[var(--bg-card)] text-[var(--text-muted)]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col md:flex-row gap-6 items-center">
          {/* Image Box */}
          <div className="flex-1 w-full flex items-center justify-center relative bg-black/40 rounded-2xl p-2 overflow-hidden border border-[var(--border-color)]">
            <img
              src={currentSlide.filename}
              alt={currentSlide.title}
              className="max-h-[50vh] sm:max-h-[60vh] w-auto object-contain rounded-xl shadow-lg"
            />

            {/* Left / Right Nav Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 p-2 rounded-full bg-black/60 text-white hover:bg-[#FF6B00] transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 p-2 rounded-full bg-black/60 text-white hover:bg-[#FF6B00] transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Info & Key Points */}
          <div className="w-full md:w-80 space-y-4 shrink-0">
            <div>
              <h3 className="text-base font-bold text-[var(--text-primary)] leading-snug">
                {currentSlide.title}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                {currentSlide.caption}
              </p>
            </div>

            <div className="space-y-2 p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-color)]">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ประเด็นสำคัญในสไลด์นี้</span>
              </div>
              <ul className="space-y-1.5">
                {currentSlide.keyPoints.map((pt, idx) => (
                  <li key={idx} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#35D5F2] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Thumbnails list */}
            <div className="flex gap-1.5 overflow-x-auto py-1 scrollbar-thin">
              {SIT_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-12 h-9 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                    currentIndex === idx ? 'border-[#FF6B00] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={s.filename} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
