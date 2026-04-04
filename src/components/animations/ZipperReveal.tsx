import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '../layout/Logo';

export default function ZipperReveal({ children }: { children: React.ReactNode }) {
  const [isUnzipped, setIsUnzipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUnzipped(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-slate-950">
      {/* The Content being revealed */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isUnzipped ? 1 : 0, scale: isUnzipped ? 1 : 0.95 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>

      {/* The Zipper Overlay */}
      <AnimatePresence>
        {!isUnzipped && (
          <motion.div 
            className="absolute inset-0 z-[100] flex pointer-events-none"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            {/* Left Tape */}
            <motion.div 
              className="w-1/2 h-full bg-slate-900 border-r-4 border-slate-800 relative flex items-center justify-end"
              initial={{ x: 0 }}
              animate={{ x: isUnzipped ? '-100%' : 0 }}
              transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1], delay: 0.5 }}
            >
              {/* Left Teeth */}
              <div className="absolute right-0 top-0 bottom-0 w-8 flex flex-col justify-around py-4">
                {[...Array(40)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-6 h-3 bg-slate-700 rounded-sm border border-slate-600"
                    style={{ transform: `translateX(${i % 2 === 0 ? '2px' : '-2px'})` }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Tape */}
            <motion.div 
              className="w-1/2 h-full bg-slate-900 border-l-4 border-slate-800 relative flex items-center justify-start"
              initial={{ x: 0 }}
              animate={{ x: isUnzipped ? '100%' : 0 }}
              transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1], delay: 0.5 }}
            >
              {/* Right Teeth */}
              <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-around py-4">
                {[...Array(40)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-6 h-3 bg-slate-700 rounded-sm border border-slate-600"
                    style={{ transform: `translateY(6px) translateX(${i % 2 === 0 ? '-2px' : '2px'})` }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Slider */}
            <motion.div 
              className="absolute left-1/2 top-0 -translate-x-1/2 z-[110] w-24 h-32 flex flex-col items-center"
              initial={{ y: -100 }}
              animate={{ y: '110vh' }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
            >
              <div className="w-16 h-20 bg-slate-400 rounded-xl border-2 border-slate-300 shadow-2xl relative">
                <div className="absolute inset-2 bg-slate-500/20 rounded-lg border border-white/20" />
                {/* Puller */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-8 h-20 bg-slate-400 rounded-full border-2 border-slate-300 shadow-xl" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Text */}
      <AnimatePresence>
        {!isUnzipped && (
          <motion.div 
            className="absolute inset-0 z-[120] flex items-center justify-center pointer-events-none"
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <Logo light className="scale-150" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
