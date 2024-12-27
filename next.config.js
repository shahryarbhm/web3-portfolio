/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
    domains: [
      'assets.poap.xyz',
      // ... any other domains you're using
    ],
  },
}

module.exports = nextConfig 