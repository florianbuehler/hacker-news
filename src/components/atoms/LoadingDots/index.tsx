import React from 'react'
import classnames from 'classnames'

// styles
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import './styles.css'

const LoadingDots: React.FC = (): React.ReactElement => {
  const basicClasses = 'bg-grey-500 w-3.5 h-3.5 rounded-full'

  return (
    <div className="flex flex-row w-28 justify-between">
      <span className={classnames(basicClasses, 'firstDot')} />
      <span className={classnames(basicClasses, 'secondDot')} />
      <span className={classnames(basicClasses, 'thirdDot')} />
    </div>
  )
}

export default LoadingDots
