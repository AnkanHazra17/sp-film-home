/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.surfacepro.com.tw",
      },
      {
        protocol: "https",
        hostname: "surfacepro.com.tw",
      },
    ],
  },
};

export default nextConfig;
