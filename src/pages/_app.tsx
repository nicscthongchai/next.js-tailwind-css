import { NextComponentType } from 'next'
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import React, { useEffect } from 'react'
import Title from 'src/components/Title'
import 'tailwindcss/tailwind.css'

const NoLayout: React.FC = (props) => <>{props.children}</>

const _App: NextComponentType<
  AppContext,
  AppInitialProps,
  AppProps & { Component: { Layout: React.FC } }
> = (props) => {
  const { Component, pageProps } = props

  const Layout = Component.Layout || NoLayout

  useEffect(() => {
    if ('serviceWorker' in navigator) {
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
