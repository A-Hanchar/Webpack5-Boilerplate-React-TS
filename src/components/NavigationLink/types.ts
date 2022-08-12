import { NavLinkProps } from 'react-router-dom'

export type NavigationLinkProps = Omit<NavLinkProps, 'className'> & {
  className?: string
  activeClassName?: string
}
