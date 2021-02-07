import React from 'react'
import Header from 'components/molecules/Header'
import NavBar from 'components/molecules/Navbar'

const PageLayout: React.FC = ({ children }): React.ReactElement => {
  return (
    <>
      <Header />
      <NavBar />
      <main className="max-w-5xl mx-auto bg-blue-500">{children}</main>
    </>
  )
}

export default PageLayout
