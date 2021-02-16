import React, { useState } from 'react'
import classnames from 'classnames'
import Header from 'components/molecules/Header'
import NavBar from 'components/molecules/Navbar'

export type PageLayoutProps = {
  hideFooter: () => void
  showFooter: () => void
}

const PageLayout: React.FC = ({ children }): React.ReactElement => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [displayFooter, setDisplayFooter] = useState(true)

  const hideFooter = () => {
    setDisplayFooter(false)
  }

  const showFooter = () => {
    setDisplayFooter(true)
  }

  return (
    <div className={classnames(isDarkMode ? 'dark' : '', 'flex flex-col min-h-screen')}>
      <Header />
      <NavBar isDarkMode={isDarkMode} toggleDarkMode={setIsDarkMode} />
      <main className="bg-grey-50 flex-1 transition-colors dark:bg-grey-900">
        <div className="flex flex-col items-center max-w-5xl mx-auto">
          {React.isValidElement(children) ? React.cloneElement(children, { hideFooter, showFooter }) : children}
        </div>
      </main>
      {displayFooter && <footer>some footer content</footer>}
    </div>
  )
}

export default PageLayout
