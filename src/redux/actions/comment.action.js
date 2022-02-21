import { DISLIKE, LIKE, LOAD_COMMENT } from '../constants/comment.constant';

export const commentActions = {
  load: (payload) => (dispatch) => {
    dispatch({
      type: LOAD_COMMENT,
      payload,
    });
  },
  like: (id) => (dispatch) => {
    dispatch({
      type: LIKE,
      payload: {
        id,
      },
    });
  },
  dislike: (id) => (dispatch) => {
    dispatch({
      type: DISLIKE,
      payload: {
        id,
      },
    });
  },
};
