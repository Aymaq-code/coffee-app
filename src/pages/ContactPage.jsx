import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="contactPage">
      <Navigation />
      <div className="contactPage__contents">
        <div className="contactPage__contents-form">
          <div className="head">
            <h3>Contact With Us</h3>
            <h2>Don’t Google design Questions</h2>
            <p>
              Your email address will not be published. Required fields are
              marked*
            </p>
          </div>
          <form action="" className="form">
            <input type="text" placeholder="Your Name *" />
            <input type="email" placeholder="Your Email *" />

            <textarea type="e" placeholder="We are in your surve!"></textarea>
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

        <div className="contactPage__contents-details" ref={sectionRef}>
          <div className={`card card-1 ${isVisible ? "animate" : ""}`}>
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
            <h3>Meet Us In Office</h3>
            <p>Patricia C. 4401 Waldeck Street Grapevine Nashville</p>
          </div>
          <div className={`card card-2 ${isVisible ? "animate" : ""}`}>
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
            <h3>Our Email Address</h3>
            <p>
              <span>Info@yourdomain.com</span>
              <br />
              <span>Info@dataanalytics.com</span>
            </p>
          </div>
          <div className={`card card-3 ${isVisible ? "animate" : ""}`}>
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

            <h3>Contact Numbers</h3>
            <p>
              <span>+99 (0) 101 0000 888</span>
              <br />
              <span>+99 (0) 101 0000 888</span>
            </p>
          </div>
        </div>
        <div className="contactPage__contents-slide">
          <div className="contents" ref={sectionRef}>
            <h3 className={`${isVisible ? "animate" : ""}`}>get started</h3>
            <h1 className={`${isVisible ? "animate" : ""}`}>
              great customers are using the confectionery shop
            </h1>
            <div className={`contents__input ${isVisible ? "animate" : ""}`}>
              <input type="text" placeholder="Enter Your Email.." />
              <Button type={"secondary"}>join</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
