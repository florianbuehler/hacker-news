import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

type Props = {
  storyIds: number[]
  page: number
  isFetching: boolean
}

class App extends Component<Props> {
  componentDidMount(): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.props.fetchStoriesFirstPage()
  }

  fetchStories = (): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { storyIds, page, fetchStories, isFetching } = this.props
    if (!isFetching) {
      fetchStories({ storyIds, page })
    }
  }

  render(): React.ReactElement {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { stories, hasMoreStories } = this.props

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return (
      <div>
        <h1>Hacker News</h1>
        <InfiniteScroll
          next={this.fetchStories}
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
}

export default App
