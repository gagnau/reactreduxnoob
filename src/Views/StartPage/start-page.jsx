import React from 'react'
import { Link } from 'react-router-dom'
import Switch from '../../Components/Switch/switch'

const StartPageComponent = (() =>
    <div className="start-page">
        <h2>Startpage</h2>
        <p>Welcome to the start page. Select one of the options to go see more.</p>
        <p><Link to="/react-counter">React Counter</Link></p>
        <p><Link to="/counter">Redux Counter</Link></p>
        <p><Link to="/time">Time</Link></p>

        <Switch status={false} />
    </div>
)

export default StartPageComponent
