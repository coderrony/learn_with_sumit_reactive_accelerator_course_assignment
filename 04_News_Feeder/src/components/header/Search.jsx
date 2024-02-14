import searchImg from "../../assets/icons/search.svg";
import useDebounce from "./../../hook/useDebounce";
import { useContext, useState } from "react";
import { categoryContext } from "../../context/index";
import capitalizeFirstLetter from "./../../utils/capitalizeFirstLetter";
function Search() {
  const [isShow, setIsShow] = useState(false);
  const { category, setCategory } = useContext(categoryContext);
  const search = useDebounce((value) => {
    if (value !== "") {
      setCategory({
        ...category,
        value: capitalizeFirstLetter(value),
        type: "search",
      });
    } else {
      setCategory({
        ...category,

        value: "general",
        type: "filter",
      });
    }
  }, 500);
  const handleChange = (e) => {
    const value = e.target.value;
    search(value);
  };
  return (
    <div
      className={`flex  items-center space-x-2 py-2 px-3 group ${
        isShow && "bg-black/30"
      } transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md w-1/5`}
    >
      {" "}
      <input
        className={`bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none ${
          isShow ? "visible " : "invisible"
        }`}
        type="search"
        placeholder="Search News"
        onChange={handleChange}
        required
      />
      <button type="submit" onClick={() => setIsShow((prev) => !prev)}>
        <img src={searchImg} alt="Search" />
      </button>
    </div>
  );
}

export default Search;
