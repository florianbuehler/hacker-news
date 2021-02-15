import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { get } from 'lodash'
import hackerNewsApi from '../../services/hackerNewsApi'
import LoadingDots from '../atoms/LoadingDots'

const Story: React.FC = (): React.ReactElement => {
  const params = useParams()
  const storyId = get(params, 'storyId')

  const [story, setStory] = useState(null)

  useEffect(() => {
    hackerNewsApi.getStoryDetailsById(storyId).then((res) => setStory(res))
  }, [])

  return (
    <div className="bg-blue-500 flex flex-col w-full">
      <h2>story details</h2>
      <LoadingDots className="mx-auto mt-12 mb-16" />
    </div>
  )
}

export default Story
