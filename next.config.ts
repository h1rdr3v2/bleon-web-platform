import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Enable compression for production
  compress: true,
  // Optimize images
  images: {
    unoptimized: false,
  },
};

export default nextConfig;