"use client";
import React, { useState } from 'react';
import { 
  Cpu,
  CreditCard,
  Gem,
  MessageSquare,
  Zap
} from 'lucide-react';
import PaymentPlatformCard from './PaymentPlatformCard';
import PlatformHeader from './PlatfromHeader';



// Data structure based on the platform grid
const platforms = [
  { id: 1, name: "Checkout.com", desc: "Global payment processing for Ecommerce businesses", logo: "https://logo.clearbit.com/checkout.com" },
  { id: 2, name: "Stripe", desc: "Online payment processing for internet businesses.", logo: "https://logo.clearbit.com/stripe.com" },
  { id: 3, name: "Shopify Payments", desc: "Integrated payment gateway for Shopify merchants.", logo: "https://logo.clearbit.com/shopify.com" },
  { id: 4, name: "PayPal", desc: "Global online payment system and digital wallet.", logo: "https://logo.clearbit.com/paypal.com" },
  { id: 5, name: "AfterPay", desc: "Shop now, pay later installment payment service.", logo: "https://logo.clearbit.com/afterpay.com" },
  { id: 6, name: "Klarna", desc: "Flexible payment solutions for online shopping.", logo: "https://logo.clearbit.com/klarna.com" },
];
const navItems = [
  { id: 'processors', label: 'Payment Processors', icon: Cpu },
  { id: 'platforms', label: 'Platforms', icon: Gem },
  { id: 'subscription', label: 'Subscription', icon: CreditCard },
  { id: 'communication', label: 'Customer Communication', icon: MessageSquare },
];
const PlatformSection = () => {
  const [activeTab, setActiveTab] = useState('processors');
  return (
    <div className="min-h-screen  bg-black text-white">
      {/* 1. Header Navigation */}
      <PlatformHeader 
        navItems={navItems} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      {/* 2. Hero Section */}
      <section className="px-12 pt-20 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
          <Zap className="w-3 h-3 text-white" />
          <span className="text-[10px] uppercase font-bold tracking-widest text-white">Payments</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase ">
            Payment Platforms.
          </h1>
          <p className="max-w-md text-gray-500 text-sm leading-relaxed mb-2">
            Seamlessly and securely integrate your payment platforms to Chargeflow for a <span className="text-white font-semibold">fully automated chargeback prevention and recovery.</span>
          </p>
        </div>
      </section>

      {/* 3. Integration Grid */}
      <section className="px-12 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((platform) => (
          <PaymentPlatformCard key={platform?.id} platform={platform}/>
        ))}
      </section>
    </div>
  );
};

export default PlatformSection;