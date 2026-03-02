"use client";

import React from 'react';
import { motion } from 'framer-motion';

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

// --- ১. Prevent (Radial Lines/Sunburst) ---
const PreventGraphic = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none translate-y-12">
    <div className="relative w-48 h-48 flex items-center justify-center">
      {[...Array(24)].map((_, i) => (
        <div key={i} className="absolute w-[1px] h-full bg-white/10 group-hover:bg-blue-500/20 transition-colors" style={{ rotate: `${i * 15}deg` }} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent z-10" />
      <div className="absolute w-2 h-2 bg-blue-500 rounded-sm rotate-45 group-hover:shadow-[0_0_15px_#3b82f6] transition-all" />
    </div>
  </div>
);

// --- ২. Automation (Orbiting Rings) ---
const AutomationGraphic = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none translate-y-10">
    <div className="relative w-40 h-40 flex items-center justify-center scale-125">
      {[1, 1.4, 1.8].map((s, i) => (
        <div key={i} className="absolute border border-dashed border-white/20 rounded-[100%] group-hover:border-blue-500/30 transition-all" 
             style={{ width: `${s * 60}px`, height: `${s * 25}px`, rotate: `${-15 + i * 10}deg` }} />
      ))}
      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-black/40">
        <div className="w-4 h-4 border border-white/40 rotate-45 group-hover:border-blue-400 transition-colors" />
      </div>
    </div>
  </div>
);

// --- ৩. Alerts (Curve Wave) ---
const AlertsGraphic = () => (
  <div className="absolute inset-0 flex items-end justify-center pointer-events-none px-4 pb-4">
    <svg viewBox="0 0 200 100" className="w-full opacity-40 group-hover:opacity-80 transition-opacity">
      <path d="M0,80 Q50,80 70,40 T120,40 T160,80 L200,80" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" className="group-hover:stroke-blue-400 transition-colors" />
      <circle cx="95" cy="40" r="2" fill="#3b82f6" className="group-hover:shadow-[0_0_10px_#3b82f6]" />
    </svg>
  </div>
);

// --- ৪. Insights (Spiral Ring) ---
const InsightsGraphic = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none translate-y-14">
    <div className="relative w-40 h-40 flex items-center justify-center rotate-[60deg]">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="absolute border border-white/10 rounded-full group-hover:border-blue-500/20 transition-all" 
             style={{ width: `${60 + i * 20}px`, height: `${60 + i * 20}px`, opacity: 1 - i * 0.2 }} />
      ))}
    </div>
  </div>
);

// --- ৫. Connect (Stacked Layers) ---
const ConnectGraphic = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none translate-y-10">
    <div className="relative flex flex-col items-center">
      {[1, 2, 3].map((i) => (
        <div key={i} className="w-24 h-12 border border-white/20 rounded-lg bg-black/20 -mt-8 rotate-[-25deg] skew-x-[20deg] group-hover:border-blue-500/40 transition-all"
             style={{ opacity: 1 - i * 0.2, transform: `translateY(${i * 4}px) rotateX(45deg)` }} />
      ))}
      <div className="absolute top-0 w-4 h-4 bg-blue-500/20 border border-blue-500 rounded rotate-45 mt-4" />
    </div>
  </div>
);

const dropdownItems = [
  { title: "Prevent", badge: "NEW", desc: "Stop friendly fraud, block digital shoplifters & prevent the next chargeback.", graphic: <PreventGraphic /> },
  { title: "Automation", badge: null, desc: "Fully automated chargeback recovery with 4x ROI guarantee.", graphic: <AutomationGraphic /> },
  { title: "Alerts", badge: null, desc: "Cut 90% of chargebacks before they happen, powered by Visa.", graphic: <AlertsGraphic /> },
  { title: "Insights", badge: "FREE", desc: "Get a bird's-eye view into your payments and chargebacks in a single dashboard.", graphic: <InsightsGraphic /> },
  { title: "Connect", badge: "FOR PLATFORMS", desc: "Integrate Chargeflow into your platform via Embedding or API.", graphic: <ConnectGraphic /> }
];

export default function ProductDropdown() {
  return (
    <div className="w-[70vw] max-w-[1300px] bg-[#050505] border border-white/10 p-3 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.9)] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {dropdownItems.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ backgroundColor: "#080808" }}
            className="relative group h-[260px] bg-[#070707] border border-white/[0.06] rounded-[2rem] p-7 flex flex-col cursor-pointer overflow-hidden transition-all duration-500"
          >
            {/* Header */}
            <div className="z-20 mb-3 flex items-center gap-2">
              <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              {item.badge && (
                <span className="text-[7px] font-black px-1.5 py-0.5 rounded bg-white/5 text-white/40 border border-white/10 uppercase tracking-widest">
                  {item.badge}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="z-20 text-gray-500 text-xs leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
              {item.desc}
            </p>

            {/* Graphics Wrapper */}
            <div className="absolute inset-0 z-10 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              {item.graphic}
            </div>

            {/* Blue Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Learn More Button (Visible on Hover) */}
            <div className="z-20 mt-auto opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <span className="text-[9px] font-bold text-white bg-white/10 px-3 py-1.5 rounded-full uppercase tracking-tighter border border-white/10">
                    Learn More
                </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}