// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  rewrites: async () => {
    /** @type {import('next/dist/lib/load-custom-routes').Rewrite[]} */
    const rewrites = [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
    if (process.env.APOLLO_URI) {
      rewrites.push({
        source: '/api',
        destination: process.env.APOLLO_URI,
      })
    }
    const maxLength = Math.max(...rewrites.map((rw) => rw.source.length))
    for (const rewrite of rewrites) {
      const source = rewrite.source.padEnd(maxLength)
      console.log(`rewrite - ${source}  ->  ${rewrite.destination}`)
    }
    return rewrites
  },
}

module.exports = nextConfig
