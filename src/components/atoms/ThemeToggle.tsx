import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import classnames from 'classnames'
import { RootState, RootDispatch } from 'store'
import { Theme, Colors } from 'store/app/types'
import actions from 'store/app/actions'

const mapStateToProps = (state: RootState) => {
  return {
    theme: state.app.theme
  }
}

const mapDispatchToProps = (dispatch: RootDispatch) => {
  return {
    setTheme: (payload: Theme) => dispatch(actions.setTheme(payload))
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

const ThemeToggle: React.FC<PropsFromRedux> = ({ theme, setTheme }): React.ReactElement => {
  const toggleTheme = (theme: Colors) => {
    if (theme === 'light') {
      setTheme({ theme: 'dark' })
    } else {
      setTheme({ theme: 'light' })
    }
  }

  const toggleClasses = classnames('bg-white w-4 h-4 rounded-full shadow-md', theme === 'dark' ? 'ml-auto' : 'mr-auto')

  return (
    <div
      className="w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 dark:bg-teal-600"
      onClick={() => toggleTheme(theme)}
    >
      <div className={toggleClasses} />
    </div>
  )
}

export default connector(ThemeToggle)
