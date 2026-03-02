"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const metrics = [
  { logo: "obvi.", value: "170%", label: "win-rate increase", tag: "eCommerce" },
  { logo: "elementor", value: "90%", label: "reduction in time", tag: "SaaS" },
  { logo: "Fanatics", value: "2X", label: "Win Rate", tag: "Marketplace" },
  { logo: "HEXCLAD", value: "328 hrs.", label: "saved", tag: "Travel" }
];

export default function CustomerDropdown() {
  return (
    <div className="w-[70vw] max-w-[1300px] h-[230px] bg-[#050505]/95 backdrop-blur-2xl border border-white/10 p-3 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
      <div className="h-full">
        <div className="grid grid-cols-12 gap-3 h-full">
          
          {/* Main Hero Card: All Case Studies */}
          <motion.div 
            whileHover="hover"
            className="col-span-4 bg-[#0A0A0A] rounded-[1.5rem] p-6 relative h-full flex flex-col justify-between group cursor-pointer border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
          >
            <h2 className="text-white text-lg font-semibold z-10">All Case Studies</h2>
            
            {/* Multi-Orbit Graphic (Matching image_d88982.png) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Primary Large Orbit */}
                <motion.div 
                  variants={{ hover: { borderColor: "rgba(59, 130, 246, 0.5)", scale: 1.05 } }}
                  className="absolute w-36 h-36 border border-dashed border-white/10 rounded-full transition-all duration-500"
                />
                {/* Secondary Offset Orbit */}
                <motion.div 
                  variants={{ hover: { borderColor: "rgba(34, 211, 238, 0.4)", scale: 1.1, rotate: 10 } }}
                  className="absolute w-28 h-28 border border-dashed border-white/5 rounded-full -top-2 -right-2 transition-all duration-500"
                />
                {/* Central Brand Node */}
                <div className="absolute bg-[#0A0A0A] px-3 py-1 border border-white/10 rounded-full z-20 shadow-xl">
                  <span className="text-white font-bold text-[10px]">obvi.</span>
                </div>
                {/* Small floating brand nodes */}
                <div className="absolute top-10 left-10 w-6 h-6 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[6px] text-white/40">Huel</div>
                <div className="absolute bottom-12 right-8 w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[6px] text-white/40 italic">Caraway</div>
              </div>
            </div>

            <div className="z-10 flex justify-end">
                <ArrowUpRight size={18} className="text-white/20 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </div>
          </motion.div>

          {/* Metrics Grid */}
          <div className="col-span-8 grid grid-cols-4 gap-2 h-full">
            {metrics.map((item, index) => (
              <motion.div 
                key={index} 
                whileHover="hover"
                className="bg-[#0A0A0A] rounded-[1.5rem] p-4 flex flex-col justify-between group hover:bg-[#0D0D0D] transition-all duration-500 cursor-pointer border border-white/5 hover:border-blue-500/20 relative overflow-hidden h-full"
              >
                {/* 1. Diamond Grid Background (Matching image_d96773.png) */}
                <div 
                  className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500"
                  style={{
                    backgroundImage: `linear-gradient(45deg, #fff 1px, transparent 1px), linear-gradient(-45deg, #fff 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                  }}
                />

                {/* 2. Wavy/Dashed Data Path (Matching image_d8857d.png) */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                      d="M-10,70 C10,65 30,75 50,70 S90,60 110,65"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="3,3"
                      variants={{
                        hover: { color: "#3b82f6", strokeWidth: 1.2, opacity: 1, d: "M-10,65 C10,60 30,70 50,65 S90,55 110,60" }
                      }}
                      className="text-white/10 transition-all duration-700 ease-in-out"
                    />
                  </svg>
                </div>

                <div className="z-10">
                   <span className="text-white font-bold text-[10px] tracking-tight uppercase opacity-40 group-hover:text-blue-400 group-hover:opacity-100 transition-all duration-500">{item.logo}</span>
                </div>
                
                <div className="z-10">
                  <motion.h3 
                    variants={{ hover: { color: "#fff", scale: 1.05 } }}
                    className="text-white text-2xl font-bold leading-none tracking-tight transition-all duration-500"
                  >
                    {item.value}
                  </motion.h3>
                  <p className="text-[#666] text-[9px] mt-1 font-medium leading-tight group-hover:text-gray-300 transition-colors duration-500">
                    {item.label}
                  </p>
                </div>

                <div className="z-10">
                  <span className="text-[7px] uppercase tracking-widest text-white/20 bg-white/5 px-2 py-1 rounded-full border border-white/5 group-hover:border-blue-500/40 group-hover:text-blue-300 group-hover:bg-blue-500/5 transition-all duration-500">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom-Right Radial Glow */}
                <motion.div 
                  variants={{ hover: { opacity: 0.6, scale: 1.5 } }}
                  initial={{ opacity: 0, scale: 1 }}
                  className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-500/20 blur-[30px] rounded-full pointer-events-none transition-all duration-700" 
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}