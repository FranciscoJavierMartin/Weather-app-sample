import { SET_FORECAST_DATA } from '../actions';

export const cities = (state = {}, action) => {
    let res;

    switch (action.type) {
        case SET_FORECAST_DATA:
            const { city, forecastData } = action.payload;
            res = { ...state, [city]: { forecastData } };
            break;
        default:
            res = state;
    }

    return res;
}

export const getForecastDataFromCities=(state,city)=> state[city] && state[city].forecastData;