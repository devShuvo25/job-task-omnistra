
import GraphicalBanner from '@/components/Banner'
import PlatformSection from '@/components/Integrations/PlatformSection'
import PyamentMethod from '@/components/Integrations/PyamentMethod'
import React from 'react'

export default function page() {
  return (
    <div className='max-w-300 mx-auto'>
        <GraphicalBanner/>
        <PyamentMethod/>
        <PlatformSection/>
        
    </div>
  )
}
