import { data } from '../../ultis';

export const listNewMovies = () => {
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
export const listBestMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        data
          .filter((f) => f.vote_average > 8)
          .sort((a, b) => b.vote_average - a.vote_average)
          .slice(0, 10)
      );
    }, 1000);
  });
};
export const listBadMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        data
          .filter((f) => f.vote_average !== 0 && f.vote_average <= 5)
          .sort((a, b) => a.vote_average - b.vote_average)
          .slice(0, 10)
      );
    }, 1000);
  });
};
export const listPopular = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        data
          .sort((a, b) => b.vote_count - a.vote_count)
          .filter((f) => f.vote_average > 8.5)
          .slice(0, 3)
      );
    }, 1000);
  });
};
