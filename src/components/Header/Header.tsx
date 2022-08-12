import React from 'react'

import styles from './styles.css'

import { NavigationLink } from 'components/NavigationLink'
import { routePaths } from 'pages/routes'

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div>
        <NavigationLink to={routePaths.home}>Logo</NavigationLink>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavigationLink to={routePaths.page1} activeClassName={styles.activeNavLink}>
              Page 1
            </NavigationLink>
          </li>
          <li>
            <NavigationLink to={routePaths.page2} activeClassName={styles.activeNavLink}>
              Page 2
            </NavigationLink>
          </li>
          <li>
            <NavigationLink to={routePaths.page3} activeClassName={styles.activeNavLink}>
              Page 3
            </NavigationLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
