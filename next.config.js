const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    reactRemoveProperties: isProd
      ? { properties: ["^data-testid"] }
      : undefined,
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["tsx"],
  publicRuntimeConfig: {
    appTitle: "My app title",
    apiBaseURL: process.env.NEXT_API_BASE_URL,
  },
};

module.exports = nextConfig;
