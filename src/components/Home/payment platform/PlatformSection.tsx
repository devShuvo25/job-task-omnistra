"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, ChevronDown, Plus } from "lucide-react";
import PaymentPlatformCard from "./PaymentPlatformCard";
import PlatformHeader from "./PlatfromHeader";
import { navItems, platforms } from "@/constant/Integration.data";

const PlatformSection = () => {
  const [activeTab, setActiveTab] = useState("processors");
  const INITIAL_VISIBLE_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const visiblePlatforms = platforms?.slice(0, visibleCount);
  const hasMore = platforms && visibleCount < platforms.length;

  return (
    <div className="min-h-screen bg-black text-white">
      <PlatformHeader
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Hero Section */}
      <section className="px-5 pt-20 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
          <Zap className="w-3 h-3 text-white" />
          <span className="text-[10px] uppercase font-bold tracking-widest text-white">
            Payments
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase ">
            Payment Platforms.
          </h1>
          <p className="max-w-md text-gray-500 text-sm leading-relaxed mb-2">
            Seamlessly and securely integrate your payment platforms to
            Chargeflow.
          </p>
        </div>
      </section>

      {/* Integration Grid */}
      <section className="px-5 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visiblePlatforms?.map((platform) => (
          <PaymentPlatformCard key={platform?.id} platform={platform} />
        ))}

        {/* 4. Request Integration Card - Positioned at the end */}
        {!hasMore && (
          <motion.div
            whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.1)" }}
            className="group relative p-8 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:bg-[#0F0F0F] transition-all cursor-pointer h-[180px] flex flex-col justify-between items-center"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
              <Plus className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </div>
            <p className="text-lg font-medium text-gray-400 group-hover:text-white transition-colors">
              Request an Integration
            </p>
          </motion.div>
        )}
      </section>

      {/* See More Button */}
      {hasMore && (
        <div className="flex justify-center pb-20">
          <button
            onClick={() => setVisibleCount(platforms.length)}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-sm font-medium text-gray-300 hover:text-white"
          >
            See More
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PlatformSection;
