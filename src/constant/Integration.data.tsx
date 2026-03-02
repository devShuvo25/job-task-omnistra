import { IntegrationLogo } from "@/interface/integratioin";
import { Cpu, CreditCard, Gem, MessageSquare } from "lucide-react";

export const paymentsData = [
  {
    app: "Stripe App",
    description: "Leverage Chargeflow Automation, Insights and Alerts directly from the Stripe Dashboard.",
    ctaText: "LEARN MORE",
    brandColor: "#635BFF",
    logo: (
      <svg viewBox="0 0 60 25" className="w-35 h-auto">
        <path fill="#635BFF" d="M51.011 10.332c0-.667-.53-1.127-1.314-1.127-1.127 0-3.04.53-3.04.53V6.264s1.765-.637 3.334-.637c2.6 0 4.17 1.275 4.17 3.824v7.795s-1.422.588-2.844.588c-2.451 0-3.677-1.177-3.677-3.04 0-2.304 1.912-3.236 4.314-3.236v-.226h.057zm-3.138 3.53c0 .637.392.98 1.079.98.588 0 1.275-.245 1.716-.49v-1.618c-1.373 0-2.795.294-2.795 1.128zm-9.316-2.697v-.147c0-2.402-1.667-3.236-3.824-3.236-1.569 0-3.089.441-3.089.441l.589 2.942s1.421-.49 2.255-.49c.833 0 1.127.245 1.127.686v.245c-.441-.147-1.078-.245-1.912-.245-2.255 0-4.363.931-4.363 3.481 0 2.206 1.569 3.089 3.432 3.089 1.127 0 2.255-.392 2.843-.686v.54h2.942l.001-6.62zm-3.04 3.04c0 .588-.441 1.03-1.226 1.03-.637 0-1.127-.294-1.127-.932 0-.686.588-1.03 1.52-1.03.392 0 .833.05 1.078.147l-.245.785zm-7.648-7.207c-2.206 0-3.922.931-4.707 2.059V6.264h-3.138v10.983h3.138v-5.638c0-1.618 1.177-2.451 2.599-2.451.686 0 1.127.147 1.127.147l.54-3.04s-.686-.274-1.559-.274zm-12.355 1.324c0-.785.637-1.226 1.667-1.226.931 0 1.912.245 1.912.245l.441-2.746s-.98-.343-2.55-.343c-2.745 0-4.608 1.471-4.608 3.922 0 3.824 5.197 3.187 5.197 4.854 0 .932-.833 1.324-1.961 1.324-1.226 0-2.451-.441-2.451-.441l-.491 2.843s1.226.54 3.138.54c2.942 0 4.903-1.422 4.903-4.118 0-4.02-5.197-3.236-5.197-4.903z"/>
      </svg>
    )
  },
  {
    app: "Shopify App",
    description: "With hundreds of 5-star reviews, we revolutionize chargebacks prevention and recovery across the Shopify ecosystem.",
    ctaText: "INSTALL NOW",
    brandColor: "#95BF47",
    logo: (
      <svg viewBox="0 0 30 30" className="w-20 h-auto">
        <path fill="#95BF47" d="M22.9 8.7l-4.2-2.8c-.4-.3-.9-.3-1.3 0L5.3 14c-.4.3-.6.7-.6 1.2v9.3c0 .5.2.9.6 1.2l12.1 8.1c.4.3.9.3 1.3 0l12.1-8.1c.4-.3.6-.7.6-1.2v-9.3c0-.5-.2-.9-.6-1.2l-8.7-5.3z"/>
        <path fill="#000" opacity="0.1" d="M11 12.5v10l8 4.5v-10l-8-4.5z"/>
        <path fill="#fff" d="M11 11.5v10l8 4.5v-10l-8-4.5z"/>
      </svg>
    )
  },
  {
    app: "PayPal App",
    description: "Automatically resolve customer inquiries in PayPal at unparalleled speed and precision, powered by AI.",
    ctaText: "INSTALL NOW",
    brandColor: "#003087",
    logo: (
      <svg viewBox="0 0 24 24" className="w-20 h-auto">
        <path fill="#003087" d="M20.067 8.178c-.552 4.153-3.26 6.273-7.334 6.273H9.41l-1.306 8.242a.5.5 0 0 1-.493.422H4.11a.41.41 0 0 1-.406-.474l2.86-18.046A.61.61 0 0 1 7.172 4h6.06c4.04 0 6.947 1.838 6.835 4.178z"/>
        <path fill="#009CDE" d="M17.658 13.045c-.552 4.153-3.26 6.273-7.334 6.273H7.001l-1.306 8.242a.5.5 0 0 1-.493.422H1.701a.41.41 0 0 1-.406-.474L4.155 9.462A.61.61 0 0 1 4.763 9h6.06c4.04 0 6.947 1.838 6.835 4.045z"/>
      </svg>
    )
  },
  {
    app: "WooCommerce App",
    description: "The ONLY AI-powered Chargeback solution with native integration to WooPay and the WooCommerce Platform.",
    ctaText: "INSTALL NOW",
    brandColor: "#96588A",
    logo: (
      <svg viewBox="0 0 32 32" className="w-25 h-auto">
        <path fill="#96588A" d="M27.2 11.2c-1.3 0-2.4 1-2.4 2.2 0 .4.1.7.3 1L19.4 19c-.3-.2-.6-.3-.9-.3-.5 0-1 .2-1.3.6l-4.5-2.2c.1-.2.1-.4.1-.6 0-1.3-1.1-2.4-2.4-2.4S8 15.2 8 16.5c0 1.3 1.1 2.4 2.4 2.4.4 0 .7-.1 1-.3l4.5 2.2c-.1.3-.2.6-.2.9 0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c0-.4-.1-.8-.3-1.1l5.7-4.6c.3.2.7.3 1.1.3 1.3 0 2.4-1.1 2.4-2.4s-1-2.7-2.5-2.7z"/>
      </svg>
    )
  }
];

