import React from 'react';
import { Zap } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export default function Logo({ className, iconOnly = false, light = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2 group cursor-pointer", className)}>
      <div className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg",
        light ? "bg-white text-blue-600 shadow-white/10" : "bg-blue-600 text-white shadow-blue-600/20"
      )}>
        <Zap className="w-6 h-6 fill-current" />
      </div>
      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span className={cn(
            "text-2xl font-black tracking-tighter uppercase",
            light ? "text-white" : "text-slate-900"
          )}>
            Ultra<span className="text-blue-600">Zip</span>
          </span>
          <span className={cn(
            "text-[10px] font-bold uppercase tracking-[0.3em] mt-0.5",
            light ? "text-blue-400" : "text-slate-400"
          )}>
            Solutions
          </span>
        </div>
      )}
    </div>
  );
}
