import { createContext, useState, useContext } from "react";
import { authService } from "../lib/appwrite";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    try {
      await authService.login(email, password);
      const response = await authService.getCurrentUser();
      setUser(response);
      return { success: true };
    } catch (error) {
      console.log("Login error:", error);
      return { success: false, error: error.message };
    }
  }

  async function register(email, password) {
    try {
      await authService.createAccount(email, password);
      return { success: true };
    } catch (error) {
      console.log("Registration error:", error);
      return { success: false, error: error.message };
    }
  }

  async function logout() {
    try {
      await authService.logout();
      setUser(null);
      return { success: true };
    } catch (error) {
      console.log("Logout error:", error);
      return { success: false, error: error.message };
    }
  }

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to use the UserContext
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
