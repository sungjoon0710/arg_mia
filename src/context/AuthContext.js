import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize user from localStorage on app start
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const username = localStorage.getItem('username');
    if (isAuthenticated && username) {
      setUser({ username });
    }
  }, []);

  const login = (username) => {
    setUser({ username });
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('username', username);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
}; 