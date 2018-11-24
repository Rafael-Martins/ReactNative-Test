import { combineReducers } from 'redux'

const INITIAL_STATE = {
    initIsLoaded: false,
    initObj: {},
}

const showcaseReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_INIT':
            const { initIsLoaded, initObj } = state

            const newState = { initIsLoaded: true, initObj: action.payload }
            return newState
        default:
            return state
    }
}

export default combineReducers({
    showcase: showcaseReducer,
})
