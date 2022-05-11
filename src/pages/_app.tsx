import { NextComponentType } from 'next'
import { DefaultSeo } from 'next-seo'
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import pkg from 'package.json'
import { useEffect } from 'react'
import NoLayout from 'src/components/Layouts/NoLayout'
import { Page } from 'src/types/page'
import 'tailwindcss/tailwind.css'

const _App: NextComponentType<
  AppContext,
  AppInitialProps,
  AppProps & { Component: Page }
> = (props) => {
  const { Component, pageProps } = props

  useEffect(() => {
    if (
      'serviceWorker' in navigator &&
      process.env.NEXT_PUBLIC_ENABLE_SERVICE_WORKER
    ) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js')
      })
    }
  }, [])

  const getLayout = Component.getLayout || ((page) => page)
  const Layout = Component.Layout || NoLayout
  const appWithLayout = getLayout(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

  return (
    <>
      <DefaultSeo defaultTitle={pkg.title} />
      {appWithLayout}
    </>
  )
}

export default _App
