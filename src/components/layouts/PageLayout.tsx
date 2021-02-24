import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import classnames from 'classnames'
import { RootState } from 'store'
import Header from 'components/molecules/Header'
import NavBar from 'components/molecules/Navbar'
import Footer from 'components/molecules/Footer'

export type PageLayoutProps = {
  hideFooter: () => void
  showFooter: () => void
}

const mapStateToProps = (state: RootState) => {
  return {
    theme: state.app.theme,
    hideFooter: state.app.hideFooter
  }
}

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

const PageLayout: React.FC<PropsFromRedux> = ({ theme, hideFooter, children }): React.ReactElement => {
  return (
    <div className={classnames(theme, 'flex flex-col min-h-screen')}>
      <Header />
      <NavBar />
      <main className="bg-grey-50 flex-1 transition-colors dark:bg-grey-900 dark:text-grey-300">
        <div className="flex flex-col items-center max-w-5xl mx-auto">{children}</div>
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
}

export default connector(PageLayout)
