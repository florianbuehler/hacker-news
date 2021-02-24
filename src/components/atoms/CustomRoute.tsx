import React from 'react'
import { RouteProps } from 'react-router'
import { Route } from 'react-router-dom'
import { RootDispatch } from 'store'
import actions from 'store/app/actions'
import { connect, ConnectedProps } from 'react-redux'

const mapDispatchToProps = (dispatch: RootDispatch) => {
  return {
    setHideFooter: (hideFooter: boolean) => dispatch(actions.setHideFooter(hideFooter))
  }
}

const connector = connect(null, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux &
  RouteProps & {
    hideFooter?: boolean
  }

const CustomRoute: React.FC<Props> = ({ setHideFooter, hideFooter, children, ...props }): React.ReactElement => {
  setHideFooter(hideFooter ?? false)

  return <Route {...props}>{children}</Route>
}

export default connector(CustomRoute)
