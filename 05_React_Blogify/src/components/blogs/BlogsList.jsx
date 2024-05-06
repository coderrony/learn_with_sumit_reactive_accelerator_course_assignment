import { useEffect, useRef, useState } from "react";
import Spinner from "../Spinner";
import Blog from "./Blog";
import { requestApi } from "./../../requestApi/index";

import ToastCall from "../../utils/ToastCall";
import useBlog from "../../hook/useBlog";
import { actions } from "../../actions";
function BlogsList() {
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const { dispatch } = useBlog();
  const ref = useRef(null);
  // const blogs = state?.blogs;

  const fetchBlogs = async () => {
    try {
      const res = await requestApi.get(`/blogs?page=${page}&limit=3`);

      if (res.status === 200) {
        if (blogs.length >= res.data.total) {
          setHasNext(false);
        } else {
          setPage((prev) => prev + 1);
          setBlogs((prev) => [...prev, ...res?.data?.blogs]);

          dispatch({ type: actions.blog.BLOGS_DATA, data: res?.data?.blogs });
        }
      }
    } catch (err) {
      // ToastCall("error", `Something is wrong ${err.message}`, "bottom-center");
      setHasNext(false);
    }
  };

  useEffect(() => {
    // integrate infinite scroll
    const observer = new IntersectionObserver((items) => {
      const intersection = items[0];
      if (hasNext && intersection.isIntersecting) {
        fetchBlogs();
      }
    });

    if (observer && ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasNext, fetchBlogs]);

  const onHomeBlogDelete = (id) => {
    setBlogs((prev) => prev.filter((blog) => blog?.id !== id));
  };

  const deleteBlog = {
    fromHome: onHomeBlogDelete,
    fromProfile: null,
  };
  return (
    <div className="space-y-3 md:col-span-5">
      {blogs.map((blog) => (
        <Blog key={blog?.id} blog={blog} deleteBlog={deleteBlog} />
      ))}
      {hasNext ? (
        <Spinner ref={ref} />
      ) : (
        ToastCall("warn", "There are no blogs available", "bottom-center")
      )}
    </div>
  );
}

export default BlogsList;
