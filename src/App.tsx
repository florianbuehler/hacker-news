import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import routes from 'routes'
import PageLayout, { PageLayoutProps } from 'components/layouts/PageLayout'
import CustomRoute from 'components/atoms/CustomRoute'

// Views
import TopStories from 'components/views/TopStories'
import DetailedStory from 'components/views/DetailedStory'

const App: React.FC = () => {
  return (
    <Router>
      <PageLayout>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <CustomSwitch />
      </PageLayout>
    </Router>
  )
}

const CustomSwitch: React.FC<PageLayoutProps> = ({ hideFooter, showFooter }) => {
  // A <Switch> looks through its children <Route>s or in our case <CustomRoute>s and
  // renders the first one that matches the current URL.

  // Todo: refactor to use Redux / React Context to avoid this weird props passing
  return (
    <Switch>
      <CustomRoute exact path={routes.home}>
        <Redirect to={routes.stories.best} />
      </CustomRoute>
      <CustomRoute exact path={routes.stories.best} hideFooter>
        <TopStories />
      </CustomRoute>
      <CustomRoute exact path={routes.stories.top} hideFooter>
        <TopStories />
      </CustomRoute>
      <CustomRoute exact path={routes.stories.new} hideFooter>
        <TopStories />
      </CustomRoute>
      <CustomRoute exact path={routes.stories.details.show}>
        <DetailedStory />
      </CustomRoute>
      <CustomRoute path="*" hideFooter>
        <h1>No match</h1>
      </CustomRoute>
    </Switch>
  )
}

export default App
