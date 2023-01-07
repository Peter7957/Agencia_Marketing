import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    /** ponerlo asi para que no se vea la cosa verde que no tengho idea que es */
    //applyMiddleware(...middleware)
    /*ponerlo asi para que se vea la cosa verde que no se que es*/
    composeWithDevTools(applyMiddleware(...middleware))

);

export default store;