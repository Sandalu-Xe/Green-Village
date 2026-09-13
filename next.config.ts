import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  images: { unoptimized: true },
  // Limit build concurrency on laptops. The deployed site has no Node server.
  experimental: { cpus: 2 },
  turbopack: { root: process.cwd() },
};

export default nextConfig;
