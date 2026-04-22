/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
      },
      {
        hostname: 'github.com',
      },
      {
        hostname: '*.vercel.app',
      },
    ],
  },
};

export default nextConfig;
