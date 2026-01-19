/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'english.nepalnews.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
