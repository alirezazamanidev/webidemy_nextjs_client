/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.webidemyyy.ir",
      },
    ],
  },
};

module.exports = nextConfig;
