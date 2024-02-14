import { useState } from "react";
import { categoryContext } from "../context";
function CategoryProvider({ children }) {
  const [category, setCategory] = useState({
    type: "filter",
    value: "general",
  });
  return (
    <categoryContext.Provider value={{ category, setCategory }}>
      {children}
    </categoryContext.Provider>
  );
}

export default CategoryProvider;
