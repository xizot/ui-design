import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import authReducer from './reducers/auth.reducer';
import ratedReducer from './reducers/rated.reducer';

const reducers = combineReducers({
  auth: authReducer,
  rated: ratedReducer,
});

const middlewares = [thunk, createLogger()];

export const store = createStore(reducers, applyMiddleware(...middlewares));
