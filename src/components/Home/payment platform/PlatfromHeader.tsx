"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Search, LucideIcon } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface PlatformHeaderProps {
  navItems: NavItem[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const PlatformHeader = ({ navItems, activeTab, setActiveTab }: PlatformHeaderProps) => {
  return (
    <header className="w-full bg-black border-b border-white/5 py-4 md:py-6 px-10 md:px-12 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md">
      
      {/* 1. Search Bar - Responsive width */}
      <div className="flex items-center gap-3 group flex-1 mr-4">
        <Search className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors shrink-0" />
        <input 
          type="text" 
          placeholder="Search" 
          className="bg-transparent border-none outline-none text-white text-sm font-medium placeholder:text-gray-500 w-full max-w-[80px] md:max-w-[200px] transition-all focus:max-w-[150px] md:focus:max-w-[250px]"
        />
      </div>

      {/* 2. Navigation Links - Scrollable on Mobile */}
      <nav className="flex items-center gap-6 md:gap-8 lg:gap-12 overflow-x-auto no-scrollbar scroll-smooth pb-1 md:pb-0">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex items-center gap-2 transition-all relative py-2 group whitespace-nowrap shrink-0"
            >
              <Icon className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-colors ${
                isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
              }`} />
              
              <span className={`text-[10px] md:text-[11px] uppercase tracking-[0.1em] md:tracking-[0.15em] font-bold transition-colors ${
                isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
              }`}>
                {item.label}
              </span>

              {/* Animated active indicator */}
              {isActive && (
                <motion.div 
                  layoutId="activeTabUnderline"
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white/40"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>
      
      {/* CSS injection for hiding scrollbar but keeping functionality */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </header>
  );
};

export default PlatformHeader;