import { createContext, useContext, useEffect, useReducer } from "react";

const CoffeeContext = createContext();

const initialState = {
  loading: true,
  isMenuOpen: false,
  readMore: false,
  error: "",
  menus: [],
  coffMenu: [],
  blog: [],
  categories: [],
  teams: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };

    case "TOGGLE_MENU":
      return { ...state, isMenuOpen: !state.isMenuOpen };

    case "CLOSE_MENU":
      return { ...state, isMenuOpen: false };

    case "TOGGLE_READ_MORE":
      return { ...state, readMore: !state.readMore };

    case "data/loaded":
      return {
        ...state,
        loading: false,
        menus: action.payload.menus || [],
        blog: action.payload.blog || [],
        categories: action.payload.categories || [],
        teams: action.payload.teams || [],
      };

    case "coffMenu/loaded":
      return { ...state, loading: false, coffMenu: action.payload };

    case "blog/loaded":
      return { ...state, loading: false, blog: action.payload };

    case "categories/loaded":
      return { ...state, loading: false, categories: action.payload };

    case "teams/loaded":
      return { ...state, loading: false, teams: action.payload };

    case "rejected":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

function CoffeeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch("https://renderr-sv80.onrender.com/db.json");
        const data = await res.json();

        // از این action type استفاده کنید
        dispatch({ type: "data/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading the data",
        });
      }
    }

    fetchData();
  }, []);

  function handleReadMore() {
    dispatch({ type: "TOGGLE_READ_MORE" });
  }

  const toggleMenu = () => dispatch({ type: "TOGGLE_MENU" });

  const closeMenu = () => dispatch({ type: "CLOSE_MENU" });

  return (
    <CoffeeContext.Provider
      value={{
        isMenuOpen: state.isMenuOpen,
        readMore: state.readMore,
        menus: state.menus, // این اصلی است
        coffMenu: state.menus, // اگر لازم است duplicate کنید
        blog: state.blog,
        categories: state.categories,
        teams: state.teams,
        loading: state.loading,
        error: state.error,
        toggleMenu,
        closeMenu,
        handleReadMore,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}

function useCoffee() {
  const context = useContext(CoffeeContext);

  if (context === undefined)
    throw new Error("CoffeeContext is used outside the CoffeeProvider");

  return context;
}

export { CoffeeProvider, useCoffee };
