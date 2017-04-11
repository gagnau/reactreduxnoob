import React, {PropTypes} from 'react'
import CounterContainer from '../Counter/counter-container'

const StartPageComponent = () => {
  return (
    <div className="startpage-container">
      <h1>A simple React/Redux counter</h1>
      <CounterContainer/>
    </div>
  )
}

StartPageComponent.propTypes = {
}

export default StartPageComponent
