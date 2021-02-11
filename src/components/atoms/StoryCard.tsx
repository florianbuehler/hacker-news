import React from 'react'
import { Story } from 'store/story/story'

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
  const timePassed = getTimePassed(time)

  return (
    <article className="flex flex-row p-4 border rounded-xl shadow border-grey-400 bg-grey-100">
      <div className="flex items-center w-8 justify-center">{score}</div>
      <div className="pl-4">
        <h3 className="text-xl">{title}</h3>
        <p>
          (<a href={url}>{url})</a>
        </p>
        <p>
          by {by} {timePassed} ago
        </p>
      </div>
    </article>
  )
}

export default StoryCard
