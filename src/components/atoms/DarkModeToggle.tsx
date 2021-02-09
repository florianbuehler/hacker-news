import React from 'react'
import classnames from 'classnames'

export type Props = {
  isDarkMode: boolean
  toggleDarkMode: (isDarkMode: boolean) => void
}

const DarkModeToggle: React.FC<Props> = ({ isDarkMode, toggleDarkMode }): React.ReactElement => {
  const toggleClasses = classnames('bg-white w-4 h-4 rounded-full shadow-md', isDarkMode ? 'ml-auto' : 'mr-auto')

  return (
    <div
      className="w-10 h-6 flex items-center bg-gray-300 rounded-full p-1"
      onClick={() => toggleDarkMode(!isDarkMode)}
    >
      <div className={toggleClasses} />
    </div>
  )
}

export default DarkModeToggle
