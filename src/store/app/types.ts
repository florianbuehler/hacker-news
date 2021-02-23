import { SET_THEME } from './actions'

export type Colors = 'light' | 'dark'

export type Theme = {
  theme: Colors
}

export type AppState = Theme

type SetThemeAction = {
  type: typeof SET_THEME
  payload: Theme
}

export type AppActionTypes = SetThemeAction
