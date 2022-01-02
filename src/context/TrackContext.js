import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

const trackReducer = function (state, action) {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
}

const fetchTracks = function (dispatch) {
    return async () => {
        const response = await trackerApi.get('/tracks');
        dispatch({ type: 'fetch_tracks', payload: response.data })
    }
}

const createTrack = function (dispatch) {
    return async (name, locations) => {
        // make request to our api
        await trackerApi.post('/tracks', { name, locations });
    }
}

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);