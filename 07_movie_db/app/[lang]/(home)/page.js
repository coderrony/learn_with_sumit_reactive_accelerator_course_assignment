import MovieCard from "@/components/MovieCard";
import { processJson } from "@/utils/process_json";

async function Home() {
  const movies = await processJson();

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
