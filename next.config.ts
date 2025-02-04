import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/vi/**/hqdefault.jpg"
      },
      {
        protocol: "https",
        hostname: "pub-fdcdc3373c774f9c8c4a83d7ea14e670.r2.dev",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
