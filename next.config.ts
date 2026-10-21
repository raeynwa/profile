import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.PORTFOLIO_BUILD_DIR || '.next',
  poweredByHeader: false,
  async headers() {
    return [
      {source: '/:path*', headers: [
        {key: 'X-Content-Type-Options', value: 'nosniff'},
        {key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin'},
        {key: 'X-Frame-Options', value: 'DENY'},
      ]},
      {source: '/cv/CV_Raey_Maulana_Yunus_2026.pdf', headers: [{key: 'Content-Disposition', value: 'attachment; filename="CV_Raey_Maulana_Yunus_2026.pdf"'}]},
    ];
  },
};

export default nextConfig;
