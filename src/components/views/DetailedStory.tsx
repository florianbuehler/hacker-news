import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { get } from 'lodash'
import hackerNewsApi from '../../services/hackerNewsApi'
import LoadingDots from '../atoms/LoadingDots'
import { Story } from './types'

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

  return (
    <div className="">
      <h2>story details</h2>
    </div>
  )
}

export default DetailedStory
