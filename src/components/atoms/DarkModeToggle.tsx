import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import actions from 'store/app/actions'

export type Props = {
  theme: 'light' | 'dark'
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  setTheme: (payload) => void
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ThemeToggle: React.FC = ({ theme, setTheme }): React.ReactElement => {
  const toggleTheme = (theme: 'light' | 'dark') => {
    if (theme === 'light') {
      setTheme({ theme: 'dark' })
    } else {
      setTheme({ theme: 'light' })
    }
  }

  const toggleClasses = classnames('bg-white w-4 h-4 rounded-full shadow-md', theme === 'light' ? 'ml-auto' : 'mr-auto')

  return (
    <div
      className="w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 dark:bg-teal-600"
      onClick={() => toggleTheme(theme)}
    >
      <div className={toggleClasses} />
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const mapStateToProps = (state) => {
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
