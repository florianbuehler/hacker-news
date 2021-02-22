import { createStore } from 'redux'
import rootReducer, { getInitialRootState } from './reducer'
import middleware from './middleware'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const configureStore = () => {
  return createStore(rootReducer, getInitialRootState(), middleware)
}

export default configureStore
