import React from 'react';

const AuthContext = React.createContext({
  isAuthenticated: false,
  signout: () => {},
  login: () => {},
});

export default AuthContext;
