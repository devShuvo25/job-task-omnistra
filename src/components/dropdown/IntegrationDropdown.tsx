"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Zap, Bell, BarChart3, Puzzle } from 'lucide-react';

const dropdownItems = [
  {
    title: "Prevent",
    badge: "NEW",
    description: "Stop friendly fraud, block digital shoplifters & prevent chargebacks.",
    icon: <ShieldCheck className="text-[#c3f967]" size={20} />,
    color: "from-[#c3f967]/10"
  },
  {
    title: "Automation",
    badge: null,
    description: "Fully automated chargeback recovery with 4x ROI guarantee.",
    icon: <Zap className="text-blue-400" size={20} />,
    color: "from-blue-500/10"
  },
  {
    title: "Alerts",
    badge: null,
    description: "Cut 90% of chargebacks before they happen via Visa & Mastercard.",
    icon: <Bell className="text-purple-400" size={20} />,
    color: "from-purple-500/10"
  },
  {
    title: "Insights",
    badge: "FREE",
    description: "Get a bird's-eye view into your payments and chargebacks.",
    icon: <BarChart3 className="text-orange-400" size={20} />,
    color: "from-orange-500/10"
  },
  {
    title: "Connect",
    badge: "FOR PLATFORMS",
    description: "Integrate Chargeflow into your platform via Embedding or API.",
    icon: <Puzzle className="text-pink-400" size={20} />,
    color: "from-pink-500/10"
  }
];

export default function IntegrationDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[95vw] max-w-[1200px] p-1 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-3xl shadow-2xl pointer-events-auto overflow-hidden"
    >
      <div className="bg-black/90 rounded-[1.8rem] p-8 grid grid-cols-1 md:grid-cols-5 gap-4">
        {dropdownItems.map((item, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden"
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                {item.badge && (
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/10 tracking-widest uppercase">
                    {item.badge}
                  </span>
                )}
              </div>
              
              <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-1">
                {item.title}
                <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              
              <p className="text-[#97a3b6] text-xs leading-relaxed font-medium">
                {item.description}
              </p>
            </div>

            {/* Subtle bottom border glow on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}