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
            Stay updated with our latest brews, special offers, and coffee
            events. Join our community for all things Kabul Coffee!
          </p>
        </div>
        <div className="footerMain__left-input">
          <input type="text" placeholder="Enter Your Email.." />
          <Button type={"secondary"}>join</Button>
        </div>
        <div className="footerMain__left-socials">
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="https://www.facebook.com/share/178enq4ukC/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="fa fa-whatsapp"></i>
          </a>
          <a
            href="https://github.com/Aymaq-code"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fa fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-rashid-aymaq-3854a435a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="footerMain__center">
        <div className="footerMain__center-text">
          <h3>Houres</h3>
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
