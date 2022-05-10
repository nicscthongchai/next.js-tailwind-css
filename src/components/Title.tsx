import Head from 'next/head'
import pkg from 'package.json'

type TitleProps = {
  children?: string
}

const Title: React.FC<TitleProps> = ({ children = '' }) => {
  const title = [children, pkg.niceName].filter((x) => x).join(' - ')
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default Title
