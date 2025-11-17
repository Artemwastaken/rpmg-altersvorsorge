/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All images are served locally from /public
    // If you need to allow remote images, add specific domains here
    remotePatterns: [],
  },
}

module.exports = nextConfig