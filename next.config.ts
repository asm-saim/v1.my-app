import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // https://images.unsplash.com/photo-1789167871825-dbfb0745c067
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
