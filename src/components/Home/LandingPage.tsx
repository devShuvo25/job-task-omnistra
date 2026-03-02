import React from "react";
import GraphicalBanner from "./banner/Banner";
import PlatformSection from "./payment platform/PlatformSection";
import EcommercePlatformSection from "./ecommerce platform/EcommercePlatformSection";
import CustomerCommunication from "./support platform/CustomerCommunication";
import Integrations from "./Integrations/Integration";
import PyamentMethod from "./PyamentMethod";
import Newsletter from "./newsletter/NewsLetter";

export default function LandingPage() {
  return (
    <div className="max-w-300 mx-auto">
      <GraphicalBanner />
      <Integrations />
      <PyamentMethod />
      <PlatformSection />
      <EcommercePlatformSection />
      <CustomerCommunication />
      <Newsletter/>
    </div>
  );
}
