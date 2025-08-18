import { useRef, useState } from "react";

export default function AboutPagePart1() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(isPlaying);

  function handVideoPlay() {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }
  return (
    <div className="aboutPagePart1">
      <div className="aboutPagePart1__contents">
        <div className="aboutPagePart1__contents-left">
          <h2>Cafè Overview</h2>
          <p>
            Cold Brew has a unique identity among the world’s leading hotels.
            Established in 1998, we now operate prestigious luxury properties in
            ten major cities. These include the flagship in Hong Kong, plus
            Shanghai, Tokyo, Beijing, New York, Chicago, Beverly Hills, Bangkok,
            Manila, and Paris with Istanbul, London and Yangon under
            development. Peninsula is a living legend, the name synonymous with
            luxurious comfort and impeccable service. We set our sights high and
            our standards higher, aiming always to delight our customers, and in
            many cases we are now serving the third generation of our loyal
            guests.
          </p>
        </div>

        <div className="aboutPagePart1__contents-right">
          <span onClick={handVideoPlay}>{!isPlaying ? "▶" : "⏸"}</span>
          <video ref={videoRef} muted>
            <source src="/assets/bar-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
