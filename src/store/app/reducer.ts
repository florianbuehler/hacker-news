import { SET_HIDE_FOOTER, SET_THEME } from './actions'
import { AppActionTypes, AppState } from './types'

export const getInitialAppState = (): AppState => ({
  theme: 'light',
  hideFooter: false
})

const app = (state = getInitialAppState(), action: AppActionTypes): AppState => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.theme
      }
    case SET_HIDE_FOOTER:
      return {
        ...state,
        hideFooter: action.hideFooter
      }
    default:
      return state
  }
}

export default app
