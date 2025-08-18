import Navigation from "../components/navigation";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function BlogPage() {
  return (
    <div className="blogPage">
      <Navigation />
      <div className="blogPage__contents">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
