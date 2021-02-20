import React from 'react'
import { Link } from 'react-router-dom'
import routes from 'routes'
import { reverse } from 'named-urls'
import { Story } from 'store/story/story'
import { ReactComponent as Arrow } from 'assets/icons/arrow_forward_ios-black-18dp.svg'
import { getHostName, getOrigin } from 'utils/urlUtils'

const getTimePassed = (time: number): string => {
  const hoursPassed = new Date().getHours() - new Date(time * 1000).getHours()

  if (hoursPassed > 0) {
    return hoursPassed === 1 ? `${hoursPassed} hour` : `${hoursPassed} hours`
  } else {
    const minutesPassed = new Date().getMinutes() - new Date(time * 1000).getMinutes()
    return minutesPassed === 1 ? `${minutesPassed} minute` : `${minutesPassed} minutes`
  }
}

const StoryCard: React.FC<Story> = ({ title, url, score, by, time, ...props }): React.ReactElement => {
  const hostName = getHostName(url)
  const origin = getOrigin(url)
  const timePassed = getTimePassed(time)

  return (
    <article className="flex flex-row p-4 border rounded-xl shadow border-grey-300 bg-grey-50">
      <div className="flex items-center w-8 justify-center">{score}</div>
      <div className="pl-5">
        <h3 className="text-xl transition-colors duration-200 hover:text-teal-500">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p className="text-sm">
          (on{' '}
          <a href={origin} target="_blank" rel="noopener noreferrer">
            {hostName}
          </a>
          )
        </p>
        <p className="pt-3 text-sm">
          by {by} {timePassed} ago
        </p>
      </div>
      <div className="ml-auto flex justify-center items-center">
        <Link to={reverse(routes.stories.details.show, { storyId: props.id })}>
          <Arrow className="text-grey-600 transition-colors duration-200 fill-current object-cover h-6 w-auto hover:text-teal-500" />
        </Link>
      </div>
    </article>
  )
}

export default StoryCard
