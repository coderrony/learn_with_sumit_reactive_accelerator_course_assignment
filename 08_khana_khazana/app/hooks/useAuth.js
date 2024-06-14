"use client";

const { useContext } = require("react");
const { AuthContext } = require("../context");

const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);

  return { auth, setAuth };
};

export default useAuth;
