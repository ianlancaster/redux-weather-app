import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'
import reducer from './reducers'
import App from './contatiners/App'
import './styles/core.scss'

const enhancer = compose(
  /* [middlewares] */
  persistState(/*paths, config*/),
)

const middleware = [ thunk ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
  enhancer
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
