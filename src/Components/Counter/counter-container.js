/** Counter container - links the presentational react component with redux  **/

import { connect } from 'react-redux'
import CounterComponent from './counter-component'
import { countDown, countUp } from './counter-action'

const mapStateToProps = state => ({
    currentCount: state.counterReducer.currentCount,
})

const mapDispatchToProps = dispatch => ({
    onCountDown: () => {
        dispatch(countDown())
    },
    onCountUp: () => {
        dispatch(countUp())
    },
})

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent)

export default CounterContainer
