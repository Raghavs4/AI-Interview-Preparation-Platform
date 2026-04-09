import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("ai_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (dummyUser) => {
    localStorage.setItem("ai_user", JSON.stringify(dummyUser));
    setUser(dummyUser);
  };

  const logout = () => {
    localStorage.removeItem("ai_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);