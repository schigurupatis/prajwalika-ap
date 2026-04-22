import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine text color based on state
  // If search is open, text is always slate-900 (Dark)
  // If scrolled or NOT home page, text is Dark
  // Otherwise (transparent home), text is White (or you can set to Dark if you prefer the Gates look always)
  const isDarkText = isSearchOpen || isScrolled || !isHomePage;
  const headerBg = isSearchOpen 
    ? 'bg-[#EBCB00]' // The Gates Yellow when search is open
    : isScrolled 
      ? 'bg-white shadow-sm' 
      : 'bg-transparent';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="flex items-center justify-between py-6">
          
          {/* Logo */}
          <Link to="/" className={`text-2xl font-bold tracking-tighter ${isDarkText ? 'text-slate-900' : 'text-slate-900'}`}>
            Prajwalika Foundation
          </Link>

          {/* Desktop Navigation (Hidden if Search is Open to reduce clutter, optional) */}
          {!isSearchOpen && (
            <ul className={`hidden lg:flex gap-10 font-bold text-[14px] ${isDarkText ? 'text-slate-800' : 'text-slate-800'}`}>
              
              {/* Dropdown 1: About */}
              <li className="group relative cursor-pointer flex items-center gap-1 hover:text-orange-600 transition-colors h-full py-2">
                <span className="flex items-center gap-1">About us <FaChevronDown className="text-[10px]" /></span>
                
                {/* The Dropdown Menu */}
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white shadow-xl border border-slate-100 w-56 rounded-sm overflow-hidden">
                    <Link to="/mission" className="block px-6 py-3 hover:bg-slate-50 text-slate-800 hover:text-orange-600 border-b border-slate-50">Our Mission</Link>
                    <Link to="/team" className="block px-6 py-3 hover:bg-slate-50 text-slate-800 hover:text-orange-600 border-b border-slate-50">Leadership</Link>
                    <Link to="/history" className="block px-6 py-3 hover:bg-slate-50 text-slate-800 hover:text-orange-600">History</Link>
                  </div>
                </div>
              </li>

              {/* Dropdown 2: Work */}
              <li className="group relative cursor-pointer flex items-center gap-1 hover:text-orange-600 transition-colors">
                <span className="flex items-center gap-1">Our work <FaChevronDown className="text-[10px]" /></span>
                 {/* Duplicate structure for other dropdowns */}
                 <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white shadow-xl border border-slate-100 w-56 rounded-sm overflow-hidden">
                    <Link to="/programs" className="block px-6 py-3 hover:bg-slate-50 text-slate-800 hover:text-orange-600 border-b border-slate-50">Programs</Link>
                    <Link to="/impact" className="block px-6 py-3 hover:bg-slate-50 text-slate-800 hover:text-orange-600">Impact Stories</Link>
                  </div>
                </div>
              </li>

              <li className="group relative cursor-pointer flex items-center gap-1 hover:text-orange-600 transition-colors">
                <Link to="/ideas" className="flex items-center gap-1">Ideas <FaChevronDown className="text-[10px]" /></Link>
              </li>
            </ul>
          )}

          {/* Search Toggle Button */}
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={`flex items-center gap-2 font-bold text-[13px] uppercase tracking-wider hover:opacity-70 ${isDarkText ? 'text-slate-900' : 'text-slate-900'}`}
          >
            {isSearchOpen ? (
              <>
                Search <FaTimes className="text-lg" />
              </>
            ) : (
              <>
                Search <FaSearch className="text-lg" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* EXPANDABLE SEARCH BAR (The Yellow Area) */}
      <div className={`absolute left-0 w-full bg-[#EBCB00] overflow-hidden transition-all duration-500 ease-in-out ${isSearchOpen ? 'max-h-60 py-6' : 'max-h-0 py-0'}`}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex gap-4 max-w-4xl mx-auto">
            <input 
              type="text" 
              placeholder="Search"
              className="w-full px-6 py-4 text-lg outline-none text-slate-900 placeholder:text-slate-500 shadow-inner bg-white rounded-sm"
              autoFocus={isSearchOpen}
            />
            <button className="bg-slate-900 text-white px-10 py-4 font-bold uppercase tracking-wider rounded-sm hover:bg-slate-800 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
