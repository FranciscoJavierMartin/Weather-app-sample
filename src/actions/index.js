import transformForecast from '../services/transformForecast';
import transformWeather from '../services/transformWeather';
import {API_KEY} from '../config';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const URL_FORECAST = 'http://api.openweathermap.org/data/2.5/forecast';
const URL_WEATHER = 'http://api.openweathermap.org/data/2.5/weather';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

export const setSelectedCity = payload => {
    return (dispatch,getState) => {
        let res=undefined;
        const url_forecast = `${URL_FORECAST}?q=${payload}&appid=${API_KEY}`;

        dispatch(setCity(payload));

        const state=getState();
        const date=state.cities[payload] && state.cities[payload].forecastDataDate;

        const now=new Date();

        if(date && (now-date)> 1*60*1000){

            res= fetch(url_forecast)
                .then(data => data.json())
                .then(weather_data => {
                    const forecastData = transformForecast(weather_data);
                    dispatch(setForecastData({ city: payload, forecastData }));
                });
        }

        return res;

    };
};

export const setWeather = payload => {

    return dispatch => {

        payload.forEach(city => {

            dispatch(getWeatherCity(city));

            const api_weather = `${URL_WEATHER}?q=${city}&appid=${API_KEY}`;

            fetch(api_weather)
                .then(data => data.json())
                .then(weather_data => {
                    const weather = transformWeather(weather_data);
                    dispatch(setWeatherCity({city,weather}));
                });
        })
    }
};