import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import routes from 'routes'
import PageLayout from 'components/layouts/PageLayout'

// Views
import TopStories from 'components/views/TopStories'
import DetailedStory from 'components/views/DetailedStory'

const App: React.FC = () => {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <PageLayout>
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
          <Route exact path={routes.stories.details.show}>
            <DetailedStory />
          </Route>
          <Route path="*">
            <h1>No match</h1>
          </Route>
        </Switch>
      </PageLayout>
    </Router>
  )
}

export default App
