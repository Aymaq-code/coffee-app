import { useAnimation } from "../contexts/ScrollAnimationContext";
import shk1 from "../assets/images/about/shk-1.png";
import shk2 from "../assets/images/about/shk-2.png";
import shk3 from "../assets/images/about/shk-3.png";
import img2 from "../assets/images/about/img2.jpg";
import img3 from "../assets/images/about/img3.jpg";
import img5 from "../assets/images/about/img5.png";
export default function AboutPagePart2() {
  const { registerOnce } = useAnimation();

  return (
    <section className="aboutPagePart2">
      <img src={shk1} alt="bg-shape-1" className="aboutPagePart2__img-1" />
      <img src={shk2} alt="bg-shape-2" className="aboutPagePart2__img-2" />
      <img src={shk3} alt="bg-shape-3" className="aboutPagePart2__img-3" />

      <div className="container">
        <div className="aboutPagePart2__contents" ref={registerOnce}>
          <div className="aboutPagePart2__contents-left">
            <h2>Kabul Coffee</h2>
            <h3>An Authentic Coffee Experience</h3>
            <p>
              Our friendly staff ensures every visit to Kabul Coffee is
              memorable. From freshly brewed espresso to hand-crafted lattes,
              every cup is made with care. <br />
              <br />
              Whether you’re here to relax, meet friends, or work quietly, our
              cozy café offers a warm and inviting space. We blend traditional
              coffee-making techniques with a modern touch, so every sip feels
              special.
            </p>
            <h3 className="crt-ard">Our Awards & Recognition</h3>
            <img className="certificate-img" src={img5} alt="certificate" />
          </div>

          <div className="aboutPagePart2__contents-right">
            <div className="aboutPagePart2__contents-right--wrapper1">
              <img src={img2} alt="cafe interior" />
            </div>

            <div className="aboutPagePart2__contents-right--wrapper2">
              <img src={img3} alt="cafe seating" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
