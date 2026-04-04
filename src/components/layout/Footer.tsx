import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/">
              <Logo light />
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Global leaders in high-performance zipper raw materials. Empowering manufacturers with precision-engineered yarn, coils, and components since 1998.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="hover:text-blue-500 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Our Materials</Link></li>
              <li><Link to="/configurator" className="hover:text-blue-500 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Zipper Configurator</Link></li>
              <li><Link to="/industries" className="hover:text-blue-500 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Industries Served</Link></li>
              <li><Link to="/quality" className="hover:text-blue-500 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Quality Control</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Company Story</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Request RFQ</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Key Products</h4>
            <ul className="space-y-4">
              <li><Link to="/products/polyester-yarn" className="hover:text-blue-500 transition-colors">Polyester Yarn</Link></li>
              <li><Link to="/products/nylon-monofilament" className="hover:text-blue-500 transition-colors">Nylon Monofilament</Link></li>
              <li><Link to="/products/zipper-tape" className="hover:text-blue-500 transition-colors">Zipper Tape</Link></li>
              <li><Link to="/products/metal-components" className="hover:text-blue-500 transition-colors">Metal Components</Link></li>
              <li><Link to="/products" className="hover:text-blue-500 transition-colors">Custom Materials</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Global HQ</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-6 h-6 text-blue-500 shrink-0" />
                <span>123 Industrial Zone, Tech Park,<br />Shanghai, China 200000</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+86 (21) 5555-0123</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>sales@ultrazipsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Ultra Zip Solutions. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
