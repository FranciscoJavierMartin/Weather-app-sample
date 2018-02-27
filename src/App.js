import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/weatherlocation/LocationList';

import './App.css';

const cities=[
  'Malaga,es',
  'Buenos Aires,ar',
  'Madrid,es',
];

class App extends Component {

  handleSelectionLocation=city=>{
    
  }

  render() {
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
                <div className="detail"></div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
