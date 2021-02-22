import React, { useState } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { RootState } from 'store/reducer'
import { AppState } from 'store/app/reducer'
import Header from 'components/molecules/Header'
import NavBar from 'components/molecules/Navbar'
import Footer from 'components/molecules/Footer'

export type PageLayoutProps = {
  hideFooter: () => void
  showFooter: () => void
}

const PageLayout: React.FC<AppState> = ({ theme, children }): React.ReactElement => {
  const [displayFooter, setDisplayFooter] = useState(true)

  const hideFooter = () => {
    setDisplayFooter(false)
  }

  const showFooter = () => {
    setDisplayFooter(true)
  }

  return (
    <div className={classnames(theme, 'flex flex-col min-h-screen')}>
      <Header />
      <NavBar />
      <main className="bg-grey-50 flex-1 transition-colors dark:bg-grey-900 dark:text-grey-300">
        <div className="flex flex-col items-center max-w-5xl mx-auto">
          {React.isValidElement(children) ? React.cloneElement(children, { hideFooter, showFooter }) : children}
        </div>
      </main>
      {displayFooter && <Footer />}
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    theme: state.app.theme
  }
}

export default connect(mapStateToProps)(PageLayout)
