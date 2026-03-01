"use client";

import React from 'react';
import { integrationsData } from '@/constant/navabar.data';
import { IntegrationCardMini } from './IntegrationCard.Mini';
import IntegrationDropdown, { IntegrationCard } from './IntegrationCard';

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

export default function IntegrationsDropdown() {
  return (
    <div
      className="w-[75vw] max-w-[1300px] rounded-[2.5rem] bg-[#050505]/95 shadow-xl border border-white/10 backdrop-blur-3xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] pointer-events-auto overflow-hidden p-3"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        <div className='col-span-3'>
          <IntegrationCard/>
        </div>
        <div className='col-span-2 gap-2 space-y-2'>
          {integrationsData?.map(item => {
            return (
              <IntegrationCardMini key={item?.id} item={item}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}