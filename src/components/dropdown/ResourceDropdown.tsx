"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calculator, ArrowRight, PenLine } from 'lucide-react';

const mainResources = [
  {
    title: "Blog",
    icon: <PenLine className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />,
  },
  {
    title: "Reports",
    icon: (
      <div className="flex gap-1 items-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-1 h-6 border border-blue-500 rounded-sm skew-x-[-15deg] group-hover:bg-blue-500/60 transition-all duration-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
        ))}
      </div>
    ),
  },
  {
    title: "Podcast",
    icon: (
      <div className="flex items-end gap-[2px] h-6">
        {[0.4, 0.8, 0.5, 1, 0.7, 0.4].map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: [`${h * 100}%`, `${(h - 0.2) * 100}%`, `${h * 100}%`] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
            className="w-[2px] bg-gray-600 group-hover:bg-blue-400 rounded-full transition-colors"
          />
        ))}
      </div>
    )
  },
  {
    title: "Webinars",
    icon: (
      <div className="w-8 h-6 border-[1.5px] border-gray-600 rounded-md flex items-center justify-center group-hover:border-white transition-colors">
        <div className="w-1.5 h-1.5 bg-gray-600 group-hover:bg-white rounded-full" />
      </div>
    ),
  }
];

const SpiderwebGraphic = ({ active }: { active?: boolean }) => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700">
    <div className="relative w-full h-full flex items-center justify-center scale-75">
      
      <div className="absolute w-[240px] h-[240px] border border-white/[0.08] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.02)]" />
      
      <div className="absolute w-[180px] h-[180px] border border-dashed border-white/[0.12] rounded-full transition-colors duration-700 group-hover:border-blue-500/30" />

      <div className="absolute w-[120px] h-[120px] rounded-full flex items-center justify-center">
        {/* মেইন বর্ডার */}
        <div className="absolute inset-0 border border-white/[0.08] rounded-full" />
        <div className="absolute inset-[-1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 border border-transparent"
             style={{ 
               background: 'conic-gradient(from 0deg, transparent 0%, #3b82f6 20%, transparent 40%)',
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude'
             }} 
        />
      </div>

      <div className="absolute w-[70px] h-[70px] border border-dashed border-white/[0.12] rounded-full group-hover:border-blue-400/50 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-all duration-700" />

      {[...Array(12)].map((_, i) => (
        <div 
          key={i} 
          className="absolute w-full h-[0.8px] bg-white/[0.04] group-hover:bg-white/[0.06] transition-colors" 
          style={{ transform: `rotate(${i * 30}deg)` }} 
        />
      ))}

      {[0, 90, 180, 270].map((angle) => (
        <div
          key={angle}
          className="absolute w-1.5 h-1.5 bg-white/30 rotate-45 shadow-[0_0_5px_rgba(255,255,255,0.2)] group-hover:bg-blue-400/60 transition-colors duration-500"
          style={{ transform: `rotate(${angle}deg) translateY(-90px) rotate(-45deg)` }}
        />
      ))}
    </div>
  </div>
);

export default function ResourcesDropdown() {
  return (
    <div className="w-[70vw]  bg-[#050505] border border-white/10 p-2 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden">
      <div className="grid grid-cols-12 gap-2 h-[260px]">

        {/* Left Side Cards */}
        <div className="col-span-9 grid grid-cols-4 gap-2">
          {mainResources.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ backgroundColor: "#0A0A0A" }}
              className="relative group bg-[#080808] border border-white/[0.05] hover:border-white/10 rounded-[1.5rem] flex flex-col items-center justify-between p-5 cursor-pointer overflow-hidden transition-all duration-500"
            >
              <h3 className="z-20 text-white/70 group-hover:text-white font-medium text-base tracking-tight transition-colors w-full text-left">
                {item.title}
              </h3>
              
              <SpiderwebGraphic active={item.title === "Reports"} />

              <div className="z-20 transform group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>

              <div className="z-20 w-full text-left opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="text-[8px] text-blue-400 font-bold tracking-widest uppercase">Explore</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side Sidebar */}
        <div className="col-span-3 flex flex-col gap-2">
          <motion.div 
            whileHover={{ backgroundColor: "#0A0A0A" }}
            className="flex-1 bg-[#080808] border border-white/[0.05] rounded-[1.5rem] p-4 flex flex-col justify-between group cursor-pointer transition-all"
          >
            <div className="flex justify-between items-center">
              <h4 className="text-white font-semibold text-sm">ROI Calculator</h4>
              <Calculator size={16} className="text-gray-600 group-hover:text-blue-500" />
            </div>
            <div className="space-y-1.5">
               <div className="bg-black/60 rounded-lg px-3 py-2 flex justify-between items-center border border-white/5">
                  <span className="text-xs text-gray-400 font-bold">1,020</span>
                  <span className="text-[8px] text-gray-600 font-black uppercase">Hours</span>
               </div>
               <div className="bg-black/60 rounded-lg px-3 py-2 flex justify-between items-center border border-white/5">
                  <span className="text-xs text-gray-400 font-bold">$7,500</span>
                  <span className="text-[8px] text-gray-600 font-black uppercase">USD</span>
               </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ backgroundColor: "#0A0A0A" }}
            className="flex-1 bg-[#080808] border border-white/[0.05] rounded-[1.5rem] p-4 flex flex-col justify-between group cursor-pointer transition-all"
          >
            <h4 className="text-white font-semibold text-sm">Reason Codes</h4>
            <div className="relative">
              <input 
                disabled
                placeholder="Code: 12.7" 
                className="w-full bg-black/60 rounded-full py-2 px-4 text-[10px] border border-white/10 text-gray-500 outline-none"
              />
              <Search size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
            </div>
            <div className="flex items-center gap-1.5 text-[8px] text-blue-500 font-black uppercase group-hover:gap-3 transition-all">
              Database <ArrowRight size={12} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}