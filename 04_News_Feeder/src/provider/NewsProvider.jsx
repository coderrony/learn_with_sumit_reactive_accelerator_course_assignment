import { newsContext } from "../context";
import useNewsQuery from "../hook/useNewsQuery";
function NewsProvider({ children }) {
  const { loading, error, newsData } = useNewsQuery();
  return (
    <newsContext.Provider value={{ loading, error, newsData }}>
      {children}
    </newsContext.Provider>
  );
}

export default NewsProvider;
