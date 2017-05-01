/** Navigation presentational react component **/
import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import StartPage from '../../Views/StartPage/start-page'
import ReactCounterPage from '../../Views/ReactCounterPage/react-counter-page'
import CounterPage from '../../Views/CounterPage/counter-page'
import TimePage from '../../Views/TimePage/time-page'

const NavigationComponent = (() =>
    <nav className="navigation">
        <Link to="/">Logo Start Page</Link>
        <NavLink to="/react-counter" className="navigation__item" activeClassName="navigation__item--selected">
            React Counter
        </NavLink>
        <NavLink to="/counter" className="navigation__item" activeClassName="navigation__item--selected">
            Redux Counter
        </NavLink>
        <NavLink to="/time" className="navigation__item" activeClassName="navigation__item--selected">
            Time
        </NavLink>

        <Route exact path="/" component={StartPage} />
        <Route path="/react-counter" component={ReactCounterPage} />
        <Route path="/counter" component={CounterPage} />
        <Route path="/time" component={TimePage} />
    </nav>
)

export default NavigationComponent
