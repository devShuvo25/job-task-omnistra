// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   MotionValue,
// } from "framer-motion";
// import { AlignVerticalDistributeCenter } from "lucide-react";
// import AnimatedButton from "./ui/AnimatedButton";

// interface IntegrationLogo {
//   id: number;
//   src: string;
//   alt: string;
//   position: string;
//   size: "sm" | "md" | "lg";
//   delay: number;
//   moveX: number;
//   moveY: number;
// }

// const integrations: IntegrationLogo[] = [
//   {
//     id: 1,
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRus-wnHkWv5kKT4QhByRS1z8ZQThGOiGlXrw&s",
//     alt: "NICE",
//     position: "top-[10%] left-[10%]",
//     size: "lg",
//     delay: 0,
//     moveX: 40,
//     moveY: 40,
//   },
//   {
//     id: 2,
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJCVkJNnswA53ox7-D4UZHfz3G_zmEIpcCw&s",
//     alt: "Energy",
//     position: "top-[30%] left-[18%]",
//     size: "md",
//     delay: 0.05,
//     moveX: 32,
//     moveY: 20,
//   },
//   {
//     id: 3,
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDkZkq0DdzmslDyv85Hf1mZNONqrEeB1FWg&s",
//     alt: "Salesforce",
//     position: "top-[50%] left-[25%]",
//     size: "lg",
//     delay: 0.1,
//     moveX: 25,
//     moveY: 0,
//   },
//   {
//     id: 4,
//     src: "https://img.freepik.com/free-vector/p-gradient-creative-logo-design-vector_474888-3916.jpg?semt=ais_rp_progressive&w=740&q=80",
//     alt: "Partner",
//     position: "bottom-[15%] left-[20%]",
//     size: "lg",
//     delay: 0.15,
//     moveX: 30,
//     moveY: -35,
//   },
//   {
//     id: 5,
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XBSaxe62HkBvAT6ec5p19UU8zEzQ6cIW0Q&s",
//     alt: "Latitude",
//     position: "top-[12%] right-[40%]",
//     size: "md",
//     delay: 0.05,
//     moveX: -10,
//     moveY: 38,
//   },
//   {
//     id: 6,
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbauY_njB-p9AZ4mAqh00F-EZ3fEmuBoooVg&s",
//     alt: "Fiserv",
//     position: "bottom-[10%] left-[48%]",
//     size: "lg",
//     delay: 0.1,
//     moveX: 2,
//     moveY: -40,
//   },
//   {
//     id: 7,
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWyXpY7BrHzjvTligviVPVNQ7wqxq0o5A5Q&s",
//     alt: "Waves",
//     position: "top-[35%] right-[18%]",
//     size: "md",
//     delay: 0.08,
//     moveX: -32,
//     moveY: 15,
//   },
//   {
//     id: 8,
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2CUk9EcREGYjoCQ42a27mj1SMUgBbw2zzQ&s",
//     alt: "Star",
//     position: "bottom-[18%] right-[22%]",
//     size: "lg",
//     delay: 0.12,
//     moveX: -28,
//     moveY: -32,
//   },
// ];

// const FloatingLogo = ({
//   logo,
//   progress,
// }: {
//   logo: IntegrationLogo;
//   progress: MotionValue<number>;
// }) => {
//   // এনিমেশন টাইম বাড়ানোর জন্য রেঞ্জ বড় করা হয়েছে (০.২ থেকে ০.৬)
//   const startTrigger = 0.2 + logo.delay;
//   const endTrigger = 0.6;

//   const translateX = useTransform(
//     progress,
//     [startTrigger, endTrigger],
//     ["0vw", `${logo.moveX}vw`],
//   );
//   const translateY = useTransform(
//     progress,
//     [startTrigger, endTrigger],
//     ["0vh", `${logo.moveY}vh`],
//   );
//   const scale = useTransform(progress, [startTrigger, endTrigger], [1, 0.2]);
//   const opacity = useTransform(
//     progress,
//     [startTrigger, endTrigger - 0.05, endTrigger],
//     [1, 1, 0],
//   );

//   return (
//     <motion.div
//       style={{ x: translateX, y: translateY, scale, opacity }}
//       className={`absolute bg-white rounded-2xl shadow-xl flex items-center justify-center p-3
//         ${logo.position} 
//         ${logo.size === "lg" ? "w-24 h-24" : "w-20 h-20"}`}
//     >
//       <div className="relative w-full h-full">
//         <Image
//           src={logo.src}
//           alt={logo.alt}
//           fill
//           className="object-contain p-2"
//         />
//       </div>
//     </motion.div>
//   );
// };

