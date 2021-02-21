import React from 'react'

type Props = {
  to: string
}

const FooterLink: React.FC<Props> = ({ to, children }): React.ReactElement => {
  return (
    <a href={to} className="py-2 duration-150 hover:text-teal-300 dark:hover:text-teal-500">
      {children}
    </a>
  )
}

export default FooterLink
