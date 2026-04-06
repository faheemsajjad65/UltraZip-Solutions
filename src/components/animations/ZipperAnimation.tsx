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

  const WIDTH = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const HEIGHT = typeof window !== 'undefined' ? window.innerHeight : 1080;
  const CENTER_X = WIDTH / 2;
  
  // Slider position with a slight vibration
  const sliderY = progress * HEIGHT;
  const vibration = Math.sin(Date.now() / 50) * 1.5 * (1 - progress);
  
  // Opening width at the top - increased to ensure it fully clears the screen
  const MAX_OPEN_WIDTH = WIDTH * 2.5;
  
  // SVG Paths for the tapes using a more natural curve
  const getTapePaths = () => {
    const bottomOffset = progress > 0.9 ? (progress - 0.9) * 10 * (WIDTH / 2) : 0;
    const openWidth = MAX_OPEN_WIDTH;
    
    // Left Tape: Bottom -> Slider -> Top Left
    // We use a quadratic curve for the opening part
    const leftPath = `
      M ${CENTER_X - bottomOffset},${HEIGHT} 
      L ${CENTER_X},${sliderY} 
      Q ${CENTER_X - openWidth * 0.1},${sliderY * 0.5} ${CENTER_X - openWidth / 2},0 
      L 0,0 
      L 0,${HEIGHT} 
      Z
    `;
    
    // Right Tape: Bottom -> Slider -> Top Right
    const rightPath = `
      M ${CENTER_X + bottomOffset},${HEIGHT} 
      L ${CENTER_X},${sliderY} 
      Q ${CENTER_X + openWidth * 0.1},${sliderY * 0.5} ${CENTER_X + openWidth / 2},0 
      L ${WIDTH},0 
      L ${WIDTH},${HEIGHT} 
      Z
    `;
    
    return { leftPath, rightPath };
  };

  const { leftPath, rightPath } = getTapePaths();

  return (
    <motion.div 
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-0 z-[200] overflow-hidden pointer-events-none"
    >
      <svg className="w-full h-full" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="tapeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#020617" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="metalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="0" dy="2" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Left Tape */}
        <path
          d={leftPath}
          fill="url(#tapeGradient)"
          stroke="#1e293b"
          strokeWidth="1"
        />
        
        {/* Right Tape */}
        <path
          d={rightPath}
          fill="url(#tapeGradient)"
          stroke="#1e293b"
          strokeWidth="1"
        />

        {/* Teeth along the edges */}
        <g filter="url(#shadow)">
          {[...Array(120)].map((_, i) => {
            const y = (i / 119) * HEIGHT;
            const isAboveSlider = y < sliderY;
            
            let leftX = CENTER_X;
            let rightX = CENTER_X;
            let rotation = 0;
            
            if (isAboveSlider) {
              const t = (sliderY - y) / sliderY;
              const openWidth = MAX_OPEN_WIDTH;
              // Match the quadratic curve: Q CENTER_X - openWidth * 0.1, sliderY * 0.5, CENTER_X - openWidth / 2, 0
              // Quadratic formula: (1-t)^2 * P0 + 2(1-t)t * P1 + t^2 * P2
              const p0 = CENTER_X;
              const p1 = CENTER_X - openWidth * 0.1;
              const p2 = CENTER_X - openWidth / 2;
              leftX = Math.pow(1-t, 2) * p0 + 2 * (1-t) * t * p1 + Math.pow(t, 2) * p2;
              
              const rp1 = CENTER_X + openWidth * 0.1;
              const rp2 = CENTER_X + openWidth / 2;
              rightX = Math.pow(1-t, 2) * p0 + 2 * (1-t) * t * rp1 + Math.pow(t, 2) * rp2;
              
              rotation = t * 15; // Slight tilt as it opens
            }

            return (
              <React.Fragment key={i}>
                {/* Left Tooth */}
                <rect
                  x={leftX - 10}
                  y={y - 2}
                  width="10"
                  height="5"
                  rx="1.5"
                  fill="#94a3b8"
                  transform={`rotate(${-rotation}, ${leftX}, ${y})`}
                  className={isAboveSlider ? "opacity-30" : "opacity-100"}
                  style={{ stroke: '#475569', strokeWidth: 0.5 }}
                />
                {/* Right Tooth */}
                <rect
                  x={rightX}
                  y={y + 1}
                  width="10"
                  height="5"
                  rx="1.5"
                  fill="#94a3b8"
                  transform={`rotate(${rotation}, ${rightX}, ${y})`}
                  className={isAboveSlider ? "opacity-30" : "opacity-100"}
                  style={{ stroke: '#475569', strokeWidth: 0.5 }}
                />
              </React.Fragment>
            );
          })}
        </g>

        {/* Slider */}
        <g transform={`translate(${CENTER_X + vibration}, ${sliderY})`} filter="url(#shadow)">
          {/* Slider Body */}
          <path 
            d="M -18,-22 L 18,-22 L 14,18 L -14,18 Z" 
            fill="url(#metalGradient)" 
            stroke="#475569" 
            strokeWidth="1" 
          />
          <rect x="-12" y="-16" width="24" height="28" rx="2" fill="#64748b" opacity="0.3" />
          
          {/* Puller Attachment */}
          <rect x="-6" y="-26" width="12" height="8" rx="2" fill="#475569" />
          
          {/* Puller */}
          <motion.g
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{ originY: -22 }}
          >
            <rect x="-7" y="-22" width="14" height="45" rx="4" fill="url(#metalGradient)" stroke="#475569" strokeWidth="1" />
            <rect x="-3" y="5" width="6" height="25" rx="2" fill="#1e293b" opacity="0.4" />
            <circle cx="0" cy="35" r="4" fill="#1e293b" opacity="0.6" />
          </motion.g>
        </g>
      </svg>
    </motion.div>
  );
}
