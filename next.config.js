/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? "https://purplelow.github.io/jscreation" : ""
}

module.exports = nextConfig
