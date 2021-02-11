import React from 'react'
import { Story } from 'store/story/story'
import getSiteHosteName from 'utils/getSiteHosteName'

const getTimePassed = (time: number): string => {
  const hoursPassed = new Date().getHours() - new Date(time * 1000).getHours()

  console.log(new Date().toISOString(), new Date(time * 1000).toISOString())

  if (hoursPassed > 0) {
    return hoursPassed === 1 ? `${hoursPassed} hour` : `${hoursPassed} hours`
  } else {
    const minutesPassed = new Date().getMinutes() - new Date(time * 1000).getMinutes()
    return minutesPassed === 1 ? `${minutesPassed} minute` : `${minutesPassed} minutes`
  }
}

const StoryCard: React.FC<Story> = ({ title, url, score, by, time, ...props }): React.ReactElement => {
  const hosteName = getSiteHosteName(url)
  const timePassed = getTimePassed(time)

  return (
    <article className="flex flex-row p-4 border rounded-xl shadow border-grey-300 bg-grey-50">
      <div className="flex items-center w-8 justify-center">{score}</div>
      <div className="pl-5">
        <h3 className="text-xl">
          <a href={url} target="_blank">
            {title}
          </a>
        </h3>
        <p className="text-sm">(on {hosteName})</p>
        <p className="pt-3 text-sm">
          by {by} {timePassed} ago
        </p>
      </div>
    </article>
  )
}

export default StoryCard
