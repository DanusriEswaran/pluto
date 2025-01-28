import React from "react";
import "./intro.css";
import bg from "../../assets/bg.png";
import hire from "../../assets/hire.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm<span className="introName"> Pluto</span>
          <br /> a Puppy
          <p className="introPara">
            I'm a Shih Tzu puppy and I'm 70 days old. <br /> My hobbies are
            hiding and biting everything I can get on my paws.
          </p>
        </span>
        <Link>
          <button className="btn">
            <img src={hire} alt="hireMe" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
