import { Link } from "react-router-dom";
import Button from "../components/Button";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <section className="home">
      <Navigation />

      <div className="container">
        <div className="home__content">
          <div className="home__left">
            <h1 className="home__title">
              Awaken Your Senses with
              <br />
              <span className="home__title-highlight">
                Premium Kabul Coffee
              </span>
            </h1>
            <p className="home__description">
              Experience the rich aroma and bold flavor of Kabul's finest
              handcrafted coffee. Carefully brewed with passion and served with
              authentic warmth.
            </p>
            <div className="home__cta">
              <Button type="secondary">Explore Our Menu</Button>
            </div>
          </div>
          <div className="home__right"></div>
        </div>
      </div>
    </section>
  );
}
