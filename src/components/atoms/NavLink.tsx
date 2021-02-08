import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  to: string
}

const CustomNavLink: React.FC<Props> = ({ to, children }): React.ReactElement => {
  return (
    <NavLink to={to} className="mx-3 px-2 py-1 block " activeClassName="bg-grey-200">
      {children}
    </NavLink>
  )
}

export default CustomNavLink
