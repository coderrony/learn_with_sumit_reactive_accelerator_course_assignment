import notImgFound from "../../assets/img-not_found.png";
import timeAgo from "../../utils/timeAgo";
function Cols12({ news }) {
  const { author, title, description, urlToImage, publishedAt } = news;
  return (
    <div className="col-span-12 grid grid-cols-12 gap-4 ">
      <div className="col-span-12 lg:col-span-4">
        <a href="#">
          <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px] hover:text-[#00D991]">
            {title}
          </h3>
        </a>
        <p className="text-base text-[#5C5955]">
          {description ? description : "No Description are available!"}
        </p>
        <p className="mt-5 text-base text-[#5C5955]">{timeAgo(publishedAt)}</p>
      </div>

      <div className="col-span-12 lg:col-span-8">
        <img
          className="w-full"
          src={urlToImage ? urlToImage : notImgFound}
          alt="thumb"
        />
        <p className="mt-5 text-base text-[#5C5955]">Illustration: {author}</p>
      </div>
    </div>
  );
}

export default Cols12;
