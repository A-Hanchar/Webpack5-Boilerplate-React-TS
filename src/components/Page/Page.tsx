import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './styles.css'

import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header'

export const Page = () => (
  <div className={styles.root}>
    <Header />

    <main>
      <div className={styles.container}>
        <Outlet />
      </div>
    </main>

    <Footer />
  </div>
)
