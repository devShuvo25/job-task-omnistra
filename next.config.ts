import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",   // allow all https domains
      },
      {
        protocol: "http",
        hostname: "**",   // allow all http domains (optional)
      },
    ],
  },
};

export default nextConfig;