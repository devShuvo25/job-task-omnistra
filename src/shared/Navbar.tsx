"use client";

import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Gamepad, Layers, Menu, X } from 'lucide-react';
import ProductDropdwon from '@/components/dropdown/ProductsDropDown';
import CustomerDropdown from '@/components/dropdown/CustomerDropdown';
import IntegrationsDropdown from '@/components/dropdown/IntegrationDropdown';
import Link from 'next/link';
import { navLinks } from '@/constant/navabar.data';
import ResourcesDropdown from '@/components/dropdown/ResourceDropdown';
import CompanyDropdown from '@/components/dropdown/CompanyDropdown';
// Ensure this path matches where you saved the CaseStudyDropdown component

export default function ChargeflowNavbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const updateNavbar = () => {
        const shouldShrink = isScrolled || hoveredLink !== null;
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
            duration,
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
          gsap.to(navRef.current, {
            width: "100%",
            maxWidth: "150em",
            backgroundColor: "transparent",
            padding: "1.2em 2em",
            borderRadius: "0px",
            border: "1px solid rgba(255, 255, 255, 0)",
            backdropFilter: "blur(0px)",
            duration: 0.5,
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
  }, [isScrolled]); // Added hoveredLink to dependency array for instant UI response

  return (
    <>
    <AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 120 }}
      className="fixed inset-0 z-[1100] bg-black/90 backdrop-blur-2xl pointer-events-auto flex flex-col p-8 overflow-y-auto"
    >
      {/* 1. Header Section */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center p-1.5">
            <div className="w-full h-full bg-black rotate-45 rounded-sm" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">chargeflow</span>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(false)} 
          className="text-white/70 hover:text-white p-2 transition-colors"
        >
          <X size={32} strokeWidth={1.5} />
        </button>
      </div>

      {/* 2. Action Buttons */}
      <div className="flex items-center gap-4 mb-12">
        <button className="flex-1 text-[0.7rem] font-bold tracking-[0.1em] text-white flex items-center justify-center gap-1.5 uppercase border border-white/10 py-4 rounded-full">
          SIGN IN <ArrowUpRight size={14} />
        </button>
        <button className="flex-[1.5] bg-[#3448ff] text-white py-4 rounded-full text-[0.7rem] font-black tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 uppercase">
          SCHEDULE A DEMO <ArrowUpRight size={14} />
        </button>
      </div>

      {/* 3. Navigation Links */}
      <nav className="flex flex-col">
        {navLinks?.map((link, index) => (
          <Link href={link?.path} key={index} className="flex flex-col">
            {/* Dotted Divider with endpoints */}
            <div className="w-full h-px bg-white/10 flex items-center justify-between relative">
               <div className="w-1.5 h-1.5 rounded-full bg-white/20 absolute left-0 -translate-x-1/2" />
               <div className="w-1.5 h-1.5 rounded-full bg-white/20 absolute right-0 translate-x-1/2" />
            </div>
            
            <button className="flex justify-between items-center py-7 text-left group">
              <span className="text-[0.85rem] font-bold tracking-[0.2em] text-white/50 group-hover:text-white transition-all uppercase">
                {link?.label}
              </span>
              {(link) && (
                <ChevronDown size={18} className="text-white/30" />
              )}
            </button>
          </Link>
        ))}

        {/* Closing Divider */}
        <div className="w-full h-[1px] bg-white/10 flex items-center justify-between relative">
           <div className="w-1.5 h-1.5 rounded-full bg-white/20 absolute left-0 -translate-x-1/2" />
           <div className="w-1.5 h-1.5 rounded-full bg-white/20 absolute right-0 translate-x-1/2" />
        </div>
      </nav>

      {/* 4. Footer info (Optional but adds to the look) */}
      <div className="mt-auto pt-10 text-center">
        <p className="text-[0.6rem] text-white/20 tracking-[0.3em] font-bold uppercase">
          Chargeflow © 2026
        </p>
      </div>
    </motion.div>
  )}
</AnimatePresence>
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

      <header 
        ref={containerRef} 
        className="fixed top-0 left-0 right-0 z-[1000] flex flex-col items-center pointer-events-none font-['Helvetica_Now',_sans-serif]"
        style={{ fontSize: '1.11111vw' }}
      >


        <nav 
          ref={navRef} 
          className="relative flex items-center justify-between w-full px-8 pointer-events-auto"
        >
          {/* Logo Section */}
          <Link href={'/'} className="flex items-center gap-[0.8em] cursor-pointer group shrink-0">
            <Layers/>
            
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
          </Link>

          {/* Desktop Links Section */}
          <div ref={linksContainerRef} className="hidden lg:flex items-center gap-[1.8em]">
            {navLinks?.map((link, index) => (
              <Link 
                href={link?.path}
                key={index} 
                className=" px-2 cursor-pointer" 
                onMouseEnter={() => setHoveredLink(link?.label)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <button className="cursor-pointer text-[0.6em] font-bold tracking-[0.15em] text-[#97a3b6] hover:text-white transition-colors duration-300 uppercase flex items-center gap-1">
                  {link.label}
                </button>
              </Link>
            ))}
          </div>

         {/* Dropdowns Container */}
         {/* Dropdowns Container */}
<AnimatePresence>
  {hoveredLink && (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute top-full left-1/2 -translate-x-1/2 z-1001 pt-6"
      onMouseEnter={() => setHoveredLink(hoveredLink)}
      onMouseLeave={() => setHoveredLink(null)}
    >
      {hoveredLink === 'PRODUCT' && <ProductDropdwon />}
      {hoveredLink === 'CUSTOMERS' && <CustomerDropdown />}
      {hoveredLink === 'INTEGRATIONS' && <IntegrationsDropdown />}
      {hoveredLink === 'RESOURCES' && <ResourcesDropdown />}
      {hoveredLink === 'COMPANY' && <CompanyDropdown/>}
    </motion.div>
  )}
</AnimatePresence>

          {/* Actions Section */}
          <div className="flex items-center gap-[1em] shrink-0">
            <button className="group relative p-[1px] rounded-full overflow-hidden transition-all active:scale-95 hidden sm:block border border-transparent hover:border-white/20">
              <div className="absolute inset-[-500%] c-sonar-trace opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{'--c1': '#ffffff'} as React.CSSProperties} />
              <div className="relative flex items-center gap-1.5 bg-black px-[1.5em] py-[0.6em] rounded-full text-[0.65em] font-bold tracking-widest text-white transition-colors group-hover:bg-neutral-900">
                SIGN IN <ArrowUpRight size={14} strokeWidth={3} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </button>
            <button className="group relative p-[1px] rounded-full overflow-hidden transition-all active:scale-95 shadow-xl shadow-blue-600/20 hidden sm:flex">
              <div className="absolute inset-[-500%] c-sonar-trace opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{'--c1': '#ffffff'} as React.CSSProperties} />
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