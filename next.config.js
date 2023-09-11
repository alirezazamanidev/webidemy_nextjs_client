/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.webidemyyy.ir",
        
      },
    ],
  },
};

module.exports = nextConfig;
