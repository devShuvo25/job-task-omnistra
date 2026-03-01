"use client";

import { integrationsData } from '@/constant/navabar.data';
import { motion } from 'framer-motion';

export const IntegrationCardMini = ({ item }: { item: typeof integrationsData[0] }) => {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      variants={{
        hover: { scale: 1.01, borderColor: "rgba(59, 130, 246, 0.3)" }
      }}
      className="group relative bg-[#0D0D0D] border border-white/5 rounded-xl py-4 px-5 overflow-hidden cursor-pointer flex items-center min-h-[80px] transition-colors duration-500"
    >
      {/* 1. The Diamond Grid Background Effect (Matches visual pattern from Stripe/Shopify cards) */}
      <motion.div 
        variants={{
          rest: { opacity: 0.03 },
          hover: { opacity: 0.08 }
        }}
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(45deg, #fff 0.5px, transparent 0.5px), linear-gradient(-45deg, #fff 0.5px, transparent 0.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* 2. Visual Brand Logo (Replaces text watermark with image design) */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          variants={{
            rest: { opacity: 0.2, filter: "grayscale(100%) brightness(0.8)", scale: 0.95 },
            hover: { opacity: 0.8, filter: "grayscale(0%) brightness(1.2)", scale: 1, x: -5 }
          }}
          className="transition-all duration-500"
        >
          {/* Replace src with item.logoUrl if available in your data */}
          <img 
            src={`/logos/${item.name.toLowerCase()}.svg`} 
            alt={item.name}
            className="h-8 w-auto object-contain"
            onError={(e) => {
               // Fallback to stylized text if image fails
               e.currentTarget.style.display = 'none';
            }}
          />
          {/* Fallback stylized text as seen in reference image */}
          <span className="text-2xl font-black italic text-white/10 group-hover:text-blue-500/40 transition-colors">
            {item.name.toLowerCase()}
          </span>
        </motion.div>
      </div>

      {/* 3. Content Layer */}
      <div className="relative z-10 flex justify-between items-center w-full">
        <div className="max-w-[65%]">
          <motion.h3 
            variants={{
              hover: { color: "#fff", x: 2 }
            }}
            className="text-white text-base font-bold tracking-tight leading-tight transition-all"
          >
            {item.name}
          </motion.h3>
          <p className="text-gray-500 text-[11px] mt-0.5 line-clamp-1 group-hover:text-gray-400 transition-colors">
            {item.tagline}
          </p>
        </div>
      </div>

      {/* 4. The "Ignite" Glow (Matches the blue hub effect from the main graphic) */}
      <motion.div 
        variants={{
          rest: { opacity: 0, scale: 0.8 },
          hover: { opacity: 0.2, scale: 1.5 }
        }}
        className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-600 blur-[40px] rounded-full pointer-events-none transition-all duration-700" 
      />
    </motion.div>
  );
};
