/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML 내보내기를 위한 설정
  images: {
    unoptimized: true,
  },
  basePath: '/my_resume',
  assetPrefix: '/my_resume/',
};

module.exports = nextConfig;
