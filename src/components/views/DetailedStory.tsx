import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { get } from 'lodash'
import hackerNewsApi from 'services/hackerNewsApi'
import LoadingDots from 'components/atoms/LoadingDots'
import Comment from 'components/atoms/Comment'
import { Story } from './types'
import { getDate } from 'utils/dateUtils'

const DetailedStory: React.FC = (): React.ReactElement => {
  const params = useParams()
  const storyId = get(params, 'storyId')

  const [story, setStory] = useState<Story | null>(null)

  useEffect(() => {
    hackerNewsApi.getStoryDetailsById(storyId).then((res) => setStory(res))
  }, [])

  console.log('The state is:', story)

  if (!story) {
    return <LoadingDots className="mx-auto mt-12 mb-16" />
  }

  const date = getDate(story.created_at_i)

  return (
    <article className="flex flex-col items-center mt-14 mb-20 w-full">
      <h2 className="text-3xl font-bold text-center transition-colors duration-200 hover:text-teal-500">
        <a href={story.url}>{story.title}</a>
      </h2>
      <span className="mt-4 text-lg">
        posted by {story.author} on <time dateTime={story.created_at}>{date}</time>
      </span>
      <section className="flex flex-col items-start w-full mt-12">
        <h3 className="text-xl">Comments:</h3>
        <ul>
          {story.children.map((comment) => {
            return (
              <li key={comment.id} className="mb-4">
                <Comment comment={comment} />
              </li>
            )
          })}
        </ul>
      </section>
    </article>
  )
}

export default DetailedStory
