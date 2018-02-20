import React from 'react';
import WeatherData from './weatherdata';
import Location from './Location';

import './styles.css';

const WeatherLocation=()=>(
  <div className="weatherLocationCont">
    <Location city={'Málaga'}></Location>
    <WeatherData></WeatherData>
  </div>
);

export default WeatherLocation;
