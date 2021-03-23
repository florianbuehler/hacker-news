import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import routes from 'routes'
import PageLayout from 'components/layouts/PageLayout'
import CustomRoute from 'components/atoms/CustomRoute'

// Views
import TopStories from 'components/views/TopStories'
import BestStories from 'components/views/BestStories'
import NewStories from 'components/views/NewStories'
import DetailedStory from 'components/views/DetailedStory'

const App: React.FC = () => {
  return (
    <Router>
      <PageLayout>
        {/* A <Switch> looks through its children <Route>s or in our case <CustomRoute>s and */}
        {/* renders the first one that matches the current URL. */}
        <Switch>
          <CustomRoute exact path={routes.home}>
            <Redirect to={routes.stories.top} />
          </CustomRoute>
          <CustomRoute exact path="/hacker-news">
            <Redirect to={routes.home} />
          </CustomRoute>
          <CustomRoute exact path={routes.stories.top} hideFooter>
            <TopStories />
          </CustomRoute>
          <CustomRoute exact path={routes.stories.best} hideFooter>
            <BestStories />
          </CustomRoute>
          <CustomRoute exact path={routes.stories.new} hideFooter>
            <NewStories />
          </CustomRoute>
          <CustomRoute exact path={routes.stories.details.show}>
            <DetailedStory />
          </CustomRoute>
          <CustomRoute path="*" hideFooter>
            <h1>No match</h1>
          </CustomRoute>
        </Switch>
      </PageLayout>
    </Router>
  )
}

export default App
