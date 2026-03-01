"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface PlatformProps {
  platform: {
    id: number | string;
    name: string;
    desc: string;
    logo: string | React.ReactNode;
  };
}

const PaymentPlatformCard = ({ platform }: PlatformProps) => {
  return (
    <motion.div
      key={platform.id}
      whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.1)' }}
      className="group relative p-8 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:bg-[#0F0F0F] transition-all cursor-pointer h-[180px] flex flex-col justify-between"
    >
      <div className="flex justify-between items-start">
        {/* Brand Name */}
        <h3 className="text-xl font-bold tracking-tight text-gray-200 group-hover:text-white">
          {platform.name}
        </h3>
        
        {/* Brand Logo Container */}
        <div className="w-10 h-10 rounded-lg bg-black border border-white/10 flex items-center justify-center overflow-hidden p-2">
          {typeof platform.logo === 'string' ? (
            <img 
              src={platform.logo} 
              alt={platform.name} 
              className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
              {platform.logo}
            </div>
          )}
        </div>
      </div>

      {/* Description text */}
      <p className="text-gray-500 text-sm leading-snug max-w-[80%]">
        {platform.desc}
      </p>
    </motion.div>
  );
};

export default PaymentPlatformCard;