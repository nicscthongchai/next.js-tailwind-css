import Title from 'src/components/Title'
import { Page } from 'src/types/page'

const IndexPage: Page = () => {
  return (
    <>
      <Title>Home</Title>
      <div className="h-screen flex flex-col justify-center items-center">
        Hello, world!
      </div>
    </>
  )
}

export default IndexPage
