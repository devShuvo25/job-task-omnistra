"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react'; // Using lucide-react for the icon

interface AppCardProps {
  app: string;
  description: string;
  ctaText: string;
  brandColor: string
  logo: React.ReactNode;
}

export const PaymentCard = ({app,description,ctaText,brandColor,logo}: AppCardProps) => {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      className="group relative flex flex-col w-full max-w-[420px] bg-[#0D0D0D] rounded-3xl p-6 border border-white/5 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]"
    >
      {/* 1. Header Graphic Container */}
      <div className="relative w-full h-48 bg-[#080808] border border-white/5 rounded-2xl overflow-hidden flex items-center justify-center mb-8">
        
        {/* Diamond Grid Pattern (Matches image_ce8d1a.png) */}
        <div 
          className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(45deg, #fff 0.5px, transparent 0.5px), linear-gradient(-45deg, #fff 0.5px, transparent 0.5px)`,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Central Geometric Frame */}
        <motion.div 
          variants={{
            rest: { scale: 0.95, opacity: 0.1 },
            hover: { scale: 1, opacity: 0.3 }
          }}
          className="absolute w-3/4 h-3/4 border border-white/20 rounded-[2rem] rotate-45 pointer-events-none transition-all duration-700"
        />

        {/* Brand Logo with Glow (Matches image_cb575b.png) */}
        <motion.div
          variants={{
            rest: { scale: 0.9, filter: "brightness(0.8) blur(0px)" },
            hover: { scale: 1, filter: "brightness(1.2) drop-shadow(0 0 15px rgba(59,130,246,0.5))" }
          }}
          className="relative z-10 flex items-center justify-center transition-all duration-500"
        >
          {logo}
        </motion.div>

        {/* Inner Hub Shine */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </div>

      {/* 2. Text Content Layer */}
      <div className="flex flex-col flex-grow space-y-3 px-1">
        <h3 className="text-white text-xl font-bold tracking-tight">
          {app}
        </h3>
        <p className="text-gray-400 text-[15px] leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* 3. Button Layer (Matches image_caf887.png) */}
      <div className="mt-8 px-1">
        <motion.button
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 bg-[#2563eb] hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-[13px] font-black tracking-widest uppercase transition-colors"
        >
          {ctaText}
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.button>
      </div>
    </motion.div>
  );
};