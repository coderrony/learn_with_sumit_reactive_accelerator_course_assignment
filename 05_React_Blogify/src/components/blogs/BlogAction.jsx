import likeIcon from "../../assets/icons/like.svg";
import heartIcon from "../../assets/icons/heart.svg";
import heartFillIcon from "../../assets/icons/heart-filled.svg";
import likeFilledIcon from "../../assets/icons/like-filled.svg";

import commentIcon from "../../assets/icons/comment.svg";
import useBlog from "../../hook/useBlog";
import useAuth from "../../hook/useAuth";
import ToastCall from "../../utils/ToastCall";

import useAxios from "./../../hook/useAxios";
import { actions } from "../../actions";
function BlogAction() {
  const { state, dispatch } = useBlog();
  const { auth } = useAuth();
  const { requestApi } = useAxios();

  const info = state?.blogInfo;

  // check this block is already like or not to login user
  const isLiked = info?.likes?.some((like) => like.id === auth?.user?.id);

  const handleLike = async () => {
    if (auth) {
      try {
        const res = await requestApi.post(`/blogs/${info?.id}/like`);
        if (res.status === 200) {
          dispatch({ type: actions.blog.DATA_LIKE, data: res?.data?.likes });
        }
      } catch (err) {
        ToastCall("error", `Something is wrong  ${err.message}`, "top-center");
      }
    } else {
      ToastCall("warn", `You Should Must Be Logged in`, "top-center");
    }
  };
  const handleFavourite = async () => {
    if (auth) {
      try {
        const res = await requestApi.patch(`blogs/${info?.id}/favourite`);
        if (res.status === 200) {
          console.log(res);
          dispatch({
            type: actions.blog.DATA_FAVOURITE,
            data: res?.data?.isFavourite,
          });
        }
      } catch (err) {
        ToastCall("error", `Something is wrong  ${err.message}`, "top-center");
      }
    } else {
      ToastCall("warn", `You Should Must Be Logged in`, "top-center");
    }
  };

  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <li onClick={handleLike}>
          <img src={isLiked ? likeFilledIcon : likeIcon} alt="like" />
          <span>{info?.likes?.length}</span>
        </li>

        <li onClick={handleFavourite}>
          <img
            src={info?.isFavourite && auth ? heartFillIcon : heartIcon}
            alt="Favourite"
          />
        </li>
        <a href="#comments">
          <li>
            <img src={commentIcon} alt="Comments" />
            <span>{info?.comments?.length}</span>
          </li>
        </a>
      </ul>
    </div>
  );
}

export default BlogAction;
