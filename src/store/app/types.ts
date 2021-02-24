import { SET_THEME, SET_HIDE_FOOTER } from './actions'

export type Theme = 'light' | 'dark'

export type AppState = {
  theme: Theme
  hideFooter: boolean
}

type SetThemeAction = {
  type: typeof SET_THEME
  theme: Theme
}

type SetHideFooterAction = {
  type: typeof SET_HIDE_FOOTER
  hideFooter: boolean
}

export type AppActionTypes = SetThemeAction | SetHideFooterAction
