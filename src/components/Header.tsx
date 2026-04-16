import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const years = ['2024', '2023', '2022', '2021'];

  // Handle scroll to change header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Condition: Show dark text/white bg if we scrolled OR if we aren't on the Home Page
  const isSolid = isScrolled || !isHomePage;

  return (
    <header className="fixed top-0 w-full z-50 px-4 md:px-10 py-5 transition-all duration-500">
      <nav className={`mx-auto max-w-7xl flex items-center justify-between px-8 py-4 rounded-2xl transition-all duration-500 border shadow-xl ${
        isSolid 
          ? 'bg-white/95 backdrop-blur-xl text-slate-900 border-slate-200 shadow-slate-200/50' 
          : 'bg-white/10 backdrop-blur-md text-white border-white/20 shadow-none'
      }`}>
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
            <span className="text-white font-black text-2xl">P</span>
          </div>
          <span className={`font-bold text-2xl tracking-tight hidden sm:block ${isSolid ? 'text-slate-900' : 'text-white'}`}>
            Prajwalika<span className="text-orange-500">.</span>
          </span>
        </Link>

        {/* Desktop Menu - Font size 16px as requested */}
        <ul className="hidden lg:flex items-center gap-10 font-semibold text-[16px]">
          <li className="hover:text-orange-500 transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link to="/about">About Us</Link>
          </li>
          
          {/* Dropdown Menu */}
          <li className="relative group cursor-pointer py-2">
            <span className="flex items-center gap-1 group-hover:text-orange-500 transition-colors">
              Get Together <span className="text-xs opacity-60">▼</span>
            </span>
            <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-2 text-slate-800">
                {years.map(year => (
                  <Link 
                    key={year} 
                    to={`/get-together/${year}`} 
                    className="block px-4 py-3 hover:bg-orange-50 rounded-lg transition-colors font-medium text-sm"
                  >
                    Class of {year}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          
          <li className="hover:text-orange-500 transition-colors">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-6">
          <Link to="/login" className={`hidden md:block text-[16px] font-bold hover:opacity-70 ${isSolid ? 'text-slate-900' : 'text-white'}`}>
            Login
          </Link>
          <Link 
            to="/donate" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-[16px] font-bold shadow-lg shadow-orange-500/30 transition-all active:scale-95"
          >
            Donate Now
          </Link>
          
          {/* Mobile Toggle Button - Guaranteed 3 Lines */}
            <button 
            className="lg:hidden group flex flex-col items-end justify-center w-10 h-10 p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
            {/* Line 1 */}
            <div className={`h-[2px] w-7 mb-1.5 rounded-full transition-all ${isSolid ? 'bg-slate-900' : 'bg-white'}`}></div>
            {/* Line 2 */}
            <div className={`h-[2px] w-5 mb-1.5 rounded-full transition-all ${isSolid ? 'bg-slate-900' : 'bg-white'}`}></div>
            {/* Line 3 */}
            <div className={`h-[2px] w-7 rounded-full transition-all ${isSolid ? 'bg-slate-900' : 'bg-white'}`}></div>
            </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-xl lg:hidden flex flex-col p-10 z-[60] animate-in fade-in duration-300">
          <button 
            onClick={() => setMobileMenuOpen(false)} 
            className="self-end text-white text-5xl font-light mb-10"
          >
            &times;
          </button>
          <ul className="text-white text-3xl space-y-8 font-bold">
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/donate" onClick={() => setMobileMenuOpen(false)} className="text-orange-500">Donate</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
