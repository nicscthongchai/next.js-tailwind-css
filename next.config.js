// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  rewrites: async () => {
    /** @type {import('next/dist/lib/load-custom-routes').Rewrite[]} */
    const rewrites = [
      {
        source: '/api',
        destination: process.env.APOLLO_URI,
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
    const maxLength = Math.max(...rewrites.map((rw) => rw.source.length))
    for (const rewrite of rewrites) {
      const source = rewrite.source.padEnd(maxLength)
      console.log(`rewrite - ${source}  ->  ${rewrite.destination}`)
    }
    return rewrites
  },
}

module.exports = nextConfig
