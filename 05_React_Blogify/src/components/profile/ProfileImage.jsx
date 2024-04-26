import useProfile from "../../hook/useProfile";
import editIcon from "../../assets/icons/edit.svg";
import { avatarPath } from "../../utils";
import getFirstLetter from "../../utils/getFirstLetter";
import useIsMe from "../../hook/useIsMe";
import { useRef } from "react";
import useAxios from "../../hook/useAxios";
import useAuth from "../../hook/useAuth";
import { actions } from "../../actions";
import ToastCall from "./../../utils/ToastCall";
import Spinner from "./../Spinner";

function ProfileImage() {
  const { state, dispatch } = useProfile();
  const { auth, setAuth } = useAuth();
  const ref = useRef(null);
  const { requestApi } = useAxios();

  const { isMe } = useIsMe(state?.profileInfo?.id);

  const avatar = state?.profileInfo?.avatar ? (
    <img
      className="w-32 h-32 rounded-full mx-auto"
      src={`${avatarPath}/${state?.profileInfo?.avatar}`}
      alt={state?.profileInfo?.firstName}
    />
  ) : (
    <div className="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
      <span>{getFirstLetter(state?.profileInfo?.firstName)}</span>
    </div>
  );

  const handleAvatar = (e) => {
    e.preventDefault();
    ref.current.addEventListener("change", updateImageDisplay);
    ref.current.click();
  };
  const updateImageDisplay = async () => {
    const formData = new FormData();

    for (const file of ref.current.files) {
      formData.append("avatar", file);
    }
    dispatch({ type: actions.profile.DATA_FETCHING });
    try {
      const res = await requestApi.post(`/profile/avatar`, formData);
      if (res.status === 200) {
        const { avatar } = res.data.user;
        setAuth({
          ...auth,
          user: {
            ...auth.user,
            avatar,
          },
        });

        dispatch({ type: actions.profile.IMAGE_UPDATED, data: avatar });
      }
    } catch (err) {
      ToastCall("error", `incorrect credentials ${err.message}`, "top-center");
    }
  };

  if (state.loading) return <Spinner />;

  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      {avatar}

      {isMe && (
        <form>
          <button
            className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80"
            onClick={handleAvatar}
          >
            <img src={editIcon} alt="Edit" />
          </button>
          <input type="file" id="file" ref={ref} hidden />
        </form>
      )}
    </div>
  );
}

export default ProfileImage;
