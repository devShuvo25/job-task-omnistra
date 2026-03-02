"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  // 120 lines for a dense, high-end feel
  const lines = Array.from({ length: 120 });

  return (
    <div className="relative min-h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden font-sans">
      
      {/* Background Graphic: Fixed Centered Position */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
        <svg 
          className="w-[150vmax] h-[150vmax] shrink-0" 
          viewBox="0 0 1000 1000" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Group translated to exactly half of the 1000x1000 viewBox */}
          <g transform="translate(500, 500)">
            {lines.map((_, i) => (
              <motion.line
                key={i}
                x1="0"
                y1="0"
                x2="1000" // Extends far beyond the center
                y2="0"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="4,12"
                strokeOpacity="0.2"
                style={{ rotate: i * 3 }}
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -100 }}
                transition={{
                  duration: 20, // Slower, more cinematic speed
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Central Glow - Layered behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full z-0" />

      {/* Content: Z-index ensures it sits above the lines */}
      <div className="relative z-10 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/5 select-none"
        >
          404
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-[-2rem] space-y-4"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight uppercase">
            Lost in Space
          </h2>
          <p className="text-zinc-500 max-w-sm mx-auto text-sm md:text-base font-light">
            The page you&apos;re looking for doesn&apos;t exist or has been moved to a new sector.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="/"
            className="flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:scale-105 transition-transform active:scale-95"
          >
            <Home size={14} />
            Return Home
          </Link>

          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-zinc-950 text-white border border-zinc-800 px-10 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:bg-zinc-900 transition-colors active:scale-95"
          >
            <ArrowLeft size={14} />
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;