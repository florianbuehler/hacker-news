import React from 'react'
import classnames from 'classnames'

// styles
import classes from './styles.module.scss'

const LoadingDots: React.FC = (): React.ReactElement => {
  const basicClasses = 'bg-grey-200 w-3.5 h-3.5 rounded-full'

  return (
    <div className="flex flex-row w-28 justify-between">
      <span className={classnames(basicClasses, classes.firstDot)} />
      <span className={classnames(basicClasses, classes.secondDot)} />
      <span className={classnames(basicClasses, classes.thirdDot)} />
    </div>
  )
}

export default LoadingDots
