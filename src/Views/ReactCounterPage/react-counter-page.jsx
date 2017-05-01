import React from 'react'
import ReactCounterContainer from '../../Components/ReactCounter/react-counter'

const ReactCounterPageComponent = (() =>
    <div className="counter-page">
        <h2>React Counter Page</h2>
        <ReactCounterContainer currentCount={0} />
    </div>
)

export default ReactCounterPageComponent
