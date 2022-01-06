import { movies } from "../../ultis";

export const listNewMovies = movies
  .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
  .slice(0, 10);
export const listBestMovies = movies
  .filter((f) => f.vote_average > 8)
  .sort((a, b) => b.vote_average - a.vote_average)
  .slice(0, 10);
export const listBadMovies = movies
  .filter((f) => f.vote_average !== 0 && f.vote_average <= 5)
  .sort((a, b) => a.vote_average - b.vote_average)
  .slice(0, 10);
export const listPopular = movies
  .sort((a, b) => b.vote_count - a.vote_count)
  .filter((f) => f.vote_average > 8.5)
  .slice(0, 3);
console.log(listPopular);
