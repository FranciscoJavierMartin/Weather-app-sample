import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../weatherlocation/weatherdata';



const ForecastItem=({weekDay,hour,data})=>(
  <div>
    {weekDay} - {hour}
    <WeatherData data={data}></WeatherData>
  </div>
);

ForecastItem.propTypes={
  weekDay:PropTypes.string.isRequired,
  hour:PropTypes.number.isRequired,
}

export default ForecastItem;