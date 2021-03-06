import { createStore, combineReducers, applyMiddleware } from 'redux';
import Reducer from './reducer.js';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

const reducers = {
	todoApp: Reducer,
	form: formReducer
};

const store = createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware));

export default store;
