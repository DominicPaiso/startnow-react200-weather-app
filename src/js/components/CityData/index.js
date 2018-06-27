import { connect } from 'react-redux';
import CityData from './CityData';

function mapStoreToProps(store) {
    console.log(store);
    return {
        city: store.searchReducer.city,
        name: store.searchReducer.name,
        lat: store.searchReducer.lat,
        lon: store.searchReducer.lon,
        icon: store.searchReducer.icon,
        temp: store.searchReducer.temp,
        pressure: store.searchReducer.pressure,
        humidity: store.searchReducer.humidity,
        temp_min: store.searchReducer.temp_min,
        temp_max: store.searchReducer.temp_max,
        wind_speed: store.searchReducer.wind_speed
    };
}

export default connect(mapStoreToProps)(CityData);