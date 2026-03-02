import React from 'react';

const Newsletter = () => {
  return (
    <section className="w-full py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Main Card Container */}
        <div className="relative group overflow-hidden rounded-[2.5rem] bg-[#2141F3] min-h-[400px] flex flex-col items-center justify-center text-center p-8 transition-all duration-500 ease-out hover:shadow-[0_0_50px_rgba(33,65,243,0.3)]">
          
          {/* Enhanced Radial Burst Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 1000 1000" 
              preserveAspectRatio="xMidYMid slice"
              className="opacity-100" // Increased base container opacity
            >
              <g transform="translate(500, 500)">
                {[...Array(120)].map((_, i) => (
                  <line
                    key={i}
                    x1="0"
                    y1="0"
                    x2="1000"
                    y2="0"
                    stroke="white"
                    strokeWidth="1" // Increased width for better visibility
                    strokeDasharray="4,10" // Adjusted dash for a cleaner look
                    strokeOpacity="0.2" // Increased base visibility
                    transform={`rotate(${(i * 360) / 120})`}
                    className="transition-all duration-700 ease-in-out group-hover:stroke-opacity-80 group-hover:stroke-[1.5px]"
                  />
                ))}
              </g>
            </svg>
          </div>

          {/* Stronger Central Glow for contrast against lines */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/20 blur-[100px] rounded-full z-0 opacity-100" />

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[1.1] mb-6 max-w-4xl drop-shadow-lg">
              CAN&apos;T FIND THE INTEGRATION YOU&apos;RE <br className="hidden md:block" /> LOOKING FOR?
            </h2>
            
            <p className="text-white/95 text-2xl md:text-3xl font-light tracking-[0.2em] mb-10 drop-shadow-md">
              LET US KNOW!
            </p>

            {/* Hover-Trigger Button */}
            <button className="group/btn relative overflow-hidden bg-white text-black px-10 py-4 rounded-2xl font-bold text-sm tracking-widest uppercase flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] active:scale-95">
              REQUEST AN INTEGRATION
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;