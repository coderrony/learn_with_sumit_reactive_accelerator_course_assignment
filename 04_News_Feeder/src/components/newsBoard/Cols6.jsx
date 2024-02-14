import timeAgo from "../../utils/timeAgo";

function Cols6({ news }) {
  const { title, description, publishedAt } = news;
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
      <div className="col-span-12 md:col-span-4">
        <a href="#">
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl hover:text-[#00D991]">
            {title}
          </h3>
        </a>
        <p className="text-base text-[#292219]">
          {" "}
          {description ? description : "No Description are available!"}
        </p>
        <p className="mt-5 text-base text-[#94908C]">{timeAgo(publishedAt)}</p>
      </div>
    </div>
  );
}

export default Cols6;
