import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import Logo from "./logo";
import { useNav } from "../contexts/CoffeeContext";
import MenuMegaMenu from "./MenuMegaMenu";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect, useRef } from "react";

export default function Navigation() {
  const { isMenuOpen, toggleMenu, closeMenu } = useNav();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isMenuOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <nav className={`navBar ${isMenuOpen && "addBgNavHead"}`} ref={menuRef}>
      <Logo />
      <div className={`nav-container ${isMenuOpen ? "showMenu" : ""}`}>
        <ul>
          <li className="has-mega-menu">
            <NavLink to="#" onClick={(e) => e.preventDefault()}>
              Menu
            </NavLink>
            <div className="megaMenus">
              <MenuMegaMenu closeMenu={closeMenu} />
            </div>
            <div className="menuResList">
              <Link to="/menu" onClick={closeMenu}>
                Coffee Menu
              </Link>
              <Link to="/reserve" onClick={closeMenu}>
                Coffee Bar
              </Link>
            </div>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/contact">Contact</NavLink>
          </li>

          <div className="showInRes" onClick={logout}>
            {isAuthenticated ? (
              <Button type={"primary"}>
                <Link to="/" onClick={closeMenu}>
                  Logout
                </Link>
              </Button>
            ) : (
              <Button type={"secondary"} onClick={closeMenu}>
                <Link to="/login" onClick={closeMenu}>
                  Login
                </Link>
              </Button>
            )}
          </div>
        </ul>
      </div>

      <div className="logInBtn">
        {isAuthenticated ? (
          <div className="user-dropdown">
            <img
              src={user.avatar}
              alt={user.name}
              className="user-avatar"
              onClick={() => navigate("/cart")}
            />
            <div className="dropdown-content">
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <img src="/images/home/user-nav.svg" alt="user" />
          </Link>
        )}
      </div>

      <div className="toggle_btn" onClick={toggleMenu}>
        <div className={`menu_btn ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
}
