import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import NavigationComponent from './Components/Navigation/navigation-component'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
  	<div>
		<Router>
            <NavigationComponent />
		</Router>
    </div>
  </Provider>,
  window.document.getElementById('main-app'),
)
