import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, Check, Download, Share2, Info } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const TAPE_COLORS = [
  { name: 'Classic Black', hex: '#0f172a' },
  { name: 'Steel Grey', hex: '#64748b' },
  { name: 'Navy Blue', hex: '#1e3a8a' },
  { name: 'Forest Green', hex: '#14532d' },
  { name: 'Burgundy', hex: '#7f1d1d' },
  { name: 'Pure White', hex: '#f8fafc' },
  { name: 'Safety Orange', hex: '#ea580c' },
];

const TEETH_FINISHES = [
  { name: 'Shiny Gold', color: '#fbbf24', stroke: '#d97706' },
  { name: 'Polished Silver', color: '#e2e8f0', stroke: '#94a3b8' },
  { name: 'Antique Brass', color: '#a16207', stroke: '#713f12' },
  { name: 'Gunmetal', color: '#334155', stroke: '#0f172a' },
  { name: 'Rose Gold', color: '#fda4af', stroke: '#e11d48' },
];

const ZIPPER_TYPES = [
  { id: 'metal', name: 'Metal Zipper', description: 'Heavy-duty, luxury feel' },
  { id: 'nylon', name: 'Nylon Coil', description: 'Flexible, lightweight' },
  { id: 'plastic', name: 'Plastic Vislon', description: 'Sporty, chunky look' },
];

export default function ZipperConfigurator() {
  const [tapeColor, setTapeColor] = useState(TAPE_COLORS[0]);
  const [teethFinish, setTeethFinish] = useState(TEETH_FINISHES[0]);
  const [zipperType, setZipperType] = useState(ZIPPER_TYPES[0]);
  const [isRotating, setIsRotating] = useState(false);

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Visualization Area */}
        <div className="lg:col-span-7 bg-slate-50 p-8 md:p-12 flex flex-col items-center justify-center relative min-h-[500px]">
          <div className="absolute top-6 left-6 flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <Info className="w-4 h-4" />
            Interactive 2D Preview
          </div>

          <motion.div 
            className="relative w-full max-w-md aspect-[3/4] flex items-center justify-center"
            animate={{ rotateY: isRotating ? 360 : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            {/* The Zipper SVG */}
            <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-2xl">
              {/* Tape Left */}
              <rect x="40" y="0" width="60" height="400" fill={tapeColor.hex} rx="2" />
              {/* Tape Right */}
              <rect x="100" y="0" width="60" height="400" fill={tapeColor.hex} rx="2" />
              
              {/* Center Gap */}
              <rect x="98" y="0" width="4" height="400" fill="rgba(0,0,0,0.1)" />

              {/* Teeth */}
              {[...Array(24)].map((_, i) => {
                const y = i * 16 + 10;
                return (
                  <g key={i}>
                    {/* Left Tooth */}
                    <rect 
                      x="85" y={y} width="15" height="8" 
                      fill={teethFinish.color} 
                      stroke={teethFinish.stroke}
                      strokeWidth="0.5"
                      rx="1" 
                    />
                    {/* Right Tooth */}
                    <rect 
                      x="100" y={y + 8} width="15" height="8" 
                      fill={teethFinish.color} 
                      stroke={teethFinish.stroke}
                      strokeWidth="0.5"
                      rx="1" 
                    />
                  </g>
                );
              })}

              {/* Slider */}
              <motion.g 
                initial={{ y: 0 }}
                animate={{ y: 150 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* Slider Body */}
                <rect x="80" y="20" width="40" height="50" rx="4" fill={teethFinish.color} stroke={teethFinish.stroke} strokeWidth="1" />
                <rect x="85" y="25" width="30" height="40" rx="2" fill="rgba(255,255,255,0.2)" />
                {/* Puller */}
                <rect x="92" y="45" width="16" height="40" rx="8" fill={teethFinish.color} stroke={teethFinish.stroke} strokeWidth="1" />
                <circle cx="100" cy="55" r="4" fill="rgba(0,0,0,0.1)" />
              </motion.g>
            </svg>
          </motion.div>

          <div className="mt-12 flex gap-4">
            <button 
              onClick={() => setIsRotating(!isRotating)}
              className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Rotate View
            </button>
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Spec
            </button>
          </div>
        </div>

        {/* Controls Area */}
        <div className="lg:col-span-5 p-8 md:p-12 border-l border-slate-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
              <Settings className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Configurator</h3>
          </div>

          <div className="space-y-10">
            {/* Zipper Type */}
            <div>
              <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">1. Select Zipper Type</label>
              <div className="grid grid-cols-1 gap-3">
                {ZIPPER_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setZipperType(type)}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left",
                      zipperType.id === type.id 
                        ? "border-blue-600 bg-blue-50/50" 
                        : "border-slate-100 hover:border-slate-200"
                    )}
                  >
                    <div>
                      <div className="font-bold text-slate-900">{type.name}</div>
                      <div className="text-xs text-slate-500">{type.description}</div>
                    </div>
                    {zipperType.id === type.id && <Check className="w-5 h-5 text-blue-600" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Tape Color */}
            <div>
              <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">2. Tape Color</label>
              <div className="flex flex-wrap gap-3">
                {TAPE_COLORS.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setTapeColor(color)}
                    className={cn(
                      "w-10 h-10 rounded-full border-2 transition-all relative group",
                      tapeColor.name === color.name ? "border-blue-600 scale-110" : "border-transparent hover:scale-105"
                    )}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {tapeColor.name === color.name && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Check className={cn("w-5 h-5", color.name === 'Pure White' ? 'text-slate-900' : 'text-white')} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-3 text-sm font-medium text-slate-600">Selected: <span className="text-slate-900">{tapeColor.name}</span></div>
            </div>

            {/* Teeth Finish */}
            <div>
              <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">3. Teeth & Slider Finish</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {TEETH_FINISHES.map((finish) => (
                  <button
                    key={finish.name}
                    onClick={() => setTeethFinish(finish)}
                    className={cn(
                      "px-4 py-3 rounded-xl border-2 transition-all text-sm font-bold flex items-center gap-2",
                      teethFinish.name === finish.name 
                        ? "border-blue-600 bg-blue-50/50 text-blue-700" 
                        : "border-slate-100 text-slate-600 hover:border-slate-200"
                    )}
                  >
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: finish.color, border: `1px solid ${finish.stroke}` }}></div>
                    {finish.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-xl shadow-blue-700/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                Request Quote for this Config
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">
                Custom configurations require a minimum order of 5,000 units.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
