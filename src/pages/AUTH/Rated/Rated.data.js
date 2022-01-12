import { data } from '../../../ultis';
export const listMovies = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          data
            .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
            .slice(0, 10)
        );
      }, 1000);
    });
  };