import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '../layout/Logo';

interface ZipperStoryAssemblyProps {
  onComplete: () => void;
}

export default function ZipperStoryAssembly({ onComplete }: ZipperStoryAssemblyProps) {
  const [progress, setProgress] = useState(0); // 0 to 1
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 3000; // 3 seconds for the zip animation
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const nextProgress = Math.min(elapsed / duration, 1);
      
      setProgress(nextProgress);

      if (nextProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setIsComplete(true), 500);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(onComplete, 1500);
      return () => clearTimeout(timer);
    }
  }, [isComplete, onComplete]);

  // Animation constants
  const ZIP_HEIGHT = 600;
  const V_WIDTH = 160;
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
          <svg className="absolute inset-0 w-full h-full overflow-visible" pointerEvents="none">
            <motion.path
              d={`M ${250 - V_WIDTH/2} 0 L ${250 - CLOSED_GAP/2} ${sliderY} L ${250 - CLOSED_GAP/2} ${ZIP_HEIGHT}`}
              fill="none"
              stroke="#1e293b"
              strokeWidth="40"
              strokeLinejoin="round"
              animate={{ d: `M ${250 - V_WIDTH/2} 0 L ${250 - CLOSED_GAP/2} ${sliderY} L ${250 - CLOSED_GAP/2} ${ZIP_HEIGHT}` }}
            />
            {/* Left Teeth */}
            {[...Array(40)].map((_, i) => {
              const y = (i / 39) * ZIP_HEIGHT;
              const isZipped = y > sliderY;
              const x = isZipped ? 250 - CLOSED_GAP/2 - 10 : 250 - (V_WIDTH/2 * (1 - y/ZIP_HEIGHT)) - 10;
              
              return (
                <motion.rect
                  key={`left-tooth-${i}`}
                  x={x}
                  y={y - 2}
                  width="12"
                  height="4"
                  rx="1"
                  fill="#475569"
                  stroke="#334155"
                  strokeWidth="0.5"
                  initial={false}
                  animate={{ x }}
                />
              );
            })}
          </svg>

          {/* Right Tape */}
          <svg className="absolute inset-0 w-full h-full overflow-visible" pointerEvents="none">
            <motion.path
              d={`M ${250 + V_WIDTH/2} 0 L ${250 + CLOSED_GAP/2} ${sliderY} L ${250 + CLOSED_GAP/2} ${ZIP_HEIGHT}`}
              fill="none"
              stroke="#1e293b"
              strokeWidth="40"
              strokeLinejoin="round"
              animate={{ d: `M ${250 + V_WIDTH/2} 0 L ${250 + CLOSED_GAP/2} ${sliderY} L ${250 + CLOSED_GAP/2} ${ZIP_HEIGHT}` }}
            />
            {/* Right Teeth */}
            {[...Array(40)].map((_, i) => {
              const y = (i / 39) * ZIP_HEIGHT + 4; // Offset right teeth slightly
              const isZipped = y > sliderY;
              const x = isZipped ? 250 + CLOSED_GAP/2 - 2 : 250 + (V_WIDTH/2 * (1 - y/ZIP_HEIGHT)) - 2;
              
              return (
                <motion.rect
                  key={`right-tooth-${i}`}
                  x={x}
                  y={y - 2}
                  width="12"
                  height="4"
                  rx="1"
                  fill="#475569"
                  stroke="#334155"
                  strokeWidth="0.5"
                  initial={false}
                  animate={{ x }}
                />
              );
            })}
          </svg>

          {/* Slider */}
          <motion.div 
            style={{ top: sliderY, left: '50%', x: '-50%', y: '-50%' }}
            className="absolute z-50"
          >
            <div className="relative w-16 h-20 bg-slate-300 rounded-xl border-2 border-slate-100 shadow-2xl flex flex-col items-center">
              <div className="w-10 h-12 bg-slate-400 rounded-lg mt-2 border border-slate-200" />
              {/* Puller */}
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 w-8 h-24 bg-slate-400 rounded-full border-2 border-slate-200 shadow-xl origin-top"
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-12 bg-slate-500/20 rounded-full" />
              </motion.div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-blue-400 uppercase tracking-tighter whitespace-nowrap bg-slate-950/50 px-2 py-1 rounded">
                Precision Assembly
              </div>
            </div>
          </motion.div>

          {/* Bottom Box & Pin */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end gap-1">
            <div className="w-10 h-14 bg-slate-400 rounded-sm border-2 border-slate-300 relative shadow-lg">
              <div className="absolute inset-1 border border-slate-500/30" />
            </div>
            <div className="w-4 h-16 bg-slate-400 rounded-full border-2 border-slate-300 shadow-lg" />
          </div>

        </div>

        {/* Status Label */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={isComplete ? 'complete' : 'zipping'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-slate-400 font-medium tracking-widest uppercase text-xs"
            >
              {isComplete ? "Quality Check Complete." : "Precision Closing Mechanism..."}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Logo Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <Logo light className="scale-[3]" />
        </div>

      </div>

      {/* Final Reveal Transition */}
      {/* Removed white flash to combine animations */}

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
