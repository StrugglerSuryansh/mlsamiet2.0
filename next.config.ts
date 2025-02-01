import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com',"plus.unsplash.com"], // Add this line
  },
  /* config options here */
  eslint:{
    ignoreDuringBuilds:true
  }
};

export default nextConfig;
