/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "etaaviacion.com" },
    ],
  },
};

export default nextConfig;
