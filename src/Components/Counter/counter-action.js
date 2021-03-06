/** Counter redux actions **/

export const DECREMENT = 'DECREMENT'
export const INCREMENT = 'INCREMENT'

export const countDown = () => ({
    type: DECREMENT,
    payload: 1,
})

export const countUp = () => ({
    type: INCREMENT,
    payload: 1,
})
