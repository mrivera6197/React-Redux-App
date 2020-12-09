
import axios from 'axios'

export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS'
export const FETCHING_DATA_FAIL = 'FETCHING_DATA_FAIL'

export const getData = () => dispatch => {
    dispatch({type: FETCHING_DATA})

    axios 
        .get('https://api.covid19api.com/summary')
        .then(res => {
           dispatch({type: FETCHING_DATA_SUCCESS, payload: res.data.Countries})
           console.log(res.data.Countries)
        })
        .catch(err => {
            dispatch({type: FETCHING_DATA_FAIL, payload: err.response.message})
        })
}