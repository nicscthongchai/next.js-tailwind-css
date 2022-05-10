import Meta from 'src/components/Meta'
import { Page } from 'src/types/page'

const IndexPage: Page = () => {
  return (
    <>
      <Meta title="Home" description="A home page description" />
      <div className="h-screen flex flex-col justify-center items-center">
        Hello, world!
      </div>
    </>
  )
}

export default IndexPage
