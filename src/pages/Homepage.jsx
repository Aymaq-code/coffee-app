import Button from "../components/Button";
import HomeMegaMenu from "../components/MenuMegaMenu";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <section className="home">
      <Navigation />

      <div className="home__content">
        <div className="home__text">
          <h1 className="home__title">
            Awaken
            <br />
            <span className="home__title-span">Your </span>
            Senses
          </h1>
          <p className="home__description">
            Discover the rich aroma and bold flavor of Kabul's finest
            handcrafted coffee. Brewed with passion, served with warmth — just
            the way you love it.
          </p>
          <div className="home__button">
            <Button type="secondary">Order now</Button>
          </div>
        </div>
        <div className="home__image"></div>
      </div>
    </section>
  );
}
