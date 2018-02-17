import React from 'react';
import WeatherData from './WeatherData';
import Location from './Location';

const WeatherLocation=()=>(
  <div>
    <Location city={'Málaga'}></Location>
    <WeatherData></WeatherData>
  </div>
);

export default WeatherLocation;
