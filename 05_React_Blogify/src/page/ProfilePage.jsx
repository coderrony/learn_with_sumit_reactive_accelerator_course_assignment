import { useParams } from "react-router-dom";

import { useEffect } from "react";
import useProfile from "./../hook/useProfile";
import { actions } from "../actions";
import useAuth from "../hook/useAuth";
import useIsMe from "../hook/useIsMe";
import ProfileInfo from "../components/profile/ProfileInfo";
import ToastCall from "../utils/ToastCall";
import { requestApi } from "../requestApi";

function ProfilePage() {
  const { dispatch } = useProfile();
  const { profileId } = useParams();

  const { auth, setAuth } = useAuth();

  const { isMe } = useIsMe(profileId);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await requestApi.get(`/profile/${profileId}`);

        const { firstName, lastName, email, avatar, bio, favourites } =
          res.data;
        if (res.status === 200) {
          if (isMe) {
            // async with another components like header in profile image
            setAuth({
              ...auth,
              user: {
                ...auth.user,
                firstName,
                lastName,
                email,
                avatar,
                bio,
                favourites,
              },
            });
          }

          dispatch({ type: actions.profile.DATA_FETCHED, data: res.data });
        }
      } catch (err) {
        ToastCall("error", err.message, "top-center");
      }
    };
    fetchProfile();
  }, [profileId, isMe]);

  return (
    <>
      <ProfileInfo />
    </>
  );
}

export default ProfilePage;
