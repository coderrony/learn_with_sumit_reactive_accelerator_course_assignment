import { Link } from "react-router-dom";

function PopularBlog({ blog }) {
  return (
    <li>
      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
        <Link to={`/blogDetails/${blog?.id}`}>{blog?.title}</Link>
      </h3>
      <p className="text-slate-600 text-sm">
        by
        <a href="./profile.html">
          {" "}
          {blog?.author?.firstName} {blog?.author?.lastName}
        </a>
        <span>·</span> {blog?.likes?.length} Likes
      </p>
    </li>
  );
}

export default PopularBlog;
