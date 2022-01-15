import { data } from '../../ultis';

export const search = (keyword) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        data
          .filter((f) =>
            f.title.toLowerCase().includes(keyword.trim().toLowerCase())
          )
          .slice(0, 12)
      );
    }, 1000);
  });
};
