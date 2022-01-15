import {
  DELETE_RATED,
  EDIT_RATED,
  LOAD_RATED,
  POST_RATED,
} from '../constants/rated.constant';
export const ratedActions = {
  loadRated: (payload) => (dispatch) => {
    return dispatch({
      type: LOAD_RATED,
      payload,
    });
  },
  postRated: (payload) => (dispatch) => {
    return dispatch({
      type: POST_RATED,
      payload,
    });
  },
  editRated: (payload) => (dispatch) => {
    return dispatch({
      type: EDIT_RATED,
      payload,
    });
  },
  deleteRated: (payload) => (dispatch) => {
    return dispatch({
      type: DELETE_RATED,
      payload,
    });
  },
};
