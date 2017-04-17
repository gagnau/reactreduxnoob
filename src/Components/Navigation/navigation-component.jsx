/** Navigation presentational react component **/
import React from 'react'
import PropTypes from 'prop-types'

const NavigationComponent = (({ currentItem }) =>
  <nav className="navigation">
  	<a className="navigation__item navigation__item--selected">Start page {currentItem}</a>
  	<a className="navigation__item">Page 2</a>
  </nav>
)

NavigationComponent.propTypes = {
  currentItem: PropTypes.number,
}

export default NavigationComponent
