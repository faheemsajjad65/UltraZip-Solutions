import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Globe, Zap } from 'lucide-react';
import InquiryForm from './InquiryForm';
import ZipperStoryAssembly from '../animations/ZipperStoryAssembly';

// Global flag to track if the animation has played in the current session
let hasPlayedAnimation = false;

export default function Hero() {
  const [isAssembled, setIsAssembled] = useState(hasPlayedAnimation);

  const handleComplete = () => {
    setIsAssembled(true);
    hasPlayedAnimation = true;
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      <AnimatePresence>
        {!isAssembled && (
          <ZipperStoryAssembly onComplete={handleComplete} />
        )}
      </AnimatePresence>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
          alt="Manufacturing Facility" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={hasPlayedAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            animate={{ opacity: isAssembled ? 1 : 0, x: isAssembled ? 0 : -30 }}
            transition={{ duration: 0.8, delay: hasPlayedAnimation ? 0 : 0.2 }}
          >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 uppercase tracking-[0.2em]">
                <Zap className="w-4 h-4 fill-current" />
                Global B2B Supply Chain Partner
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
                Precision <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Materials</span>
              </h1>
              <p className="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-medium">
                Engineered for durability, consistency, and scale. We supply the precision materials for the world's most reliable zippers.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-16">
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all flex items-center gap-2 shadow-2xl shadow-blue-600/40 hover:scale-105 active:scale-95"
                >
                  Request Quote
                  <ChevronRight className="w-6 h-6" />
                </Link>
                <Link 
                  to="/products" 
                  className="bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 active:scale-95"
                >
                  View Catalog
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-blue-500" />
                  <div>
                    <div className="text-white font-bold text-lg">ISO 9001</div>
                    <div className="text-slate-400 text-sm">Certified Quality</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-blue-500" />
                  <div>
                    <div className="text-white font-bold text-lg">50+ Countries</div>
                    <div className="text-slate-400 text-sm">Global Export</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-8 h-8 text-blue-500" />
                  <div>
                    <div className="text-white font-bold text-lg">24h Response</div>
                    <div className="text-slate-400 text-sm">Fast RFQ</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={hasPlayedAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              animate={{ opacity: isAssembled ? 1 : 0, y: isAssembled ? 0 : 30 }}
              transition={{ duration: 0.8, delay: hasPlayedAnimation ? 0 : 0.4 }}
              className="hidden lg:block"
            >
              <InquiryForm />
            </motion.div>
          </div>
        </div>
      </section>
  );
}
