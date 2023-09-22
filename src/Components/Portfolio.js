import React from "react";
import PortfolioData from "../Data/PortfolioData.js";
import "../Styles/Portfolio.css";
import button from "../Images/Social icon.svg";
import icon2 from "../Images/Vector.svg";

const Portfolio = () => {
  return (
    <div className="outerportfolio">
      <div className="upper1">
        <div className="upper-left">
          <div className="ul1">Recent Projects</div>
          <div className="ul2">
            <div className="ul2content"> My Portfolio</div>
          </div>
        </div>
        <div className="upper-right">
          <button className="visit">
            <img
              style={{ width: "32px", height: "32px" }}
              src={button}
              alt="button"
            />
            Visit My Dribbble
          </button>
        </div>
      </div>
      <div className="row1">
        {PortfolioData.map((i) => {
          return (
            <div className="card1">
                <img className="icon1" src={i.image} />
                <div className="content1">
                  <div className="title1">{i.title}</div>
                  <div className="info1">{i.description}</div>
              <div className="lowercon">
                <div className="lowerleft">View In Dribble</div>
                <div className="lowerright">
                  <img src={icon2} alt="vector" />
                </div>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
