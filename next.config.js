const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            // pathname: '/ZorbaBuda/text-blogposts/main/images/**',
            pathname: '/gitdagray/test-blogposts/main/images/**',
          },
        ],
      },
}

module.exports = withContentlayer(nextConfig)
