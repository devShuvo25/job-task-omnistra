"use client";

import React from 'react';
import { motion } from 'framer-motion';

const icons = [
  { id: 1, x: '-32%', y: '-18%', size: 38, delay: 0 },
  { id: 2, x: '-48%', y: '12%', size: 28, delay: 0.2 },
  { id: 3, x: '-22%', y: '35%', size: 45, delay: 0.5 },
  { id: 4, x: '32%', y: '-20%', size: 32, delay: 0.1 },
  { id: 5, x: '52%', y: '18%', size: 42, delay: 0.3 },
  { id: 6, x: '28%', y: '42%', size: 28, delay: 0.7 },
];

export const IntegrationCard = () => {
  return (
    <motion.div 
      whileHover="hover"
      initial="rest"
      className="relative w-full max-w-4xl h-[260px] bg-[#0A0A0A] rounded-[2.5rem] p-12 overflow-hidden border border-white/5 cursor-pointer"
    >
      {/* 1. Background Hub: Concentric Circles (Graphic visual before hover) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
        <motion.div 
          variants={{
            rest: { scale: 1, borderColor: "rgba(255,255,255,0.05)", backgroundColor: "rgba(255,255,255,0.01)" },
            hover: { scale: 1.05, borderColor: "rgba(59,130,246,0.3)", backgroundColor: "rgba(30,58,138,0.1)" }
          }}
          className="w-[200px] h-[200px] rounded-full border border-dashed transition-all duration-700" 
        />
        <motion.div 
          variants={{
            rest: { scale: 1, borderColor: "rgba(255,255,255,0.05)", backgroundColor: "rgba(255,255,255,0.02)" },
            hover: { scale: 1.1, borderColor: "rgba(59,130,246,0.5)", backgroundColor: "rgba(37,99,235,0.15)" }
          }}
          className="absolute w-[140px] h-[140px] rounded-full border transition-all duration-700" 
        />
        <motion.div 
          variants={{
            rest: { backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" },
            hover: { backgroundColor: "#3b82f6", borderColor: "#60a5fa" }
          }}
          className="absolute w-[80px] h-[80px] rounded-full border flex items-center justify-center shadow-2xl transition-all duration-500"
        >
          {/* Central Lightning Bolt Logo */}
          <motion.div 
            variants={{ rest: { color: "rgba(255,255,255,0.3)" }, hover: { color: "#fff" } }}
            className="w-8 h-8 transition-colors duration-500"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* 2. Background Graphic: Converging Dashed Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400" preserveAspectRatio="none">
        {[...Array(10)].map((_, i) => (
          <motion.path
            key={i}
            d={`M 0 ${40 * i} Q 400 200 800 ${40 * i}`}
            fill="none"
            strokeWidth="1"
            strokeDasharray="4 4"
            variants={{
              rest: { stroke: "rgba(255,255,255,0.08)", opacity: 0.4 },
              hover: { stroke: "#3b82f6", opacity: 0.6, strokeWidth: 1.2 }
            }}
            transition={{ duration: 0.6 }}
          />
        ))}
      </svg>

      {/* 3. Content Layer */}
      <div className="relative z-20">
        <h2 className="text-white text-3xl font-semibold tracking-tight">All Integrations</h2>
        <p className="text-gray-500 mt-3 text-lg max-w-[280px] leading-relaxed">
          Choose from hundreds of integrated platforms.
        </p>
      </div>

      {/* 4. Floating Icons Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {icons.map((icon) => (
          <motion.div
            key={icon.id}
            variants={{
              rest: { opacity: 0.4, scale: 0.9, filter: "grayscale(100%)" },
              hover: { opacity: 1, scale: 1, filter: "grayscale(0%)" }
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, delay: icon.delay, ease: "easeInOut" },
              opacity: { duration: 0.4 }
            }}
            className="absolute bg-[#1A1A1A] rounded-full flex items-center justify-center border border-white/10 shadow-xl"
            style={{ 
              left: `calc(50% + ${icon.x})`, 
              top: `calc(50% + ${icon.y})`,
              width: icon.size,
              height: icon.size
            }}
          >
            {/* Inner Placeholder for Brand Logos */}
            <div className="w-1/2 h-1/2 bg-white/10 rounded-sm" />
          </motion.div>
        ))}
      </div>

      {/* 5. Blue Radial Glow on Hover */}
      <motion.div 
        variants={{
          rest: { opacity: 0, scale: 0.8 },
          hover: { opacity: 0.2, scale: 1 }
        }}
        className="absolute inset-0 bg-blue-600 blur-[120px] pointer-events-none"
      />
    </motion.div>
  );
};