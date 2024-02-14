import notImgFound from "../../assets/img-not_found.png";
import timeAgo from "../../utils/timeAgo";

function Cols8({ news }) {
  const { title, description, urlToImage, publishedAt } = news;
  return (
    <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
      <div className="col-span-12 md:col-span-6">
        <a href="#">
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl hover:text-[#00D991]">
            {title}
          </h3>
        </a>
        <p className="text-base text-[#292219]">
          {" "}
          {description ? description : "No Description are available!"}
        </p>
        <p className="mt-5 text-base text-[#5C5955]">{timeAgo(publishedAt)}</p>
      </div>

      <div className="col-span-12 md:col-span-6">
        <img
          className="w-full "
          src={urlToImage ? urlToImage : notImgFound}
          alt="thumb"
        />
      </div>
    </div>
  );
}

export default Cols8;
