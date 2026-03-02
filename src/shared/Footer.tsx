import React from 'react';
import { Twitter, Linkedin, Youtube, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  // Common style for the dotted lines
  const dottedClass = "border-gray-800 border-dotted";

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
            </svg>
            chargeflow
          </h2>
        </div>

        {/* The Dotted Grid Container */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 border-t ${dottedClass}`}>
          
          {/* Column 1: Products & Signup */}
          <div className={`lg:col-span-4 p-6 border-b lg:border-r ${dottedClass}`}>
            <div className="space-y-10">
              <div>
                <h3 className="text-white font-semibold mb-6">Products</h3>
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                    Chargeflow Prevent <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white">NEW</span>
                  </li>
                  <li className="hover:text-white cursor-pointer transition-colors">Chargeflow Automation</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Chargeflow Alerts</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Chargeflow Insights</li>
                  <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                    Chargeflow Connect <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white">FOR PLATFORMS</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-dotted border-gray-800">
                <h3 className="text-white font-semibold mb-6">Signup with a Platform</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800 px-5 py-3 rounded-full border border-zinc-800 transition-all group">
                    <span className="flex items-center gap-3 text-xs font-bold tracking-wider">
                      <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-[10px]">S</div>
                      SIGNUP WITH SHOPIFY
                    </span>
                    <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                  </button>
                  <button className="w-full flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800 px-5 py-3 rounded-full border border-zinc-800 transition-all group">
                    <span className="flex items-center gap-3 text-xs font-bold tracking-wider">
                      <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-[10px]">S</div>
                      SIGNUP WITH STRIPE
                    </span>
                    <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                  </button>
                  <button className="w-full flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800 px-5 py-3 rounded-full border border-zinc-800 transition-all group">
                    <span className="flex items-center gap-3 text-xs font-bold tracking-wider">
                      <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-[10px]">W</div>
                      SIGNUP WITH WOO
                    </span>
                    <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Pricing & Solutions */}
          <div className={`lg:col-span-2 p-6 border-b lg:border-r ${dottedClass}`}>
            <h3 className="text-white font-semibold mb-6">Pricing</h3>
            <ul className="space-y-4 text-gray-400 text-sm mb-12">
              {['Pricing Overview', 'ROI Calculator', 'Book a Demo', 'SaaS Accelerator', 'Ecommerce Accelerator'].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>

            <div className="pt-6 border-t border-dotted border-gray-800">
              <h3 className="text-white font-semibold mb-2">Solutions</h3>
              <p className="text-[10px] text-zinc-500 mb-4 tracking-widest uppercase">By Industry</p>
              <ul className="space-y-4 text-gray-400 text-sm">
                {['SaaS', 'eCommerce', 'Travel', 'Health & Beauty'].map((item) => (
                  <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Integrations & Help */}
          <div className={`lg:col-span-2 p-6 border-b lg:border-r ${dottedClass}`}>
            <h3 className="text-white font-semibold mb-2">Integrations</h3>
            <p className="text-[10px] text-zinc-500 mb-4 tracking-widest uppercase">By Platform</p>
            <ul className="space-y-4 text-gray-400 text-sm mb-10">
              {['Shopify', 'WooCommerce', 'Explore All Integrations'].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>

            <div className="pt-6 border-t border-dotted border-gray-800">
              <p className="text-[10px] text-zinc-500 mb-4 tracking-widest uppercase">By Payment Processor</p>
              <ul className="space-y-4 text-gray-400 text-sm mb-10">
                {['Stripe', 'PayPal', 'WooPayments', 'Explore All Integrations'].map((item) => (
                  <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-dotted border-gray-800">
              <h3 className="text-white font-semibold mb-6">Get Help</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                {['Support', 'Help Center', 'Status'].map((item) => (
                  <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Company & Trust */}
          <div className={`lg:col-span-2 p-6 border-b lg:border-r ${dottedClass}`}>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400 text-sm mb-12">
              <li className="hover:text-white cursor-pointer transition-colors">Our Story</li>
              <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                Careers <span className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">WE&apos;RE HIRING</span>
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">Partner Program</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
            </ul>

            <div className="pt-6 border-t border-dotted border-gray-800">
              <h3 className="text-white font-semibold mb-6">Trust & Safety</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Security</li>
                <li className="hover:text-white cursor-pointer transition-colors">Compliance Center</li>
              </ul>
            </div>
          </div>

          {/* Column 5: Resources & Free Tools */}
          <div className={`lg:col-span-2 p-6 border-b ${dottedClass}`}>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4 text-gray-400 text-sm mb-12">
              {['API Documentation', 'Knowledge Base', 'Customer Stories', 'Guides & Research', 'Privacy & Terms'].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>

            <div className="pt-6 border-t border-dotted border-gray-800">
              <h3 className="text-white font-semibold mb-6">Free Tools</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                {['Reason Codes', 'ROI Calculator', 'BIN Lookup'].map((item) => (
                  <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg flex items-center gap-4 w-fit">
              <div className="text-2xl">🏆</div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold tracking-widest">PRODUCT HUNT</p>
                <p className="text-xs font-bold text-white">#1 Product of the Day</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Linkedin className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-10 bg-zinc-900 border border-zinc-800 rounded"></div>
              <div className="w-8 h-10 bg-zinc-900 border border-zinc-800 rounded"></div>
              <div className="w-8 h-10 bg-zinc-900 border border-zinc-800 rounded"></div>
              <div className="w-12 h-10 bg-zinc-900 border border-zinc-800 rounded"></div>
              <div className="w-12 h-10 bg-zinc-900 border border-zinc-800 rounded"></div>
            </div>
            
            <p className="text-xs text-zinc-600">Chargeflow © All Rights Reserved</p>
          </div>

          <div className="flex gap-6">
             <div className="w-20 h-20 rounded-full border border-zinc-800 flex flex-col items-center justify-center text-[10px] text-zinc-400 text-center leading-tight">
               <span className="font-bold text-white text-xs mb-1">SOC 2</span>
               <span>TYPE II</span>
               <span className="text-[8px] mt-1 text-zinc-600">Powered by Vanta</span>
             </div>
             <div className="w-20 h-20 rounded-full border border-zinc-800 flex flex-col items-center justify-center text-[10px] text-zinc-400 text-center leading-tight">
               <span className="font-bold text-white text-xs mb-1">GDPR</span>
               <span>COMPLIANT</span>
               <span className="text-[8px] mt-1 text-zinc-600">Powered by Vanta</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;