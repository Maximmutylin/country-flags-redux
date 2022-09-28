import { SET_LOADING, SET_ERROR, SET_COUNTRY, CLEAN_COUNTRY, SET_NEIGHBORS } from "./details-actions"

const initialState = {
    currentCountry: null,
    status: 'idle',
    error: null,
    neighbors: [],
}

export const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
            }
        case SET_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: action.payload,
            }
        case SET_COUNTRY:
            return {
                ...state,
                status: 'received',
                currentCountry: action.payload,
            }
        case CLEAN_COUNTRY:
            return initialState;

        case SET_NEIGHBORS:
            return {
                ...state,
                neighbors: action.payload,
            }

        default: {
            return state
        }
    }
}