import { createSelector } from 'reselect'
import { RootState } from 'store'

const storyIdsSelector = (state: RootState) => state.story.storyIds
const storiesSelector = (state: RootState) => state.story.stories

export const hasMoreStoriesSelector = createSelector(
  storyIdsSelector,
  storiesSelector,
  (storyIds, stories) => storyIds.length > stories.length
)
