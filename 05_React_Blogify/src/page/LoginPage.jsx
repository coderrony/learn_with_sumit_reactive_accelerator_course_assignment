import { Link, useNavigate } from "react-router-dom";
import Field from "../components/common/Field";
import { useForm } from "react-hook-form";
import useAuth from "./../hook/useAuth";
import { requestApi } from "../requestApi";

import ToastCall from "../utils/ToastCall";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const res = await requestApi.post(`/auth/login`, formData);
      if (res.status === 200) {
        setAuth({
          user: res?.data?.user,
          accessToken: res?.data?.token?.accessToken,
          refreshToken: res?.data?.token?.refreshToken,
        });
        navigate("/");
      }
    } catch (err) {
      ToastCall("error", `incorrect credentials ${err.message}`, "top-center");
    }
  };
  return (
    <main>
      <section className="container">
        <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="mb-6">
              <Field label="Email" error={errors.email}>
                <input
                  {...register("email", {
                    required: "Email Field is Require!",
                  })}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                />
              </Field>
            </div>
            <div className="mb-6">
              <Field label="Password" error={errors.password}>
                <input
                  {...register("password", {
                    required: "Password Field is Require!",
                  })}
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                />
              </Field>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Login
              </button>
            </div>
            <p className="text-center">
              Don't have an account?{" "}
              <Link
                to="/registration"
                className="text-indigo-600 hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
