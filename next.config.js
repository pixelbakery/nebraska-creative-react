/** @type {import('next').NextConfig} */

const React = require("react");

const nextConfig = {
  images: {
    formats: ["image/webp"],
    domains: [],
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
