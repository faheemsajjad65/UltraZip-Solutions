import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '../layout/Logo';

interface ZipperStoryAssemblyProps {
  onComplete: () => void;
}

export default function ZipperStoryAssembly({ onComplete }: ZipperStoryAssemblyProps) {
  const [progress, setProgress] = useState(0); // 0 to 1 (0 = closed, 1 = unzipped)
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds for the unzip animation
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const nextProgress = Math.min(elapsed / duration, 1);
      
      setProgress(nextProgress);

      if (nextProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setIsComplete(true), 300);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(onComplete, 800);
      return () => clearTimeout(timer);
    }
  }, [isComplete, onComplete]);

  // Animation constants
  const ZIP_HEIGHT = 800;
  const V_WIDTH = 400; // Wider V for reveal
  const CLOSED_GAP = 2;
  
  // Calculate slider Y position (from top to bottom)
  const sliderY = progress * ZIP_HEIGHT;

  return (
    <motion.div 
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Zipper Container */}
        <div className="relative w-full h-full flex justify-center">
          
          {/* Left Tape & Teeth (Curtain) */}
          <svg className="absolute inset-0 w-full h-full overflow-visible" style={{ filter: 'drop-shadow(10px 0 20px rgba(0,0,0,0.5))' }}>
            <motion.path
              d={`M 0 0 L ${window.innerWidth/2 - CLOSED_GAP/2} 0 L ${window.innerWidth/2 - CLOSED_GAP/2} ${sliderY} L ${window.innerWidth/2 - V_WIDTH/2} 0 L 0 0 Z`}
              fill="#020617"
              animate={{ d: `M 0 0 L ${window.innerWidth/2 - CLOSED_GAP/2} 0 L ${window.innerWidth/2 - CLOSED_GAP/2} ${sliderY} L ${window.innerWidth/2 - V_WIDTH/2} 0 L 0 0 Z` }}
            />
            {/* Main Left Tape Body */}
            <motion.rect
              x="0"
              y="0"
              width={window.innerWidth/2 - CLOSED_GAP/2}
              height={window.innerHeight}
              fill="#020617"
              animate={{ 
                x: -progress * (window.innerWidth / 2) 
              }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            
            {/* Left Teeth along the edge */}
            {[...Array(60)].map((_, i) => {
              const y = (i / 59) * window.innerHeight;
              const centerX = window.innerWidth / 2;
              const isUnzipped = y < sliderY;
              
              // Calculate tooth position based on the opening V
              const toothX = isUnzipped 
                ? centerX - CLOSED_GAP/2 - 15 - (V_WIDTH/2 * (1 - y/sliderY))
                : centerX - CLOSED_GAP/2 - 15;

              return (
                <motion.rect
                  key={`left-tooth-${i}`}
                  x={toothX}
                  y={y - 3}
                  width="20"
                  height="6"
                  rx="1"
                  fill="#94a3b8"
                  stroke="#475569"
                  strokeWidth="1"
                  animate={{ 
                    x: toothX - (progress * (window.innerWidth / 4) * (y < sliderY ? 1 : 0))
                  }}
                />
              );
            })}
          </svg>

          {/* Right Tape & Teeth (Curtain) */}
          <svg className="absolute inset-0 w-full h-full overflow-visible" style={{ filter: 'drop-shadow(-10px 0 20px rgba(0,0,0,0.5))' }}>
            {/* Main Right Tape Body */}
            <motion.rect
              x={window.innerWidth/2 + CLOSED_GAP/2}
              y="0"
              width={window.innerWidth/2}
              height={window.innerHeight}
              fill="#020617"
              animate={{ 
                x: window.innerWidth/2 + CLOSED_GAP/2 + (progress * (window.innerWidth / 2))
              }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            
            {/* Right Teeth along the edge */}
            {[...Array(60)].map((_, i) => {
              const y = (i / 59) * window.innerHeight + 5;
              const centerX = window.innerWidth / 2;
              const isUnzipped = y < sliderY;
              
              const toothX = isUnzipped 
                ? centerX + CLOSED_GAP/2 - 5 + (V_WIDTH/2 * (1 - y/sliderY))
                : centerX + CLOSED_GAP/2 - 5;

              return (
                <motion.rect
                  key={`right-tooth-${i}`}
                  x={toothX}
                  y={y - 3}
                  width="20"
                  height="6"
                  rx="1"
                  fill="#94a3b8"
                  stroke="#475569"
                  strokeWidth="1"
                  animate={{ 
                    x: toothX + (progress * (window.innerWidth / 4) * (y < sliderY ? 1 : 0))
                  }}
                />
              );
            })}
          </svg>

          {/* Slider */}
          <motion.div 
            style={{ top: sliderY, left: '50%', x: '-50%', y: '-50%' }}
            className="absolute z-50"
          >
            <div className="relative w-20 h-24 bg-slate-300 rounded-xl border-2 border-slate-100 shadow-2xl flex flex-col items-center">
              <div className="w-12 h-14 bg-slate-400 rounded-lg mt-2 border border-slate-200" />
              {/* Puller */}
              <motion.div 
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 w-10 h-28 bg-slate-400 rounded-full border-2 border-slate-200 shadow-xl origin-top"
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-5 h-14 bg-slate-500/20 rounded-full" />
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Status Label */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center w-full">
          <AnimatePresence mode="wait">
            {!isComplete && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-slate-500 font-bold tracking-[0.4em] uppercase text-[10px]"
              >
                Unlocking Precision Materials
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Logo Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <Logo light className="scale-[4]" />
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
