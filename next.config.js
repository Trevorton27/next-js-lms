/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add any external image domains you'll use
    remotePatterns: [], // Add any remote image patterns you'll use
  },
  // Enable static optimization for images
  images: {
    unoptimized: false,
  },
  // Enable React strict mode
  reactStrictMode: true,
  // Enable experimental features if needed
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig 