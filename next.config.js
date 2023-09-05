/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "api.webidemyyy.ir",
         

          },
          {
            protocol: "http",
            hostname: "localhost",
            port:'8000'
         

          },
        ],
      },
}

module.exports = nextConfig
