import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
  CLOUD,
  CLOUDY,
  RAIN,
  SNOW,
  SUNNY_DAY,
  SUN,
  WINDY
} from '../../../constants/weatherConst';

import './styles.css';


const WeatherData=()=>(
  <div className="weatherDataCont">
    <WeatherTemperature temperature={20} weatherState={WINDY}></WeatherTemperature>
    <WeatherExtraInfo humidity={80} wind={'10m/s'}></WeatherExtraInfo>
  </div>
);

export default WeatherData;