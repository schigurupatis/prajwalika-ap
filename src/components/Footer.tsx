import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: About/Logo */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-bold">Prajwalika AP</h2>
          <p className="text-sm leading-relaxed">
            Empowering students and fostering community through our annual get-togethers 
            and welfare programs, inspired by the vision of Dr. A.P.J. Abdul Kalam.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-400 transition">About Us</Link></li>
            <li><Link to="/mission" className="hover:text-orange-400 transition">Mission & Vision</Link></li>
            <li><Link to="/donate" className="hover:text-orange-400 transition">Donate Now</Link></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-orange-400 transition">Contact Us</Link></li>
            <li><Link to="/subscribe" className="hover:text-orange-400 transition">Newsletter</Link></li>
            <li><Link to="/login" className="hover:text-orange-400 transition">Member Login</Link></li>
            <li><a href="#" className="hover:text-orange-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-2">
              <span>📍</span>
              <span>123 Welfare Street, Education Hub,<br/>City, State, Pin - 000000</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>📧</span>
              <a href="mailto:info@jewelsofwelfare.org" className="hover:text-orange-400">info@jewelsofwelfare.org</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>📞</span>
              <span>+91 98765 43210</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs">
        <p>© {currentYear} Prajwalika AP. All rights reserved.</p>
        <p className="mt-2 text-gray-500 italic">"Dream is not that which you see while sleeping, it is something that does not let you sleep." - Dr. Kalam</p>
      </div>
    </footer>
  );
};

export default Footer;
