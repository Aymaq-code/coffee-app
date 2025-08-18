import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import Logo from "./logo";
import { useNav } from "../contexts/CoffeeContext";
import MenuMegaMenu from "./MenuMegaMenu";

export default function Navigation() {
  const { isMenuOpen, handleMenu, closeMenu } = useNav();

  return (
    <nav className={`navBar ${isMenuOpen && "addBgNavHead"}`}>
      <Logo />
      <div className={`nav-container ${isMenuOpen ? "showMenu" : ""}`}>
        <ul>
          <li className="has-mega-menu" onClick={closeMenu}>
            <NavLink>Menu</NavLink>
            <div className="megaMenus">
              <MenuMegaMenu />
            </div>
            <div className="menuResList">
              <Link to="/menu" onClick={closeMenu}>
                Coffee Menu
              </Link>
              <Link onClick={closeMenu}>Coffee Bar</Link>
            </div>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={closeMenu}>
              Blog
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/contact">contact</NavLink>
          </li>

          <div className="logInBtn showInRes">
            <Button type={"primary"}>LogIn</Button>
          </div>
        </ul>
      </div>

      <div className="logInBtn">
        <Button type={"primary"}>LogIn</Button>
      </div>

      <div className="toggle_btn" onClick={handleMenu}>
        <div className={`menu_btn ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
}
