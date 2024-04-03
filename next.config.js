const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WEBSITE_BASE_URL: process.env.WEBSITE_BASE_URL,
    API_BASE_URL: process.env.API_BASE_URL,
    PROPERTY_BASE_URL: process.env.PROPERTY_BASE_URL,
    BLOG_IMAGE_BASE_URL: process.env.BLOG_IMAGE_BASE_URL,
  },
  images: {
    domains: [
      'th.bing.com',
      'res.cloudinary.com',
      'test.housepointegypt.com',
      '127.0.0.1:8000',
      'housepointegypt.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'test.housepointegypt.com',
        port: '',
        pathname: '/uploads/properties/**',
      },
      {
        protocol: 'https',
        hostname: 'housepointegypt.com',
        pathname: '/api/uploads/properties/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/api/uploads/properties/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/api/uploads/blogs/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/i,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: '/_next',
          outputPath: 'static/fonts',
          name: '[name].[ext]',
        },
      },
    });

    return config;
  },
};

module.exports = withNextIntl(nextConfig);
