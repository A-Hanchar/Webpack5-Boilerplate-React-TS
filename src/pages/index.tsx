import React from 'react'

import { Home } from './Home'
import { Page1 } from './Page1'
import { Page2 } from './Page2'
import { Page3 } from './Page3'
import { notFoundPath, routePaths } from './routes'

import { Page } from 'components/Page'

export type PageConfig = {
  children?: PageConfig[]
  element?: React.ReactNode
  index?: boolean
  path?: string
  key: string
}

export const pagesConfig: PageConfig[] = [
  {
    path: routePaths.home,
    element: <Page />,
    key: 'layout',
    children: [
      {
        element: <Home />,
        index: true,
        key: 'home',
      },
      {
        path: routePaths.page1,
        element: <Page1 />,
        key: 'movies',
      },
      {
        path: routePaths.page2,
        element: <Page2 />,
        key: 'tv',
      },
      {
        path: routePaths.page3,
        element: <Page3 />,
        key: 'actors',
      },
    ],
  },
  {
    path: notFoundPath,
    element: <>Not Found</>,
    key: 'notFound',
  },
]
