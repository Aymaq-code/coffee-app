import Snipper from "./Snipper";
import { useNav } from "../contexts/CoffeeContext";
import { useAnimation } from "../contexts/ScrollAnimationContext";
import EmptyMsg from "../errors/EmptyMsg";
import shk8 from "../assets/images/about/shk-8.png";

export default function AboutPagePart4() {
  const { loading, teams } = useNav();
  const { registerOnce } = useAnimation();

  if (loading) return <Snipper />;

  return (
    <div className="aboutPagePart4">
      <img src={shk8} alt="img7" className="aboutPagePart4__img-13" />

      <div className="container">
        <div className="aboutPagePart4__contents">
          {teams.map((team, index) => (
            <div
              key={index}
              className="aboutPagePart4__contents-box"
              ref={registerOnce}
            >
              <div className="aboutPagePart4__contents-box--img">
                <img src={team.image} alt={team.name} />
              </div>
              <div className="aboutPagePart4__contents-box--text">
                <div className="header">
                  <h2>{team.name}</h2>
                  <h4>{team.role}</h4>
                  <p>{team.bio}</p>
                </div>
                <footer className="footer">
                  <a href="#" aria-label="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
