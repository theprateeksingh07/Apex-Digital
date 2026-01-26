/* @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/apex-digital",
  assetPrefix: "/apex-digital/",

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
