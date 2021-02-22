import { combineReducers } from 'redux'
import app, { getInitialAppState, AppState } from './app/reducer'
import story from './story/reducer'

export type RootState = {
  app: AppState
}

export const getInitialRootState = (): RootState => ({
  app: getInitialAppState()
})

const rootReducer = combineReducers({
  app,
  story
})

export default rootReducer
