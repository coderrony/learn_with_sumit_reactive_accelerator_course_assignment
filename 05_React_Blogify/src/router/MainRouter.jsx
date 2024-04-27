import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
function MainRouter() {
  console.log("main router calling");
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainRouter;
