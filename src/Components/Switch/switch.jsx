import React from 'react'
import PropTypes from 'prop-types'


class Switch extends React.Component {

    constructor(props) {
        super(props)
        this.state = { status: this.props.status || false }
        console.log(' init' , this.props.status)
        this.toggleSwitch = this.toggleSwitch.bind(this)
    }

    toggleSwitch() {
        this.setState({ status: !this.state.status })
    }

    render() {
        const { currentCount } = this.state
        return (
            <div className="switch"  onClick={() => this.toggleSwitch()}>
                <span className={`switch__flip ${this.state.status ? 'switch__flip--on' : 'switch__flip--off'}`} />
            </div>
        )
    }

}

Switch.propTypes = {
    status: PropTypes.bool,
}

export default Switch
