import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

const DEMO_USER = {
  email: "student@manabu.com",
  password: "kanji123",
  name: "Kanji Student",
};


export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("manabu_user");
    return saved ? JSON.parse(saved) : null;
  });


  function login(email, password) {
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      const userData = { email: DEMO_USER.email, name: DEMO_USER.name };
      setUser(userData);
      localStorage.setItem("manabu_user", JSON.stringify(userData));
      return { success: true };
    } else {
      return { success: false, error: "Wrong email or password 🙁" };
    }
  }


  function logout() {
    setUser(null);
    localStorage.removeItem("manabu_user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  return useContext(AuthContext);
}
