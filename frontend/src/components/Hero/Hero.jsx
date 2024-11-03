import React from "react";
import "./Hero.css";
import hero_img from "../../assets/hero-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMoneyBill1,
} from "@fortawesome/free-regular-svg-icons";
import client1 from "../../assets/clients-logo-1.png";
import client2 from "../../assets/clients-logo-2.png";
import client3 from "../../assets/clients-logo-3.png";
import client4 from "../../assets/clients-logo-4.png";
import client5 from "../../assets/clients-logo.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-part1">
        <div className="left-side">
          <div className="">
            <p className="hint-box">New: Our Live collaborative just landed</p>
          </div>
          <h1 className="title">Build your next project even faster.</h1>
          <p className="description">
            Block makes it easy to get your most important work done. Increase
            efficiency to deliver results and hit your goals on every project.
          </p>

          <div className="hero-btn">
            <button className="btn1">Try for free</button>
            <button className="btn2">Book a demo</button>
          </div>
          <div className="hero-tips">
            <div className="tip">
              <FontAwesomeIcon icon={faCreditCard} className="icon" />
              <p>No credit card required</p>
            </div>
            <div className="tip">
              <FontAwesomeIcon icon={faMoneyBill1} className="icon" />{" "}
              <p>Free until upgrade</p>
            </div>
          </div>
        </div>
        <div className="right-side">
          <img src={hero_img} alt="" />
        </div>
      </div>
      <div className="sponsors">
        <div className="title">
          <p>
            TRUSTED BY <span>20,000+</span> ORGANIZATIONS WORLDWIDE
          </p>
        </div>
        <div className="sponsors-list">
          <img src={client5} alt="" />
          <img src={client2} alt="" />
          <img src={client1} alt="" />
          <img src={client4} alt="" />
          <img src={client3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
