import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from './countries-actions'

const initialState = {
    status: 'idle',
    error: null,
    list: []
}
    
export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES:
            return {
                ...state,
                status: 'recivied',
                list: action.payload,
            }


        case SET_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: action.payload,
            }


        case SET_LOADING:
            return {
                ...state, 
                status: 'loading',
                error: null,
            }


        default: {
            return state
        }
    }
}