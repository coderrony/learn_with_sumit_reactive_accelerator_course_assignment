import LogoImg from "../../assets/logo.svg";
import SearchIcon from "../../assets/icons/search.svg";

import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";

import BlogProfile from "../blogs/BlogProfile";
import { useState } from "react";
import SearchModal from "../search/SearchModal";
import usePortal from "../../hook/usePortal";
import useBlog from "../../hook/useBlog";
import { actions } from "../../actions";

function Header() {
  const { auth, setAuth } = useAuth();
  const { dispatch } = useBlog();
  const [searchToggle, setSearchToggle] = useState(false);

  const navigate = useNavigate();
  const portalElement = usePortal("show-modal");

  const handleLogOut = () => {
    setAuth(null);
    dispatch({ type: actions.blog.DATA_CLEAR });
    navigate("/login");
  };

  return (
    <header>
      <nav className="container">
        <div>
          <Link to="/">
            <img className="w-32" src={LogoImg} alt="lws" />
          </Link>
        </div>

        <div>
          {searchToggle &&
            portalElement(
              <SearchModal onClose={() => setSearchToggle(false)} />
            )}
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                to="blog-create"
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Write
              </Link>
            </li>
            {auth && (
              <li>
                <button
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setSearchToggle(true)}
                >
                  <img src={SearchIcon} alt="Search" />
                  <span>Search</span>
                </button>
              </li>
            )}

            {/* user already logged in then not show login */}
            {auth === null ? (
              <li>
                <Link
                  to="/login"
                  href="./login.html"
                  className="text-white/50 hover:text-white transition-all duration-200"
                >
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <button
                  className="text-white/50 hover:text-white transition-all duration-200"
                  onClick={handleLogOut}
                >
                  Log out
                </button>
              </li>
            )}

            {/* show profile only stay logged in */}
            {auth && (
              <Link to={`/profile/${auth?.user?.id}`}>
                <li className="flex items-center">
                  <BlogProfile
                    avatar={auth?.user?.avatar}
                    firstName={auth?.user?.firstName}
                    bgColor={"bg-orange-600"}
                  />

                  <span className="text-white ml-2">
                    {auth?.user?.firstName} {auth?.user?.lastName}
                  </span>
                </li>
              </Link>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
