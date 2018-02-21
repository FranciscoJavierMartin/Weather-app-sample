import React, {Component} from 'react';
import WeatherData from './weatherdata';
import Location from './Location';
import {
  CLOUD,
  CLOUDY,
  RAIN,
  SNOW,
  SUNNY_DAY,
  SUN,
  WINDY
} from '../../constants/weatherConst';

import './styles.css';

const data1={
  temperature:-5,
  weatherState:'CLOUD',
  humidity: 80,
  wind: '10 m/s',
}

const data2={
  temperature:20,
  weatherState:'SUNNY_DAY',
  humidity: 70,
  wind: '30 m/s',
}

class WeatherLocation extends Component{

  constructor(){
    super();
    this.state={
      city:'Málaga',
      data:data1,
    };
  }

  handleUpdateClick=()=>{
    var data=this.state.data===data1?data2:data1;

    this.setState({
      data
    });
  }

  render=()=>(
    <div className="weatherLocationCont">
      <Location city={this.state.city}></Location>
      <WeatherData data={this.state.data}></WeatherData>
      <button onClick={this.handleUpdateClick}>Update</button>
    </div>
  );
}


export default WeatherLocation;
