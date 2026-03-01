"use client";

import React, { JSX } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface PaymentCardProps {
  data: {
    app: string;
    description: string;
    brandColor?: string;
    ctaText?: string;
    logo : JSX.Element
  };
}

export const PaymentCard = ({ data }: PaymentCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const gradient = useMotionTemplate`radial-gradient(150px circle at ${mouseX}px ${mouseY}px, rgba(99, 91, 255, 0.15), transparent 100%)`;

  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col w-full  bg-[#0e0e0e] rounded-md p-6 border border-white/5 overflow-hidden cursor-default transition-all duration-500 hover:border-white/10"
    >
      {/* 1. Graphical Header Section */}
      <div className="relative w-full h-48 bg-[#080808] border border-white/5 rounded-2xl overflow-hidden flex items-center justify-center mb-8">
        
        {/* Interlocking Geometric Grid Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            viewBox="0 0 400 200"
            className="w-full h-full opacity-40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* The Background Grid Lines (Dashed) */}
            <g stroke="white" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="2 4">
              {/* Left Side Rhombus Chain */}
              <path d="M-50 100 L25 25 L100 100 L25 175 Z" />
              <path d="M25 100 L100 25 L175 100 L100 175 Z" />
              
              {/* Right Side Rhombus Chain */}
              <path d="M225 100 L300 25 L375 100 L300 175 Z" />
              <path d="M300 100 L375 25 L450 100 L375 175 Z" />
            </g>

            {/* Central Hexagonal "Focus" Frame */}
            <path
              d="M140 50 H260 L300 100 L260 150 H140 L100 100 Z"
              stroke="white"
              strokeOpacity="0.08"
              strokeWidth="1"
              strokeDasharray="3 3"
            />

            {/* --- THE ANIMATED BORDER LINE --- */}
            <motion.path
              d="M140 50 H260 L300 100 L260 150 H140 L100 100 Z"
              stroke={data.brandColor || "#635BFF"}
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                strokeDasharray: "80 200", 
              }}
              variants={{
                rest: { 
                  opacity: 0.2,
                  strokeDashoffset: 0 
                },
                hover: { 
                  opacity: 1,
                  strokeDashoffset: [0, -280],
                  transition: {
                    strokeDashoffset: {
                      repeat: Infinity,
                      duration: 4,
                      ease: "linear",
                    },
                    opacity: { duration: 0.3 }
                  }
                }
              }}
            />
          </svg>
        </div>

        {/* Mouse-following Radial Glow */}
        <motion.div 
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          className="absolute inset-0 z-0"
          style={{ background: gradient }}
        />

        {/* Central Logo (Stripe Style) */}
        <motion.div
          variants={{
            rest: { scale: 1, y: 0 },
            hover: { scale: 1.05, y: -2 }
          }}
          className="relative z-10 flex items-center justify-center transition-all duration-500"
        >
          {/* Using a text-based logo to match the reference 'stripe' image */}
          <span 
            className="text-8xl font-bold tracking-tighter"
            style={{ color: data.brandColor || '#635BFF' }}
          >
            {data?.logo}
          </span>
        </motion.div>
      </div>

      {/* 2. Text Content */}
      <div className="flex flex-col flex-grow space-y-3 px-1">
        <h3 className="text-white text-xl font-bold tracking-tight">
          {data.app} Integration
        </h3>
        <p className="text-gray-400 text-[15px] leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors">
          {data.description}
        </p>
      </div>

      {/* 3. Action Button */}
      <div className="mt-8 px-1">
        <button
          
          className="bg-[#635BFF] flex items-center gap-2 text-white px-6 py-2.5 rounded-full text-[13px] font-bold tracking-wide transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-black/20"
        >
          {data.ctaText || 'CONNECT NOW'}
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};