import { applyMiddleware, configureStore, compose, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';

const initialState ={};
const reducer = combineReducers({
    productList: productListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({reducer}, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;