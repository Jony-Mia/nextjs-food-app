/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'foodsforhealth.osu.edu',
        port: '',
        pathname: '/sites/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'www.pngall.com',
        port: '',
        pathname: '/wp-content/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
}

export default nextConfig;