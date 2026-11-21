import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'orange' | 'cyan' | 'purple' | 'sunset';
}

export const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  className = '',
  variant = 'orange' 
}) => {
  const gradientStyles = {
    orange: 'from-[#FF6B00] via-[#FF9233] to-[#FFB703]',
    cyan: 'from-[#00D2D3] via-[#35D5F2] to-[#6366F1]',
    purple: 'from-[#8B7CFF] via-[#A78BFA] to-[#EC4899]',
    sunset: 'from-[#FF6B00] via-[#FF8A33] to-[#35D5F2]',
  }[variant];

  return (
    <span className={`bg-gradient-to-r ${gradientStyles} bg-clip-text text-transparent inline-block ${className}`}>
      {children}
    </span>
  );
};
