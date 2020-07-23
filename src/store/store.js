import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import thunk from './middleware/thunk.js'
import cartReducer from './cartReducer';
import categoriesReducer from './categoriesReducer';
import productReducer from './productReducer';


let reducers = {
    cart: cartReducer,
    categories: categoriesReducer,
    products: productReducer,
};

const store = () => createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));

export default store();