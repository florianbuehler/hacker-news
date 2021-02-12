import React from 'react'
import { useParams } from 'react-router-dom'
import { get } from 'lodash'

const Story: React.FC = (): React.ReactElement => {
  const params = useParams()
  const storyId = get(params, 'storyId')

  console.log('story id is', storyId)

  return <h2>story details</h2>
}

export default Story
