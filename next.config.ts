import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  // Allow local network access for development on mobile devices
  allowedDevOrigins: ["192.168.0.102", "192.168.0.120", "localhost:3000"],
  images: {
    // Allow quality 75 (default), 90, and 95 used across the site
    qualities: [75, 90, 95],
  },
};

export default nextConfig;
