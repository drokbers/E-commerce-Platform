/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.figma.com",
      },
      {
        protocol: "https",
        hostname: "**.imgur.com",
      },
      {
        protocol: "https",
        hostname: "**.hizliresim.com",
      },
      {
        protocol: "https",
        hostname: "**.farfetch-contents.com",
      },
    ],
  },
};

module.exports = nextConfig;
