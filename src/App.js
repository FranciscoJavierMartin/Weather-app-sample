import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import LocationListContainer from './containers/LocationListContainer';
import { setCity } from './actions';

import './App.css';

const cities = [
  'Malaga,es',
  'Buenos Aires,ar',
  'Madrid,es',
];

class App extends Component {

  constructor() {
    super();
    this.state = { city: null };
  }

  render() {
    const { city } = this.state;

    return (
      <MuiThemeProvider>
        <AppBar title="Weather App"></AppBar>
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities}>
              </LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                    <ForecastExtendedContainer></ForecastExtendedContainer>
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