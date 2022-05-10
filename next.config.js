// @ts-check

const { PHASE_PRODUCTION_BUILD } = require('next/constants')

/** @type {import('next').NextConfig} */
const nextConfig = (...params) => {
  const [phase] = params
  // process.stdout.moveCursor(0, -1)
  // process.stdout.clearLine(1)
  return {
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
      if (phase !== PHASE_PRODUCTION_BUILD) {
        const maxLength = Math.max(...rewrites.map((rw) => rw.source.length))
        for (const rewrite of rewrites) {
          const source = rewrite.source.padEnd(maxLength)
          console.log(`info  - rewrite ${source}  ->  ${rewrite.destination}`)
        }
      }
      return rewrites
    },
  }
}

module.exports = nextConfig
