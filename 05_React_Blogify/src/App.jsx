import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import RegistrationPage from "./page/RegistrationPage";
import ProfilePage from "./page/ProfilePage";
import NotFoundPage from "./page/NotFoundPage";
import MainRouter from "./router/MainRouter";
import BlogDetails from "./components/blogs/BlogDetails";
import PrivateRouter from "./router/PrivateRouter";
import BlogCreate from "./components/blogs/BlogCreate";
import BlogUpdate from "./components/blogs/BlogUpdate";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainRouter />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="blogDetails/:blogId" element={<BlogDetails />} />
      </Route>
      <Route element={<PrivateRouter />}>
        <Route path="profile/:profileId" element={<ProfilePage />} />
        <Route path="blog-create" element={<BlogCreate />} />
        <Route path="blog-update/:blogId" element={<BlogUpdate />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
