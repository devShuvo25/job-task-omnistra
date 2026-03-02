import React from "react";
import GraphicalBanner from "../Integrations/banner/Banner";
import PyamentMethod from "../Integrations/PyamentMethod";
import PlatformSection from "../Integrations/PlatformSection";
import EcommercePlatformSection from "../Integrations/ecommerce platform/EcommercePlatformSection";
import CustomerCommunication from "../Integrations/support platform/CustomerCommunication";
import Integrations from "../Integration";

export default function LandingPage() {
  return (
    <div className="max-w-300 mx-auto">
      <GraphicalBanner />
      <Integrations/>
      <PyamentMethod />
      <PlatformSection />
      <EcommercePlatformSection />
      <CustomerCommunication />
    </div>
  );
}
