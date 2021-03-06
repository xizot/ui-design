import { DISLIKE, LIKE, LOAD_COMMENT } from '../constants/comment.constant';

const initialState = {
  data: [
    {
      id: 1,
      score: 1.5,
      review: 'Phim rất hay. mọi người nên xem ',
      total_like: 1,
      total_dislike: 99,
      affect: 0,
      user: {
        fullname: 'Nguyễn Nhật',
      },
      created_at: 'Ngày 17 tháng 02 năm 2022, Lúc 19:12',
    },
    {
      id: 2,
      score: 4,
      review:
        'Lần đầu tiên mình đăng nhập để review 1 bộ phim. Quả thật phim này rất hay nhưng mà chưa xem.',
      total_like: 1,
      total_dislike: 19,
      affect: -1,
      user: {
        fullname: 'Nguyễn Gia Vương',
      },
      created_at: 'Ngày 11 tháng 01 năm 2022, Lúc 09:12',
    },
    {
      id: 3,
      score: 4.5,
      review: 'Càng xem càng ghiền',
      total_like: 15,
      total_dislike: 0,
      affect: 1,
      user: {
        fullname: 'Nguyễn Hiếu Đặng',
      },
      created_at: 'Ngày 13 tháng 02 năm 2022, Lúc 20:12',
    },
    {
      id: 4,
      score: 5,
      review: 'Phim đỉnh thật sự',
      total_like: 1,
      total_dislike: 0,
      affect: -1,
      user: {
        fullname: 'David Giấu Tên',
      },
      created_at: 'Ngày 10 tháng 02 năm 2022, Lúc 13:12',
    },
    {
      id: 5,
      score: 4.5,
      review: 'happy ending r. Haizzz lại chờ năm sau',
      total_like: 50,
      total_dislike: 0,
      affect: -1,
      user: {
        fullname: '__inau__',
      },
      created_at: 'Ngày 08 tháng 01 năm 2022, Lúc 12:12',
    },
    {
      id: 6,
      score: 5,
      review: 'Không hay',
      total_like: 3,
      total_dislike: 6,
      affect: -1,
      user: {
        fullname: 'Nguyễn Phạm Hiếu',
      },
      created_at: 'Ngày 07 tháng 12 năm 2021, Lúc 19:22',
    },
  ],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMMENT:
      return { ...state, data: action.payload };
    case LIKE:
      let existingIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      let existingItem = state.data[existingIndex];

      if (existingItem.affect === 1) {
        existingItem.total_like = existingItem.total_like - 1;
        existingItem.affect = -1;
      } else {
        if (existingItem.affect === 0) {
          existingItem.total_dislike = existingItem.total_dislike - 1;
        }
        existingItem.total_like = existingItem.total_like + 1;
        existingItem.affect = 1;
      }

      let newData = state.data.map((item) =>
        item.id === action.payload.id ? existingItem : item
      );
      localStorage.setItem('comments', JSON.stringify(newData));
      return {
        ...state,
        data: newData,
      };

    case DISLIKE: {
      let existingIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      let existingItem = state.data[existingIndex];
      if (existingItem.affect === 0) {
        existingItem.total_dislike = existingItem.total_dislike - 1;
        existingItem.affect = -1;
      } else {
        if (existingItem.affect === 1) {
          existingItem.total_like = existingItem.total_like - 1;
        }
        existingItem.total_dislike = existingItem.total_dislike + 1;
        existingItem.affect = 0;
      }
      let newData = state.data.map((item) =>
        item.id === action.payload.id ? existingItem : item
      );
      localStorage.setItem('comments', JSON.stringify(newData));
      return {
        ...state,
        data: newData,
      };
    }
    default:
      return state;
  }
};

export default commentReducer;
