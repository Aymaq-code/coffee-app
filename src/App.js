import {
  HashRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CoffeeProvider } from "./contexts/CoffeeContext.js";
import { CartProvider } from "./contexts/CartContext.js";
import { ScrollAnimationProvider } from "./contexts/ScrollAnimationContext.js";

import Home from "./pages/Homepage.js";
import Menu from "./pages/MenuPage.js";
import About from "./pages/AboutPage.js";
import Contact from "./pages/ContactPage.js";
import LoginPage from "./pages/LoginPage.js";
import BlogPage from "./pages/BlogPage.js";
import BlogPageDynamic from "./components/BlogPageDynamic.js";
import ReservePage from "./pages/ReservePage.js";
import ErrorPage from "./pages/ErrorPage.js";
import AuthProvider from "./contexts/FakeAuthContext.js";
import CartPage from "./pages/CartPage.js";
import PaymentPage from "./pages/PaymentPage.js";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <CoffeeProvider>
        <CartProvider>
          <ScrollAnimationProvider>
            <HashRouter>
              <ScrollToTop />
              <Routes>
                <Route index element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="reserve" element={<ReservePage />} />
                <Route path="about" element={<About />} />
                <Route path="blog" element={<BlogPage />}>
                  <Route index element={<Navigate to="page/1" replace />} />
                  <Route path="page/:pageNo" element={<BlogPageDynamic />} />
                </Route>
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="payment" element={<PaymentPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </HashRouter>
          </ScrollAnimationProvider>
        </CartProvider>
      </CoffeeProvider>
    </AuthProvider>
  );
}

export default App;
