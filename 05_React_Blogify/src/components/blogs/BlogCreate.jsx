import { useForm } from "react-hook-form";

import Field from "../common/Field";
import { useRef, useState } from "react";
import useAxios from "../../hook/useAxios";
import { useNavigate } from "react-router-dom";
import ToastCall from "../../utils/ToastCall";
import useBlog from "../../hook/useBlog";
import { actions } from "../../actions";

function BlogCreate() {
  const ref = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [thumbnail, setThumbnail] = useState("");
  const navigate = useNavigate();
  const { requestApi } = useAxios();
  const { dispatch } = useBlog();
  const handleCreatePost = async (data) => {
    if (ref.current.files.length > 0) {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("tags", data.tags);
      formData.append("thumbnail", ref.current.files[0]);

      try {
        const res = await requestApi.post(`/blogs/`, formData);

        if (res.status === 201) {
          dispatch({ type: actions.blog.BLOGS_DATA, data: [res?.data?.blog] });

          navigate(`/blogDetails/${res?.data?.blog?.id}`);
        }
      } catch (err) {
        ToastCall("error", err.message, "top-center");
      }
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
                onClick={() => ref.current.click()}
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

                <p>Upload Your Image</p>

                <input
                  type="file"
                  id="thumbnail"
                  name="thumbnail"
                  hidden
                  ref={ref}
                  onChange={handleFile}
                />

                <p className="text-red-500">
                  {" "}
                  {thumbnail ? thumbnail : "Thumbnail is Required!"}
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
              Create Blog
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default BlogCreate;
