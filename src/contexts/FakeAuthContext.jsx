import { useContext, createContext, useReducer, useEffect } from "react";

const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown Action");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "user@example.com",
  password: "aymaq",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

export default function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        dispatch({ type: "login", payload: userData });
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      localStorage.setItem("user", JSON.stringify(FAKE_USER));
      dispatch({ type: "login", payload: FAKE_USER });
      return true;
    }
    return false;
  }

  function logout() {
    localStorage.removeItem("user");
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
