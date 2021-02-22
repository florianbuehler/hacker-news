import { combineReducers } from 'redux'
import app, { getInitialState as getInitialAppState } from './app/reducer'
import story from './story/reducer'

export const getInitialState = () => ({
  app: getInitialAppState()
})

const rootReducer = combineReducers({
  app,
  story
})

export default rootReducer
