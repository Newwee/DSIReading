import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  action,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)]">
      <div className="w-16 h-16 rounded-2xl bg-[var(--bg-elevated)] flex items-center justify-center mb-4 text-[#FF6B00]">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{title}</h3>
      <p className="text-sm text-[var(--text-secondary)] max-w-sm mb-6">{description}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] text-white font-medium text-sm shadow-md hover:opacity-90 active:scale-95 transition-all"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};
