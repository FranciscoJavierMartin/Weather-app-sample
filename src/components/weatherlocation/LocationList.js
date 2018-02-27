import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './index';



const LocationList=({cities,onSelectedLocation})=>{
  const handleWeatherLocationClick=(city,handleWeatherLocationClick)=>{
    return onSelectedLocation(city);
  }
  
  const strToComponent=cities=>(
    cities.map((city,index)=>(
        <WeatherLocation 
          key={index} 
          city={city}
          onWeatherLocationClick={()=>handleWeatherLocationClick(city)}
          />))
  );

  return (
  <div className="locationList">
    {strToComponent(cities)}
  </div>);
}

LocationList.PropTypes={
  cities:PropTypes.array.isRequired,
  onSelectedLocation:PropTypes.func,
}

export default LocationList;