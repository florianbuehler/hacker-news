import React, {Component} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'

class App extends Component {
  componentDidMount() {
    // @ts-ignore
    this.props.fetchStoriesFirstPage()
  }

  fetchStories = () => {
    // @ts-ignore
    const { storyIds, page, fetchStories, isFetching} = this.props
    if (!isFetching) {
      fetchStories({storyIds, page })
    }
  }
  
  render() {
    // @ts-ignore
    const { stories, hasMoreStories } = this.props
    
    // @ts-ignore
    return (
      <div>
        <h1>Hacker News</h1>
        <InfiniteScroll next={this.fetchStories} hasMore={hasMoreStories} loader={<h3>loading...</h3>} dataLength={stories.length}>
          <ul>
            {stories.map((story: any) => <h2>hello</h2>)}
          </ul>
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
