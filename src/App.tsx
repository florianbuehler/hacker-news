import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import TopStories from './components/Views/TopStories'

const App: React.FC = () => {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Redirect to="/stories/best" />
        </Route>
        <Route exact path="/stories/best">
          <TopStories />
        </Route>
        <Route exact path="/stories/top">
          <TopStories />
        </Route>
        <Route exact path="/stories/new">
          <TopStories />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
