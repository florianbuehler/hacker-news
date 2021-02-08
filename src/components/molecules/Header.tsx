import React from 'react'
import { Link } from 'react-router-dom'
import routes from 'routes'

const Header: React.FC = (): React.ReactElement => {
  return (
    <header className="px-12 py-12 bg-grey-800 flex">
      <Link to={routes.home}>
        <h1 className="text-5xl">Hacker News</h1>
      </Link>
    </header>
  )
}

export default Header
