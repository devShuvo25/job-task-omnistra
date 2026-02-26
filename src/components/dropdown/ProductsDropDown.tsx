"use client";

import React from 'react';
import { motion } from 'framer-motion';

const dropdownItems = [
  {
    title: "Prevent",
    badge: "NEW",
    description: "Stop friendly fraud, block digital shoplifters & prevent the next chargeback before it happens.",
    bgGraphic: "radial-lines"
  },
  {
    title: "Automation",
    badge: null,
    description: "Fully automated chargeback recovery with 4x ROI guarantee.",
    bgGraphic: "orbit"
  },
  {
    title: "Alerts",
    badge: null,
    description: "Cut 90% of chargebacks before they happen, powered by Visa and Mastercard.",
    bgGraphic: "waves"
  },
  {
    title: "Insights",
    badge: "FREE",
    description: "Get a bird's-eye view into your payments and chargebacks, all in a single, powerful dashboard.",
    bgGraphic: "spiral"
  },
  {
    title: "Connect",
    badge: "FOR PLATFORMS",
    description: "Integrate Chargeflow into your platform, either via Embedding, Whitelabel or API.",
    bgGraphic: "layers"
  }
];

export default function ProductDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[95vw] max-w-[1300px] rounded-[2.5rem] bg-[#050505] border border-white/10 backdrop-blur-3xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] pointer-events-auto overflow-hidden p-3"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {dropdownItems.map((item, index) => (
          <div
            key={index}
            className="group relative h-[380px] p-8 rounded-[2rem] bg-[#0d0d0d] border border-white/5 hover:border-white/10 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col"
          >
            {/* 1. Header Logic (Title & Badge) */}
            <div className="relative z-20 flex items-center gap-2 mb-4">
              <h3 className="text-white font-bold text-xl tracking-tight">
                {item.title}
              </h3>
              {item.badge && (
                <span className="text-[8px] font-black px-1.5 py-0.5 rounded bg-white/10 text-white/50 border border-white/5 tracking-[0.15em] uppercase">
                  {item.badge}
                </span>
              )}
            </div>

            {/* 2. Description (Muted text matching image) */}
            <p className="relative z-20 text-[#97a3b6] text-sm leading-[1.6] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
              {item.description}
            </p>

            {/* 3. Background Visual Decoration (The Wireframes) */}
            <div className="absolute inset-0 flex items-end justify-center pointer-events-none p-4">
              <div className="w-full h-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                {/* Visuals represented as CSS/SVG placeholders to match image graphics */}
                {item.bgGraphic === 'radial-lines' && <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,_black,_transparent_70%)]" />}
                {item.bgGraphic === 'orbit' && <div className="w-full h-full border-2 border-white/20 rounded-full border-dashed rotate-45 scale-150 translate-y-10" />}
                {item.bgGraphic === 'layers' && <div className="flex flex-col gap-2 rotate-[-15deg] translate-y-10"><div className="w-32 h-20 bg-white/10 rounded-xl border border-white/20" /><div className="w-32 h-20 bg-white/5 rounded-xl border border-white/10 -mt-16 ml-4" /></div>}
                {item.bgGraphic === 'waves' && <div className="w-full h-full bg-gradient-to-t from-white/10 to-transparent [mask-image:linear-gradient(to_right,_black,_transparent)]" />}
                {item.bgGraphic === 'spiral' && <div className="w-full h-full rounded-full border border-white/10 [mask-image:radial-gradient(circle,_black,_transparent)] scale-125" />}
              </div>
            </div>

            {/* 4. Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}