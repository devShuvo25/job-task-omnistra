"use client";
import React, { useState } from "react";
import { Zap } from "lucide-react";
import { platforms } from "@/constant/Integration.data";
import EcommeercePlatformCard from "./EcommerceCard";

const EcommercePlatformSection = () => {
  return (
    <div className="min-h-screen  bg-black text-white">
      {/* 1. Header Navigation */}

      {/* 2. Hero Section */}
      <section className="px-5  pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
          <Zap className="w-3 h-3 text-white" />
          <span className="text-[10px] uppercase font-bold tracking-widest text-white">
            Payments
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase ">
            ECOMMERCE PLATFORMS.
          </h1>
          <p className="max-w-md t text-white  ext-gray-500  text-sm leading-relaxed mb-2">
            Chargeflow enriches chargebacks with 1,000+ data points to achieve
            unparalleled win-rates,{" "}
            <span className="text-gray-500 font-semibold ">
              whether you&apos;re an eCommerce merchant, a SaaS startup, or in
              the travel industry, we&apos;ve got an integration for you.
            </span>
          </p>
        </div>
      </section>

      {/* 3. Integration Grid */}
      <section className="px-5 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms?.map((platform) => (
          <EcommeercePlatformCard key={platform?.id} item={platform} />
        ))}
      </section>
    </div>
  );
};

export default EcommercePlatformSection;
