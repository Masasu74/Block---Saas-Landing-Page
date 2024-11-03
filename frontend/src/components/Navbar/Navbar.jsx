import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
    const [mobileMenu,setMobileMenu]= useState(false);
    const toggleMenu = ()=>{
        setMobileMenu(!mobileMenu);
    }
  return (
    <nav className="container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div></div>
      <ul className="nav_list">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className="nav_buttons">
        <button className="login_btn">Login In</button>
        <button className="create_btn"> Create account</button>
      </div>
      <div className="menu-icon">
        <i className="fas fa-bars" onClick={toggleMenu}></i>
      </div>

      <div className= {mobileMenu?"mobile-menu":"hide"}>
        <ul className="nav_list">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <div className="nav_buttons">
          <button className="login_btn">Login In</button>
          <button className="create_btn"> Create account</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
