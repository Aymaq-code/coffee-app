import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <img src="/images/about/img10.png" alt="Kabul Coffee logo" />
    </Link>
  );
}
