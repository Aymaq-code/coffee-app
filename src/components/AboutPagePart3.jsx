import { useEffect, useRef, useState } from "react";

export default function AboutSection3() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          sectionRef.current.classList.add("in-view-once");
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="aboutPagePart3">
      <img
        src="/public/assets/AboutPage-images/img7.png"
        alt="img7"
        className="aboutPagePart3__img-7"
      />

      <img
        src="/public/assets/AboutPage-images/img14.png"
        alt="img7"
        className="aboutPagePart3__img-14"
      />
      <img
        src="/public/assets/AboutPage-images/img14.png"
        alt="img7"
        className="aboutPagePart3__img-15"
      />
      <div className="aboutPagePart3__contents" ref={sectionRef}>
        <div className="aboutPagePart3__contents-left"></div>
        <div className="aboutPagePart3__contents-right">
          <h2>Barista's Table</h2>
          <h3>James Brown</h3>
          <h4>Head Barista</h4>
          <p>
            James Brown is the Head Chef and Managing Director at Cold Brew.
            Combining his love for food and his passion for the culinary arts,
            Roberto pursued his dream of creating his own restaurant, with a
            promise to deliver authentic Italian cuisine in Sri Lanka!
          </p>
          <div className="aboutPagePart3__contents-right--button">
            <span className="aboutPagePart3__contents-right--button-award"></span>
            <h3>
              <span>James Beard Nomination</span>
              <br />
              <span>Best Barista: Southeast 2020</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
