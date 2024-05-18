import MovieDetails from "@/components/MovieDetails";

function MovieDetailsPage({ params: { movieId, lang } }) {
  return <MovieDetails id={movieId} lang={lang} />;
}

export default MovieDetailsPage;
