import React, {Component} from 'react';
import WeatherData from './weatherdata';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';

import './styles.css';
import transformWeather from '../../services/transformWeather';

//const LOCATION="Malaga,es";
const API_KEY="45d933a3ce7066c3b349f818940370c4";
//const API_WEATHER=`http://samples.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${API_KEY}`;
const URL ='http://api.openweathermap.org/data/2.5/weather';

class WeatherLocation extends Component{

  constructor({city}){
    super();
    this.state={
      city,
      data:null,
    };
  }

  loadData=()=>{
    const url=`${URL}?q=${this.state.city}&appid=${API_KEY}`
    fetch(url)
      .then(data=>{
        console.log(data);
        return data.json();
      })
      .then(weather_data =>{
        console.log(weather_data);
        //debugger;
        const data=transformWeather(weather_data);
        //debugger
        this.setState({data});
      })
  }

  componentWillMount(){
    this.loadData();
  }

  render=()=>{

    const {onWeatherLocationClick}=this.props;

    return (<div className="weatherLocationCont" onClick={onWeatherLocationClick}>
      <Location city={this.state.city}></Location>
      {this.state.data ? 
          <WeatherData data={this.state.data}></WeatherData>:
          <CircularProgress size={60} thickness={7} />}
    </div>
  )};
}

WeatherLocation.propTypes={
  city:PropTypes.string,
  onWeatherLocationClick:PropTypes.func,
}

export default WeatherLocation;
