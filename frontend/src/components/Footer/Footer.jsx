import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import ig from "../../assets/instagram.png";
import fb from "../../assets/facebook.png";
import x from "../../assets/twitter.png";
const Footer = () => {
  return (
    <div className="footer container">
      <div className="first-content">
        <div className="left-side">
          <div className="logo-box">
            {" "}
            <img src={logo} alt="" />
          </div>

          <p>
            Build faster websites with Block multipurpose bootstrap 5 template.
            Duis imper diet mollis leo, quis ultrices erat ultrices ut simple
            dummy .
          </p>
          <div className="sub-container">
            <p>Subscribe to our newsletter</p>
            <div className="btn-container">
              <input type="text" placeholder="Email address"/>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="list-card">
            <h3>Landings</h3>
            <ul>
              <li>Saas</li>
              <li>Software Company</li>
              <li>Finance</li>
              <li>Digital Agency</li>
              <li>Conference</li>
              <li>App Template</li>
            </ul>
          </div>
          <div className="list-card">
            <h3>Landings</h3>
            <ul>
              <li>Saas</li>
              <li>Software Company</li>
              <li>Finance</li>
              <li>Digital Agency</li>
              <li>Conference</li>
              <li>App Template</li>
            </ul>
          </div>
          <div className="list-card">
            <h3>Landings</h3>
            <ul>
              <li>Saas</li>
              <li>Software Company</li>
              <li>Finance</li>
              <li>Digital Agency</li>
              <li>Conference</li>
              <li>App Template</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="second-content">
        <p>Copyright @ <span>Block</span> | Designed by <span>Masasu</span></p>
        <div className="icons">
          <img src={ig} alt="" />
          <img src={fb} alt="" />
          <img src={x} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
