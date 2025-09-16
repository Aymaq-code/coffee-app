import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CoffeeProvider } from "./contexts/CoffeeContext";
import { CartProvider } from "./contexts/CartContext";
import { ScrollAnimationProvider } from "./contexts/ScrollAnimationContext";

import Home from "./pages/HomePage.jsx";
import Menu from "./pages/MenuPage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import BlogPage from "./pages/BlogPage";
import BlogPageDynamic from "./components/BlogPageDynamic";
import ReservePage from "./pages/ReservePage";
import ErrorPage from "./pages/ErrorPage";
import AuthProvider from "./contexts/FakeAuthContext";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <AuthProvider>
      <CoffeeProvider>
        <CartProvider>
          <ScrollAnimationProvider>
            <BrowserRouter basename="/">
              <Routes>
                <Route index element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reserve" element={<ReservePage />} />
                <Route path="/about" element={<About />} />
                <Route path="blog" element={<BlogPage />}>
                  <Route index element={<Navigate to="page/1" replace />} />
                  <Route path="page/:pageNo" element={<BlogPageDynamic />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </BrowserRouter>
          </ScrollAnimationProvider>
        </CartProvider>
      </CoffeeProvider>
    </AuthProvider>
  );
}

export default App;
