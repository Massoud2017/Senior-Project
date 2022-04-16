import { createContext, useState } from 'react';

//-- Create a Context for Authentication
export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [authState, setAuthState] = useState(false);

  const value = {
    authState: authState,
    setAuthState: setAuthState
  }

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}