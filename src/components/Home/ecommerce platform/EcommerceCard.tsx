import React from 'react';
import Image from 'next/image';

interface Platform {
  id: number;
  name: string;
  logo: string;
}

interface PlatformCardProps {
  item: Platform;
}

const EcommeercePlatformCard: React.FC<PlatformCardProps> = ({ item }) => {
  return (
    <div 
      className="flex items-center justify-between p-4 bg-[#0A0A0A] border border-white/5 rounded-xl w-full max-w-xl transition-all duration-300 hover:bg-[#111111] hover:border-white/10 group"
    >
      {/* Name Section */}
      <h2 className="pl-2 text-md font-medium text-[#9CA3AF] group-hover:text-white transition-colors">
        {item?.name}
      </h2>

      {/* Logo Container */}
      <div className="flex items-center justify-center w-12 h-12 bg-[#121212] border border-white/10 rounded-xl overflow-hidden p-2 shadow-sm">
        <div className="relative w-full h-full">
          <Image
            src={item?.logo}
            alt={`${item?.name} logo`}
            fill
            className="object-contain"
            unoptimized // Ensures original logo renders without CDN proxy issues
          />
        </div>
      </div>
    </div>
  );
};

export default EcommeercePlatformCard;