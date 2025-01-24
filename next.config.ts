import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'img.youtube.com',
            port: '',
            pathname: '/vi/**/hqdefault.jpg',
        },
    ],
},
};

export default nextConfig;
