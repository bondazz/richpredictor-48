
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', query);
    // Add search functionality here
  };

  return (
    <div className={`relative w-full max-w-md transition-all duration-300 ${isFocused ? 'scale-105' : ''}`}>
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
            <Search size={20} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
