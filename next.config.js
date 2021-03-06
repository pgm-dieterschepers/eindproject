/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "firebasestorage.googleapis.com",
      "image-bucket-eindproject.s3.eu-west-3.amazonaws.com",
      "herrmans.eu"
    ],
  },
}

module.exports = nextConfig
