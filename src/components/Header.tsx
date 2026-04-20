import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 py-8 bg-transparent">
      <nav className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Foundation Name */}
        <Link to="/" className="text-xl md:text-2xl font-bold text-blue-900 tracking-tighter">
          Prajwalika Foundation
        </Link>

        {/* Clean Menu Items with dropdown arrows */}
        <ul className="hidden lg:flex gap-10 font-bold text-[14px] text-slate-800">
          <li className="flex items-center gap-1 hover:text-orange-600 transition-colors">
            <Link to="/about">About us</Link> <span className="text-[10px]">▼</span>
          </li>
          <li className="flex items-center gap-1 hover:text-orange-600 transition-colors">
            <Link to="/work">Our work</Link> <span className="text-[10px]">▼</span>
          </li>
          <li className="flex items-center gap-1 hover:text-orange-600 transition-colors">
            <Link to="/ideas">Ideas</Link> <span className="text-[10px]">▼</span>
          </li>
        </ul>

        {/* Search Action */}
        <div className="flex items-center gap-2 font-bold text-[14px] text-slate-800 cursor-pointer">
          Search <span className="text-lg">🔍</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
