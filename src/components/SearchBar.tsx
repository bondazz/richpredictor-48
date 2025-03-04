
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { searchMatchPredictions } from '../services/matchService';
import { Match } from '../utils/db';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Handle clicks outside of the search component to close results
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const performSearch = useCallback(async (searchQuery: string) => {
    if (searchQuery.trim().length < 3) {
      setResults([]);
      setShowResults(false);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const matchResults = await searchMatchPredictions(searchQuery);
      setResults(matchResults);
      setShowResults(true);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Set new timeout for debouncing
    searchTimeoutRef.current = setTimeout(() => {
      performSearch(query);
    }, 300);

    // Cleanup function
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [query, performSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value.trim().length > 0) {
      setIsLoading(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(query);
  };

  return (
    <div 
      className={`relative w-full max-w-md transition-all duration-300 ${isFocused ? 'scale-105' : ''}`}
      ref={searchRef}
    >
      <form 
        onSubmit={handleSubmit} 
        className="relative w-full"
      >
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search for match predictions..."
            className={`w-full py-3 pl-12 pr-4 bg-white/80 backdrop-blur-sm border text-richgray-700 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-richorange/30 focus:outline-none ${
              isFocused ? 'border-richorange/50 shadow-lg' : 'border-richgray-100 shadow-md'
            }`}
          />
          <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-richgray-400 transition-all duration-300 ${
            isFocused ? 'text-richorange' : ''
          }`}>
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-t-richorange border-r-richorange border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            ) : (
              <Search size={20} />
            )}
          </div>
        </div>
      </form>

      {/* Search Results Dropdown */}
      {showResults && results.length > 0 && (
        <div className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-richgray-100 max-h-80 overflow-y-auto">
          <div className="p-2">
            {results.map((match) => (
              <Link 
                key={match.id}
                to={`/prediction/${match.id}`}
                className="block px-4 py-3 hover:bg-richnavy-50/50 rounded-lg transition-colors"
                onClick={() => setShowResults(false)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-richgray-800">{match.homeTeam} vs {match.awayTeam}</p>
                    <p className="text-xs text-richgray-500">{match.league} • {match.date}</p>
                  </div>
                  <div className="bg-richorange/10 text-richorange text-xs px-2 py-1 rounded-full">
                    {match.prediction}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {showResults && query.trim().length > 2 && results.length === 0 && !isLoading && (
        <div className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-richgray-100 p-4 text-center">
          <p className="text-richgray-600">No matches found for "{query}"</p>
        </div>
      )}

      {/* Loading State */}
      {isLoading && query.trim().length > 2 && (
        <div className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-richgray-100 p-4 text-center">
          <p className="text-richgray-600">Searching...</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
