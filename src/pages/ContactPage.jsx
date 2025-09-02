import Button from "../components/Button";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useAnimation } from "../contexts/ScrollAnimationContext";

export default function Contact() {
  const { registerOnce } = useAnimation();

  return (
    <div className="contactPage">
      <Navigation />
      <div className="container" ref={registerOnce}>
        <div className="contactPage__contents">
          <div className="contactPage__contents-form">
            <div className="head">
              <h3>Contact With Us</h3>
              <h2>We’re Here to Answer Your Questions</h2>
              <p>
                Your email address will not be published. Required fields are
                marked
              </p>
            </div>
            <form action="" className="form">
              <input type="text" placeholder="Your Name *" />
              <input type="email" placeholder="Your Email *" />
              <textarea placeholder="Write your message here..."></textarea>
            </form>

            <Button type="secondary">Send A Message</Button>
          </div>
          <div className="contactPage__contents-map">
            <iframe
              src="https://maps.google.com/maps?q=34.5328622,69.1653065&z=15&output=embed"
              width="100%"
              height="751"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="contactPage__contents-details">
            <div className="card card-1 ">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="location-icon"
              >
                <path
                  d="M12 22s7-7.75 7-13a7 7 0 1 0-14 0c0 5.25 7 13 7 13Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="9.5"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>

              <h3>Visit Our Office</h3>
              <p>
                Ansari square opposite to Kabul city center, Kabul Afghanistan
              </p>
            </div>
            <div className="card card-2 ">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="email-icon"
              >
                <path
                  d="M4 6h16v12H4V6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 6l8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h3>Our Email Address</h3>
              <p>
                <span>rashidaymaq1994@gmail.com</span>
                <br />
                <span>rashidaymaq1994@gmail.com</span>
              </p>
            </div>
            <div className="card card-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="phone-icon"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2
       19.79 19.79 0 0 1-8.63-3.07
       19.5 19.5 0 0 1-6-6
       19.79 19.79 0 0 1-3.07-8.67
       A2 2 0 0 1 4.72 2h3a2 2 0 0 1 2 1.72
       c.12.94.37 1.85.73 2.71
       a2 2 0 0 1-.45 2.11L8.09 10.91
       a16 16 0 0 0 6 6l2.37-2.37
       a2 2 0 0 1 2.11-.45c.86.36 1.77.61 2.71.73
       A2 2 0 0 1 22 16.92Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h3>Contact Numbers</h3>
              <p>
                <span>+93 (0) 708 760 475</span>
                <br />
                <span>+93 (0) 708 760 475</span>
              </p>
            </div>
          </div>
          <div className="contactPage__contents-slide">
            <div className="contents">
              <h3>get started</h3>
              <h1>Join thousands of happy coffee lovers</h1>
              <div className="contents__input">
                <input type="text" placeholder="Enter Your Email.." />
                <Button type={"secondary"}>join</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
