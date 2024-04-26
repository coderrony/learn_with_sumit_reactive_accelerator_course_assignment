import { useNavigate, useParams } from "react-router-dom";
import BlogHeader from "./BlogHeader";
import BlogComments from "./BlogComments";
import BlogAction from "./BlogAction";
import { useEffect } from "react";
import { requestApi } from "./../../requestApi/index";
import ToastCall from "./../../utils/ToastCall";

import useBlog from "../../hook/useBlog";
import { actions } from "../../actions";
import Spinner from "./../Spinner";

function BlogDetails() {
  const { blogId } = useParams();
  const { state, dispatch } = useBlog();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogInfo = async () => {
      dispatch({ type: actions?.blog?.DATA_FETCHING });
      try {
        const res = await requestApi.get(`/blogs/${blogId}`);
        if (res.status === 200) {
          dispatch({ type: actions.blog.DATA_FETCHED, data: res.data });
        }
      } catch (err) {
        ToastCall(
          "error",
          `Something is wrong on Blog Details ${err.message}`,
          "top-center"
        );

        navigate("/");
      }
    };
    fetchBlogInfo();
  }, [blogId]);

  if (state.loading) {
    return <Spinner />;
  }
  return (
    <main>
      <BlogHeader />
      <BlogComments />
      <BlogAction />
    </main>
  );
}

export default BlogDetails;
