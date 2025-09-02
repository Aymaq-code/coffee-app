import Snipper from "./Snipper";
import { useNav } from "../contexts/CoffeeContext";
import { useAnimation } from "../contexts/ScrollAnimationContext";
import EmptyMsg from "../errors/EmptyMsg";

export default function AboutPagePart4() {
  const { teams, loading } = useNav();
  const { registerOnce } = useAnimation();

  if (loading) return <Snipper />;
  if (teams.length === 0) return <EmptyMsg />;

  return (
    <div className="aboutPagePart4">
      <img
        src="/public/images/about/shk-8.png"
        alt="img7"
        className="aboutPagePart4__img-13"
      />

      <div className="container">
        <div className="aboutPagePart4__contents">
          {teams.map((team) => (
            <div
              key={team.id}
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
                  <img src={team.social} alt="social" />
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
