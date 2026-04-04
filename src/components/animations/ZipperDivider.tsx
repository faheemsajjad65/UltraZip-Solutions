import React from 'react';
import { motion } from 'motion/react';

export default function ZipperDivider() {
  return (
    <div className="relative h-24 w-full overflow-hidden flex items-center justify-center bg-white">
      {/* Tape Background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full bg-slate-50 border-r-2 border-slate-200" />
        <div className="w-1/2 h-full bg-slate-50 border-l-2 border-slate-200" />
      </div>

      {/* Teeth */}
      <div className="relative z-10 flex flex-col h-full justify-around py-2">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center gap-0.5">
            <motion.div 
              initial={{ x: -10 }}
              whileInView={{ x: 0 }}
              className="w-6 h-2 bg-slate-400 rounded-sm" 
            />
            <motion.div 
              initial={{ x: 10 }}
              whileInView={{ x: 0 }}
              className="w-6 h-2 bg-slate-400 rounded-sm" 
              style={{ transform: 'translateY(2px)' }}
            />
          </div>
        ))}
      </div>

      {/* Center Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-300 -translate-x-1/2" />
    </div>
  );
}
