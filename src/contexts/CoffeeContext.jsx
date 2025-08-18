import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "data/coffee.json";

const CoffeeContext = createContext();

const initialState = {
  loading: true,
  isMenuOpen: false,
  readMore: false,
  error: "",

  coffMenu: [],
  blog: [],
  categories: [],
  teams: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: false };
    case "TOGGLE_MENU":
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case "CLOSE_MENU":
      return { ...state, isMenuOpen: false };
    case "readMore":
      return { ...state, readMore: !state.readMore };

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
        isLoading: false,
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
        const res = await fetch(BASE_URL); // فقط یک fetch برای کل فایل JSON
        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();
        const { menus, blog, categories, team } = data;

        dispatch({ type: "coffMenu/loaded", payload: menus });
        dispatch({ type: "blog/loaded", payload: blog });
        dispatch({ type: "categories/loaded", payload: categories });
        dispatch({ type: "teams/loaded", payload: team });
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

  const closeMenu = () => {
    if (state.isMenuOpen) {
      dispatch({ type: "CLOSE_MENU" });
    }
  };

  const handleMenu = () => {
    dispatch({ type: "TOGGLE_MENU" });
  };

  return (
    <CoffeeContext.Provider
      value={{
        isMenuOpen: state.isMenuOpen,
        readMore: state.readMore,
        coffMenu: state.coffMenu,
        blog: state.blog,
        categories: state.categories,
        teams: state.teams,
        loading: state.loading,
        error: state.error,
        handleMenu,
        closeMenu,
        handleReadMore,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
function useNav() {
  const context = useContext(CoffeeContext);
  if (context === undefined)
    throw new Error("CoffeeContext is used outside the CoffeeProvider");
  return context;
}

export { CoffeeProvider, useNav };
