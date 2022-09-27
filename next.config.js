/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  i18n: {
    locales: ['fr-FR', 'en-GB'],
    defaultLocale: 'fr-FR',
  },
};

module.exports = nextConfig;
