import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignore ESLint during builds - only show errors, not warnings
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Show TypeScript errors but not warnings
    ignoreBuildErrors: false,
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Suppress webpack warnings during build
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      // Suppress warnings in production builds
      config.stats = 'errors-only';
    }
    return config;
  },
};

export default nextConfig;
