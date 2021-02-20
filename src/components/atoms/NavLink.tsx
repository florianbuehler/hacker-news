import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  to: string
}

const CustomNavLink: React.FC<Props> = ({ to, children }): React.ReactElement => {
  return (
    <NavLink
      to={to}
      className="mx-3 px-2 py-1 block font-bold duration-200 hover:text-teal-500 dark:text-grey-100 dark:hover:text-teal-400"
      activeClassName="text-teal-500 dark:text-teal-400"
    >
      {children}
    </NavLink>
  )
}

export default CustomNavLink
