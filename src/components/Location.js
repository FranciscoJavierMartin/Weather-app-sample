import React from 'react';

//Hace uso de destructuring para extraer
// la propiedad city del objeto props de react
const Location= ({city}) =>{

  return (
    <div>
      <h1>{city}</h1>
    </div>
  );
};

export default Location;