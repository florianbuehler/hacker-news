import { Theme, AppActionTypes } from './types'

export const SET_THEME = 'SET_THEME'
export const SET_HIDE_FOOTER = 'SET_HIDE_FOOTER'

const actions = {
  setTheme: (theme: Theme): AppActionTypes => ({ type: SET_THEME, theme }),
  setHideFooter: (hideFooter: boolean): AppActionTypes => ({ type: SET_HIDE_FOOTER, hideFooter })
}

export default actions
