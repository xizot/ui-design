import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCESS,
} from '../constants/auth.constant';

export const authActions = {
  loginSuccess: () => (dispatch) => {
    return dispatch({
      payload: {},
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