// Data structure based on the platform grid
export const platforms = [
  { 
    id: 1, 
    name: "Shopify", 
    logo: "https://e7.pngegg.com/pngimages/833/276/png-clipart-e-commerce-shopify-logo-web-design-magento-shopping-cart-grass-business-thumbnail.png",
    desc: "A leading all-in-one commerce platform to start, run, and grow a business."
  },
  { 
    id: 2, 
    name: "WooCommerce", 
    logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg",
    desc: "Open-source eCommerce plugin for WordPress designed for online merchants."
  },
  { 
    id: 3, 
    name: "eBay", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
    desc: "Global online auction and shopping marketplace for diverse goods."
  },
  { 
    id: 4, 
    name: "Magento", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnFN0_ta2uAAEHtov0-pHJwPYCgo4u3JXKw&s",
    desc: "Flexible open-source platform with powerful tools for enterprise eCommerce."
  },
  { 
    id: 5, 
    name: "BigCommerce", 
    logo: "https://cdn.worldvectorlogo.com/logos/bigcommerce-1.svg",
    desc: "Scalable SaaS platform providing solutions for fast-growing businesses."
  },
  { 
    id: 6, 
    name: "Wix", 
    logo: "https://img.freepik.com/premium-vector/wix-logo-wix-letter-wix-letter-logo-design-initials-wix-logo-linked-with-circle-uppercase-monogram-logo-wix-typography-technology-business-real-estate-brand_229120-70812.jpg?semt=ais_user_personalization&w=740&q=80",
    desc: "Cloud-based development platform for building professional websites."
  },
  { 
    id: 7, 
    name: "Webflow", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZcZtJ0bhxgYq5MRaFx5HDwG5cRnPB36jzg&s",
    desc: "Visual design tool for professional site building with clean code."
  },
  { 
    id: 8, 
    name: "Weebly eCommerce", 
    logo: "https://cdn.worldvectorlogo.com/logos/weebly-1.svg",
    desc: "Intuitive drag-and-drop website builder for small online shops."
  },
  { 
    id: 9, 
    name: "Salesforce Commerce Cloud", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    desc: "Cloud commerce solution delivering personalized shopping experiences."
  },
  { 
    id: 10, 
    name: "Squarespace", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsYCZzFrGJpgmxW_aDX1Z97hsuX-PvyVwjQ&s",
    desc: "Premium website templates and design tools for modern businesses."
  },
  { 
    id: 11, 
    name: "Etsy", 
    logo: "https://icon2.cleanpng.com/20180805/vvr/kisspng-logo-brand-name-com-product-design-william-davies-meng-web-professional-5b67865e8a11d0.8643999715335112625655.jpg",
    desc: "Global marketplace focused on unique, creative, and handmade goods."
  },
  { 
    id: 12, 
    name: "PrestaShop", 
    logo: "https://cdn.worldvectorlogo.com/logos/prestashop.svg",
    desc: "Efficient open-source e-commerce solution used by global retailers."
  },
  { 
    id: 13, 
    name: "Volusion", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVRZcahhHNBvqN3tTwg72NxRhExvm__BfaQQ&s",
    desc: "All-in-one platform for inventory, payment, and store management."
  },
  { 
    id: 14, 
    name: "Wix Stores", 
    logo: "https://static.wixstatic.com/media/22e53e_a53027e61c334a428ee8fd64dd776792~mv2.png",
    desc: "Specialized eCommerce tools within the Wix website ecosystem."
  },
  { 
    id: 15, 
    name: "OpenCart", 
    logo: "https://cdn.worldvectorlogo.com/logos/opencart.svg",
    desc: "Free, customizable open-source platform for online store management."
  },
];
export const supportPlatforms = [
  // --- Support & CRM Platforms (from image_4e7dee.png) ---
  { id: 1, name: "Gmail", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" },
  { id: 2, name: "Gorgias", logo: "https://pbs.twimg.com/profile_images/1728458499800055808/58znXl4Y_400x400.jpg" },
  { id: 3, name: "Intercom", logo: "https://cdn.worldvectorlogo.com/logos/intercom-2.svg" },
  { id: 4, name: "Zendesk", logo: "https://cdn.worldvectorlogo.com/logos/zendesk-1.svg" },
  { id: 5, name: "Help Scout", logo: "https://cdn.worldvectorlogo.com/logos/help-scout.svg" },
  { id: 6, name: "Freshdesk", logo: "https://cdn.worldvectorlogo.com/logos/freshdesk.svg" },
  { id: 7, name: "Zoho", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWZJmnJLhKU9o1EpO_ZRaVXeNdIXCfJw6JRw&s" },
  { id: 8, name: "LiveAgent", logo: "https://images.softwaresuggest.com/software_logo/liveagent-20250804225216.png?auto=compress,format" },
  { id: 9, name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
];
// data for payment platform header nav
export const navItems = [
  { id: 'processors', label: 'Payment Processors', icon: Cpu },
  { id: 'platforms', label: 'Platforms', icon: Gem },
  { id: 'subscription', label: 'Subscription', icon: CreditCard },
  { id: 'communication', label: 'Customer Communication', icon: MessageSquare },
];

export const integrations: IntegrationLogo[] = [
  {
    id: 1,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRus-wnHkWv5kKT4QhByRS1z8ZQThGOiGlXrw&s",
    alt: "NICE",
    position: "top-[12%] left-[8%] md:top-[10%] md:left-[10%]",
    size: "lg",
    delay: 0,
    moveX: 20,
    moveY: 20,
  },
  {
    id: 5,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XBSaxe62HkBvAT6ec5p19UU8zEzQ6cIW0Q&s",
    alt: "Latitude",
    position: "top-[12%] right-[8%] md:top-[12%] md:right-[40%]",
    size: "md",
    delay: 0.02,
    moveX: -20,
    moveY: 20,
  },
  {
    id: 2,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJCVkJNnswA53ox7-D4UZHfz3G_zmEIpcCw&s",
    alt: "Energy",
    position: "top-[35%] left-[4%] md:top-[25%] md:left-[18%]",
    size: "md",
    delay: 0.04,
    moveX: 25,
    moveY: 5,
  },
  {
    id: 7,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWyXpY7BrHzjvTligviVPVNQ7wqxq0o5A5Q&s",
    alt: "Waves",
    position: "top-[35%] right-[4%] md:top-[30%] md:right-[18%]",
    size: "md",
    delay: 0.04,
    moveX: -25,
    moveY: 5,
  },
  {
    id: 4,
    src: "https://img.freepik.com/free-vector/p-gradient-creative-logo-design-vector_474888-3916.jpg?semt=ais_rp_progressive&w=740&q=80",
    alt: "Partner",
    position: "bottom-[20%] left-[8%] md:bottom-[15%] md:left-[20%]",
    size: "lg",
    delay: 0.06,
    moveX: 20,
    moveY: -20,
  },
  {
    id: 8,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2CUk9EcREGYjoCQ42a27mj1SMUgBbw2zzQ&s",
    alt: "Star",
    position: "bottom-[20%] right-[8%] md:bottom-[20%] md:right-[22%]",
    size: "lg",
    delay: 0.06,
    moveX: -20,
    moveY: -20,
  },
  {
    id: 3,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDkZkq0DdzmslDyv85Hf1mZNONqrEeB1FWg&s",
    alt: "Salesforce",
    position: "top-[50%] left-[12%] hidden md:flex md:left-[25%]",
    size: "lg",
    delay: 0.05,
    moveX: 15,
    moveY: 0,
  },
  {
    id: 6,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbauY_njB-p9AZ4mAqh00F-EZ3fEmuBoooVg&s",
    alt: "Fiserv",
    position: "bottom-[10%] left-[45%] hidden md:flex",
    size: "lg",
    delay: 0.05,
    moveX: 0,
    moveY: -30,
  },
];