"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, HeartHandshake, MessageSquare, Target, Globe, ArrowRight } from 'lucide-react';

// --- ইউনিফাইড ব্লু হোভার গ্লো ---
const HoverGlow = () => (
  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 border border-transparent"
    style={{ 
      background: `conic-gradient(from 0deg, transparent 0%, #3b82f6 20%, transparent 40%)`,
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude'
    }} 
  />
);

// --- ১. Brand কার্ডের গ্রাফিক (স্পষ্ট জ্যামিতিক ডিজাইন) ---
const BrandGraphic = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700">
    <div className="relative w-36 h-36 flex items-center justify-center scale-90">
      <div className="absolute inset-0 border border-white/[0.08] rounded-full" />
      <HoverGlow /> 
      <div className="absolute w-28 h-10 border border-white/30 rounded-[100%] rotate-45 group-hover:border-blue-500/40 transition-colors" />
      <div className="absolute w-28 h-10 border border-white/30 rounded-[100%] -rotate-45 group-hover:border-blue-500/40 transition-colors" />
      <div className="absolute w-12 h-12 border border-dashed border-white/20 rounded-full" />
    </div>
  </div>
);

// --- ২. Careers কার্ডের গ্রাফিক (পরিষ্কার গ্লোব স্টাইল) ---
const CareersGraphic = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700">
    <div className="relative w-32 h-32 flex items-center justify-center scale-90">
      <div className="absolute inset-0 border border-white/[0.08] rounded-full" />
      <HoverGlow />
      <div className="absolute inset-4 border border-dashed border-white/20 rounded-full animate-[spin_25s_linear_infinite]" />
      <div className="absolute w-full h-[1px] bg-white/[0.1] rotate-90" />
      <div className="absolute w-full h-[1px] bg-white/[0.1]" />
      <div className="absolute w-3 h-3 bg-white/10 border border-white/20 rotate-45 group-hover:bg-blue-500/20 group-hover:border-blue-400 transition-colors" />
    </div>
  </div>
);

// --- ৩. Partners কার্ডের গ্রাফিক (বোল্ড ডায়মন্ড শেপ) ---
const PartnersGraphic = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700">
    <div className="relative w-32 h-32 flex items-center justify-center scale-90">
      <div className="absolute inset-0 border border-white/[0.08] rounded-full" />
      <HoverGlow />
      <div className="absolute w-16 h-16 border-2 border-white/20 rounded-2xl rotate-45 group-hover:rotate-[135deg] transition-transform duration-1000 group-hover:border-blue-500/30" />
      <div className="absolute w-10 h-10 border border-dashed border-white/30 rounded-xl rotate-12" />
    </div>
  </div>
);

// --- ৪. Contact Us কার্ডের গ্রাফিক (ক্লিয়ার রাডার রিংস) ---
const ContactGraphic = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700">
    <div className="relative w-32 h-32 flex items-center justify-center scale-90">
      <div className="absolute inset-0 border border-white/[0.08] rounded-full" />
      <HoverGlow />
      {[25, 50, 75].map((s, i) => (
        <div key={i} className="absolute border border-white/20 rounded-full transition-all group-hover:scale-110 group-hover:border-blue-500/20" style={{ width: s, height: s }} />
      ))}
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#080808] via-transparent to-transparent z-10" />
    </div>
  </div>
);

// --- বাম পাশের বড় কার্ডের গ্রাফিক (Orbit) ---
const OrbitGraphic = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden transition-all duration-700">
    <div className="relative w-full h-full flex items-center justify-center scale-110 translate-x-1/4 translate-y-1/4 opacity-60 group-hover:opacity-100 transition-opacity">
      <div className="absolute w-24 h-24 border border-white/20 rounded-full flex items-center justify-center bg-black/40 z-10 shadow-[0_0_50px_rgba(255,255,255,0.05)] backdrop-blur-sm">
        <div className="w-10 h-10 border border-white/30 rounded-lg rotate-45 flex items-center justify-center group-hover:border-blue-500 transition-colors">
           <div className="w-5 h-5 bg-white/10 rounded-sm skew-x-[-10deg] group-hover:bg-blue-500/30 transition-colors" />
        </div>
      </div>
      {[
        { w: "w-[400px]", h: "h-[160px]", rot: "rotate-[-15deg]" },
        { w: "w-[380px]", h: "h-[200px]", rot: "rotate-[25deg]" },
        { w: "w-[420px]", h: "h-[140px]", rot: "rotate-[60deg]" },
      ].map((orbit, i) => (
        <div key={i} className={`absolute border border-dashed border-white/20 rounded-[100%] ${orbit.w} ${orbit.h} ${orbit.rot} group-hover:border-blue-500/30 transition-all duration-700`}>
          <div className={`absolute w-1.5 h-1.5 bg-white/40 rotate-45 group-hover:bg-blue-400 group-hover:shadow-[0_0_12px_#3b82f6] transition-all ${i === 0 ? 'top-1/2 -left-[3px]' : i === 1 ? 'top-0 left-1/2' : 'bottom-10 right-20'}`} />
        </div>
      ))}
    </div>
  </div>
);

export default function CompanyDropdown() {
  const rightCards = [
    { title: "Brand", subtitle: "Assets & Guidelines", icon: <Target size={20} />, graphic: <BrandGraphic /> },
    { title: "Careers", subtitle: "Join our mission", icon: <Briefcase size={20} />, badge: "Hiring!", graphic: <CareersGraphic /> },
    { title: "Partners", subtitle: "Grow with us", icon: <HeartHandshake size={20} />, graphic: <PartnersGraphic /> },
    { title: "Contact", subtitle: "Get in touch", icon: <MessageSquare size={20} />, graphic: <ContactGraphic /> }
  ];

  return (
    <div className="w-[70vw] bg-[#050505] border border-white/10 p-3 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.9)] overflow-hidden font-sans">
      <div className="grid grid-cols-12 gap-3 min-h-[280px]">
        
        {/* Big Card: Who We Are */}
        <motion.div 
          whileHover={{ backgroundColor: "#080808" }}
          className="col-span-7 relative group bg-[#070707] border border-white/[0.08] rounded-[2rem] p-10 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500"
        >
          <div className="z-20 space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">Who We Are</h2>
            <p className="text-gray-400 text-sm max-w-[260px] leading-relaxed group-hover:text-gray-200 transition-colors font-medium">
              The story behind Chargeflow. Discover our mission behind automated dispute technology.
            </p>
          </div>

          <OrbitGraphic />

        </motion.div>

        {/* Right Section Grid */}
        <div className="col-span-5 grid grid-cols-2 grid-rows-2 gap-3">
          {rightCards.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ backgroundColor: "#0A0A0A" }}
              className="relative group bg-[#080808] border border-white/[0.08] rounded-[1.8rem] p-5 flex flex-col justify-between cursor-pointer overflow-hidden transition-all duration-500"
            >
              <div className="z-20 flex justify-between items-start">
                <div className="space-y-0.5">
                  <h3 className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-[10px] text-gray-500 font-medium">{item.subtitle}</p>
                </div>
                {item.badge && (
                   <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[8px] font-black uppercase rounded-full">
                     {item.badge}
                   </span>
                )}
              </div>

              {item.graphic}

              <div className="z-20 self-center opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:text-blue-400 transition-all duration-500">
                <div className="w-10 h-10 bg-black/60 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-sm group-hover:border-blue-500/30">
                   {item.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}