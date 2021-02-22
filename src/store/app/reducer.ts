import { actionTypes } from './actions'

export type Theme = 'light' | 'dark'

export type AppState = {
  theme: Theme
}

export const getInitialAppState = (): AppState => ({
  theme: 'light'
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const app = (state = getInitialAppState(), { type, payload }): State => {
  switch (type) {
    case actionTypes.SET_THEME:
      return {
        ...state,
        ...payload // { theme: <VALUE> }
      }
    default:
      return state
  }
}

export default app