// const Integrations = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"], // স্টিকি ইফেক্টের জন্য অফসেট পরিবর্তন
//   });

//   // স্টিকি অবস্থায় মুভমেন্ট স্মুথ রাখার জন্য সেটিংস
//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 50, // আরও ধীরগতির এবং প্রিমিয়াম ফিল দিতে কমানো হয়েছে
//     damping: 20,
//     restDelta: 0.001,
//   });

//   // টাইমিং গুলোকে আরও ছড়িয়ে দেওয়া হয়েছে যাতে ইউজার সময় পায় দেখার
//   const contentOpacity = useTransform(smoothProgress, [0.1, 0.5], [1, 0]);
//   const contentScale = useTransform(smoothProgress, [0.1, 0.5], [1, 0.9]);

//   const finalCardOpacity = useTransform(smoothProgress, [0.6, 0.8], [0, 1]);
//   const finalCardScale = useTransform(smoothProgress, [0.6, 0.8], [0.5, 1]);

//   return (
//     /* কন্টেইনারের হাইট বাড়ানো হয়েছে যাতে ২ সেকেন্ড (বা তার বেশি) স্টিকি থাকে */
//     <div ref={containerRef} className="relative h-[220vh] bg-[#f8faff]">
//       <section className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
//         {/* Background Decor */}
//         <motion.div
//           style={{ opacity: contentOpacity }}
//           className="absolute inset-0 pointer-events-none opacity-20"
//         >
//           <svg
//             width="100%"
//             height="100%"
//             viewBox="0 0 1200 800"
//             fill="none"
//             className="w-full h-full"
//           >
//             <path
//               d="M100 200 Q 600 100 1100 200"
//               stroke="#94a3b8"
//               strokeWidth="1"
//               strokeDasharray="8 8"
//             />
//             <path
//               d="M100 600 Q 600 700 1100 600"
//               stroke="#94a3b8"
//               strokeWidth="1"
//               strokeDasharray="8 8"
//             />
//           </svg>
//         </motion.div>

//         {/* Center Content */}
//         <motion.div
//           style={{ opacity: contentOpacity, scale: contentScale }}
//           className="relative flex flex-col items-center justify-center z-20 text-center max-w-xl"
//         >
//           <h2 className="text-4xl md:text-6xl  text-[#001a41] leading-[1.15] mb-8">
//             One platform,
//             <br /> unlimited integrations
//           </h2>
//           <AnimatedButton
//             text="View all integrations"
//             onClick={() => console.log("Clicked!")}
//           />
//         </motion.div>

//         {/* Final Central Card */}
//         <motion.div
//           style={{
//             opacity: finalCardOpacity,
//             scale: finalCardScale,
//           }}
//           className="absolute z-30 flex items-center justify-center"
//         >
//           <div className="w-24 h-24 md:w-32 md:h-32 bg-[#0052ff] rounded-2xl shadow-[0_20px_50px_rgba(0,82,255,0.4)] flex items-center justify-center p-6 text-white">
//             <AlignVerticalDistributeCenter size={56} />
//           </div>
//         </motion.div>

//         {/* Floating Logos Layer */}
//         <div className="absolute inset-0 hidden lg:block pointer-events-none">
//           {integrations.map((logo) => (
//             <FloatingLogo key={logo.id} logo={logo} progress={smoothProgress} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Integrations;
// dark mood
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { AlignVerticalDistributeCenter, Zap } from "lucide-react";
import AnimatedButton from "./ui/AnimatedButton";

interface IntegrationLogo {
  id: number;
  src: string;
  alt: string;
  position: string;
  size: "sm" | "md" | "lg";
  delay: number;
  moveX: number;
  moveY: number;
}

