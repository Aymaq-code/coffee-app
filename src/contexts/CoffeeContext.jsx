import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:4000";
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
      return { ...state, loading: true };

    case "TOGGLE_MENU":
      return { ...state, isMenuOpen: !state.isMenuOpen };

    case "CLOSE_MENU":
      return { ...state, isMenuOpen: false };

    case "TOGGLE_READ_MORE":
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
        const [menusRes, blogRes, categoriesRes, teamRes] = await Promise.all([
          fetch(`${BASE_URL}/menus`),
          fetch(`${BASE_URL}/blog`),
          fetch(`${BASE_URL}/categories`),
          fetch(`${BASE_URL}/teams`),
        ]);

        if (!menusRes.ok || !blogRes.ok || !categoriesRes.ok || !teamRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const [menus, blog, categories, team] = await Promise.all([
          menusRes.json(),
          blogRes.json(),
          categoriesRes.json(),
          teamRes.json(),
        ]);

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

  const toggleMenu = () => dispatch({ type: "TOGGLE_MENU" });

  const closeMenu = () => dispatch({ type: "CLOSE_MENU" });

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
        toggleMenu,
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
