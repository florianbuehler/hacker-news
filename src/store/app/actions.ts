export const actionTypes = {
  SET_THEME: 'SET_THEME'
}

const actions = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/ban-ts-comment
  // @ts-ignore
  setTheme: (payload) => ({ type: actionTypes.SET_THEME, payload })
}

export default actions
