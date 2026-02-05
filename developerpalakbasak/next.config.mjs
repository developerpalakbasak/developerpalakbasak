/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
