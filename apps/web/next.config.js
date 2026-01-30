/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@shakers/shared'],
  output: 'standalone',
};

module.exports = nextConfig;
