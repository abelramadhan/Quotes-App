/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => [{
        source: '/quote',
        destination: 'https://api.kanye.rest/'
    }]
}

module.exports = nextConfig