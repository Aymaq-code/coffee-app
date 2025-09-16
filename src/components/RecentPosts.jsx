import { Link } from "react-router-dom";
import { useCoffee } from "../contexts/CoffeeContext";

export default function RecentPosts() {
  const { blog } = useCoffee();
  return (
    <div className="recentPosts">
      <h2>Recent Posts</h2>
      <div className="recentPosts__contents">
        {blog.map((details) => (
          <div className="post">
            <Link>{details.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
