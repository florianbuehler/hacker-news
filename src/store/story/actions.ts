import hackerNewsApi from 'services/hackerNewsApi'
import { StoryActionTypes } from './types'

type FetchStoriesPayload = {
  storyIds: number[]
  page: number
}

export const FETCH_STORY_IDS_REQUEST = 'FETCH_STORY_IDS_REQUEST'
export const FETCH_STORY_IDS_SUCCESS = 'FETCH_STORY_IDS_SUCCESS'
export const FETCH_STORY_IDS_FAILURE = 'FETCH_STORY_IDS_FAILURE'
export const FETCH_STORIES_REQUEST = 'FETCH_STORIES_REQUEST'
export const FETCH_STORIES_SUCCESS = 'FETCH_STORIES_SUCCESS'
export const FETCH_STORIES_FAILURE = 'FETCH_STORIES_FAILURE'
export const RESET_STORIES = 'RESET_STORIES'

const actions = {
  fetchIdsOfNewStories: () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    return (dispatch) => {
      dispatch({ type: FETCH_STORY_IDS_REQUEST })

      return hackerNewsApi
        .getNewStoryIds()
        .then((storyIds) => {
          dispatch({ type: FETCH_STORY_IDS_SUCCESS, storyIds })
          dispatch(actions.fetchStories({ storyIds, page: 0 }))
        })
        .catch(() => dispatch({ type: FETCH_STORY_IDS_FAILURE }))
    }
  },
  fetchIdsOfBestStories: () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    return (dispatch) => {
      dispatch({ type: FETCH_STORY_IDS_REQUEST })

      return hackerNewsApi
        .getBestStoryIds()
        .then((storyIds) => {
          dispatch({ type: FETCH_STORY_IDS_SUCCESS, storyIds })
          dispatch(actions.fetchStories({ storyIds, page: 0 }))
        })
        .catch(() => dispatch({ type: FETCH_STORY_IDS_FAILURE }))
    }
  },
  fetchIdsOfTopStories: () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    return (dispatch) => {
      dispatch({ type: FETCH_STORY_IDS_REQUEST })

      return hackerNewsApi
        .getTopStoryIds()
        .then((storyIds) => {
          dispatch({ type: FETCH_STORY_IDS_SUCCESS, storyIds })
          dispatch(actions.fetchStories({ storyIds, page: 0 }))
        })
        .catch(() => dispatch({ type: FETCH_STORY_IDS_FAILURE }))
    }
  },
  fetchStories: (payload: FetchStoriesPayload) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    return (dispatch) => {
      dispatch({ type: FETCH_STORIES_REQUEST })
      const { storyIds, page } = payload

      return hackerNewsApi
        .getStoriesByPage(storyIds, page)
        .then((stories) => dispatch({ type: FETCH_STORIES_SUCCESS, stories }))
        .catch(() => dispatch({ type: FETCH_STORIES_FAILURE }))
    }
  },
  resetStories: (): StoryActionTypes => ({ type: RESET_STORIES })
}

export default actions
