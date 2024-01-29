/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d5ibtax54de3q.cloudfront.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.nike.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.adidas.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.adidas.co.id",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.asics.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "nb.scene7.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.puma.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.vans.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
