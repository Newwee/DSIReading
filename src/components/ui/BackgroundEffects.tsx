import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 dark:opacity-35" />

      {/* Top Ambient Glow (KMUTT Orange to Cyan) */}
      <div 
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[850px] h-[520px] rounded-full blur-[140px] opacity-20 dark:opacity-15 transition-opacity"
        style={{
          background: 'radial-gradient(circle, #FF6B00 0%, #35D5F2 45%, #6366F1 80%, transparent 90%)'
        }}
      />

      {/* Side Subtle Accent Glow */}
      <div 
        className="absolute top-[45%] -right-[15%] w-[520px] h-[520px] rounded-full blur-[160px] opacity-15 dark:opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #FF6B00 0%, transparent 70%)'
        }}
      />

      {/* Bottom Left Teal Glow */}
      <div 
        className="absolute bottom-[10%] -left-[15%] w-[480px] h-[480px] rounded-full blur-[160px] opacity-15 dark:opacity-08 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00D2D3 0%, transparent 70%)'
        }}
      />
    </div>
  );
};
