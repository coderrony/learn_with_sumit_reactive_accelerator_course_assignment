import useAuth from "../../hook/useAuth";
import FavouriteSide from "./FavouriteSide";
import PopularSide from "./PopularSide";
function SideBar() {
  const { auth } = useAuth();
  return (
    <div className="md:col-span-2 h-full w-full space-y-5">
      <PopularSide />
      {auth && <FavouriteSide />}
    </div>
  );
}

export default SideBar;
