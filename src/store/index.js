import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { city } from '../reducers/city';

const initialState = {
    city: 'Malaga,es'
};

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = createStore(
    city,
    initialState,
    composeEnhancers,
    window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION()
);
