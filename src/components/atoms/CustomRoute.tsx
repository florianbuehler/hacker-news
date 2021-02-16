import React from 'react'
import { RouteProps } from 'react-router'
import { Route } from 'react-router-dom'

type Props = { adaptLayout?: () => void } & RouteProps

const CustomRoute: React.FC<Props> = ({ adaptLayout, children, ...props }): React.ReactElement => {
  adaptLayout && adaptLayout()
  return <Route {...props}>{children}</Route>
}

export default CustomRoute
