import React from 'react'
import classnames from 'classnames'

// styles
import classes from './styles.module.scss'

type Props = {
  className?: string
}

const LoadingDots: React.FC<Props> = ({ className }): React.ReactElement => {
  const basicClasses = 'bg-grey-200 w-3.5 h-3.5 rounded-full'

  return (
    <div className={classnames('flex flex-row w-28 justify-between', className)}>
      <span className={classnames(basicClasses, classes.firstDot)} />
      <span className={classnames(basicClasses, classes.secondDot)} />
      <span className={classnames(basicClasses, classes.thirdDot)} />
    </div>
  )
}

export default LoadingDots
