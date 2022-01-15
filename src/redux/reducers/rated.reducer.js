import {
  DELETE_RATED,
  EDIT_RATED,
  LOAD_RATED,
  POST_RATED,
} from '../constants/rated.constant';

const initialState = {
  data: [],
};

const ratedReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RATED:
      return { ...state, data: action.payload };
    case POST_RATED:
      var pNewData = [...state.data, { ...action.payload }];
      localStorage.setItem('rated', JSON.stringify(pNewData));
      return { ...state, data: pNewData };
    case DELETE_RATED:
      var dNewData = [...state.data.filter((f) => f.id !== action.payload)];
      localStorage.setItem('rated', JSON.stringify(dNewData));
      return { ...state, data: dNewData };
    case EDIT_RATED:
      var newData = state.data.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      localStorage.setItem('rated', JSON.stringify(newData));

      return { ...state, data: newData };
    default:
      return state;
  }
};

export default ratedReducer;
