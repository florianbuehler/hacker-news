const NS = '@hn/app'

export const actionTypes = {
  SET_THEME: `${NS}/SET_THEME`
}

const actions = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setTheme: (payload = {}) => ({ type: actionTypes.SET_THEME, payload })
}

export default actions
