import { useEffect, useState } from "react";

import FavouriteBlog from "../blogs/FavouriteBlog";
import ToastCall from "../../utils/ToastCall";
import useAxios from "../../hook/useAxios";

function FavouriteSide() {
  const [blogs, setBlogs] = useState([]);
  const { requestApi } = useAxios();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await requestApi.get(`/blogs/favourites`);
        if (res.status === 200) {
          setBlogs(res.data.blogs);
        }
      } catch (err) {
        ToastCall(
          "error",
          `Something is wrong on Favourite blogs ${err.message}`,
          "top-center"
        );
      }
    };
    fetchBlog();
  }, []);

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Your Favourites ❤️
      </h3>

      <ul className="space-y-5 my-5">
        {blogs?.length > 0 &&
          blogs?.map((blog) => <FavouriteBlog key={blog.id} blog={blog} />)}
      </ul>
    </div>
  );
}

export default FavouriteSide;
