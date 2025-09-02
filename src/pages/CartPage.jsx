import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useCart } from "../contexts/CartContext";
import Button from "../components/Button";

export default function CartPage() {
  const { user, isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate("/");
  }

  const { cart, removeFromCart, addMore } = useCart();

  return (
    <main className="cartPage">
      <Navigation />
      <div className="container">
        <div className="cartPage__contents">
          <div className="cartPage__contents-user">
            {isAuthenticated ? (
              <>
                <span>Welcome, {user.name}</span>
                <div className="logoutBtn" onClick={handleLogout}>
                  <Button type={"secondary"}>logout</Button>
                </div>
              </>
            ) : (
              <span>Please login first</span>
            )}
          </div>
          <div className="cartPage__contents-btns">
            <Link to={"/menu"}>
              <Button type={"primary"}>Back to menu</Button>
            </Link>
            {cart.length > 0 && (
              <Link to={"/payment"}>
                <Button type={"primary"}>Do Payment</Button>
              </Link>
            )}
          </div>
          {isAuthenticated && (
            <div className="cartPage__contents-cart">
              {cart.map((item) => (
                <div className="details" key={item.id}>
                  <img src={item.image} alt={item.coffeeName} />
                  <div className="description">
                    <p>{item.coffeeName}</p>
                    <p>{item.bestTime}</p>
                    <p>Price: ${item.price}</p>
                    <p>Total price: ${item.price * item.quantity}</p>
                    <p>Order: {item.quantity}</p>
                    <div className="description__buttons">
                      <button onClick={() => removeFromCart(item.id)}>-</button>
                      <button onClick={() => addMore(item.id)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="cartPage__contents-total">
                <strong>
                  Overall Total: $
                  {cart.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  )}
                </strong>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
