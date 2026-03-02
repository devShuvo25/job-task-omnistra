import { paymentsData } from "@/constant/Integration.data";
import React from "react";
import { PaymentCard } from "./payment platform/PaymentCard";

export default function PyamentMethod() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">
      {/* Added 'justify-items-center' to center the cards in their columns 
          Added 'place-content-center' to handle overall grid alignment
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center place-content-center">
        {paymentsData?.map((item, idx) => (
          <PaymentCard key={idx} data={item} />
        ))}
      </div>
    </div>
  );
}
