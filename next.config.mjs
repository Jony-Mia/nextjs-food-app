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
        pathname: '/dj493l0jy/image/upload/**',
        search: '',
      },
    ],
  },
}
// https://foodsforhealth.osu.edu/sites/default/files/styles/widescreen_large/public/media/image/2025/01/adobestock_896621400.jpg

//wp-content/uploads/2021/07/thalimeal2-1-1024x1024.jpg
export default nextConfig;
