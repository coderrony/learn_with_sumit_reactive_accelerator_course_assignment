import { getMovieById } from "@/utils/getMovieById";
import { getLanguage, processJson } from "@/utils/process_json";
import Image from "next/image";
import { notFound } from "next/navigation";

async function MovieDetails({ id, lang }) {
  const movies = await processJson();
  const language = await getLanguage(lang);
  const movie = getMovieById(movies, id);

  if (!movie) {
    notFound();
  }
  return (
    <section>
      <div>
        <Image
          className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
          src={movie?.backdrop_path}
          width={500}
          height={500}
          alt={movie?.original_title}
        />
      </div>

      <div className="grid grid-cols-12 py-12 gap-8">
        <div className="col-span-2">
          <Image
            src={movie?.backdrop_path}
            width={400}
            height={500}
            alt={movie?.original_title}
          />
        </div>
        <div className="col-span-8">
          <h2 className="font-bold text-slate-300 text-2xl">
            {movie?.original_title}
          </h2>
          <p className="my-2 text-slate-400 italic">{movie?.overview}</p>
          <ul className="text-slate-300 space-y-2 my-8">
            <li>
              {language.Release_Date} :{movie?.release_date}
            </li>
            <li>
              {language.Average_Vote} : {movie?.vote_average}
            </li>
            <li>
              {language.Vote_Count}: {movie?.vote_count}
            </li>
            <li>
              {language.Popularity} : {movie?.popularity}
            </li>
          </ul>
        </div>
        <div className="col-span-2 space-y-4">
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {language.Stream_In_HD}
          </button>
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {language.Download_In_HD}
          </button>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
