'use client';

import { useState } from 'react';
import { DreamSymbol } from '@/types';

interface SymbolCardProps {
  symbol: DreamSymbol;
}

/**
 * SymbolCard Component
 *
 * Displays a single dream symbol in a card format.
 * - Shows symbol name, category badge, and preview of meaning when collapsed
 * - Expands on click to show full meaning and keywords
 * - Smooth animations for expand/collapse
 */
export default function SymbolCard({ symbol }: SymbolCardProps) {
  // Track whether this card is expanded or collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  // Truncate meaning to ~100 characters for preview
  const previewText = symbol.meaning.length > 100
    ? symbol.meaning.substring(0, 100) + '...'
    : symbol.meaning;

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className="bg-white rounded-lg p-5 cursor-pointer
                 hover:bg-gray-50 transition-all duration-300
                 hover:shadow-xl hover:shadow-purple-500/20
                 border border-gray-200 hover:border-purple-400"
    >
      {/* Symbol Name - Bold and prominent */}
      <h3 className="text-xl font-bold text-black mb-2">
        {symbol.symbol}
      </h3>

      {/* Category Badge */}
      <div className="mb-3">
        <span className="inline-block bg-purple-600 text-white text-xs
                       px-3 py-1 rounded-full">
          {symbol.category}
        </span>
      </div>

      {/* Meaning - Preview or Full based on expanded state */}
      <p className="text-gray-800 text-sm leading-relaxed mb-3">
        {isExpanded ? symbol.meaning : previewText}
      </p>

      {/* Keywords - Only shown when expanded */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
          <p className="text-gray-700 text-xs font-semibold mb-2">Keywords:</p>
          <div className="flex flex-wrap gap-2">
            {symbol.keywords.map((keyword, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-800 text-xs px-2 py-1
                         rounded border border-purple-200"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Expand/Collapse indicator */}
      <div className="text-center mt-3">
        <span className="text-gray-500 text-xs">
          {isExpanded ? '▲ Click to collapse' : '▼ Click to expand'}
        </span>
      </div>
    </div>
  );
}
