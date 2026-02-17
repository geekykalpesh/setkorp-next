import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image Optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"], // Modern formats for better compression
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Optimized breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Icon sizes
    minimumCacheTTL: 31536000, // Cache images for 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compiler Optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Remove console logs in production
  },

  // Performance & Bundle Optimization
  reactStrictMode: true, // Enable strict mode for better performance
  poweredByHeader: false, // Remove X-Powered-By header for security

  // Experimental Features for Performance
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"], // Tree-shake large packages
    webVitalsAttribution: ["CLS", "LCP"], // Track Core Web Vitals
  },

  // Turbopack Configuration (Next.js 16+)
  turbopack: {
    // Turbopack handles most optimizations automatically
    // No custom config needed for basic optimizations
  },

  // Headers for Caching & Performance
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(woff|woff2|ttf|otf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(mp4|webm)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Resolve root directory warning
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
