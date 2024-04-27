/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: '*.googleusercontent.com ',
            },
            {
                protocol: 'https',
                hostname: 'photos.google.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 's3-eu-west-1.amazonaws.com',
            },
            {
                hostname: '127.0.0.1',
            },
        ],
    },
}

export default nextConfig
