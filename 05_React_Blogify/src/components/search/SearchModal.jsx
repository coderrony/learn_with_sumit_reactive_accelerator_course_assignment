import { useState } from "react";
import CloseIcon from "../../assets/icons/close.svg";
import SearchCard from "./SearchCard";
import useDebounce from "../../hook/useDebounce";

import useAuth from "../../hook/useAuth";
import axios from "axios";
import ToastCall from "./../../utils/ToastCall";

function SearchModal({ onClose }) {
  const [result, setResult] = useState([]);
  const { auth } = useAuth();
  const debounce = useDebounce(async (value) => {
    const myHeaders = {
      Authorization: `Bearer ${auth?.accessToken}`,
    };
    try {
      const res = await axios.get(`http://localhost:3000/search?q=${value}`, {
        headers: myHeaders,
      });

      setResult(res?.data?.data);
    } catch (err) {
      ToastCall("error", "Try Later", "top-center");
    }
  }, 500);
  const handleQuery = (e) => {
    const value = e.target.value;
    if (value !== "") {
      debounce(e.target.value);
    } else {
      setResult([]);
    }
  };

  return (
    <section className="absolute left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
      <div className="relative w-6/12 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
        <div>
          <h3 className="font-bold text-xl pl-2 text-slate-400 my-2">
            Search for Your Desire Blogs
          </h3>
          <input
            type="text"
            placeholder="Start Typing to Search"
            onChange={handleQuery}
            className="w-full bg-transparent p-2 text-base text-white outline-none border-none rounded-lg focus:ring focus:ring-indigo-600"
          />
        </div>

        <div className="">
          <h3 className="text-slate-400 font-bold mt-6">
            {result.length > 0 ? "Search Results" : "No Search Results"}
          </h3>
          <div className="my-4 divide-y-2 divide-slate-500/30 max-h-[440px] overflow-y-scroll overscroll-contain">
            {result.map((res) => (
              <SearchCard key={res.id} blog={res} onClose={onClose} />
            ))}
          </div>
        </div>

        <button onClick={onClose}>
          <img
            src={CloseIcon}
            alt="Close"
            className="absolute right-2 top-2 cursor-pointer w-8 h-8"
          />
        </button>
      </div>
    </section>
  );
}

export default SearchModal;
