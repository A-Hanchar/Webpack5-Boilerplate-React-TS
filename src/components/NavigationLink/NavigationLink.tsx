import cx from 'classnames'
import React, { useCallback } from 'react'

import { NavLink } from 'react-router-dom'

import { NavigationLinkProps } from './types'

export const NavigationLink = ({
  to,
  className,
  activeClassName,
  children,
}: NavigationLinkProps) => {
  const setActiveClass = useCallback<(props: { isActive: boolean }) => string | undefined>(
    ({ isActive }) => (isActive ? cx(className, activeClassName) : className),
    [className, activeClassName],
  )

  return (
    <NavLink to={to} className={setActiveClass}>
      {children}
    </NavLink>
  )
}
