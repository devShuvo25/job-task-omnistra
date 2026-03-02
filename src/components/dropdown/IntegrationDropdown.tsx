"use client";

import React from 'react';
import { integrationsData } from '@/constant/navabar.data';
import { IntegrationCardMini } from './IntegrationCard.Mini';
import { IntegrationCard } from './IntegrationCard';


export default function IntegrationsDropdown() {
  return (
    <div
      className="w-[70vw] max-w-[1300px] rounded-[2.5rem] bg-[#050505]/95 shadow-xl border border-white/10 backdrop-blur-3xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] pointer-events-auto overflow-hidden p-3"
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