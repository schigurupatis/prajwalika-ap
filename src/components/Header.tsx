import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkText = isScrolled || !isHomePage;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
    }`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className={`text-2xl font-bold tracking-tight ${isDarkText ? 'text-blue-900' : 'text-white'}`}>
          Prajwalika Foundation
        </Link>

        {/* Menu Items */}
        <ul className={`hidden lg:flex gap-8 font-medium ${isDarkText ? 'text-slate-700' : 'text-white'}`}>
          <li className="hover:text-orange-500 transition-colors"><Link to="/about">About us ▾</Link></li>
          <li className="hover:text-orange-500 transition-colors"><Link to="/work">Our work ▾</Link></li>
          <li className="hover:text-orange-500 transition-colors"><Link to="/gallery">Ideas ▾</Link></li>
        </ul>

        {/* Search/Action */}
        <div className={`flex items-center gap-4 ${isDarkText ? 'text-slate-700' : 'text-white'}`}>
          <button className="text-sm font-bold uppercase tracking-wider">Search 🔍</button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
