import { movies } from '../../ultis';
export const getDetailsById = (id) => movies.find((item) => item.id === id);
