import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignore warnings during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
