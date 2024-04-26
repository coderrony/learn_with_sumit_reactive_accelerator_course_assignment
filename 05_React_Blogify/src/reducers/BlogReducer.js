import { actions } from "../actions";

const initialState = {
  blogInfo: null,
  blogs: [],
  loading: false,
  error: null,
};

const blogReducer = (state, action) => {
  switch (action.type) {
    case actions.blog.DATA_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case actions.blog.BLOGS_DATA:
      return {
        ...state,
        loading: false,
        blogs: [...state.blogs, ...action.data],
      };
    case actions.blog.DATA_FETCHED:
      return {
        ...state,
        loading: false,
        blogInfo: action.data,
      };
    case actions.blog.DATA_FETCH_ERROR:
      return {
        ...state,
        loading: false,
      };
    case actions.blog.DATA_LIKE:
      return {
        ...state,
        loading: false,
        blogInfo: { ...state?.blogInfo, likes: action.data },
      };
    case actions.blog.DATA_FAVOURITE:
      return {
        ...state,
        loading: false,
        blogInfo: { ...state?.blogInfo, isFavourite: action.data },
      };
    case actions.blog.DATA_COMMENT_DELETE:
      return {
        ...state,
        loading: false,
        blogInfo: { ...state?.blogInfo, comments: action.data },
      };
    case actions.blog.BLOGS_DATA_EDIT:
      return {
        ...state,
        loading: false,
        blogs: state.blogs.map((blog) =>
          blog.id === action.data.id ? action.data.response : blog
        ),
      };
    case actions.blog.POST_DELETED:
      return {
        ...state,
        loading: false,
        blogs: state.blogs?.filter((blog) => blog.id !== action.id),
      };
    case actions.blog.DATA_CLEAR:
      return {
        blogInfo: null,
        blogs: [],
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export { initialState, blogReducer };
