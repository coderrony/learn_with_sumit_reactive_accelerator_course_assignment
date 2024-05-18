export const getMovieById = (movies, id) => {
  const findMovie = movies.find((m) => m.id === Number(id));

  return findMovie;
};
