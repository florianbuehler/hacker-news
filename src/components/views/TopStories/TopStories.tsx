import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Story } from 'store/story/story'
import StoryCard from 'components/atoms/StoryCard'

type Props = {
  storyIds: number[]
  stories: any
  page: number
  hasMoreStories: boolean
  fetchStoriesFirstPage: () => void
  fetchStories: (storyIds: number[], page: number) => any
  isFetching: boolean
}

const TopStories: React.FC<Props> = (props) => {
  useEffect(() => {
    props.fetchStoriesFirstPage()
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
        loader={<h3>loading...</h3>}
        dataLength={stories.length}
      >
        <ul>
          {stories.map(
            (story: Story): React.ReactElement => (
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

export default TopStories
