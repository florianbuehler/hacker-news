import React from 'react'
import routes from 'routes'
import NavLink from 'components/atoms/NavLink'
import DarkModeToggle, { Props as DarkModeToggleProps } from 'components/atoms/DarkModeToggle'

const NavBar: React.FC<DarkModeToggleProps> = (props): React.ReactElement => {
  return (
    <div className="px-12 py-2 bg-grey-50 border-b-2 border-grey-200 flex justify-between items-center transition-colors dark:bg-grey-900">
      <nav>
        <ul className="flex flex-row">
          <li>
            <NavLink to={routes.stories.best}>Best</NavLink>
          </li>
          <li>
            <NavLink to={routes.stories.top}>Top</NavLink>
          </li>
          <li>
            <NavLink to={routes.stories.new}>New</NavLink>
          </li>
        </ul>
      </nav>
      <DarkModeToggle {...props} />
    </div>
  )
}

export default NavBar
