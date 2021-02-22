import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { RootState } from 'store/reducer'
import { AppState, Theme } from 'store/app/reducer'
import actions from 'store/app/actions'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ThemeToggle: React.FC<AppState> = ({ theme, setTheme }): React.ReactElement => {
  const toggleTheme = (theme: Theme) => {
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

const mapStateToProps = (state: RootState) => {
  return {
    theme: state.app.theme
  }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const mapDispatchToProps = (dispatch) => {
  return {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setTheme: (payload) => dispatch(actions.setTheme(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggle)
