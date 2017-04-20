import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import StartPage from './Views/start-page'
import NavigationComponent from './Components/Navigation/navigation-component'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
  	<div>
	  	<NavigationComponent />
		<Router history={hashHistory}>
			<Route path='/' component={StartPage} />
		</Router>
    </div>
  </Provider>,
  window.document.getElementById('main-app'),
)
