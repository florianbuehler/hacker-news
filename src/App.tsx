import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import routes from './routes'
import TopStories from './components/Views/TopStories'

const App: React.FC = () => {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path={routes.home}>
          <Redirect to={routes.stories.best} />
        </Route>
        <Route exact path={routes.stories.best}>
          <TopStories />
        </Route>
        <Route exact path={routes.stories.top}>
          <TopStories />
        </Route>
        <Route exact path={routes.stories.new}>
          <TopStories />
        </Route>
        <Route path="*">
          <h1>No match</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
