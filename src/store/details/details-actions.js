export const SET_LOADING = 'details/SET_LOADING';
export const SET_ERROR = 'details/SET_ERROR';
export const SET_COUNTRY = 'details/SET_COUNTRY';
export const CLEAN_COUNTRY = 'details/CLEAN_COUNTRY';
export const SET_NEIGHBORS = 'details/SET_BORDERS';


export const setLoading = () => ({
    type: SET_LOADING,
})
export const setError = (err) => ({
    type: SET_ERROR,
    payload: err,
})
export const setCountry = (country) => ({
    type: SET_COUNTRY,
    payload: country,
})
export const cleanCountry = () => ({
    type: CLEAN_COUNTRY,
})
export const setNeighbors = (country) => ({
    type: SET_NEIGHBORS,
    payload: country
})

export const loadCountryByName = (name) => (dispatch, _, { client, api }) => {
    dispatch(setLoading);

    client.get(api.searchByCountry(name))
        .then(({ data }) => dispatch(setCountry(data[0])))
        .catch((error) => dispatch(setError(error)))
}

export const loadNeighborsByBorder = (borders) => (dispatch, _, { client, api }) => {

    client.get(api.filterByCode(borders))
        .then(({ data }) => dispatch(setNeighbors(data.map(e => e.name))))
        .catch((err ) => console.error(err)) 
}