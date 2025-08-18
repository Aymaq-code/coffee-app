import Button from "./Button";
export default function Footer() {
  const date = new Date();
  const currentDate = date.getFullYear();

  console.log(currentDate);

  return (
    <footer className="footerMain">
      <div className="footerMain__left">
        <div className="footerMain__left-text">
          <h3>Follow</h3>
          <p>
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the
          </p>
        </div>
        <div className="footerMain__left-input">
          <input type="text" placeholder="Enter Your Email.." />
          <Button type={"secondary"}>join</Button>
        </div>
        <div className="footerMain__left-socials">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
      </div>
      <div className="footerMain__center">
        <div className="footerMain__center-text">
          <h3>houres</h3>
          <ul>
            <li>
              <span>Saturday:</span> <span>9.00 - 21.00</span>
            </li>
            <li>
              <span>Sunday:</span> <span>9.00 - 21.00</span>
            </li>
            <li>
              <span>Monday:</span> <span>9.00 - 21.00</span>
            </li>
            <li>
              <span>Tuesday:</span> <span>9.00 - 21.00</span>
            </li>
            <li>
              <span>Wednesday:</span> <span>9.00 - 21.00</span>
            </li>
            <li>
              <span>Thursday:</span> <span>9.00 - 21.00</span>
            </li>
            <li>
              <span>Friday:</span> <span>11.00 - 18.00</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerMain__right">
        <h3>Contact</h3>

        <p>
          <span>
            Ansari square opposite to Kabul city center, Kabul Afghanistan
          </span>
          <span>Phone: +93 708 760 475</span>
          <span>Email: rashidaymaq1994@gmail.com</span>
        </p>
      </div>

      <p className="footerMain__copyRight">
        © {currentDate} Free Abdul Rashid AYMAQ - Frondend web developer. All
        rights reserved.
      </p>
    </footer>
  );
}
