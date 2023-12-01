/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.webidemyyy.ir",
      },
    ],
  },
};

module.exports = nextConfig;
