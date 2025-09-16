import Footer from "../components/Footer";
import MenuHead from "../components/MenuHead";
import MenuList from "../components/MenuList";
import Navigation from "../components/Navigation";
import Snipper from "../components/Snipper";
import { useCoffee } from "../contexts/CoffeeContext";
import ErrorPage from "./ErrorPage";

export default function Menu() {
  const { coffMenu, loading, error } = useCoffee();

  if (loading) return <Snipper />;
  if (error) return <ErrorPage message={error} />;

  return (
    <div className="menu">
      <Navigation />
      <main className="container">
        <MenuHead />
        <MenuList coffMenu={coffMenu} />
      </main>
      <Footer />
    </div>
  );
}
