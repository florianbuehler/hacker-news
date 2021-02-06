import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './container'
import { Provider } from 'react-redux'
import configureStore from './store'
import reportWebVitals from './reportWebVitals'

const renderApp = () => {
  const initialState = {}
  const store = configureStore(initialState)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.dispatch({ type: '@hn/@@INIT' })

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

renderApp()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
