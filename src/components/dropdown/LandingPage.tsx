import React from "react";
import GraphicalBanner from "../Home/banner/Banner";
import PlatformSection from "../Home/payment platform/PlatformSection";
import EcommercePlatformSection from "../Home/ecommerce platform/EcommercePlatformSection";
import CustomerCommunication from "../Home/support platform/CustomerCommunication";
import Integrations from "../Home/Integrations/Integration";
import PyamentMethod from "../Home/payment platform/PyamentMethod";
import Newsletter from "../Home/newsletter/NewsLetter";

export default function LandingPage() {
  return (
    <div className="max-w-300 mx-auto">
      <GraphicalBanner />
      <Integrations />
      <PyamentMethod />
      <PlatformSection />
      <EcommercePlatformSection />
      <CustomerCommunication />
      <Newsletter />
    </div>
  );
}
