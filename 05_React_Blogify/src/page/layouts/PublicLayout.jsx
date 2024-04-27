import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      Public
      <Outlet />
    </div>
  );
};
export default PublicLayout;
