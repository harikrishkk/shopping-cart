import React, { useState } from 'react';
import AuthContext from '@context/auth-context';

const AuthWrapper = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const login = () => {
    setIsAuth(true);
  };
  const signout = () => {
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuth,
        login,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthWrapper;
