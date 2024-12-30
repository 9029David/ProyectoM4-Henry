import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'webonline.macstore.mx',
        port: '',
      }
    ]
  },
};

export default nextConfig;
