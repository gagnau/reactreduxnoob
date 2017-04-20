/** Navigation presentational react component **/
import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import StartPage from '../../Views/StartPage/start-page'
import CounterPage from '../../Views/CounterPage/counter-page'
import TimePage from '../../Views/TimePage/time-page'

const NavigationComponent = (() =>
    <nav className="navigation">
        <Link to="/">Logo Start Page</Link>
        <NavLink to="/counter" className="navigation__item" activeClassName="navigation__item--selected">
            Counter
        </NavLink>
        <NavLink to="/time" className="navigation__item" activeClassName="navigation__item--selected">
            Time
        </NavLink>

        <Route exact path="/" component={StartPage} />
        <Route path="/counter" component={CounterPage} />
        <Route path="/time" component={TimePage} />
    </nav>
)

export default NavigationComponent
