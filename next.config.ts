import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  // Allow local network access for development on mobile devices
  allowedDevOrigins: ["192.168.0.102", "192.168.0.120", "localhost:3000"],

};

export default nextConfig;
