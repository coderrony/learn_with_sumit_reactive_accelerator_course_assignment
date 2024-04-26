import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../hook/useAxios";
import ToastCall from "../../utils/ToastCall";
import Field from "../common/Field";
import { useForm } from "react-hook-form";
import useBlog from "../../hook/useBlog";
import { actions } from "../../actions";

function BlogUpdate() {
  const { blogId } = useParams();
  const { requestApi } = useAxios();
  const ref = useRef(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { dispatch } = useBlog();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    const fetchBlogInfo = async () => {
      try {
        const res = await requestApi.get(`/blogs/${blogId}`);
        if (res.status === 200) {
          setBlog(res?.data);
          // Set initial form values after fetching blog data
          setValue("title", res.data.title);
          setValue("tags", res.data.tags);
          setValue("content", res.data.content);
        }
      } catch (err) {
        ToastCall("error", `Something is wrong  ${err.message}`, "top-center");
      }
    };
    fetchBlogInfo();
  }, [blogId]);

  const handleCreatePost = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("tags", data.tags);
    if (ref.current.files.length > 0) {
      formData.append("thumbnail", ref.current.files[0]);
    }

    try {
      const res = await requestApi.patch(`/blogs/${blogId}`, formData);

      if (res.status === 200) {
        dispatch({
          type: actions.blog.BLOGS_DATA_EDIT,
          data: { id: res?.data?.id, response: res?.data },
        });

        navigate(`/blogDetails/${res?.data?.id}`);
      }
    } catch (err) {
      ToastCall("error", err.message, "top-center");
    }
  };
  const handleFile = (e) => {
    ref.current.click();
    if (ref?.current?.files?.length > 0) {
      setThumbnail(ref?.current?.files[0]?.name);
    }
  };

  return (
    <main>
      <section>
        <div className="container">
          <form
            onSubmit={handleSubmit(handleCreatePost)}
            className="createBlog"
          >
            <div className="grid place-items-center bg-slate-600/20 h-[150px] rounded-md my-4">
              <div
                className="flex items-center gap-4 hover:scale-110 transition-all cursor-pointer"
                onClick={handleFile}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <p>Update Your Thumbnail</p>

                <input
                  type="file"
                  id="thumbnail"
                  name="thumbnail"
                  onChange={handleFile}
                  hidden
                  ref={ref}
                />

                <p className="text-red-500 w-3">
                  {" "}
                  {thumbnail ? thumbnail : blog?.thumbnail}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <Field label="Title" error={errors.title}>
                <input
                  {...register("title", {
                    required: "title is required",
                  })}
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter your blog title"
                />
              </Field>
            </div>

            <div className="mb-6">
              <Field label={"Tags"} error={errors.tags}>
                <input
                  {...register("tags", {
                    required: "tags is required",
                  })}
                  type="text"
                  id="tags"
                  name="tags"
                  placeholder="Your Comma Separated Tags Ex. JavaScript, React, Node, Express,"
                />
              </Field>
            </div>

            <div className="mb-6">
              <Field label={"Content"} error={errors.content}>
                <textarea
                  {...register("content", {
                    required: "content is required",
                  })}
                  id="content"
                  name="content"
                  placeholder="Write your blog content"
                  rows="8"
                ></textarea>
              </Field>
            </div>

            <button className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
              Update Blog
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default BlogUpdate;
