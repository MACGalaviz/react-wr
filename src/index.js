import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

import { createLogger } from 'redux-logger'
const middleWare = applyMiddleware(thunkMiddleware, createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
}))

const store = createStore(
	rootReducer,
	middleWare
	)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)