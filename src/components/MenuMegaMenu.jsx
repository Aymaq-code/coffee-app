import { Link } from "react-router-dom";

export default function MenuMegaMenu() {
  return (
    <div className="menuMega">
      <Link className="menuMega__left" to="/menu">
        <div className="menuMega__top">
          <h2>Explore Our Freshly Brewed Coffee Menu</h2>
          <p>
            Discover a wide variety of handcrafted coffee blends, from bold
            espressos to smooth lattes. Click here to browse and order your
            favorite brew online.
          </p>
        </div>
        <img
          src="/public/assets/menu-img.png"
          alt=""
          className="menuMega__left--img"
        />
      </Link>

      <Link className="menuMega__right" to="/bar">
        <div className="menuMega__top">
          <h2>Unwind at Our Calm and Cozy Coffee Bar</h2>
          <p>
            Step into a relaxing atmosphere with the aroma of freshly brewed
            coffee. Whether you're reading, chatting, or working — our bar is
            your peaceful retreat.
          </p>
        </div>
        <img
          src="/public/assets/coffee-bar.jpeg"
          alt=""
          className="menuMega__right--img"
        />
      </Link>
    </div>
  );
}
