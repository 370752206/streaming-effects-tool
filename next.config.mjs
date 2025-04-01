/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      buffer: "buffer",
      fs: false,
      http: false,
      https: false,
      querystring: require.resolve("querystring-es3"),
      os: require.resolve("os-browserify/browser"),
    };

    return config;
  },
};

export default nextConfig;
