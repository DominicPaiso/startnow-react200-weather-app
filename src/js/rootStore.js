import { createStore, applyMiddleware, compose } from 'redux';
import {combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './rootReducer';
import actionCreators from './components/SearchBar/searchAction';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  actionCreators
})
: compose;
const rootStore = createStore(rootReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware()))
);

export default rootStore;
