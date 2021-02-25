import {
  FETCH_STORY_IDS_REQUEST,
  FETCH_STORY_IDS_SUCCESS,
  FETCH_STORY_IDS_FAILURE,
  FETCH_STORIES_REQUEST,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILURE
} from './actions'

export type Story = {
  id: number
  title: string
  by: string
  url: string
  type: string
  descendents: number
  kids: number[]
  score: number
  time: number
}

export type StoryState = {
  storyIds: number[]
  stories: Story[]
  page: number
  isFetching: boolean
  error: string
}

type FetchStoryIdsRequestAction = {
  type: typeof FETCH_STORY_IDS_REQUEST
}

type FetchStoryIdsSuccessAction = {
  type: typeof FETCH_STORY_IDS_SUCCESS
  storyIds: number[]
}

type FetchStoryIdsFailureAction = {
  type: typeof FETCH_STORY_IDS_FAILURE
}

type FetchStoriesRequestAction = {
  type: typeof FETCH_STORIES_REQUEST
}

type FetchStoriesSuccessAction = {
  type: typeof FETCH_STORIES_SUCCESS
  stories: Story[]
}

type FetchStoriesFailureAction = {
  type: typeof FETCH_STORIES_FAILURE
}

export type StoryActionTypes =
  | FetchStoryIdsRequestAction
  | FetchStoryIdsSuccessAction
  | FetchStoryIdsFailureAction
  | FetchStoriesRequestAction
  | FetchStoriesSuccessAction
  | FetchStoriesFailureAction
