import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCESS,
} from '../constants/auth.constant';

const initialState = {
  isAuthenticated: false,
  isError: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem(
        'auth',
        JSON.stringify({ isAuthenticated: true, user: action.payload })
      );
      return { ...state, isAuthenticated: true, isError: false };
    case LOGOUT_SUCESS:
      return { ...state, isAuthenticated: false, isError: false };
    case LOGIN_FAIL:
      return { ...state, isAuthenticated: false, isError: true };
    default:
      return state;
  }
};

export default authReducer;
