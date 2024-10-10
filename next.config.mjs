import { withPigment } from '@pigment-css/nextjs-plugin';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compiler: {
    emotion: true,
  },
  compress: true,
  swcMinify: true,
  poweredByHeader: false,
  experimental: {
    scrollRestoration: true,
  },
  staticPageGenerationTimeout: 120,
};

/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig = {
  // transformLibraries: ['@mui/material'],
};

export default withPigment(withNextIntl(nextConfig), pigmentConfig);
