import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '../layout/Logo';

interface ZipperAnimationProps {
  onComplete: () => void;
}

export default function ZipperAnimation({ onComplete }: ZipperAnimationProps) {
  const [progress, setProgress] = useState(0); // 0 to 1
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 800; // Reduced from 2000ms to 800ms for a snappier feel
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const nextProgress = Math.min(elapsed / duration, 1);
      
      setProgress(nextProgress);

      if (nextProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsComplete(true);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (isComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  // Animation constants
  const ZIP_HEIGHT = 600;
  const CLOSED_GAP = 4;
  
  // Calculate slider Y position (from bottom to top)
  const sliderY = (1 - progress) * ZIP_HEIGHT;

  return (
    <motion.div 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[200] bg-slate-950 flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full max-w-lg h-[80vh] flex items-center justify-center">
        
        {/* Zipper Container */}
        <div className="relative w-full h-[600px] flex justify-center">
          
          {/* Left Tape */}
          <div 
            className="absolute h-full w-20 bg-slate-900 border-r-2 border-slate-800 shadow-2xl"
            style={{ right: '50%', marginRight: CLOSED_GAP / 2 }}
          >
            {/* Left Teeth */}
            <div className="absolute right-0 h-full w-4 flex flex-col justify-around py-2">
              {[...Array(40)].map((_, i) => {
                const y = (i / 39) * ZIP_HEIGHT;
                const isZipped = y > sliderY;
                return (
                  <motion.div
                    key={`left-tooth-${i}`}
                    className="w-4 h-1.5 bg-slate-700 rounded-sm border border-slate-600"
                    animate={{ opacity: isZipped ? 1 : 0.3, x: isZipped ? 0 : -5 }}
                  />
                );
              })}
            </div>
          </div>

          {/* Right Tape */}
          <div 
            className="absolute h-full w-20 bg-slate-900 border-l-2 border-slate-800 shadow-2xl"
            style={{ left: '50%', marginLeft: CLOSED_GAP / 2 }}
          >
            {/* Right Teeth */}
            <div className="absolute left-0 h-full w-4 flex flex-col justify-around py-2">
              {[...Array(40)].map((_, i) => {
                const y = (i / 39) * ZIP_HEIGHT + 4;
                const isZipped = y > sliderY;
                return (
                  <motion.div
                    key={`right-tooth-${i}`}
                    className="w-4 h-1.5 bg-slate-700 rounded-sm border border-slate-600 translate-y-1"
                    animate={{ opacity: isZipped ? 1 : 0.3, x: isZipped ? 0 : 5 }}
                  />
                );
              })}
            </div>
          </div>

          {/* Slider */}
          <motion.div 
            style={{ top: sliderY, left: '50%', x: '-50%', y: '-50%' }}
            className="absolute z-50"
          >
            <div className="relative w-14 h-18 bg-slate-300 rounded-lg border-2 border-slate-100 shadow-2xl flex flex-col items-center">
              <div className="w-8 h-10 bg-slate-400 rounded-md mt-2 border border-slate-200" />
              {/* Puller */}
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 w-6 h-20 bg-slate-400 rounded-full border-2 border-slate-200 shadow-xl origin-top"
              >
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-10 bg-slate-500/20 rounded-full" />
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Logo Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <Logo light className="scale-[3]" />
        </div>

      </div>

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute bottom-10 right-10 z-[250] text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 group"
      >
        Skip Animation
        <div className="w-8 h-px bg-slate-700 group-hover:bg-white transition-colors" />
      </button>
    </motion.div>
  );
}
