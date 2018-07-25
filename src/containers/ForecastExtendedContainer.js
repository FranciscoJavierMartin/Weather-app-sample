import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ForecastExtended } from '../components/weatherlocation';
import { getForecastDataFromCities } from '../reducers';
import { connect } from 'react-redux';

class ForecastExtendedContainer extends Component {

    render() {
        const { city, forecastData } = this.props;
        return (
            this.props.city &&
            <ForecastExtended city={city} forecastData={forecastData}></ForecastExtended>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.string
};

const mapStateToProps = state => ({ 
    city: state.city,
    forecastData: getForecastDataFromCities(state.cities, state.city)
});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);

