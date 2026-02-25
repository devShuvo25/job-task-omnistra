"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function ChargeflowNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Monitor scroll for the background transition
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 nav-transition ${
      scrolled ? 'glass-effect py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* 1. Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary rounded-lg" /> 
          <span className="text-xl font-bold tracking-tight text-brand-dark">
            chargeflow
          </span>
        </Link>

        {/* 2. Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {['Product', 'Solutions', 'Pricing', 'Resources'].map((item) => (
            <div key={item} className="group relative px-4 py-2">
              <button className="flex items-center gap-1 text-[15px] font-medium text-slate-600 hover:text-brand-primary transition-colors">
                {item}
                {item !== 'Pricing' && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
              </button>
              
              {/* Mega Menu Dropdown (Simplified for this example) */}
              {item !== 'Pricing' && (
                <div className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white border border-slate-100 shadow-mega-menu rounded-2xl p-6 w-[400px]">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="p-3 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors">
                        <p className="font-semibold text-brand-dark">Feature One</p>
                        <p className="text-sm text-slate-500">A detailed description of the product feature.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 3. CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="text-[15px] font-semibold text-slate-700 px-4 py-2">
            Log In
          </button>
          <button className="bg-brand-dark text-white text-[15px] font-semibold px-6 py-2.5 rounded-full hover:bg-brand-primary transition-all active:scale-95 shadow-lg shadow-brand-dark/5">
            Get Started
          </button>
        </div>

        {/* 4. Mobile Menu Toggle */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {['Product', 'Solutions', 'Pricing', 'Resources'].map((item) => (
                <Link key={item} href="#" className="block text-lg font-medium text-brand-dark">
                  {item}
                </Link>
              ))}
              <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}