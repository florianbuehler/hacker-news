import React from 'react'
import routes from 'routes'
import NavLink from 'components/atoms/NavLink'

const NavBar: React.FC = (): React.ReactElement => {
  return (
    <div className="px-12">
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
    </div>
  )
}

export default NavBar
