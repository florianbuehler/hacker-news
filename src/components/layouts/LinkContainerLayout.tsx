import React from 'react'

const LinkContainerLayout: React.FC = ({ children }): React.ReactElement => {
  return <div className="flex flex-col px-4">{children}</div>
}

export default LinkContainerLayout
