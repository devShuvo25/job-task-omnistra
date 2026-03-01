"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Bell, BarChart3, ArrowRight } from 'lucide-react';

const DROPDOWN_ITEMS = [
  {
    title: "Prevent",
    badge: "NEW",
    desc: "Stop friendly fraud & digital shoplifters.",
    icon: <Shield className="w-4 h-4 text-blue-500" />,
  },
  {
    title: "Automation",
    badge: null,
    desc: "Fully automated chargeback recovery.",
    icon: <Zap className="w-4 h-4 text-blue-500" />,
  },
  {
    title: "Alerts",
    badge: null,
    desc: "Cut 90% of chargebacks before they happen.",
    icon: <Bell className="w-4 h-4 text-blue-500" />,
  },
  {
    title: "Insights",
    badge: "FREE",
    desc: "A bird's-eye view into your payments.",
    icon: <BarChart3 className="w-4 h-4 text-blue-500" />,
  },
];

export default function NavDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full mt-4 w-[500px] bg-[#0d0d0d] border border-white/10 rounded-[2rem] p-6 shadow-2xl backdrop-blur-3xl overflow-hidden"
    >
      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="grid grid-cols-2 gap-4">
        {DROPDOWN_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col gap-2 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/5"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                {item.icon}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white tracking-tight">{item.title}</span>
                {item.badge && (
                  <span className="text-[8px] font-black px-1.5 py-0.5 rounded bg-white/10 text-white/70 border border-white/5 uppercase tracking-widest">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
            <p className="text-xs text-[#97a3b6] leading-relaxed line-clamp-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Footer link */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between group/footer cursor-pointer">
        <span className="text-[10px] font-black tracking-widest text-[#97a3b6] uppercase group-hover/footer:text-white transition-colors">
          View all features
        </span>
        <ArrowRight size={14} className="text-[#97a3b6] group-hover/footer:text-blue-500 transition-colors" />
      </div>
    </motion.div>
  );
}