import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { CoffeeProvider } from "./contexts/CoffeeContext";

import Home from "./pages/HomePage";
import Menu from "./pages/MenuPage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Login from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import CoffeeBarPage from "./pages/CoffeeBarPage";
import BlogPage from "./pages/BlogPage";
import BlogPageDynamic from "./components/BlogPageDynamic ";

function App() {
  return (
    <CoffeeProvider>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/bar" element={<CoffeeBarPage />} />
          <Route path="/about" element={<About />} />

          <Route path="blog" element={<BlogPage />}>
            <Route index element={<Navigate to="page/1" replace />} />
            <Route path="page/:pageNo" element={<BlogPageDynamic />} />
          </Route>

          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </CoffeeProvider>
  );
}

export default App;
