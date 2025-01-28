import React from "react";
import "./works.css";
import research from "../../assets/research.png";
import webdesign from "../../assets/webdesign.png";
import certificates from "../../assets/certificates.png";

const Works = () => {
  return (
    <section id="works">
      <span className="skillTitle">My Portfolio</span>
      <span className="skillDesc">
        Passionate web developer with a knack for crafting responsive,
        user-friendly websites and applications. Skilled in front-end
        technologies like HTML, CSS, and JavaScript (including frameworks like
        React and Vue.js), as well as back-end expertise in Node.js and
        AdonisJS.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={research} alt="research" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="skillBarHead">Research and Publications</h2>
            <p className="skillBarDesc">
              Contributing innovative ideas through well-documented studies.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={webdesign} alt="webdesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="skillBarHead">Web Design</h2>
            <p className="skillBarDesc">
              Crafting intuitive and visually engaging websites.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={certificates} alt="certificates" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="skillBarHead">Certificates</h2>
            <p className="skillBarDesc">
              Showcasing expertise and commitment through industry-recognized
              certifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
