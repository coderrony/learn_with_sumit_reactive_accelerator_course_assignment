import { useReducer } from "react";
import { BlogContext } from "../context";
import { blogReducer, initialState } from "../reducers/BlogReducer";

function BlogProvider({ children }) {
  const [state, dispatch] = useReducer(blogReducer, initialState);
  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;
