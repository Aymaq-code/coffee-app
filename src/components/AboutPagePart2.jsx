import { useEffect, useRef, useState } from "react";

export default function AboutPagePart2() {
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
    <div className="aboutPagePart2" ref={sectionRef}>
      <img
        src="/public/assets/AboutPage-images/img1.png"
        alt="img-1"
        className="aboutPagePart2__img-1"
      />
      <img
        src="/public/assets/AboutPage-images/img2.png"
        alt="img-2"
        className="aboutPagePart2__img-2"
      />
      <img
        src="/public/assets/AboutPage-images/img4.png"
        alt="img-4"
        className="aboutPagePart2__img-4"
      />
      <div className="aboutPagePart2__contents">
        <div className="aboutPagePart2__contents-left">
          <h2>Cold Brew</h2>
          <h3>Authentic Cafe in New York City</h3>
          <p>
            Our attentive staff ensures that your entire dining experience at
            Cold Brew is stellar from beginning to end. Each passing of our
            shared plates and the breaking of fresh Levantine pita opens up a
            new conversation. <br />
            <br />
            Whether part of a party of fifty or a party of two, your experience
            throughout our elegant, yet comfortable space is eventful. We are
            sharing our long held Lebanese-Mediterranean traditions with a
            modern contemporary twist. You will feel both close to home and
            apart of something new.
          </p>
          <h3>Certificate & Awards</h3>
          <img src="/public/assets/foodOrgsImgs.png" alt="foodOrgsImgs" />
        </div>
        <div className="aboutPagePart2__contents-right">
          <div className="img-wrapper">
            <img src="/assets/AboutPage-images/img5.jpg" alt="" />
          </div>
          <div className="img-wrapper">
            <img src="/assets/AboutPage-images/img6.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
