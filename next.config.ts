import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD

  /* config options here */
images: {
    domains: ["images.unsplash.com"],
  },
=======
  images: {
    domains: ['images.unsplash.com',"plus.unsplash.com"], // Add this line
  },
  /* config options here */
  eslint:{
    ignoreDuringBuilds:true
  }
>>>>>>> e047f6419dd7cac3aa47736c1172a3ba74e725c6
};

export default nextConfig;
