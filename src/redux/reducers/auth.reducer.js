import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCESS,
} from '../constants/auth.constant';

const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true };
    case LOGOUT_SUCESS:
      return { ...state, isAuthenticated: false };
    case LOGIN_FAIL:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;
