'use client';

import { useState, useEffect, useMemo } from 'react';
import { DreamSymbol } from '@/types';
import SymbolCard from '@/components/SymbolCard';
import CategoryFilter from '@/components/CategoryFilter';

/**
 * Dream Symbols Lookup App - Main Page
 *
 * This is the main page component that handles:
 * - Loading dream symbols data from JSON
 * - Real-time search filtering
 * - Category filtering
 * - Responsive grid layout
 */
export default function Home() {
  // STATE MANAGEMENT
  // Store all dream symbols loaded from JSON
  const [symbols, setSymbols] = useState<DreamSymbol[]>([]);
  // Track current search query
  const [searchQuery, setSearchQuery] = useState('');
  // Track selected category filter
  const [activeCategory, setActiveCategory] = useState('All');
  // Track loading state
  const [isLoading, setIsLoading] = useState(true);

  // LOAD DATA ON COMPONENT MOUNT
  useEffect(() => {
    // Fetch the dream symbols JSON file
    fetch('/dream-symbols.json')
      .then((response) => response.json())
      .then((data: DreamSymbol[]) => {
        setSymbols(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error loading dream symbols:', error);
        setIsLoading(false);
      });
  }, []);

  // EXTRACT UNIQUE CATEGORIES
  // useMemo ensures this only recalculates when symbols array changes
  const categories = useMemo(() => {
    // Get all unique categories from the symbols data
    const uniqueCategories = Array.from(
      new Set(symbols.map((symbol) => symbol.category))
    );
    // Sort alphabetically for better UX
    return uniqueCategories.sort();
  }, [symbols]);

  // FILTER SYMBOLS BASED ON SEARCH AND CATEGORY
  // useMemo prevents unnecessary recalculations on every render
  const filteredSymbols = useMemo(() => {
    let filtered = symbols;

    // Apply category filter first
    if (activeCategory !== 'All') {
      filtered = filtered.filter(
        (symbol) => symbol.category === activeCategory
      );
    }

    // Apply search filter
    // Search across symbol name, meaning, and keywords
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((symbol) => {
        // Check if query matches symbol name
        const matchesSymbol = symbol.symbol.toLowerCase().includes(query);
        // Check if query matches meaning
        const matchesMeaning = symbol.meaning.toLowerCase().includes(query);
        // Check if query matches any keyword
        const matchesKeywords = symbol.keywords.some((keyword) =>
          keyword.toLowerCase().includes(query)
        );

        return matchesSymbol || matchesMeaning || matchesKeywords;
      });
    }

    return filtered;
  }, [symbols, searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Main container with max width for readability */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* HEADER SECTION */}
        <header className="text-center mb-10 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3
                       drop-shadow-lg">
            Dream Symbols
          </h1>
          <p className="text-purple-200 text-lg sm:text-xl">
            Discover the meaning behind your dreams
          </p>
        </header>

        {/* SEARCH BAR */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            {/* Search icon */}
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center
                          pointer-events-none">
              <svg
                className="h-5 w-5 text-purple-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Search input field */}
            <input
              type="text"
              placeholder="Search symbols, meanings, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl
                       bg-purple-800/40 backdrop-blur-sm
                       border border-purple-600/30
                       text-white placeholder-purple-300
                       focus:outline-none focus:ring-2 focus:ring-purple-500
                       focus:border-transparent
                       transition-all duration-200"
            />

            {/* Clear search button - only shown when there's text */}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center
                         text-purple-300 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* CATEGORY FILTER */}
        {!isLoading && (
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        )}

        {/* LOADING STATE */}
        {isLoading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12
                          border-b-2 border-purple-300"></div>
            <p className="text-purple-200 mt-4">Loading dream symbols...</p>
          </div>
        )}

        {/* NO RESULTS MESSAGE */}
        {!isLoading && filteredSymbols.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-semibold text-purple-200 mb-2">
              No symbols found
            </h2>
            <p className="text-purple-300">
              Try adjusting your search or filter criteria
            </p>
            {/* Reset button */}
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg
                       hover:bg-purple-500 transition-colors duration-200"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* SYMBOLS GRID */}
        {!isLoading && filteredSymbols.length > 0 && (
          <>
            {/* Results count */}
            <div className="mb-6 text-purple-200 text-sm">
              Showing {filteredSymbols.length} symbol
              {filteredSymbols.length !== 1 ? 's' : ''}
            </div>

            {/* Responsive grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                          gap-4 sm:gap-6">
              {filteredSymbols.map((symbol, index) => (
                <SymbolCard key={`${symbol.symbol}-${index}`} symbol={symbol} />
              ))}
            </div>
          </>
        )}

        {/* FOOTER */}
        <footer className="mt-16 text-center text-purple-300 text-sm">
          <p>Dream Symbols Lookup App</p>
          <p className="mt-2">
            {symbols.length} symbols • {categories.length} categories
          </p>
        </footer>
      </div>
    </div>
  );
}
