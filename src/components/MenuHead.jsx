import Button from "./Button";

export default function MenuHead() {
  return (
    <div className="menu__head">
      <div className="menu__head-text">
        <h1>
          <span>Kabul Coffee</span>
          <br />
          <span>Brewing warmth in every cup</span>
        </h1>
        <p>
          Experience the aroma of fresh coffee, a cozy ambiance, and warm
          smiles. Every cup at Kabul Coffee tells a story — come sip yours with
          us.
        </p>
      </div>
      <footer className="menu__head-footer">
        <div className="menu__head-footer--left">
          <a href="#" aria-label="Facebook">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" aria-label="WhatsApp">
            <i className="fa fa-whatsapp"></i>
          </a>
          <a href="#" aria-label="GitHub">
            <i className="fa fa-github"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
        <div className="menu__head-footer--right">
          <Button type="join">Join</Button>
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email for newsletter"
          />
        </div>
      </footer>
    </div>
  );
}
