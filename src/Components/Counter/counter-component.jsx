/** Counter presentational react component **/
import React from 'react'
import PropTypes from 'prop-types'

const CounterComponent = (({ currentCount, onCountDown, onCountUp }) =>
  <div className='counter'>
    <p>Current count: {currentCount}</p>
    <button onClick={() => onCountDown()}>-</button>
    <button onClick={() => onCountUp()}>+</button>
  </div>
)

CounterComponent.propTypes = {
  currentCount: PropTypes.number.isRequired,
  onCountDown: PropTypes.func.isRequired,
  onCountUp: PropTypes.func.isRequired,
}

export default CounterComponent
