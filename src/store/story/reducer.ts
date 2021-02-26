import {
  FETCH_STORY_IDS_REQUEST,
  FETCH_STORY_IDS_SUCCESS,
  FETCH_STORIES_REQUEST,
  FETCH_STORIES_SUCCESS
} from './actions'
import { StoryActionTypes, StoryState } from './types'

export const getInitialStoryState = (): StoryState => ({
  storyIds: [],
  stories: [],
  page: 0,
  isFetching: false,
  error: ''
})

const story = (state = getInitialStoryState(), action: StoryActionTypes): StoryState => {
  switch (action.type) {
    case FETCH_STORY_IDS_REQUEST:
    case FETCH_STORIES_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_STORY_IDS_SUCCESS:
      return {
        ...state,
        storyIds: action.storyIds
      }
    case FETCH_STORIES_SUCCESS:
      return {
        ...state,
        stories: [...state.stories, ...action.stories],
        page: state.page + 1,
        isFetching: false
      }
    case 'RESET_STORIES':
      return getInitialStoryState()
    default:
      return state
  }
}

export default story
