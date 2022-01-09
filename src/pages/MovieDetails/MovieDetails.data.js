import { movies } from '../../ultis';
export const getDetailsById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var find = movies.find((item) => item.id === id);
      if (find) {
        resolve(find);
      } else {
        reject([]);
      }
    }, 1000);
  });
};
