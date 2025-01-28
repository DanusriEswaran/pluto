import React, { useRef } from "react";
import "./contact.css";
import Microsoft from "../../assets/microsoft.png";
import Walmart from "../../assets/walmart.png";
import Google from "../../assets/google.png";
import Adobe from "../../assets/adobe.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_986d0qa",
        "template_e3kl28l",
        form.current,
        "2q0242ntIVnsSmU3D"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contact">
      <div className="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">I'm a Shih Tzu dog</p>
        <div className="clientImgs">
          <img src={Microsoft} alt="microsoft" className="clientImg" />
          <img src={Walmart} alt="walmart" className="clientImg" />
          <img src={Google} alt="google" className="clientImg" />
          <img src={Adobe} alt="adobe" className="clientImg" />
        </div>
      </div>
      <div className="clients">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to react out me.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={instagram} alt="instagram" className="link" />
            <img src={linkedin} alt="linkedin" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
