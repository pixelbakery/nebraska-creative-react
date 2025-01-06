/** @type {import('next').NextConfig} */

const React = require('react')
const { withPlausibleProxy } = require('next-plausible')

const nextConfig = {
  images: {
    formats: ['image/webp'],
    domains: [],
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = withPlausibleProxy({
  customDomain: 'https://analytics.jordy.world',
})(nextConfig)
