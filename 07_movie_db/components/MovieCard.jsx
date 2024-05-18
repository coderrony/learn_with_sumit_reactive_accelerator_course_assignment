import Image from "next/image";
import Link from "next/link";

function MovieCard({ movie }) {
  return (
    <div className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <Image
        className=""
        width={500}
        height={500}
        src={movie?.backdrop_path}
        alt="movie"
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{movie?.original_title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
        <div className="flex items-center space-x-1 mb-5">
          <Image src="/star.svg" width={14} height={14} alt="star" />
          <Image src="/star.svg" width={14} height={14} alt="star" />
          <Image src="/star.svg" width={14} height={14} alt="star" />
          <Image src="/star.svg" width={14} height={14} alt="star" />
          <Image src="/star.svg" width={14} height={14} alt="star" />
        </div>
        <Link
          href={`/movies/${movie?.id}`}
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
        >
          <Image src="/tag.svg" width={14} height={14} alt="tag" />
          <span>Details</span>
        </Link>
      </figcaption>
    </div>
  );
}

export default MovieCard;
