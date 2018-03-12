import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid';
import {createStore} from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/weatherlocation/LocationList';
import ForecastExtended from './components/weatherlocation/ForecastExtended';

import './App.css';

const cities=[
  'Malaga,es',
  'Buenos Aires,ar',
  'Madrid,es',
];

const store=createStore(()=>{},window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION());

class App extends Component {

  constructor(){
    super();
    this.state={city:null};
  }

  handleSelectionLocation=city=>{
    this.setState({city});
    store.dispatch({type:'setCity',value:city});
  }

  render() {
    const {city} = this.state;

    return (
      <MuiThemeProvider>
        <AppBar title="Weather App"></AppBar>
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <LocationList 
                cities={cities}
                onSelectedLocation={this.handleSelectionLocation}>
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  { city &&
                    <ForecastExtended city={city}></ForecastExtended>
                  }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
