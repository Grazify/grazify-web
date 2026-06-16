/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    /* Serve modern formats (AVIF first, then WebP) — much smaller than PNG. */
    formats: ["image/avif", "image/webp"],
    /* Cache optimized images for a year (they're content-hashed assets). */
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
