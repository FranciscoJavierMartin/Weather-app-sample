import React from 'react';
import WeatherData from './weatherdata';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';

import './styles.css';

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
  <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
    <Location city={city}/>
    {data ? <WeatherData data={data}/> :
      <CircularProgress size={60} thickness={7} />}
  </div>
);

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
}

export default WeatherLocation;
