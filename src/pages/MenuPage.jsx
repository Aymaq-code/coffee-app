import MenuHead from "../components/MenuHead";
import MenuList from "../components/MenuList";
import Navigation from "../components/Navigation";
import Snipper from "../components/Snipper";
import { useNav } from "../contexts/CoffeeContext";
import ErrorPage from "./ErrorPage";
export default function Menu() {
  const { coffMenu, loading, error } = useNav();

  if (loading) return <Snipper />;
  if (error) return <ErrorPage />;

  const available = coffMenu.length;

  return (
    <div className="menu">
      <Navigation />

      <div className="menu_cnt">
        <MenuHead />
        <MenuList coffMenu={coffMenu} available={available} />
      </div>
    </div>
  );
}
