import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext";

export function useAuth() {
  return useContext(AuthContext);
}
function LoginState(props) {
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <div>
      <AuthContext.Provider value={value}>
        {props.children}
      </AuthContext.Provider>
    </div>
  );
}

export default LoginState;
