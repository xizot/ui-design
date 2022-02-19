import { data } from '../../../ultis';
import { fakeLoading } from '../../../ultis/reusable';
export const listMovies = () => {
  return fakeLoading(() =>
    data
      .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
      .slice(0, 10)
  );
};
