/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  transpilePackages: ['@repo/schemas', '@repo/types']
};

export default nextConfig;
