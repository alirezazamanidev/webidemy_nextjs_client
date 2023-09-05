/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "api.webidemyyy.ir",
            port: '',
            pathname: '',

          },
        ],
      },
}

module.exports = nextConfig
