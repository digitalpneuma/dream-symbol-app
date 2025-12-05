'use client';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

/**
 * CategoryFilter Component
 *
 * Displays filter buttons for all available categories
 * - "All" button to show all symbols
 * - Individual category buttons dynamically generated from data
 * - Active category is highlighted with different styling
 * - Responsive layout: horizontal scroll on mobile, wrapped grid on desktop
 */
export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <h2 className="text-purple-200 text-sm font-semibold mb-3">
        Filter by Category
      </h2>

      {/* Category buttons container - scrollable on mobile, wrapped on desktop */}
      <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto
                    scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-purple-900/30">
        {/* "All" button - always shown first */}
        <button
          onClick={() => onCategoryChange('All')}
          className={`px-4 py-2 rounded-lg text-sm font-medium
                     transition-all duration-200 whitespace-nowrap
                     ${
                       activeCategory === 'All'
                         ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                         : 'bg-purple-800/40 text-purple-200 hover:bg-purple-700/50 border border-purple-600/30'
                     }`}
        >
          All
        </button>

        {/* Category buttons - dynamically generated */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium
                       transition-all duration-200 whitespace-nowrap
                       ${
                         activeCategory === category
                           ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                           : 'bg-purple-800/40 text-purple-200 hover:bg-purple-700/50 border border-purple-600/30'
                       }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
