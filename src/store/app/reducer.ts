import { actionTypes } from './actions'

export const getInitialState = () => ({
  theme: 'light'
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const app = (state = getInitialState(), { type, payload }) => {
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
