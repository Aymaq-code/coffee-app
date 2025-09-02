import { Link } from "react-router-dom";

export default function MenuMegaMenu({ closeMenu }) {
  return (
    <div className="menuMega">
      <Link className="menuMega__left" to="/menu" onClick={closeMenu}>
        <div className="menuMega__top">
          <h3>Freshly Brewed Coffee Menu</h3>
          <p>
            Browse bold espressos, smooth lattes, and more. Order your favorite
            cup online today.
          </p>
        </div>
        <img
          src="/images/blog/img1.jpg"
          alt="Coffee menu"
          className="menuMega__left--img"
        />
      </Link>

      <Link className="menuMega__right" to="/reserve" onClick={closeMenu}>
        <div className="menuMega__top">
          <h3>Relax at Our Coffee Bar</h3>
          <p>
            Enjoy a cozy atmosphere filled with the aroma of fresh coffee.
            Perfect for reading, chatting, or working.
          </p>
        </div>
        <img
          src="/images/blog/img4.jpg"
          alt="Coffee bar"
          className="menuMega__right--img"
        />
      </Link>
    </div>
  );
}
