import { users } from '../../ultis/user';
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCESS,
} from '../constants/auth.constant';

export const authActions = {
  login: (email, password) => (dispatch) => {
    var isExisting = users.find(
      (user) => user.email === email && user.password === password
    );
    if (isExisting) {
      dispatch({
        payload: isExisting,
        type: LOGIN_SUCCESS,
      });
    } else {
      dispatch({
        payload: {},
        type: LOGIN_FAIL,
      });
    }
    return isExisting;
  },

  loginSuccess: (payload) => (dispatch) => {
    return dispatch({
      payload: payload,
      type: LOGIN_SUCCESS,
    });
  },
  logoutSuccess: () => (dispatch) => {
    return dispatch({
      payload: {},
      type: LOGOUT_SUCESS,
    });
  },
  loginFail: () => (dispatch) => {
    return dispatch({
      payload: {},
      type: LOGIN_FAIL,
    });
  },
};
