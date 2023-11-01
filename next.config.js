/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "media.graphassets.com",
      },
    ],
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  mode: "production",
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA(nextConfig);