const integrations: IntegrationLogo[] = [
  { id: 1, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRus-wnHkWv5kKT4QhByRS1z8ZQThGOiGlXrw&s", alt: "NICE", position: "top-[10%] left-[10%]", size: "lg", delay: 0, moveX: 40, moveY: 40 },
  { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJCVkJNnswA53ox7-D4UZHfz3G_zmEIpcCw&s", alt: "Energy", position: "top-[30%] left-[18%]", size: "md", delay: 0.05, moveX: 32, moveY: 20 },
  { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDkZkq0DdzmslDyv85Hf1mZNONqrEeB1FWg&s", alt: "Salesforce", position: "top-[50%] left-[25%]", size: "lg", delay: 0.1, moveX: 25, moveY: 0 },
  { id: 4, src: "https://img.freepik.com/free-vector/p-gradient-creative-logo-design-vector_474888-3916.jpg?semt=ais_rp_progressive&w=740&q=80", alt: "Partner", position: "bottom-[15%] left-[20%]", size: "lg", delay: 0.15, moveX: 30, moveY: -35 },
  { id: 5, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XBSaxe62HkBvAT6ec5p19UU8zEzQ6cIW0Q&s", alt: "Latitude", position: "top-[12%] right-[40%]", size: "md", delay: 0.05, moveX: -10, moveY: 38 },
  { id: 6, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbauY_njB-p9AZ4mAqh00F-EZ3fEmuBoooVg&s", alt: "Fiserv", position: "bottom-[10%] left-[48%]", size: "lg", delay: 0.1, moveX: 2, moveY: -40 },
  { id: 7, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWyXpY7BrHzjvTligviVPVNQ7wqxq0o5A5Q&s", alt: "Waves", position: "top-[35%] right-[18%]", size: "md", delay: 0.08, moveX: -32, moveY: 15 },
  { id: 8, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2CUk9EcREGYjoCQ42a27mj1SMUgBbw2zzQ&s", alt: "Star", position: "bottom-[18%] right-[22%]", size: "lg", delay: 0.12, moveX: -28, moveY: -32 },
];

const FloatingLogo = ({ logo, progress }: { logo: IntegrationLogo; progress: MotionValue<number>; }) => {
  const startTrigger = 0.2 + logo.delay;
  const endTrigger = 0.6;

  const translateX = useTransform(progress, [startTrigger, endTrigger], ["0vw", `${logo.moveX}vw`]);
  const translateY = useTransform(progress, [startTrigger, endTrigger], ["0vh", `${logo.moveY}vh`]);
  const scale = useTransform(progress, [startTrigger, endTrigger], [1, 0.2]);
  const opacity = useTransform(progress, [startTrigger, endTrigger - 0.05, endTrigger], [1, 1, 0]);

  return (
    <motion.div
      style={{ x: translateX, y: translateY, scale, opacity }}
      className={`z-100 absolute bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center p-3
        ${logo.position} 
        ${logo.size === "lg" ? "w-24 h-24" : "w-20 h-20"}`}
    >
      <div className="relative w-full h-full brightness-150  transition-all duration-300">
        <Image src={logo?.src} alt={logo?.alt} fill className="object-contain p-2 rounded-xl" />
      </div>
    </motion.div>
  );
};

const Integrations = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  const contentOpacity = useTransform(smoothProgress, [0.1, 0.5], [1, 0]);
  const contentScale = useTransform(smoothProgress, [0.1, 0.5], [1, 0.9]);

  const finalCardOpacity = useTransform(smoothProgress, [0.6, 0.8], [0, 1]);
  const finalCardScale = useTransform(smoothProgress, [0.6, 0.8], [0.5, 1]);

  return (
    <div ref={containerRef} id="integrations" className="relative h-[220vh] bg-black">
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        
        {/* Center Content */}
        <motion.div
          style={{ opacity: contentOpacity, scale: contentScale }}
          className="relative flex flex-col items-center justify-center z-20 text-center max-w-4xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
            <Zap className="w-3 h-3 text-white" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-white">
              Integrations
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white leading-[1.1] mb-8">
            One platform,
            <br /> <span className="text-gray-500">unlimited integrations</span>
          </h1>
          
          <AnimatedButton
            text="View all integrations"
            onClick={() => console.log("Clicked!")}
          />
        </motion.div>

        {/* Final Central Card (Glow effect for dark mode) */}
        <motion.div
          style={{ opacity: finalCardOpacity, scale: finalCardScale }}
          className="absolute z-30 flex items-center justify-center"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 bg-[#0052ff] rounded-2xl shadow-[0_0_80px_rgba(0,82,255,0.5)] flex items-center justify-center p-6 text-white">
            <AlignVerticalDistributeCenter size={56} />
          </div>
        </motion.div>

        {/* Floating Logos Layer */}
        <div className="absolute inset-0 hidden lg:block pointer-events-none">
          {integrations?.map((logo) => (
            <FloatingLogo key={logo.id} logo={logo} progress={smoothProgress} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Integrations;