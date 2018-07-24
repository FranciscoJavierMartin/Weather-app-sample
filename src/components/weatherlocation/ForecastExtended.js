import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from '../forecastItem';
import transformForecast from '../../services/transformForecast';

import './styles.css';

const days=[
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes'
];

const API_KEY="45d933a3ce7066c3b349f818940370c4";
//const API_WEATHER=`http://samples.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${API_KEY}`;
const URL ='http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component{


  constructor(){
    super();
    this.state={
      forecastData:null,
    }
  }

  updateCity=city=>{

    const url_forecast=`${URL}?q=${city}&appid=${API_KEY}`;
  
    fetch(url_forecast)
      .then(data=>data.json())
      .then(weather_data=>{
        const forecastData=transformForecast(weather_data);
        this.setState({forecastData});
      });
  }

  componentDidMount(){
    this.updateCity(this.props.city);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.city!==this.props.city){
      this.setState({forecastData:null});
      this.updateCity(nextProps.city);
    }
  }

  renderForecastItemDays(forecastData){
    return days.map(forecast=>(
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay} 
        hour={forecast.hour}
        data={forecast.data}>
      </ForecastItem>));
  }

  renderProgress(){
  return (<h3>Cargando pronostico extendido</h3>);
  }

  render(){
    const {city}=this.props;
    const {forecastData}=this.state;
    return (
      <div>
        <h2 className='forecast-title'>Pronostico extendido para {city}</h2>
        {forecastData ?
          this.renderForecastItemDays(forecastData):
          this.renderProgress()
        }
      </div>);
  }
}

ForecastExtended.propTypes={
  city:PropTypes.string.isRequired,
}

export default ForecastExtended;