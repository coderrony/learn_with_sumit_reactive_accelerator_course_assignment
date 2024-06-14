"use client";

import useAuth from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

function LoginLogout() {
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  const logout = () => {
    setAuth(null);
    router.push("/login");
  };
  return (
    <div>
      {auth ? (
        <>
          <span className="mx-2"> Hello, {auth?.firstName}</span>

          <button
            className="cursor-pointer py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center"
            onClick={logout}
          >
            Logout
          </button>
        </>
      ) : (
        <Link href={"/login"}>
          <button  className="cursor-pointer py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">Login</button>
        </Link>
      )}
    </div>
  );
}

export default LoginLogout;
