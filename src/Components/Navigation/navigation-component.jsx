/** Navigation presentational react component **/
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import StartPage from '../../Views/start-page'
import Counter from '../../Views/counter'

const NavigationComponent = (({ currentItem }) =>
  <nav className="navigation">
  	<Link to={`/`} className="navigation__item navigation__item--selected">Start page {currentItem}</Link>
  	<Link to={`/page2`} className="navigation__item">Page 2</Link>
    <Route exact={true} path="/" component={StartPage} />
    <Route path="/page2" component={Counter} />
  </nav>
)

NavigationComponent.propTypes = {
  currentItem: PropTypes.number,
}

export default NavigationComponent
