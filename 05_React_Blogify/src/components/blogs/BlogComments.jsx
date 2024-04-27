import { useState } from "react";
import useAuth from "../../hook/useAuth";
import BlogProfile from "./BlogProfile";
import useAxios from "./../../hook/useAxios";
import useBlog from "../../hook/useBlog";
import { actions } from "../../actions";
import ToastCall from "../../utils/ToastCall";
import Spinner from "../Spinner";
import deleteIcon from "../../assets/icons/delete.svg";

function BlogComments() {
  const { auth } = useAuth();
  const { state, dispatch } = useBlog();
  const { requestApi } = useAxios();
  const [content, setContent] = useState();

  const handleComment = async (e) => {
    e.preventDefault();
    dispatch({ type: actions.blog.DATA_FETCHING });
    try {
      const res = await requestApi.post(
        `/blogs/${state?.blogInfo?.id}/comment`,
        {
          content,
        }
      );
      dispatch({ type: actions.blog.DATA_FETCHED, data: res.data });
      setContent("");
    } catch (err) {
      ToastCall(
        "error",
        `Something is wrong on Blog Comment ${err.message}`,
        "top-center"
      );
    }
  };

  const handleDelete = async (id) => {
    if (auth) {
      const res = await requestApi.delete(
        `blogs/${state?.blogInfo?.id}/comment/${id}`
      );
      if (res.status === 200) {
        dispatch({
          type: actions?.blog?.DATA_COMMENT_DELETE,
          data: res?.data?.comments,
        });
      }
    } else {
      ToastCall("warn", `You Should Must Be Logged in`, "top-center");
    }
  };

  if (state?.loading) {
    return <Spinner />;
  }

  return (
    <section id="comments">
      <div className="mx-auto w-full md:w-10/12 container">
        <h2 className="text-3xl font-bold my-8">
          Comments ({state?.blogInfo?.comments?.length})
        </h2>
        <div className="flex items -center space-x-4">
          {auth && (
            <BlogProfile
              avatar={auth?.user?.avatar}
              firstName={auth?.user?.firstName}
              bgColor={"bg-indigo-600"}
            />
          )}

          <div className="w-full">
            <form onSubmit={handleComment}>
              <textarea
                className="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
                placeholder="Write a comment"
                disabled={auth ? false : true}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              {!auth && (
                <p className="text-red-400">
                  You Should logged in first for write comment
                </p>
              )}

              <div className="flex justify-end mt-4">
                <button
                  className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200 "
                  disabled={auth ? false : true}
                >
                  Comment
                </button>
              </div>
            </form>
          </div>
        </div>

        {state?.blogInfo?.comments?.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-4 my-8">
            {comment?.author?.id === auth?.user?.id ? (
              <BlogProfile
                avatar={auth?.user?.avatar}
                firstName={auth?.user?.firstName}
                bgColor={"bg-orange-600"}
              />
            ) : (
              <BlogProfile
                avatar={comment?.author?.avatar}
                firstName={comment?.author?.firstName}
                bgColor={"bg-orange-600"}
              />
            )}

            <div className="w-full">
              <h5 className="text-slate -500 font-bold">
                {comment?.author?.firstName} {comment?.author?.lastName}
              </h5>
              <div className="flex justify-between">
                <p className="text-slate-300">{comment.content}</p>
                {/* only logged in can delete there own comment */}
                {comment?.author?.id === auth?.user?.id && (
                  <button onClick={() => handleDelete(comment?.id)}>
                    <img src={deleteIcon} alt="deleteIcon" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogComments;
