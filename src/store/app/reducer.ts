import { SET_THEME } from './actions'
import { AppState, AppActionTypes } from './types'

export const getInitialAppState = (): AppState => ({
  theme: 'light'
})

const app = (state = getInitialAppState(), action: AppActionTypes): AppState => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        ...action.payload // { theme: <VALUE> }
      }
    default:
      return state
  }
}

export default app
