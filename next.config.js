/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: {
      protocol: "https",
      hostname: "api.webidemy.ir",
    },
  },
};

module.exports = nextConfig;
