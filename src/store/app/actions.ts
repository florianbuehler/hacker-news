import { Theme, AppActionTypes } from './types'

export const SET_THEME = 'SET_THEME'

const actions = {
  setTheme: (payload: Theme): AppActionTypes => ({ type: SET_THEME, payload })
}

export default actions
