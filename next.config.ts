import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static Export for Production */
  output: 'export',
  
  /* Trailing Slash Configuration - Prevent trailing slashes in URLs */
  trailingSlash: false,
  
  /* React Compiler */
  reactCompiler: true,

  /* Compression */
  compress: true,

  /* Image Optimization - Disabled for static export */
  images: {
    unoptimized: true,
  },

  /* 
   * NOTE: redirects() and headers() are NOT supported with static export (output: 'export')
   * Configure redirects and headers in your web server configuration (Apache, Nginx, etc.)
   */

  /* Power Page Speed */
  poweredByHeader: false,
  
  /* Generate ETags for better caching */
  generateEtags: true,
  
  /* Production source maps for debugging (can disable in production) */
  productionBrowserSourceMaps: false,

};

export default nextConfig;
