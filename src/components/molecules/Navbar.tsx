import React from 'react'
import classnames from 'classnames'
import routes from 'routes'
import NavLink from 'components/atoms/NavLink'

type Props = {
  isDarkMode: boolean
  toggleDarkMode: (isDarkMode: boolean) => void
}

const NavBar: React.FC<Props> = ({ isDarkMode, toggleDarkMode }): React.ReactElement => {
  const toggleClasses = classnames('bg-white w-4 h-4 rounded-full shadow-md', isDarkMode ? 'ml-auto' : 'mr-auto')

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
      <div
        className="w-10 h-6 flex items-center bg-gray-300 rounded-full p-1"
        onClick={() => toggleDarkMode(!isDarkMode)}
      >
        <div className={toggleClasses} />
      </div>
    </div>
  )
}

export default NavBar
