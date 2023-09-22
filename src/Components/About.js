import React from "react";
import "../Styles/About.css";
import Aboutpic from "../Images/About Me.png";
import AboutData from "../Data/AboutData";

const About = () => {
  return (
    <div className="about">
      <div className="aboutme">
        <img style={{width: "528.333px", height: "650px"}} src={Aboutpic} alt="Logo" />
      </div>
      <div className="frame">
        <div className="frameupper">
          <div className="text1">{AboutData[0].text1}</div>
          <div className="text2">{AboutData[0].text2}</div>
        </div>
        <div className="text3">
          {AboutData[0].text3}
          <br />
          <br />
          {AboutData[0].text4}
        </div>
      </div>
    </div>
  );
};

export default About;
