/** Counter presentational react component **/
import React, {PropTypes} from 'react'

const CounterComponent = ({currentCount, onCountDown, onCountUp}) => {
  return (
    <div>
      <p>Current count: {currentCount}</p>
      <button onClick={() => onCountDown()}>-</button>
      <button onClick={() => onCountUp()}>+</button>
      {/*
      <div className='navigation'>
        <button>Previous Page</button>
        <button>Next Page</button>
      </div>
      */}
    </div>
  )
}

CounterComponent.propTypes = {
  currentCount: PropTypes.number.isRequired,
  onCountDown: PropTypes.func.isRequired,
  onCountUp: PropTypes.func.isRequired
}

export default CounterComponent
