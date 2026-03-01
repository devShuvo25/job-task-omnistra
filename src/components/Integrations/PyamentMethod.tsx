import { paymentsData } from '@/constant/Integration.data'
import React from 'react'
import { PaymentCard } from './PaymentCard'

export default function PyamentMethod() {
  return (
    <div className='grid grid-cols-2 w-260 mx-auto'>
        {
           paymentsData?.map((item, idx) =><PaymentCard key={idx} data={item} />) 
        }
    </div>
  )
}
