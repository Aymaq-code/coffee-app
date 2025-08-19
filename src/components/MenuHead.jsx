import Button from "./Button";

export default function MenuHead() {
  return (
    <div className="menu_cnt_head">
      <div className="menu_cnt_head-text">
        <h2>
          <span>Kabul Coffe </span>
          <br />
          <span>Brewing warmth in every cup.</span>
        </h2>
        <p>
          Discover the rich aroma of freshly brewed coffee, cozy ambiance, and
          friendly smiles. At Kabul Coffee, we believe every cup tells a story —
          come sip yours with us.
        </p>

        <footer className="footer">
          <div className="footer_left">
            <img src="/assets/email.svg" alt="email-svg" />
            <img src="/assets/linkedin.svg" alt="linkedin-svg" />
            <img src="/assets/github.svg" alt="github-svg" />
            <img src="/assets/whatsapp.svg" alt="whatsapp-svg" />
          </div>
          <div className="footer_right">
            <Button type={"join"}>join</Button>

            <input type="text" placeholder="Join with us!" />
          </div>
        </footer>
      </div>
    </div>
  );
}
