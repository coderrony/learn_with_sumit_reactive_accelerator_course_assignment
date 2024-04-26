import useProfile from "../../hook/useProfile";
import Blog from "../blogs/Blog";
import Bio from "./Bio";
import ProfileImage from "./ProfileImage";
import { actions } from "../../actions";

function ProfileInfo() {
  const { state, dispatch } = useProfile();
  const deleteProfilePost = (id) => {
    dispatch({ type: actions.profile.PROFILE_BLOG_DELETE, id: id });
  };
  const deleteBlog = {
    fromHome: null,
    fromProfile: deleteProfilePost,
  };

  return (
    <div className="mx-auto max-w-[1020px] py-8">
      <div className="container">
        <div className="flex flex-col items-center py-8 text-center">
          <ProfileImage />
          <div>
            <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
              {state?.profileInfo?.firstName} {state?.profileInfo?.lastName}
            </h3>
            <p className="leading-[231%] lg:text-lg">
              {state?.profileInfo?.email}
            </p>
          </div>
          <Bio />
          <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
        </div>
        {state?.profileInfo?.blogs?.length > 0 && (
          <>
            <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
            <div className="my-6 space-y-4">
              {state?.profileInfo?.blogs.map((blog) => (
                <Blog key={blog?.id} blog={blog} deleteBlog={deleteBlog} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileInfo;
