import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Field from "../components/common/Field";
import { requestApi } from "../requestApi";
import ToastCall from "../utils/ToastCall";

function RegistrationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleRegistration = async (formData) => {
    try {
      const res = await requestApi.post(`/auth/register`, formData);

      if (res.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      ToastCall("error", `incorrect credentials ${err.message}`, "top-center");
    }
  };
  return (
    <main>
      <section className="container">
        <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <form onSubmit={handleSubmit(handleRegistration)}>
            <div className="mb-6">
              <Field label={"First Name"} error={errors.firstName}>
                <input
                  {...register("firstName", {
                    required: "First Name Field is Require!",
                  })}
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                />
              </Field>
            </div>
            <div className="mb-6">
              <Field label={"Last Name"} error={errors.lastName}>
                <input
                  {...register("lastName", {
                    required: "Last Name Field is Require!",
                  })}
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                />
              </Field>
            </div>
            <div className="mb-6">
              <Field label={"Email"} error={errors.email}>
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
              <Field label={"Password"} error={errors.password}>
                <input
                  {...register("password", {
                    required: "Password Field is Require!",
                    minLength: {
                      value: 8,
                      message: "Your password must be at least 8 characters",
                    },
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
                Create Account
              </button>
            </div>
            <p className="text-center">
              Already have account?{" "}
              <Link to="/login" className="text-indigo-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default RegistrationPage;
