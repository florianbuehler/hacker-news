import React from 'react'
import classnames from 'classnames'
import Header from 'components/molecules/Header'
import NavBar from 'components/molecules/Navbar'

const PageLayout: React.FC = ({ children }): React.ReactElement => {
  const darkMode = false

  return (
    <div className={classnames(darkMode ? 'dark' : '', 'flex flex-col min-h-screen')}>
      <Header />
      <NavBar />
      <main className="bg-grey-50 flex-1 dark:bg-grey-900">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>
    </div>
  )
}

export default PageLayout
