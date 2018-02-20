import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

//Hace uso de destructuring para extraer
// la propiedad city del objeto props de react
const Location= ({city}) =>{

  return (
    <div className="LocationCont">
      <h1>{city}</h1>
    </div>
  );
};

Location.prototype={
  city:PropTypes.string.isRequired,
};

export default Location;