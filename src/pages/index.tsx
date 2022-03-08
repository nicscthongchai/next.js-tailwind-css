import { Page } from 'src/types/page'
import nextConfig from 'next/config'

const { publicRuntimeConfig } = nextConfig()

const IndexPage: Page = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>Hello, world!</div>
      <div>{JSON.stringify(publicRuntimeConfig)}</div>
    </div>
  )
}

export default IndexPage
