import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Turbopack scoped to this repository when another lockfile exists in
  // a parent folder. Vercel also uses this directory as the project root.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
