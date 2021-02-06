import React from 'react';
import hackerNewsApi from './services/hackerNewsApi'

hackerNewsApi.getTopStoryIds().then((ids: number[]) => console.log(ids))

function App() {
  return (
    <div>
      <h1>Hacker News</h1>
    </div>
  );
}

export default App;
