/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
      },
      {
        hostname: 'directus-production-e132.up.railway.app',
        protocol: 'https',
      },
    ],
  },
};

module.exports = nextConfig;
