import { useState } from "react";
import { AuthContext } from "./../context/index";
function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
