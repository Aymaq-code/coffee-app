import { Link } from "react-router-dom";
import logo from "../assets/images/about/img10.png";
import { useNav } from "../contexts/CoffeeContext";

export default function Logo() {
  const { closeMenu } = useNav();
  return (
    <Link to="/" className="logo" onClick={closeMenu}>
      <img src={logo} alt="Kabul Coffee logo" />
    </Link>
  );
}
