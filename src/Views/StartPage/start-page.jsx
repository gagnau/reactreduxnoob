import React from 'react'
import { Link } from 'react-router-dom'

const StartPageComponent = (() =>
    <div className="start-page">
        <h2>Startpage</h2>
        <p>Welcome to the start page. Select one of the options to go see more.</p>
        <p><Link to="/counter">Counter</Link></p>
        <p><Link to="/time">Time</Link></p>
    </div>
)

export default StartPageComponent
