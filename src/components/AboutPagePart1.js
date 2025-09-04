export default function AboutPagePart1() {
  return (
    <div className="aboutPagePart1">
      <div className="container">
        <div className="aboutPagePart1__contents">
          <div className="aboutPagePart1__contents-left">
            <h2>Our Story</h2>
            <p>
              Kabul Coffee is more than just a café — it’s a place where
              community, comfort, and craft come together.
            </p>
            <p>
              Since opening our doors in 1998, we’ve been serving freshly brewed
              coffee and warm smiles. From espressos to lattes, each cup is
              crafted with care and passion.
            </p>
            <p>
              We believe great coffee creates great connections. Whether you’re
              here to relax, work, or catch up with friends, Kabul Coffee is
              your home away from home.
            </p>
          </div>

          <div className="aboutPagePart1__contents-right">
            <iframe
              src="https://www.youtube.com/embed/0jIeCAOkgcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
