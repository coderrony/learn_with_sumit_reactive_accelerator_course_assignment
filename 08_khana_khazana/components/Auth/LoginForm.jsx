"use client";

import { performLogin } from "@/app/actions";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LoginForm() {
  const [error, setError] = useState(null);
  const router = useRouter();
  const { setAuth } = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    try {
      const found = await performLogin(formData);
      if (found) {
        setAuth(found);

        router.push("/");
      } else {
        setError("Provided Credentials are Wrong");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div>
      {error && <p className="text-red-400">{error}</p>}
      <form className="login-form" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
