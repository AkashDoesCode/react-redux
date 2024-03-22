import {applyMiddleware, legacy_createStore} from 'redux'
import rootReducer from './rootReducer';
import logger from 'redux-logger'
import {thunk} from 'redux-thunk'

const store = legacy_createStore(rootReducer,applyMiddleware(logger,thunk));

export default store