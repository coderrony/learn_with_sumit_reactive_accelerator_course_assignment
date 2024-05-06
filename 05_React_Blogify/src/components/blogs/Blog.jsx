import ThreeDotIcon from "../../assets/icons/3dots.svg";
import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import { blogPath } from "../../utils";
import formatDate from "../../utils/formatData";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useIsMe from "./../../hook/useIsMe";

import BlogProfile from "./BlogProfile";
import useAxios from "../../hook/useAxios";
import ToastCall from "../../utils/ToastCall";
import useAuth from "../../hook/useAuth";

function Blog({ blog, deleteBlog }) {
  const [toggle, setToggle] = useState(false);
  const { auth } = useAuth();
  const { requestApi } = useAxios();

  const navigate = useNavigate();
  console.log(auth);
  // check each blog is my or not then i can delete and edit
  const { isMe } = useIsMe(blog?.author?.id);

  const handleEdit = () => {
    navigate(`/blog-update/${blog?.id}`);
  };

  const handleDelete = async () => {
    try {
      const res = await requestApi.delete(`/blogs/${blog?.id}`);

      if (res.status === 200) {
        // delete blog from two different reducer one is private (ProfileProvider)
        const onDeleteFromHome = deleteBlog.fromHome;
        const onDeleteFromProfile = deleteBlog.fromProfile;
        if (onDeleteFromHome !== null) {
          onDeleteFromHome(blog?.id);
        }
        if (onDeleteFromProfile !== null) {
          onDeleteFromProfile(blog?.id);
        }
        setToggle(false);
      }
    } catch (err) {
      // ToastCall("error", "Something is wrong", "top-center");
    }
  };

  return (
    <div className="blog-card">
      <Link to={`/blogDetails/${blog?.id}`}>
        {/* blog poster */}
        <img
          className="blog-thumb"
          src={`${blogPath}/${blog?.thumbnail}`}
          alt="poster"
        />
      </Link>

      <div className="mt-2 relative">
        <Link to={`/blogDetails/${blog?.id}`}>
          <a href="./single-blog.html">
            <h3 className="text-slate-300 text-xl lg:text-2xl">
              {blog?.title}
            </h3>
          </a>
          <p className="mb-6 text-base text-slate-500 mt-1">{blog?.content}</p>
        </Link>

        <div className="flex justify-between items-center">
          {/* Author Profile */}
          <Link to={`/profile/${blog?.author?.id}`}>
            <div className="flex items-center capitalize space-x-2">
              {/* blog post owner profile image */}

              {isMe ? (
                <BlogProfile
                  avatar={auth?.user?.avatar}
                  firstName={auth?.user?.firstName}
                  bgColor={"bg-orange-600"}
                />
              ) : (
                <BlogProfile
                  avatar={blog?.author?.avatar}
                  firstName={blog?.author?.firstName}
                  bgColor={"bg-orange-600"}
                />
              )}

              <div>
                <h5 className="text-slate-500 text-sm">
                  <a href="./profile.html">
                    {blog?.author?.firstName} {blog?.author?.lastName}
                  </a>
                </h5>
                <div className="flex items-center text-xs text-slate-700">
                  <span>{formatDate(blog?.createdAt)}</span>
                </div>
              </div>
            </div>
          </Link>

          <div className="text-sm px-2 py-1 text-slate-700">
            <span>{blog?.likes?.length} Likes</span>
          </div>
        </div>

        <div className="absolute right-0 top-0">
          {isMe && (
            <button onClick={() => setToggle((prev) => !prev)}>
              <img src={ThreeDotIcon} alt="3dots of Action" />
            </button>
          )}

          {isMe && toggle && (
            <div className="action-modal-container">
              <button
                className="action-menu-item hover:text-lwsGreen"
                onClick={handleEdit}
              >
                <img src={editIcon} alt="Edit" />
                Edit
              </button>
              <button
                className="action-menu-item hover:text-red-500"
                onClick={handleDelete}
              >
                <img src={deleteIcon} alt="Delete" />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;
