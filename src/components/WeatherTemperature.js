import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
        CLOUD,
        CLOUDY,
        RAIN,
        SNOW,
        SUNNY_DAY,
        SUN,
        WINDY
      } from '../constants/weatherConst';

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
    default:
      res="day-sunny";
  }
  
  return res;
}

const getWeatherIcon=(weatherState)=>{
  return (<WeatherIcons name={stateToIcon(weatherState)} size="2x"/>);
}

const WeatherTemperature=({temperature, weatherState})=>(
  <div>
    {getWeatherIcon(weatherState)}
    <span>{`${temperature} ºC`}</span>
  </div>
);

export default WeatherTemperature;