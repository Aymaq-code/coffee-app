import { useEffect, useRef } from "react";
import Snipper from "./Snipper";
import ErrorPage from "../pages/ErrorPage";
import { useNav } from "../contexts/CoffeeContext";

export default function AboutPagePart4() {
  const { teams, loading, error } = useNav();

  const cardRefs = useRef([]);

  // intersection observer for all cards — run after teams render
  useEffect(() => {
    if (!teams || teams.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view-once");
            // animate once, then stop observing that element
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      cardRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [teams]);

  if (loading) return <Snipper />;
  if (error) return <ErrorPage />;

  return (
    <div className="aboutPagePart4">
      <img
        src="/public/assets/AboutPage-images/img13.png"
        alt="img7"
        className="aboutPagePart4__img-13"
      />

      <div className="aboutPagePart4__contents">
        {teams.map((team, idx) => (
          <div
            key={team.id ?? idx}
            className="aboutPagePart4__contents-box"
            ref={(el) => (cardRefs.current[idx] = el)}
          >
            <div className="aboutPagePart4__contents-box--img">
              <img src={team.image} alt={team.name} />
            </div>

            <div className="aboutPagePart4__contents-box--text">
              <div className="header">
                <h3>{team.name}</h3>
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
  );
}
