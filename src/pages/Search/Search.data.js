import { data } from '../../ultis';

export const search = (keyword, orderby = 'score', type = 'desc') => {
  console.log(type, orderby);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        data
          .filter((f) =>
            f.title.toLowerCase().includes(keyword.trim().toLowerCase())
          )
          .slice(0, 12)
          .sort((a, b) => {
            if (orderby === 'time' && type === 'asc') {
              return (
                new Date(a.release_date).getTime() -
                new Date(b.release_date).getTime()
              );
            } else if (orderby === 'score') {
              if (type === 'desc') {
                return Number(b.vote_average) - Number(a.vote_average);
              } else {
                return Number(a.vote_average) - Number(b.vote_average);
              }
            }
            return (
              new Date(b.release_date).getTime() -
              new Date(a.release_date).getTime()
            );
          })
      );
    }, 500);
  });
};
