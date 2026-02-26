"use client";

import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import ProductDropdwon from '@/components/dropdown/ProductsDropDown';

export default function ChargeflowNavbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['PRODUCT', 'CUSTOMERS', 'PRICING', 'INTEGRATIONS', 'RESOURCES', 'COMPANY'];

// We use a separate useEffect to handle the animation 
  // whenever scroll status OR hover status changes.
useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const updateNavbar = () => {
        const shouldShrink = isScrolled || hoveredLink !== null;
        
        // INSTANT EFFECT LOGIC:
        // If we aren't scrolled but we are hovering, make it instant (0).
        // Otherwise, use the smooth 0.5s duration for scrolling.
        const isHoverTrigger = !isScrolled && hoveredLink !== null;
        const duration = isHoverTrigger ? 0.1 : 0.5; 
        const ease = isHoverTrigger ? "none" : "expo.out";

        if (shouldShrink) {
          gsap.to(navRef.current, {
            width: "90%",
            maxWidth: "1000px",
            backgroundColor: "rgba(10, 10, 10, 0.8)",
            padding: "0.6em 1.5em",
            borderRadius: "1000px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            duration, // Dynamic duration
            ease,
            marginTop: "1.2em",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
          });
          gsap.to(linksContainerRef.current, {
            backgroundColor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0)",
            padding: "0px",
            duration: isHoverTrigger ? 0.1 : 0.3
          });
        } else {
          // Returning to normal state
          gsap.to(navRef.current, {
            width: "100%",
            maxWidth: "150em",
            backgroundColor: "transparent",
            padding: "1.2em 2em",
            borderRadius: "0px",
            border: "1px solid rgba(255, 255, 255, 0)",
            backdropFilter: "blur(0px)",
            duration: 0.5, // Keep exit smooth
            ease: "expo.out",
            marginTop: "0em"
          });
          gsap.to(linksContainerRef.current, {
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(10px)",
            padding: "0.6em 1.8em",
            borderRadius: "1000px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            duration: 0.4
          });
        }
      };

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      updateNavbar();

      return () => window.removeEventListener('scroll', handleScroll);
    }, containerRef);

    return () => ctx.revert();
  }, [isScrolled]);

  return (
    <>
      {/* 1. GLOBAL BLUR / MOBILE MENU */}
      <AnimatePresence>
        {(hoveredLink || mobileMenuOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-[12px] pointer-events-auto lg:pointer-events-none"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MOBILE MENU SIDEBAR (Matching Image) */}
      {/* MOBILE MENU SIDEBAR (Matching Image) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            /* CHANGE: Added bg-[#0a0a0a]/80 for transparency 
               and backdrop-blur-xl for the frosted glass effect 
            */
            className="fixed top-4 right-4 bottom-4 w-[calc(100%-2rem)] max-w-md bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl z-[1001] p-6 overflow-y-auto pointer-events-auto flex flex-col"
            style={{ WebkitBackdropFilter: "blur(24px)" }} // Extra support for Safari
          >
            <div className="flex items-center justify-between mb-8">
              {/* Mobile Logo */}
              <div className="w-[1.8em] h-[1.8em] bg-white rounded flex items-center justify-center p-[0.3em]">
                <div className="w-full h-full bg-black rotate-45 rounded-sm" />
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:bg-white/10 p-2 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Top Actions */}
            <div className="flex items-center gap-3 mb-10">
              <button className="flex-1 text-white text-[0.7em] font-bold tracking-widest flex items-center justify-center gap-1">
                SIGN IN <ArrowUpRight size={14} />
              </button>
              <button className="flex-[1.5] bg-[#3448ff] text-white text-[0.7em] font-black tracking-widest py-3 rounded-full flex items-center justify-center gap-1">
                SCHEDULE A DEMO <ArrowUpRight size={14} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <div key={link}>
                  <div className="w-full h-[1px] bg-white/5 mb-6 flex items-center justify-between px-2">
                     <div className="w-1 h-1 rounded-full bg-white/20" />
                     <div className="w-1 h-1 rounded-full bg-white/20" />
                  </div>
                  <div className="flex items-center justify-between group px-2">
                    <span className="text-[0.8em] font-bold tracking-[0.15em] text-white uppercase">{link}</span>
                    {link !== 'PRICING' && <ChevronDown size={16} className="text-white/40 group-hover:text-white transition-colors" />}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header 
        ref={containerRef} 
        className="fixed top-0 left-0 right-0 z-[1000] flex flex-col items-center pointer-events-none font-['Helvetica_Now',_sans-serif]"
        style={{ fontSize: '1.11111vw' }}
      >
        <AnimatePresence mode="sync">
          {!isScrolled && (
            <motion.div 
              initial={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="w-full bg-black border-b border-white/10 py-2.5 overflow-hidden select-none pointer-events-auto shrink-0"
            >
              <div className="animate-marquee-slow flex items-center">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex items-center gap-12 pr-12 shrink-0">
                    <div className="flex items-center gap-6">
                      <span className="text-[0.6em] font-black tracking-[0.25em] text-[#c3f967]">
                        ANNOUNCING OUR $35M SERIES A FUNDING
                      </span>
                      <span className="text-[0.6em] font-black tracking-[0.25em] text-white">
                        TO TAKE DOWN FRIENDLY FRAUD - READ MORE →
                      </span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <nav 
          ref={navRef} 
          className="relative flex items-center justify-between w-full px-8 pointer-events-auto"
        >
          {/* Logo Section */}
          <div className="flex items-center gap-[0.8em] cursor-pointer group shrink-0">
            <div className="w-[1.8em] h-[1.8em] bg-white rounded flex items-center justify-center p-[0.3em] transition-transform duration-500 group-hover:rotate-[15deg]">
              <div className="w-full h-full bg-black rotate-45 rounded-sm" />
            </div>
            <AnimatePresence>
              {!isScrolled && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, width: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-[1.2em] font-bold tracking-tighter text-white whitespace-nowrap overflow-hidden"
                >
                  chargeflow
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Links Section */}
          <div ref={linksContainerRef} className="hidden lg:flex items-center gap-[1.8em]">
            {navLinks.map((link) => (
              <div 
                key={link} 
                className=" px-2 cursor-pointer" 
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <button className="cursor-pointer text-[0.6em] font-bold tracking-[0.15em] text-[#97a3b6] hover:text-white transition-colors duration-300 uppercase flex items-center gap-1">
                  {link}
                </button>
              </div>
            ))}
          </div>

          {/* Desktop Dropdown */}
          <AnimatePresence>
            {hoveredLink === 'PRODUCT' && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 z-[1001] pt-2"
                onMouseEnter={() => setHoveredLink('PRODUCT')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <ProductDropdwon />
              </div>
            )}
          </AnimatePresence>

          {/* Actions Section */}
          <div className="flex items-center gap-[1em] shrink-0">
            <button className="group relative p-[1px] rounded-full overflow-hidden transition-all active:scale-95 hidden sm:block border border-transparent hover:border-white/20">
            <div className="absolute inset-[-500%] c-sonar-trace opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{'--c1': '#ffffff'} as any} />
              <div className="relative flex items-center gap-1.5 bg-black px-[1.5em] py-[0.6em] rounded-full text-[0.65em] font-bold tracking-widest text-white transition-colors group-hover:bg-neutral-900">
                SIGN IN <ArrowUpRight size={14} strokeWidth={3} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </button>
            <button className="group relative p-[1px] rounded-full overflow-hidden transition-all active:scale-95 shadow-xl shadow-blue-600/20 hidden sm:flex">
            <div className="absolute inset-[-500%] c-sonar-trace opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{'--c1': '#ffffff'} as any} />
              <div className="relative flex items-center gap-1.5 bg-[#3448ff] px-[1.8em] py-[0.7em] rounded-full text-[0.65em] font-black tracking-widest text-white transition-colors group-hover:bg-[#2b3cd5] whitespace-nowrap">
                {isScrolled ? 'SCHEDULE A DEMO' : 'SIGN UP'} 
                <ArrowUpRight size={14} strokeWidth={3} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </button>
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-white hover:bg-white/5 p-2 rounded-lg transition-colors pointer-events-auto"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}