import React, {Component} from 'react';
import WeatherData from './weatherdata';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';

import './styles.css';
import transformWeather from '../../services/transformWeather';

const LOCATION="Malaga,es";
const API_KEY="f4c1055d7a8c9a5f5d7a04feb9335508";
const API_WEATHER=`http://samples.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${API_KEY}`;

class WeatherLocation extends Component{

  constructor(){
    super();
    this.state={
      city:'Málaga',
      data:null,
    };
  }

  loadData=()=>{
    fetch(API_WEATHER)
      .then(data=>{
        console.log(data);
        return data.json();
      })
      .then(weather_data =>{
        console.log(weather_data);
        //debugger;
        const data=transformWeather(weather_data);
        this.setState({data});
      })
  }

  componentWillMount(){
    this.loadData();
  }

  render=()=>(
    <div className="weatherLocationCont">
      <Location city={this.state.city}></Location>
      {this.state.data ? 
          <WeatherData data={this.state.data}></WeatherData>:
          <CircularProgress size={60} thickness={7} />}
    </div>
  );
}


export default WeatherLocation;
