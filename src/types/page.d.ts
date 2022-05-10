import { NextPage } from 'next'
import React, { ReactNode } from 'react'

export type Page<Props = {}, InitialProps = Props> = NextPage<
  Props,
  InitialProps
> & { Layout?: React.FC<{ children: ReactNode }> }
