import React, {Component} from 'react';
import hackerNewsApi from './services/hackerNewsApi'

hackerNewsApi.getTopStoryIds().then((ids: number[]) => console.log(ids))

class App extends Component {
  componentDidMount() {
    // @ts-ignore
    this.props.fetchStoriesFirstPage()
  }

  render() {
    // @ts-ignore
    const { stories } = this.props
    
    // @ts-ignore
    return (
      <div>
        <h1>Hacker News</h1>
        <ul>
          {stories.map((story: any) => <h2>hello</h2>)}
        </ul>
      </div>
    );
  }
}

export default App;
