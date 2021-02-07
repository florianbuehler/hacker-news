import React from 'react'
import Header from 'components/atoms/Header'

const PageLayout: React.FC = ({ children }): React.ReactElement => {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto bg-blue-500">{children}</main>
    </>
  )
}

export default PageLayout
