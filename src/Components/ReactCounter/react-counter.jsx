import React from 'react'
import PropTypes from 'prop-types'


class ReactCounter extends React.Component {

    constructor(props) {
        super(props)
        this.state = { currentCount: this.props.currentCount }
    }

    onCountUp() {
        this.setState({ currentCount: this.state.currentCount + 1 })
    }

    onCountDown() {
        this.setState({ currentCount: this.state.currentCount - 1 })
    }

    render() {
        const { currentCount } = this.state
        return (
            <div className="counter">
                <p>Current count: {currentCount}</p>
                <button className="button" onClick={() => this.onCountDown()}>-</button>
                <button className="button" onClick={() => this.onCountUp()}>+</button>
            </div>
        )
    }

}

ReactCounter.propTypes = {
    currentCount: PropTypes.number.isRequired,
}

export default ReactCounter
