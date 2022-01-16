import { data } from '../../ultis';
export const getDetailsById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var find = data.find((item) => item.id === id);
      if (find) {
        resolve(find);
      } else {
        reject([]);
      }
    }, 1000);
  });
};
export const getFakeReview = () => {
  const data = [
    {
      score: 4,
      name: 'Nguyễn Văn Thắng',
      img: null,
      review:
        'Phim khá hay tui lúc đầu hơi khó hiểu nhưng cố gắng gắn kết câu chuyện thì không hiểu thật',
      numberLike: 1,
      numberDislike: 10,
    },
    {
      score: 3,
      name: 'Nguyễn Thế Hoàng',
      img: null,
      review: 'Phim gì mà nhiều diễn viên quy tụ xịn vậy trời',
      numberLike: 1,
      numberDislike: 4,
    },
    {
      score: 2.5,
      name: 'David Nhật',
      img: null,
      review:
        'Trong một thế giới của hai thực tại-cuộc sống hàng ngày và những gì ẩn chứa đằng sau nó-Thomas Anderson sẽ phải lựa chọn đi theo con thỏ trắng một lần nữa. Sự lựa chọn, trong khi chỉ là ảo ảnh, vẫn là cách duy nhất để vào hoặc ra khỏi Ma trận, mạnh hơn, an toàn hơn, và nguy hiểm hơn bao giờ hết.',
      numberLike: 22,
      numberDislike: 24,
    },
    {
      score: 5,
      name: 'Nguyễn Gia Huy',
      img: null,
      review: 'Good Movie',
      numberLike: 12,
      numberDislike: 144,
    },
  ];
  return data;
};
