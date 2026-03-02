"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton = ({ text, onClick, className = "" }: AnimatedButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      // px-8 থেকে কমিয়ে px-6 এবং py-2.5 থেকে কমিয়ে py-2 করা হয়েছে। text-sm যোগ করা হয়েছে।
      className={`group relative flex items-center justify-center gap-2 overflow-hidden rounded-lg border-2 border-[#0052ff] bg-[#0052ff] px-6 py-2 text-sm font-bold text-white transition-colors duration-300 hover:text-[#0052ff] ${className}`}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background Animation Layer */}
      <span className="absolute right-6 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-white transition-all duration-500 ease-in-out group-hover:right-0 group-hover:h-full group-hover:w-full group-hover:rounded-none"></span>

      {/* Button Text */}
      <span className="relative z-10 transition-colors duration-300">
        {text}
      </span>
      
      {/* Icon Wrapper - সাইজ h-8 থেকে কমিয়ে h-6 করা হয়েছে */}
      <div className="relative z-20 flex h-6 w-6 items-center justify-center rounded-full text-blue-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-transparent ">
        <ChevronRight size={16} strokeWidth={3} />
      </div>
    </motion.button>
  );
};

export default AnimatedButton;