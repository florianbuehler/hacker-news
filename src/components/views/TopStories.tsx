import { connect } from 'react-redux'
import actions from 'store/story/actions'
import { hasMoreStoriesSelector } from 'store/story/selectors'
import StoriesOverview from 'components/molecules/StoriesOverview'
import { RootDispatch, RootState } from 'store'

const mapStateToProps = (state: RootState) => ({
  stories: state.story.stories,
  page: state.story.page,
  storyIds: state.story.storyIds,
  isFetching: state.story.isFetching,
  hasMoreStories: hasMoreStoriesSelector(state)
})

const mapDispatchProps = (dispatch: RootDispatch) => ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  fetchStoryIds: () => dispatch(actions.fetchIdsOfTopStories()),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  fetchStories: (storyIds, page) => dispatch(actions.fetchStories({ storyIds, page })),
  resetStories: () => dispatch(actions.resetStories())
})

export default connect(mapStateToProps, mapDispatchProps)(StoriesOverview)
