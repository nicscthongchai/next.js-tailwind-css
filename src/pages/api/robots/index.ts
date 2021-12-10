import { readFileSync } from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import { join } from 'path'

let robots: string

const robotsApi = (_: NextApiRequest, res: NextApiResponse) => {
  if (process.env.ENABLE_ROBOTS) {
    res.setHeader('Content-Type', 'text/plain')
    if (!robots) {
      robots = readFileSync(
        join(process.cwd(), 'src/static/robots.txt'),
        'utf8'
      )
    }
    res.status(200).send(robots)
  } else {
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send('User-agent: *\nDisallow: /')
  }
}

export default robotsApi
