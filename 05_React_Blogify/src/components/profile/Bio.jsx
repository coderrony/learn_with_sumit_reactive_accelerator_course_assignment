import { useEffect, useState } from "react";
import useProfile from "../../hook/useProfile";
import editIcon from "../../assets/icons/edit.svg";
import checkIcon from "../../assets/icons/check.svg";
import useAxios from "../../hook/useAxios";
import { actions } from "../../actions";

import useIsMe from "../../hook/useIsMe";

function Bio() {
  const { state, dispatch } = useProfile();

  const [editMode, setEditMode] = useState(false);
  const { isMe } = useIsMe(state?.profileInfo?.id);
  const [bio, setBio] = useState("");
  const { requestApi } = useAxios();

  useEffect(() => {
    setBio(state?.profileInfo?.bio);
  }, [state?.profileInfo?.bio]);

  const handleBio = async () => {
    try {
      const res = await requestApi.patch(`/profile`, { bio });
      if (res.status === 200) {
        const { bio } = res.data.user;
        dispatch({ type: actions.profile.USER_DATA_EDITED, data: bio });
        setEditMode(false);
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {editMode ? (
          <textarea
            className="text-black p-2"
            value={bio}
            rows={4}
            cols={55}
            onChange={(e) => setBio(e.target.value)}
          />
        ) : (
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {state?.profileInfo?.bio}
          </p>
        )}
      </div>
      {isMe && editMode && (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={handleBio}
        >
          <img src={checkIcon} alt="Check" />
        </button>
      )}
      {isMe && !editMode && (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={() => setEditMode(true)}
        >
          <img src={editIcon} alt="Edit" />
        </button>
      )}
    </div>
  );
}

export default Bio;
