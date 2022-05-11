import { NextPage } from 'next'
import React, { ReactElement, ReactNode } from 'react'

export type Page<Props = {}, InitialProps = Props> = NextPage<
  Props,
  InitialProps
> & {
  Layout?: React.FC<{ children: ReactNode }>
  getLayout?: (page: ReactElement) => ReactElement<any, any>
}
