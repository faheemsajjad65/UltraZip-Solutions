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
    const duration = 2000; // 2 seconds for a smooth reveal
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
      onComplete();
    }
  }, [isComplete, onComplete]);

  const WIDTH = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const HEIGHT = typeof window !== 'undefined' ? window.innerHeight : 1080;
  const CENTER_X = WIDTH / 2;
  
  // Slider position
  const sliderY = progress * HEIGHT;
  
  // V-Shape opening width at the top
  const MAX_OPEN_WIDTH = WIDTH * 0.8;
  const currentOpenWidth = MAX_OPEN_WIDTH; // Keep V shape constant, just move slider

  // SVG Paths for the tapes
  // Left Tape: Vertical from bottom to slider, then angled to top-left
  const leftPath = `M ${CENTER_X},${HEIGHT} L ${CENTER_X},${sliderY} L ${CENTER_X - currentOpenWidth / 2},0 L 0,0 L 0,${HEIGHT} Z`;
  
  // Right Tape: Vertical from bottom to slider, then angled to top-right
  const rightPath = `M ${CENTER_X},${HEIGHT} L ${CENTER_X},${sliderY} L ${CENTER_X + currentOpenWidth / 2},0 L ${WIDTH},0 L ${WIDTH},${HEIGHT} Z`;

  return (
    <motion.div 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[200] overflow-hidden pointer-events-none"
    >
      <svg className="w-full h-full" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="none">
        {/* Left Tape */}
        <path
          d={leftPath}
          fill="#020617" // slate-950
          stroke="#1e293b" // slate-800
          strokeWidth="2"
        />
        
        {/* Right Tape */}
        <path
          d={rightPath}
          fill="#020617" // slate-950
          stroke="#1e293b" // slate-800
          strokeWidth="2"
        />

        {/* Teeth along the edges */}
        <g>
          {[...Array(60)].map((_, i) => {
            const y = (i / 59) * HEIGHT;
            const isAboveSlider = y < sliderY;
            
            let leftX = CENTER_X;
            let rightX = CENTER_X;
            
            if (isAboveSlider) {
              // Interpolate X based on the V-shape angled line
              // The line goes from (CENTER_X, sliderY) to (CENTER_X - currentOpenWidth/2, 0)
              const factor = (sliderY - y) / sliderY;
              leftX = CENTER_X - factor * (currentOpenWidth / 2);
              rightX = CENTER_X + factor * (currentOpenWidth / 2);
            }

            return (
              <React.Fragment key={i}>
                {/* Left Tooth */}
                <rect
                  x={leftX - 8}
                  y={y - 2}
                  width="8"
                  height="4"
                  rx="1"
                  fill="#334155"
                  className={isAboveSlider ? "opacity-40" : "opacity-100"}
                />
                {/* Right Tooth */}
                <rect
                  x={rightX}
                  y={y + 2}
                  width="8"
                  height="4"
                  rx="1"
                  fill="#334155"
                  className={isAboveSlider ? "opacity-40" : "opacity-100"}
                />
              </React.Fragment>
            );
          })}
        </g>

        {/* Slider */}
        <g transform={`translate(${CENTER_X}, ${sliderY})`}>
          <rect x="-14" y="-18" width="28" height="36" rx="4" fill="#cbd5e1" stroke="#f1f5f9" strokeWidth="1" />
          <rect x="-10" y="-12" width="20" height="24" rx="2" fill="#94a3b8" />
          
          {/* Puller */}
          <motion.g
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ originY: -12 }}
          >
            <rect x="-5" y="0" width="10" height="40" rx="4" fill="#94a3b8" stroke="#e2e8f0" strokeWidth="1" />
            <circle cx="0" cy="32" r="3" fill="#64748b" />
          </motion.g>
        </g>
      </svg>
    </motion.div>
  );
}
