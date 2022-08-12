import React, { useCallback } from 'react'

import '@fontsource/nunito-sans/200.css'
import '@fontsource/nunito-sans/300.css'
import '@fontsource/nunito-sans/400.css'
import '@fontsource/nunito-sans/600.css'
import '@fontsource/nunito-sans/700.css'
import '@fontsource/nunito-sans/800.css'
import '@fontsource/nunito-sans/900.css'
import 'atoms/Core'

import 'modern-normalize'

import { createRoot } from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { PageConfig, pagesConfig } from 'pages'

export const AppEntrie = () => {
  const getPageRouter = useCallback(({ children, ...routeProps }: PageConfig) => {
    if (!children || !children.length) {
      return <Route {...routeProps} />
    }

    return <Route {...routeProps}>{children.map(config => getPageRouter(config))}</Route>
  }, [])

  return (
    <BrowserRouter>
      <Routes>{pagesConfig.map(routeConfig => getPageRouter(routeConfig))}</Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(<AppEntrie />)
