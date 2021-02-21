import React from 'react'

type Props = {
  title?: string
}

const LinkContainerLayout: React.FC<Props> = ({ title, children }): React.ReactElement => {
  return (
    <div className="flex flex-col px-4 font-semibold">
      {title && <span className="mb-2 text-teal-300 dark:text-teal-500">{title}</span>}
      {children}
    </div>
  )
}

export default LinkContainerLayout
