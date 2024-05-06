import { useEffect, useState } from "react";
import { requestApi } from "../../requestApi";
import PopularBlog from "../blogs/PopularBlog";
import ToastCall from "../../utils/ToastCall";

function PopularSide() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await requestApi.get("blogs/popular");

        if (res.status === 200) {
          setBlogs(res.data.blogs);
        }
      } catch (err) {
        // ToastCall(
        //   "error",
        //   `Something is wrong on Must popular blogs ${err.message}`,
        //   "top-center"
        // );
      }
    };
    fetchBlogs();
  }, []);
  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Most Popular 👍️
      </h3>

      <ul className="space-y-5 my-5">
        {blogs.map((blog) => (
          <PopularBlog key={blog.id} blog={blog} />
        ))}
      </ul>
    </div>
  );
}

export default PopularSide;
