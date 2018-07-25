import transformForecast from '../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const API_KEY = "45d933a3ce7066c3b349f818940370c4";
//const API_WEATHER=`http://samples.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${API_KEY}`;
const URL = 'http://api.openweathermap.org/data/2.5/forecast';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${URL}?q=${city}&appid=${API_KEY}`;

        dispatch(setCity(payload));

        return fetch(url_forecast)
            .then(data => data.json())
            .then(weather_data => {
                const forecastData = transformForecast(weather_data);
                dispatch(setForecastData({ city: payload, forecastData }));
            });
    };
};