import React from "react";
import GraphicalBanner from "./banner/Banner";
import PyamentMethod from "./PyamentMethod";
import PlatformSection from "./PlatformSection";
import EcommercePlatformSection from "./ecommerce platform/EcommercePlatformSection";
import CustomerCommunication from "./support platform/CustomerCommunication";

export default function IntegrationPage() {
  return (
    <div className="max-w-300 mx-auto">
      <GraphicalBanner />
      <PyamentMethod />
      <PlatformSection />
      <EcommercePlatformSection />
      <CustomerCommunication />
    </div>
  );
}
