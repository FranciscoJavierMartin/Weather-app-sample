import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import {
        CLOUD,
        CLOUDY,
        RAIN,
        SNOW,
        SUNNY_DAY,
        SUN,
        WINDY,
        THUNDER,
        DRIZZLE
      } from '../../../constants/weatherConst';

import './styles.css';

function stateToIcon(weatherState){

  var res;
  
  switch(weatherState){
    
    case CLOUD:
      res="cloud";
      break;
    case CLOUDY:
      res="cloudy";
      break;
    case RAIN:
      res="rain";
      break;
    case SNOW:
      res="snow";
      break;
    case WINDY:
      res="windy";
      break;
    case THUNDER:
      res="day-thunderstorm";
      break;
    case DRIZZLE:
      res="day-showers";
      break;
    case SUN:
      res="day-sunny";
      break;
    default:
      res="day-sunny";
  }
  
  return res;
}

const getWeatherIcon=(weatherState)=>{
  return (<WeatherIcons className="wicon" name={stateToIcon(weatherState)} size="4x"/>);
}

const WeatherTemperature=({temperature, weatherState})=>(
  <div className="weatherTemperatureCont">
    {getWeatherIcon(weatherState)}
    <span className="temperature" >{`${temperature}`}</span>
    <span className="temperatureSymbol">ºC</span>
  </div>
);

WeatherTemperature.propTypes={
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string,
};

export default WeatherTemperature;