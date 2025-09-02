import { useAnimation } from "../contexts/ScrollAnimationContext";

export default function AboutSection3() {
  const { registerOnce } = useAnimation();

  return (
    <div className="aboutPagePart3">
      <img
        src="/images/about/shk-4.png"
        alt="img7"
        className="aboutPagePart3__img-7"
      />

      <img
        src="/images/about/shk-6.png"
        alt="img14"
        className="aboutPagePart3__img-14"
      />
      <img
        src="/images/about/shk-6.png"
        alt="img15"
        className="aboutPagePart3__img-15"
      />

      <div className="container" ref={registerOnce}>
        <div className="aboutPagePart3__contents">
          <div className="aboutPagePart3__contents-left"></div>
          <div className="aboutPagePart3__contents-right">
            <h2>Meet Our Barista</h2>
            <h3>James Brown</h3>
            <h4>Head Barista</h4>
            <p>
              James Brown is the Head Barista at Kabul Coffee. With a passion
              for coffee craft and a love for serving smiles, he ensures every
              cup is brewed to perfection. James brings creativity and care to
              every espresso, latte, and pour-over.
            </p>
            <div className="aboutPagePart3__contents-right--button">
              <span className="aboutPagePart3__contents-right--button_award"></span>
              <h3>
                <span>Barista Excellence Award</span>
                <br />

                <span>Best Latte Art: 2022</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
