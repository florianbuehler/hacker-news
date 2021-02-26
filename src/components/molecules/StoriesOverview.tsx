import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Story } from 'store/story/types'
import StoryCard from 'components/atoms/StoryCard'
import LoadingDots from 'components/atoms/LoadingDots'

type Props = {
  storyIds: number[]
  stories: any
  page: number
  hasMoreStories: boolean
  fetchStoryIds: () => void
  resetStories: () => void
  fetchStories: (storyIds: number[], page: number) => any
  isFetching: boolean
}

const StoriesOverview: React.FC<Props> = (props) => {
  useEffect(() => {
    props.resetStories()
    props.fetchStoryIds()
  }, [])

  const fetchStories = (): void => {
    const { storyIds, page, fetchStories, isFetching } = props
    if (!isFetching) {
      fetchStories(storyIds, page)
    }
  }

  const { stories, hasMoreStories } = props

  return (
    <div>
      <InfiniteScroll
        next={fetchStories}
        hasMore={hasMoreStories}
        loader={<LoadingDots className="mx-auto mt-4 mb-20" />}
        dataLength={stories.length}
      >
        <ul className="py-8">
          {stories.map(
            (story: Story): React.ReactElement =>
              story && (
                <li id={story.id.toString()} className="mb-4">
                  <StoryCard {...story} />
                </li>
              )
          )}
        </ul>
      </InfiniteScroll>
    </div>
  )
}

export default StoriesOverview
