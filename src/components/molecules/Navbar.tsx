import React from 'react'
import routes from 'routes'
import NavLink from 'components/atoms/NavLink'

const NavBar: React.FC = (): React.ReactElement => {
  return (
    <div className="px-12 py-2 bg-grey-50 border-b-2 border-grey-200 flex justify-between dark:bg-grey-900">
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
      <div className="w-10 h-6 flex items-center bg-gray-300 rounded-full p-1">
        <div className="bg-white w-4 h-4 rounded-full shadow-md" />
      </div>
    </div>
  )
}

export default NavBar
