import React from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ 
  content, 
  className = '' 
}) => {
  if (!content) return null;

  const lines = content.split('\n');
  const blocks: React.ReactNode[] = [];

  let currentListItems: React.ReactNode[] = [];
  let isOrderedList = false;

  const flushList = () => {
    if (currentListItems.length > 0) {
      if (isOrderedList) {
        blocks.push(
          <ol key={`ol-${blocks.length}`} className="list-decimal pl-5 space-y-2 my-3 text-[var(--text-secondary)]">
            {currentListItems}
          </ol>
        );
      } else {
        blocks.push(
          <ul key={`ul-${blocks.length}`} className="list-disc pl-5 space-y-2 my-3 text-[var(--text-secondary)]">
            {currentListItems}
          </ul>
        );
      }
      currentListItems = [];
    }
  };

  // Helper to format inline elements: **bold**, *italic*, `code`, and $math$
  const formatInline = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let keyIdx = 0;

    // Pattern matches **bold**, *italic*, `code`, and $math$
    const tokenRegex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\$[^$]+\$)/;

    while (remaining) {
      const match = remaining.match(tokenRegex);
      if (!match || match.index === undefined) {
        parts.push(remaining);
        break;
      }

      if (match.index > 0) {
        parts.push(remaining.substring(0, match.index));
      }

      const token = match[0];
      if (token.startsWith('**') && token.endsWith('**')) {
        parts.push(
          <strong key={`b-${keyIdx++}`} className="font-bold text-[var(--text-primary)]">
            {token.slice(2, -2)}
          </strong>
        );
      } else if (token.startsWith('*') && token.endsWith('*')) {
        parts.push(
          <em key={`i-${keyIdx++}`} className="italic text-[var(--text-primary)]">
            {token.slice(1, -1)}
          </em>
        );
      } else if (token.startsWith('`') && token.endsWith('`')) {
        parts.push(
          <code key={`c-${keyIdx++}`} className="px-1.5 py-0.5 rounded bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[#35D5F2] font-mono text-[12px] font-semibold">
            {token.slice(1, -1)}
          </code>
        );
      } else if (token.startsWith('$') && token.endsWith('$')) {
        parts.push(
          <span key={`m-${keyIdx++}`} className="px-1.5 py-0.5 rounded font-mono text-[#53DBAB] font-bold text-xs bg-[#53DBAB]/10 border border-[#53DBAB]/20">
            {token.slice(1, -1)}
          </span>
        );
      }

      remaining = remaining.substring(match.index + token.length);
    }

    return parts;
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (!line) {
      flushList();
      continue;
    }

    // Heading 4: ####
    if (line.startsWith('#### ')) {
      flushList();
      blocks.push(
        <h5 key={`h4-${i}`} className="text-sm sm:text-base font-bold text-[var(--text-primary)] mt-4 mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#35D5F2]" />
          <span>{formatInline(line.slice(5))}</span>
        </h5>
      );
      continue;
    }

    // Heading 3: ### (e.g. ### 3. SaaS)
    if (line.startsWith('### ')) {
      flushList();
      blocks.push(
        <h4 key={`h3-${i}`} className="text-base sm:text-lg font-bold text-[var(--text-primary)] mt-5 mb-2.5 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF6B00] shrink-0" />
          <span>{formatInline(line.slice(4))}</span>
        </h4>
      );
      continue;
    }

    // Heading 2: ##
    if (line.startsWith('## ')) {
      flushList();
      blocks.push(
        <h3 key={`h2-${i}`} className="text-lg sm:text-xl font-black text-[var(--text-primary)] mt-6 mb-3 pb-1 border-b border-[var(--border-color)]">
          {formatInline(line.slice(3))}
        </h3>
      );
      continue;
    }

    // Heading 1: #
    if (line.startsWith('# ')) {
      flushList();
      blocks.push(
        <h2 key={`h1-${i}`} className="text-xl sm:text-2xl font-black text-[var(--text-primary)] mt-7 mb-4">
          {formatInline(line.slice(2))}
        </h2>
      );
      continue;
    }

    // Blockquote: >
    if (line.startsWith('> ')) {
      flushList();
      blocks.push(
        <blockquote key={`bq-${i}`} className="border-l-4 border-[#FF6B00] bg-[#FF6B00]/10 pl-4 py-2.5 my-3 rounded-r-2xl text-xs sm:text-sm text-[var(--text-secondary)] italic">
          {formatInline(line.slice(2))}
        </blockquote>
      );
      continue;
    }

    // Unordered list item (- or *)
    const isIndented = rawLine.startsWith('  ') || rawLine.startsWith('\t');
    if (line.startsWith('- ') || line.startsWith('* ')) {
      isOrderedList = false;
      currentListItems.push(
        <li key={`li-${i}`} className={`text-xs sm:text-sm leading-relaxed ${isIndented ? 'ml-4' : ''}`}>
          {formatInline(line.slice(2))}
        </li>
      );
      continue;
    }

    // Ordered list item (e.g. 1. 2.)
    const orderedMatch = line.match(/^(\d+)\.\s+(.*)/);
    if (orderedMatch) {
      isOrderedList = true;
      currentListItems.push(
        <li key={`oli-${i}`} className={`text-xs sm:text-sm leading-relaxed ${isIndented ? 'ml-4' : ''}`}>
          {formatInline(orderedMatch[2])}
        </li>
      );
      continue;
    }

    // Normal paragraph
    flushList();
    blocks.push(
      <p key={`p-${i}`} className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)] my-2">
        {formatInline(line)}
      </p>
    );
  }

  flushList();

  return <div className={`space-y-1 ${className}`}>{blocks}</div>;
};
