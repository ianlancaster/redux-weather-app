import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// link to combined reducer
import App from './contatiners/App'

const middleware = [ thunk ]

const store = createStore(
//  reducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <App logInView={true} oneDayView={false} sevenDayView={false} />
  </Provider>,
  document.getElementById('root')
)

// working backward it looks like I need the reducers and main app
