import { NextComponentType } from 'next'
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import React, { useEffect } from 'react'
import NoLayout from 'src/components/Layouts/NoLayout'
import Title from 'src/components/Title'
import { Page } from 'src/types/page'
import 'tailwindcss/tailwind.css'

const _App: NextComponentType<
  AppContext,
  AppInitialProps,
  AppProps & { Component: Page }
> = (props) => {
  const { Component, pageProps } = props

  const Layout = Component.Layout || NoLayout

  useEffect(() => {
    if (
      'serviceWorker' in navigator &&
      process.env.NEXT_PUBLIC_USE_SERVICE_WORKER
    ) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js')
      })
    }
  }, [])

  return (
    <>
      <Layout>
        <Title />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default _App
