
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Bookmark } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const location = useLocation();

  const navItems = [
    { 
      name: 'Predictions', 
      path: '/predictions',
      submenu: [
        { name: 'Upcoming', path: '/predictions/upcoming' },
        { name: 'Hot Picks', path: '/predictions/hot-picks' },
        { name: 'AI-Powered Tips', path: '/predictions/ai-tips' },
      ] 
    },
    { 
      name: 'Betting Offers', 
      path: '/offers',
      submenu: [
        { name: 'Top Bookmakers', path: '/offers/bookmakers' },
        { name: 'Promotions', path: '/offers/promotions' },
      ]
    },
    { name: 'Live Scores', path: '/live-scores' },
    { name: 'Expert Insights', path: '/insights' },
    { name: 'VIP Membership', path: '/vip' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update bookmark count when localStorage changes
    const updateBookmarkCount = () => {
      const saved = localStorage.getItem('bookmarkedMatches');
      const bookmarks = saved ? JSON.parse(saved) : [];
      setBookmarkCount(bookmarks.length);
    };

    // Initial count
    updateBookmarkCount();

    // Listen for storage events (when bookmarks change)
    window.addEventListener('storage', updateBookmarkCount);
    
    // Custom event for when we update bookmarks within the same window
    window.addEventListener('bookmarksUpdated', updateBookmarkCount);
    
    // Check for changes every second (fallback)
    const interval = setInterval(updateBookmarkCount, 1000);
    
    return () => {
      window.removeEventListener('storage', updateBookmarkCount);
      window.removeEventListener('bookmarksUpdated', updateBookmarkCount);
      clearInterval(interval);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3 glass shadow-md' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gradient">Rich<span className="text-richorange">Predict</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link 
                to={item.path} 
                className={`text-sm font-medium transition-colors hover:text-richorange flex items-center ${
                  location.pathname === item.path ? 'text-richorange' : 'text-richgray-700'
                }`}
              >
                {item.name}
                {item.submenu && <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />}
              </Link>
              
              {item.submenu && (
                <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md overflow-hidden glass shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform scale-95 group-hover:scale-100">
                  <div className="py-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-richgray-700 hover:bg-richnavy-50 hover:text-richorange transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search & CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="w-60">
            <SearchBar />
          </div>
          
          <Link 
            to="/bookmarks"
            className={`relative p-2 text-richgray-700 hover:text-richorange transition-colors ${
              location.pathname === '/bookmarks' ? 'text-richorange' : ''
            }`}
          >
            <Bookmark size={20} />
            {bookmarkCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-richorange text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {bookmarkCount}
              </span>
            )}
          </Link>
          
          <Button className="bg-richorange hover:bg-richorange-600 text-white font-medium transition-all hover:shadow-button">
            Get Expert Predictions
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-richgray-700 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 glass shadow-lg transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
      }`}>
        <div className="px-4 py-5 space-y-4">
          <div className="mb-4">
            <SearchBar />
          </div>
          
          <Link 
            to="/bookmarks"
            className="flex items-center gap-2 py-2 text-base font-medium text-richgray-700 hover:text-richorange"
            onClick={() => setIsMenuOpen(false)}
          >
            <Bookmark size={18} />
            <span>Bookmarks</span>
            {bookmarkCount > 0 && (
              <span className="bg-richorange text-white text-xs rounded-full px-2 py-0.5 ml-1">
                {bookmarkCount}
              </span>
            )}
          </Link>
          
          {navItems.map((item) => (
            <div key={item.name} className="py-2">
              <Link 
                to={item.path} 
                className={`block text-base font-medium ${
                  location.pathname === item.path ? 'text-richorange' : 'text-richgray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
              
              {item.submenu && (
                <div className="pl-4 mt-2 space-y-2">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block text-sm text-richgray-600 hover:text-richorange"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="pt-4">
            <Button className="w-full bg-richorange hover:bg-richorange-600 text-white">
              Get Expert Predictions
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
