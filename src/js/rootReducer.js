import { combineReducers } from 'redux';
import  searchReducer  from './components/SearchBar/searchReducer';
console.log(searchReducer);
const rootReducer = combineReducers({
      searchReducer, 
// add reducers
});

export default rootReducer;
