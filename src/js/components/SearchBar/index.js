import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
    return {
        city: store.searchReducer.city,
        history: store.searchReducer.history
    };
}

export default connect(mapStoreToProps)(SearchBar);