import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import authReducer from './reducers/auth.reducer';
import ratedReducer from './reducers/rated.reducer';
import commentReducer from './reducers/comment.reducer';

const reducers = combineReducers({
  auth: authReducer,
  rated: ratedReducer,
  comment: commentReducer,
});

const middlewares = [thunk, createLogger()];

export const store = createStore(reducers, applyMiddleware(...middlewares));
