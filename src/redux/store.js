import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './reducers/auth.reducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const reducers = combineReducers({
  auth: authReducer,
});

const middlewares = [thunk, createLogger()];

export const store = createStore(reducers, applyMiddleware(...middlewares));
