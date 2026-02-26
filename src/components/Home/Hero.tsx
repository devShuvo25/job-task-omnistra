"use client";

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Play, Shield, Zap, Bell, BarChart3, Puzzle } from 'lucide-react';

const FEATURES = [
  {
    title: "Prevent",
    badge: "NEW",
    desc: "Stop friendly fraud, block digital shoplifters & prevent the next chargeback before it happens.",
    icon: <Shield className="w-full h-full opacity-20" />
  },
  {
    title: "Automation",
    badge: null,
    desc: "Fully automated chargeback recovery with 4x ROI guarantee.",
    icon: <Zap className="w-full h-full opacity-20" />
  },
  {
    title: "Alerts",
    badge: null,
    desc: "Cut 90% of chargebacks before they happen, powered by Visa and Mastercard.",
    icon: <Bell className="w-full h-full opacity-20" />
  },
  {
    title: "Insights",
    badge: "FREE",
    desc: "Get a bird's-eye view into your payments and chargebacks, all in a single, powerful dashboard.",
    icon: <BarChart3 className="w-full h-full opacity-20" />
  },
  {
    title: "Connect",
    badge: "FOR PLATFORMS",
    desc: "Integrate Chargeflow into your platform, either via Embedding, Whitelabel or API.",
    icon: <Puzzle className="w-full h-full opacity-20" />
  }
];

export default function HeroBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.8
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black flex flex-col items-center pt-40 pb-20 px-6 overflow-hidden">
      {/* Central Background Glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full flex flex-col items-center text-center gap-12 mb-20">
        <div ref={textRef} className="flex flex-col items-center gap-6">
          <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-white leading-tight">
            Recover Revenue <br /> 
            <span className="text-blue-500">Automagically.</span>
          </h1>
          <p className="text-xl text-[#97a3b6] max-w-2xl leading-relaxed">
            The world's most advanced chargeback automation platform. Join 5,000+ brands recovering millions in lost revenue without lifting a finger.
          </p>
        </div>
      </div>

      {/* THE FEATURE GRID - MATCHING UPLOADED IMAGES */}
      <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {FEATURES.map((item, i) => (
          <div 
            key={i} 
            className="feature-card group relative h-[450px] rounded-[2rem] bg-[#0d0d0d] border border-white/5 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-[#111111]"
          >
            {/* Background Decorative Element (The wireframes/lines in your image) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-700 group-hover:scale-110">
               <div className="w-[150%] h-[150%] opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                  {item.icon}
               </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute -inset-px bg-gradient-to-b from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                {item.badge && (
                  <span className="text-[8px] font-black px-2 py-0.5 rounded-md bg-white/10 text-white/70 border border-white/5 uppercase tracking-widest">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-[#97a3b6] text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>

            {/* Visual Icon/Graphic Placeholder at the bottom */}
            <div className="relative z-10 w-full aspect-square flex items-center justify-center">
               <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600/10 group-hover:border-blue-500/30 transition-all duration-500">
                  <ArrowUpRight className="text-white/20 group-hover:text-blue-500" size={24} />
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}