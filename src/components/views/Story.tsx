import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from 'lodash'
import hackerNewsApi from '../../services/hackerNewsApi'
import LoadingDots from '../atoms/LoadingDots'

const Story: React.FC = (): React.ReactElement => {
  const params = useParams()
  const storyId = get(params, 'storyId')

  //hackerNewsApi.getStoryDetailsById(storyId).then()

  return (
    <div>
      <h2>story details</h2>
      <LoadingDots />
    </div>
  )
}

export default Story
