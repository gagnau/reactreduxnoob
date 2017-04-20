/** Navigation presentational react component **/
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import StartPage from '../../Views/StartPage/start-page'
import CounterPage from '../../Views/CounterPage/counter-page'

const NavigationComponent = (() =>
  <nav className="navigation">
  	<Link to={`/`} className="navigation__item navigation__item--selected">Start page</Link>
  	<Link to={`/page2`} className="navigation__item">Page 2</Link>

    <Route exact={true} path="/" component={StartPage} />
    <Route path="/page2" component={CounterPage} />
  </nav>
)

NavigationComponent.propTypes = {
  currentItem: PropTypes.number,
}

export default NavigationComponent
