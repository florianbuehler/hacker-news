import { createStore } from 'redux'
import reducer, { getInitialState } from './reducer'
import middleware from './middleware'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const configureStore = () => {
  return createStore(reducer, getInitialState(), middleware)
}

export default configureStore
