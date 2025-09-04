import { useState } from "react";
import { useAnimation } from "../contexts/ScrollAnimationContext";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import IMG_1 from "../assets/images/reserve/img1.jpg";
import IMG_2 from "../assets/images/reserve/img2.jpg";
import YOU_SVG from "../assets/images/reserve/person.svg";
import EMAIL_SVG from "../assets/images/reserve/email.svg";
import PHONE_SVG from "../assets/images/reserve/phone.svg";
import CALENDER_SVG from "../assets/images/reserve/calender.svg";
import CLOCK_SVG from "../assets/images/reserve/clock.svg";
import PEOPLE_SVG from "../assets/images/reserve/people.svg";
import MSG_SVG from "../assets/images/reserve/message.svg";
export default function ReservePage() {
  const { registerOnce } = useAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    person: "",
    message: "",
  });

  // Store errors for each input
  const [errors, setErrors] = useState({});

  // Update input value when user types
  function handleChange(e) {
    const { name, value } = e.target;

    // update that input
    setFormData({
      ...formData,
      [name]: value,
    });

    // clear its error while typing
    setErrors({
      ...errors,
      [name]: "",
    });
  }

  // Validate when user clicks "Book Now"
  function handleBookNow(e) {
    e.preventDefault();

    let newErrors = {};

    // Check each field if empty
    for (let key in formData) {
      if (formData[key].trim() === "") {
        newErrors[key] = "this field is required!";
      }
    }

    setErrors(newErrors);

    // If no errors, we can submit
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Booking successful!");
    }
  }

  return (
    <div className="reservePage">
      <Navigation />

      <div className=" container reservePage__part1" ref={registerOnce}>
        <div className="reservePage__part1-contents">
          <div className="left">
            <img className="left__img1" src={IMG_1} alt="img-1" />
            <img className="left__img2" src={IMG_2} alt="img-1" />
          </div>
          <div className="right">
            <h3>Quick & Simple</h3>
            <h2>Reserve Your Table</h2>

            <p>
              <span>
                We accept lunch and dinner reservations. Call us between
                10am–6pm, Monday to Friday.
              </span>
              <span>
                Our bar area is always open for walk-in guests — no booking
                needed.
              </span>
              <b>(001) 123456789 – 234567891</b>
            </p>
          </div>
        </div>
      </div>

      <div className="reservePage__part2" ref={registerOnce}>
        <div className="contents">
          <div className="contents__titles">
            <h3>reservation</h3>
            <h2>BOOK A TABLE</h2>
          </div>
          <div className="form">
            {/* Name */}
            <span className="form__inputs">
              <img src={YOU_SVG} alt="person-svg" />
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="fillUp">{errors.name}</p>}
            </span>

            {/* Email */}
            <span className="form__inputs">
              <img src={EMAIL_SVG} alt="email-svg" />
              <input
                type="text"
                name="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="fillUp">{errors.email}</p>}
            </span>

            {/* Phone */}
            <span className="form__inputs">
              <img src={PHONE_SVG} alt="phone-svg" />
              <input
                type="text"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="fillUp">{errors.phone}</p>}
            </span>

            {/* Date */}
            <span className="form__inputs">
              <img src={CALENDER_SVG} alt="calender-svg" />
              <input
                type="text"
                name="date"
                placeholder="DD/MM/YYYY*"
                value={formData.date}
                onChange={handleChange}
              />
              {errors.date && <p className="fillUp">{errors.date}</p>}
            </span>

            {/* Time */}
            <span className="form__inputs">
              <img src={CLOCK_SVG} alt="clock-svg" />
              <input
                type="text"
                name="time"
                placeholder="Time*"
                value={formData.time}
                onChange={handleChange}
              />
              {errors.time && <p className="fillUp">{errors.time}</p>}
            </span>

            {/* People */}
            <span className="form__inputs">
              <img src={PEOPLE_SVG} alt="people-svg" />
              <input
                type="text"
                name="person"
                placeholder="Person*"
                value={formData.person}
                onChange={handleChange}
              />
              {errors.person && <p className="fillUp">{errors.person}</p>}
            </span>

            {/* Message */}
            <div className="form__message">
              <img src={MSG_SVG} alt="message-svg" />
              <textarea
                name="message"
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            {errors.message && (
              <p style={{ color: "#271f1f" }}>{errors.message}</p>
            )}
          </div>

          <div onClick={handleBookNow}>
            <Button type={"secondary"}>Book now</Button>
          </div>
        </div>
      </div>

      <div className="reservePage__part3" ref={registerOnce}>
        <div className="reservePage__part3-contents">
          <h1>
            PRIVATE <span>DINING</span> & <span>EVENTS</span>
          </h1>
          <p>We make your special day truly unforgettable.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
