/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "webidemyyy.ir",
      },
    ],
  },
};

module.exports = nextConfig;
