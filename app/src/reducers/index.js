
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAIL } from '../actions/index'

const initialState = {
    data: [],
    isFetching: false, 
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCHING_DATA): 
            return({
                ...state, 
                isFetching: true, 
                error: '',
            })
        case(FETCHING_DATA_SUCCESS):
            return({
                ...state,
                data: action.payload,
                isFetching: false, 
            })
        case(FETCHING_DATA_FAIL): 
            return({
                ...state,
                error: action.payload
            })
        default: 
            return state 
    }
}