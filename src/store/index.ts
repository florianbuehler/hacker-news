import { Dispatch } from 'react'
import { createStore } from 'redux'
import rootReducer from './reducer'
import middleware from './middleware'
import { AppState, AppActionTypes } from './app/types'
import { getInitialAppState } from './app/reducer'
import { StoryActionTypes, StoryState } from './story/types'
import { getInitialStoryState } from './story/reducer'

export type RootState = {
  app: AppState
  story: StoryState
}

type RootActionTypes = AppActionTypes | StoryActionTypes

export type RootDispatch = Dispatch<RootActionTypes>

export const getInitialRootState = (): RootState => ({
  app: getInitialAppState(),
  story: getInitialStoryState()
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const configureStore = () => {
  return createStore(rootReducer, getInitialRootState(), middleware)
}

export default configureStore
