"use client"
import React from 'react';
import { motion } from 'framer-motion';

const integrations = [
  { id: 1, x: -320, y: -40, size: 42, delay: 0.1 }, // Stripe-like
  { id: 2, x: -240, y: 60, size: 32, delay: 0.3 },
  { id: 3, x: -180, y: -80, size: 36, delay: 0.5 },
  { id: 4, x: 180, y: 70, size: 30, delay: 0.2 },
  { id: 5, x: 260, y: -50, size: 40, delay: 0.4 },
  { id: 6, x: 340, y: 20, size: 38, delay: 0.6 },
];

const GraphicalBanner = () => {
  return (
    <section className="relative w-full min-h-[700px] bg-[#000] flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* 1. Global Diamond Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(45deg, #fff 0.5px, transparent 0.5px), linear-gradient(-45deg, #fff 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. Top Tag */}
      <div className="relative z-20 mb-8">
        <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Integrations
          </span>
        </div>
      </div>

      {/* 3. Hero Text Content */}
      <div className="relative z-20 text-center max-w-4xl mb-16">
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
          ONE CLICK,<br />
          FORGET CHARGEBACKS.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Chargeflow <span className="text-white">integrates quickly</span> and seamlessly into your <span className="text-white">online platform and payment solution</span>, taking your recovery to the next level.
        </p>
      </div>

      {/* 4. Graphical Network Hub Section */}
      <div className="relative w-full max-w-5xl h-[300px] flex items-center justify-center">
        
        {/* Converging Dotted Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 300">
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M 0 ${37.5 * i} Q 500 150 1000 ${37.5 * i}`}
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
          ))}
        </svg>

        {/* Central Power Hub */}
        <div className="relative z-10 flex items-center justify-center">
          {/* Outer Glowing Rings */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-[220px] h-[220px] rounded-full border border-blue-500/30 bg-blue-500/5 blur-sm"
          />
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute w-[160px] h-[160px] rounded-full border border-blue-500/50 bg-blue-500/10"
          />
          
          {/* Inner Solid Hub */}
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-b from-blue-600 to-blue-700 flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.4)]">
            <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
        </div>

        {/* Floating Integration Nodes */}
        {integrations.map((node) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0]
            }}
            transition={{ 
              delay: node.delay,
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bg-white rounded-full flex items-center justify-center shadow-xl border border-white/20 z-20"
            style={{
              left: `calc(50% + ${node.x}px)`,
              top: `calc(50% + ${node.y}px)`,
              width: node.size,
              height: node.size
            }}
          >
            {/* Logo Placeholder */}
            <div className="w-[60%] h-[60%] bg-gray-200 rounded-sm" />
          </motion.div>
        ))}
      </div>

      {/* 5. Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-30" />
    </section>
  );
};

export default GraphicalBanner;