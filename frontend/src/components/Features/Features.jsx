import React from "react";
import "./Features.css";
import icon_1 from "../../assets/features-icon1.png";
import icon_2 from "../../assets/features-icon2.png";
import icon_3 from "../../assets/features-icon3.png";
import icon_4 from "../../assets/features-icon4.png";
import icon_5 from "../../assets/features-icon5.png";
import icon_6 from "../../assets/features-icon6.png";
import right_arrow from "../../assets/right-arrow.png";
import person_1 from "../../assets/second-img.png";
import person_2 from "../../assets/third-img.png";
import check_icon from "../../assets/check-icon.png";

const Features = () => {
  return (
    <div className="features container">
      <div className="first-content">
        <div className="text">
          <h4>FEATURES</h4>
          <h1>Features to make you stand out</h1>
          <p>
            Manage your projects from start to finish. With all your projects in
            Block,you'll always know who's doing what, by when
          </p>
        </div>
        <div className="icons-container">
          <div className="icon-card">
            <div className="img-container">
              <img src={icon_6} alt="" />
            </div>
            <div className="text-container">
              <h1>Tasks</h1>
              <p>
                Break work into manageable pieces for you and your team. Dui
                erat malesuada diam.
              </p>
            </div>
          </div>
          <div className="icon-card">
            <div className="img-container">
              <img src={icon_5} alt="" />
            </div>
            <div className="text-container">
              <h1>Tasks</h1>
              <p>
                Break work into manageable pieces for you and your team. Dui
                erat malesuada diam.
              </p>
            </div>
          </div>
          <div className="icon-card">
            <div className="img-container">
              <img src={icon_4} alt="" />
            </div>
            <div className="text-container">
              <h1>Tasks</h1>
              <p>
                Break work into manageable pieces for you and your team. Dui
                erat malesuada diam.
              </p>
            </div>
          </div>
          <div className="icon-card">
            <div className="img-container">
              <img src={icon_3} alt="" />
            </div>
            <div className="text-container">
              <h1>Tasks</h1>
              <p>
                Break work into manageable pieces for you and your team. Dui
                erat malesuada diam.
              </p>
            </div>
          </div>
          <div className="icon-card">
            <div className="img-container">
              <img src={icon_2} alt="" />
            </div>
            <div className="text-container">
              <h1>Tasks</h1>
              <p>
                Break work into manageable pieces for you and your team. Dui
                erat malesuada diam.
              </p>
            </div>
          </div>
          <div className="icon-card">
            <div className="img-container">
              <img src={icon_1} alt="" />
            </div>
            <div className="text-container">
              <h1>Tasks</h1>
              <p>
                Break work into manageable pieces for you and your team. Dui
                erat malesuada diam.
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="second-content">
        <div className="person-card">
          <div className="text-container">
            <h6>VISUALIZE & PLAN</h6>
            <h2>Build the perfect workflow for very project.</h2>
            <p>
              Track your entire project from start to finish with beautiful
              views that make project planning a breeze.
            </p>
            <div className="o_div">
              <p>Learn More</p>
              <img src={right_arrow} alt="" />
            </div>
          </div>
          <div className="img-container">
            <img src={person_1} alt="" />
          </div>
        </div>
        <div className="person-card snd">
          <div className="text-container">
            <h6>COLLABORATE</h6>
            <h2>Move team ideas to action,faster.</h2>
            <p>
              Collaborate and build total alignment on your project by adding comments to any task or document.
            </p>
            <ul>
              <li>
<img src={check_icon} alt="" />
Fusce ultricies velit fel dignissim
              </li>
              <li>
<img src={check_icon} alt="" />
Fusce ultricies velit fel dignissim
              </li>
              <li>
<img src={check_icon} alt="" />
Fusce ultricies velit fel dignissim
              </li>
            </ul>

            <div className="o_div">
              <p>Learn More</p>
    <img src={right_arrow} alt="" />
            </div>
          </div>
          <div className="img-container">
            <img src={person_2} alt="" />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
