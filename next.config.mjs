/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        pathname: "/**",
        protocol: "https",
        hostname: "media.graphassets.com"
      }
    ]
  }
};

export default nextConfig;
