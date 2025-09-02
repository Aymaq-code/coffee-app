import { useNavigate } from "react-router-dom";
import EmptyMsg from "../errors/EmptyMsg";
import Button from "./Button";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/FakeAuthContext";

export default function MenuList({ coffMenu }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();

  if (coffMenu.length === 0)
    return <EmptyMsg message="No coffee items available" />;

  function handleAddToCart(e, coff) {
    e.preventDefault();
    const selected = { ...coff };
    addToCart(selected);

    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate("/cart");
    }
  }

  return (
    <section className="menu_coffeeLists" aria-label="Coffee menu items">
      {coffMenu.map((coff) => (
        <article className="menu_coffeeLists-card" key={coff.id}>
          <h2 className="coffeeName">{coff.coffeeName}</h2>
          <h3 className="original">{coff.origin}</h3>
          <p className="description">{coff.description}</p>
          <img
            src={coff.image}
            alt={`${coff.coffeeName} from ${coff.origin}`}
            className="coffeeImg"
            loading="lazy"
          />

          {coff.discount > 0 && (
            <div className="discounted" aria-label={`${coff.discount}% off`}>
              <span>{coff.discount}%</span>
              <br />
              <span>OFF</span>
            </div>
          )}

          <Button type="orderBtn">
            <img
              src="/images/menu/order.svg"
              alt="Add to cart"
              onClick={(e) => handleAddToCart(e, coff)}
            />
          </Button>

          <span className="price">${coff.price.toFixed(2)}</span>
        </article>
      ))}
    </section>
  );
}
