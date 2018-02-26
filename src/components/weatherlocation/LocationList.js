import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './index';

const strToComponent=cities=>(
  cities.map((city)=>(<WeatherLocation city={city}/>))
);

const LocationList=({cities})=>(
  <div>
    {strToComponent(cities)}
  </div>
);

LocationList.PropTypes={
  cities:PropTypes.array.isRequired,
}

export default LocationList;