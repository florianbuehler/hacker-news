import React from 'react'
import { Story } from 'store/story/story'

const StoryCard: React.FC<Story> = ({ title, url, score, by, ...props }): React.ReactElement => {
  return (
    <article className="flex flex-row p-4 border-2 rounded-xl shadow border-grey-400 bg-grey-100">
      <div className="flex items-center w-8 justify-center">{score}</div>
      <div className="pl-4">
        <h3 className="text-xl">{title}</h3>
        <p>
          (<a href={url}>{url})</a>
        </p>
        <p>by {by}</p>
      </div>
    </article>
  )
}

export default StoryCard
