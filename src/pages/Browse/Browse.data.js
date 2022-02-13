import { data } from '../../ultis';

export const BrowsePopulars = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data.sort((a, b) => b.vote_count - a.vote_count).slice(0, 15));
    }, 500);
  });
};
export const BrowseNews = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        data
          .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
          .slice(0, 16)
      );
    }, 500);
  });
};

export const BrowseHigh = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        data
          .filter((f) => f.vote_average > 8)
          .sort((a, b) => b.vote_average - a.vote_average)
          .slice(0, 16)
      );
    }, 500);
  });
};

export const BrowseLow = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        data
          .filter((f) => f.vote_average < 5)
          .sort((a, b) => new Date(a.vote_average) - new Date(b.vote_average))
          .slice(0, 16)
      );
    }, 500);
  });
};
