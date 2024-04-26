import { actions } from "../actions";

const initialState = {
  profileInfo: null,
  loading: false,
  error: null,
};

const ProfileReducer = (state, action) => {
  switch (action.type) {
    case actions.profile.DATA_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case actions.profile.DATA_FETCHED:
      return {
        ...state,
        loading: false,
        profileInfo: action.data,
      };
    case actions.profile.IMAGE_UPDATED:
      return {
        ...state,
        loading: false,
        profileInfo: { ...state.profileInfo, avatar: action.data },
      };
    case actions.profile.USER_DATA_EDITED:
      return {
        ...state,
        loading: false,
        profileInfo: { ...state.profileInfo, bio: action.data },
      };
    case actions.profile.PROFILE_BLOG_DELETE:
      return {
        ...state,
        loading: false,
        profileInfo: {
          ...state.profileInfo,
          blogs: state?.profileInfo?.blogs?.filter(
            (blog) => blog?.id !== action.id
          ),
        },
      };

    default:
      return state;
  }
};

export { ProfileReducer, initialState };
