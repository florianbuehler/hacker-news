import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  to: string
}

const CustomNavLink: React.FC<Props> = ({ to, children }): React.ReactElement => {
  return (
    <NavLink to={to} className="px-2 py-1 bg-blue-100" activeClassName="bg-blue-200">
      {children}
    </NavLink>
  )
}

export default CustomNavLink
