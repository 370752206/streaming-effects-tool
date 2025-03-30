import webpack from "next/dist/compiled/webpack/webpack-lib.js";
import crypto from "crypto-browserify";
import stream from "stream-browserify";
import buffer from "buffer";

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
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: crypto.resolve ? crypto.resolve : false,
        stream: stream.resolve ? stream.resolve : false,
        buffer: buffer.resolve ? buffer.resolve : false,
        fs: false,
        http: false,
        https: false,
      };

      config.plugins.push(
        new webpack.ProvidePlugin({
          process: "process/browser",
          Buffer: ["buffer", "Buffer"],
        })
      );
    }
    return config;
  },
};

export default nextConfig;
