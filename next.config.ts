import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // WordPress URLs end with a slash (/agency/); keep them identical for SEO.
  trailingSlash: true,
  images: {
    // Required since Next.js 16: the only quality the optimizer will produce.
    qualities: [75],
  },
  sassOptions: {
    // The theme SCSS still uses @import and global color functions; hide the Sass deprecation noise.
    silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'slash-div'],
  },
  async redirects() {
    return [
      // Old WordPress endpoints that should not 404.
      { source: '/wp-sitemap.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/feed/', destination: '/journal/', permanent: true },
    ];
  },
};

export default nextConfig;
