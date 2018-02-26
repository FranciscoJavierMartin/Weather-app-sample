import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/weatherlocation/LocationList';

import './App.css';

const cities=[
  'Malaga,es',
  'Buenos Aires,ar',
  'Madrid,es',
];

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities}></LocationList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
