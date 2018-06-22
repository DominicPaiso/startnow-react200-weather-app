import { connect } from 'react-redux';
import CityData from './CityData';

function mapStoreToProps(store) {
    console.log(store);
    return {
         city: store.city.city,
    };
}

export default connect(mapStoreToProps)(CityData);