import { NextSeo, NextSeoProps } from 'next-seo'
import pkg from 'package.json'

type MetaProps = NextSeoProps

const Meta: React.FC<MetaProps> = (props) => {
  return <NextSeo titleTemplate={`%s - ${pkg.title}`} {...props} />
}

export default Meta
