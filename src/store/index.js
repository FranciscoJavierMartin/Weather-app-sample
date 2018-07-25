import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const initialState = {
    city: 'Malaga,es'
};

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);
