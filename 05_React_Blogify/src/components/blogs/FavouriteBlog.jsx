import { Link } from "react-router-dom";

function FavouriteBlog({ blog }) {
  const tagsArr = blog?.tags?.split(", ");

  return (
    <li>
      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
        <Link to={`/blogDetails/${blog?.id}`}> {blog?.title}</Link>
      </h3>

      <p className="text-slate-600 text-sm">
        {tagsArr.map((tag) => `#${tag} `)}
      </p>
    </li>
  );
}

export default FavouriteBlog;
