import AboutHead from "../components/AboutHead";
import AboutPagePart1 from "../components/AboutPagePart1";
import AboutPagePart2 from "../components/AboutPagePart2";
import AboutSection3 from "../components/AboutPagePart3";
import AboutSection4 from "../components/AboutPagePart4";
import Footer from "../components/Footer";
import { ScrollAnimationProvider } from "../contexts/ScrollAnimationContext";

export default function About() {
  return (
    <>
      <AboutHead />
      <AboutPagePart1 />
      <AboutPagePart2 />
      <AboutSection3 />
      <AboutSection4 />
      <Footer />
    </>
  );
}
