import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hook/useAuth";
import Header from "../components/common/Header";
import { useEffect } from "react";
import ToastCall from "../utils/ToastCall";
import ProfileProvider from "../provider/ProfileProvider";
import Footer from "../components/common/Footer";

function PrivateRouter() {
  const { auth } = useAuth();

  useEffect(() => {
    if (!auth?.accessToken) {
      ToastCall("warn", "You Should First Log in", "top-center");
    }
  }, [auth]);

  if (!auth?.accessToken) {
    return <Navigate to="/login" />;
  }

  return (
    <ProfileProvider>
      <Header />
      <Outlet />
      <Footer />
    </ProfileProvider>
  );
}

export default PrivateRouter;
