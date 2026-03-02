"use client";

import { supportPlatforms } from "@/constant/Integration.data";
import { Zap } from "lucide-react";
import PaymentPlatformCard from "../payment platform/PaymentPlatformCard";
import EcommeercePlatformCard from "../ecommerce platform/EcommerceCard";

const CustomerCommunication = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-5 pt-20 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
          <Zap className="w-3 h-3 text-white" />
          <span className="text-[10px] uppercase font-bold tracking-widest text-white">
            support
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase ">
            CUSTOMER COMMUNICATION.
          </h1>
          <p className="max-w-md text-gray-500 text-sm leading-relaxed mb-2">
            Boost your chargeback win rate with compelling evidence from
            customer communications.Chargeflow turns your chat and email data
            into powerful evidence for recovering more chargebacks.
          </p>
        </div>
      </section>

      {/* Integration Grid */}
      <section className="px-5 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {supportPlatforms?.map((platform) => (
          <EcommeercePlatformCard key={platform?.id} item={platform} />
        ))}
      </section>
    </div>
  );
};

export default CustomerCommunication;
