import { Link } from "react-router-dom";
import { blogPath } from "../../utils";
import formatDate from "./../../utils/formatData";

import BlogProfile from "./BlogProfile";
import useBlog from "./../../hook/useBlog";
function BlogHeader() {
  const { state } = useBlog();
  const tagsArray = state?.blogInfo?.tags?.split(",");

  return (
    <section>
      <div className="container text-center py-8">
        <h1 className="font-bold text-3xl md:text-5xl">
          {state?.blogInfo?.title}
        </h1>
        <div className="flex justify-center items-center my-4 gap-4">
          <Link to={`/profile/${state?.blogInfo?.author?.id}`}>
            <div className="flex items-center capitalize space-x-2">
              {/* Show Profile image for this post */}
              <BlogProfile
                avatar={state?.blogInfo?.author?.avatar}
                firstName={state?.blogInfo?.author?.firstName}
                bgColor={"bg-indigo-600"}
              />

              <h5 className="text-slate-500 text-sm">
                {state?.blogInfo?.author?.firstName}{" "}
                {state?.blogInfo?.author?.lastName}
              </h5>
            </div>
          </Link>

          <span className="text-sm text-slate-700 dot">
            {formatDate(state?.blogInfo?.createdAt)}
          </span>
          <span className="text-sm text-slate-700 dot">
            {state?.blogInfo?.likes?.length} Likes
          </span>
        </div>
        <img
          className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
          src={`${blogPath}/${state?.blogInfo?.thumbnail}`}
          alt="thumbnail"
        />

        <ul className="tags">
          {tagsArray?.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
          {state?.blogInfo?.content}
        </div>
      </div>
    </section>
  );
}

export default BlogHeader;
