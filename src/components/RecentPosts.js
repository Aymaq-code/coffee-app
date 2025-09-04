import { Link } from "react-router-dom";
import { useNav } from "../contexts/CoffeeContext";

export default function RecentPosts() {
  const { blog } = useNav();
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
