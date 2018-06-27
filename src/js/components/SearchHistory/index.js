import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
    return {
        history: store.searchReducer.history,
        name:store.searchReducer.name
    };
}

export default connect(mapStoreToProps)(SearchHistory);