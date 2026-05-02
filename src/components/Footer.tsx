import { Link } from 'react-router-dom';
// Standard icons usually work fine
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
// Import the "icons" object as a fallback for brand icons
// import * as icons from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Helper to safely get brand icons or a fallback circle
  // const BrandIcon = ({ name, size = 20 }) => {
  //   const Icon = icons[name] || icons['Circle']; 
  //   return <Icon size={size} />;
  // };

  return (
    <footer className="bg-[#0F172A] text-slate-400 pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Top Section: CTA / Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-slate-800 mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Empower the next generation.</h2>
            <p className="text-lg max-w-md">Join our community to receive updates on welfare programs and scholarship opportunities.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-slate-800 border-none rounded-full py-4 px-6 text-white focus:ring-2 focus:ring-orange-500 outline-none transition"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 whitespace-nowrap">
              Subscribe <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">P</div>
              <h2 className="text-white text-2xl font-bold tracking-tight">Prajwalika AP</h2>
            </div>
            <p className="text-sm leading-relaxed">
              Fostering community through annual get-togethers and welfare programs, 
              inspired by the vision of Dr. A.P.J. Abdul Kalam.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                {/* <BrandIcon name="Facebook" /> */}
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                {/* <BrandIcon name="Twitter" /> */}
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                {/* <BrandIcon name="Instagram" /> */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Foundation</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/mission" className="hover:text-white transition-colors">Mission & Vision</Link></li>
              <li><Link to="/donate" className="hover:text-white transition-colors text-orange-400 font-bold">Donate Now</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Resources</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Member Portal</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-500 shrink-0" size={20} />
                <span>123 Welfare Street, Education Hub,<br/>City, State, Pin - 500001</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-500 shrink-0" size={20} />
                <a href="mailto:info@prajwalika.org" className="hover:text-white transition">info@prajwalika.org</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-500 shrink-0" size={20} />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Quote & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs order-2 md:order-1">© {currentYear} Prajwalika AP. Crafted with passion for education.</p>
          <div className="text-center md:text-right order-1 md:order-2">
            <p className="text-sm text-slate-300 italic font-serif">
              "Dream is not that which you see while sleeping, it is something that does not let you sleep."
            </p>
            <span className="text-[10px] uppercase tracking-widest text-orange-500 font-bold mt-1 block">— Dr. A.P.J. Abdul Kalam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
