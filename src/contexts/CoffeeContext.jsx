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
    async function fetchBlog() {
      dispatch({ type: "loading" });
      try {
        const responses = await Promise.all([
          fetch(`${BASE_URL}/menus`),
          fetch(`${BASE_URL}/blog`),
          fetch(`${BASE_URL}/categories`),
          fetch(`${BASE_URL}/team`),
        ]);

        responses.forEach((res, i) => {
          if (!res.ok) throw new Error(`Failed to fetch request ${i + 1}`);
        });

        const [menuData, blogData, categoriesData, teamData] =
          await Promise.all(responses.map((res) => res.json()));

        dispatch({ type: "coffMenu/loaded", payload: menuData });
        dispatch({ type: "blog/loaded", payload: blogData });
        dispatch({ type: "categories/loaded", payload: categoriesData });
        dispatch({ type: "teams/loaded", payload: teamData });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading the data",
        });
      }
    }
    fetchBlog();
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
