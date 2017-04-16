import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
// import { Router, Route, hashHistory } from 'react-router'
import StartPage from './Views/start-page'
import CounterReducer from './Components/Counter/counter-reducer'

const store = createStore(CounterReducer)

render(
  <Provider store={store}>
    <StartPage />
  </Provider>,
  window.document.getElementById('main-app'),
)


/*
  <Router history={hashHistory}>
    <Route path='/' component={CounterContainer} />
  </Router>
*/

