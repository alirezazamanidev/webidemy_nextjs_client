/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.webideemyyy.ir"
        
      },
    ],
  },
};

module.exports = nextConfig;
