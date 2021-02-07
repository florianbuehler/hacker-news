import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

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
            (story: never): React.ReactElement => (
              // eslint-disable-next-line react/jsx-key
              <li>
                <h2>hello</h2>
              </li>
            )
          )}
        </ul>
      </InfiniteScroll>
    </div>
  )
}

export default TopStories
