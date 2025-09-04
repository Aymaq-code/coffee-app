import { Link } from "react-router-dom";
import { useNav } from "../contexts/CoffeeContext";

export default function Categories() {
  const { categories } = useNav();

  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="categories__contents">
        {categories.map((cat) => (
          <div className="post" key={cat.id}>
            <Link>{cat.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
